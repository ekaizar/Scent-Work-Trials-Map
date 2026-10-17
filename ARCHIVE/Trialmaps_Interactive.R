################################################################################
# NACSW Trials Map Data Collection Script
# Updated for new table-based website structure (2024)
################################################################################

# Load required libraries
library(rvest)
library(dplyr)
library(tidyr)
library(tidygeocoder)

# Set options
options(timeout = 300)

cat("\n============================================================\n")
cat("🗺️  NACSW Trials Map - Data Collection\n")
cat("============================================================\n\n")

################################################################################
# STEP 1: SCRAPE TRIAL DATA FROM NACSW WEBSITE
################################################################################

cat("📥 Step 1: Scraping trial data from NACSW website...\n")

# URL of the NACSW trials calendar
url <- "https://www.nacsw.net/calendar/trials/"

# Read the webpage
webpage <- tryCatch({
  read_html(url)
}, error = function(e) {
  stop("❌ Error: Could not connect to NACSW website. Check your internet connection.")
})

# Extract trial information from table rows
# New structure: trials are in table rows with .event-start and .event-name cells
# Event website links are in subsequent detail rows with colspan="2"

# Get all table rows
all_rows <- webpage %>% html_nodes("tr")

trials_raw <- list()
trial_index <- 0

i <- 1
while(i <= length(all_rows)) {
  row <- all_rows[[i]]
  
  # Check if this is a main event row
  date_cell <- row %>% html_node("td.event-start")
  
  if(!is.na(date_cell)) {
    # This is a main event row
    trial_index <- trial_index + 1
    
    # Get date
    date <- date_cell %>% html_text(trim = TRUE)
    
    # Get event name cell
    name_cell <- row %>% html_node("td.event-name")
    
    if(!is.na(name_cell)) {
      # Get event text
      event_link <- name_cell %>% html_node("a")
      event_text <- event_link %>% html_text(trim = TRUE)
      
      # Now look at subsequent rows for the actual event website link
      # These are detail rows that appear when the event is expanded
      actual_event_link <- NA
      j <- i + 1
      
      # Check next 10 rows for detail information
      while(j <= min(i + 10, length(all_rows))) {
        detail_row <- all_rows[[j]]
        
        # Stop if we hit another event row
        next_date_cell <- detail_row %>% html_node("td.event-start")
        if(!is.na(next_date_cell)) break
        
        # Look for colspan="2" cell (contains event details)
        colspan_cell <- detail_row %>% html_node("td[colspan='2']")
        
        if(!is.na(colspan_cell)) {
          # Find links in this cell
          links <- colspan_cell %>% html_nodes("a") %>% html_attr("href")
          
          # Get the first non-email link (http/https)
          for(link in links) {
            if(!is.na(link) && grepl("^http", link) && !grepl("^mailto:", link)) {
              actual_event_link <- link
              break
            }
          }
          
          if(!is.na(actual_event_link)) break
        }
        
        j <- j + 1
      }
      
      # Store the trial data
      trials_raw[[trial_index]] <- data.frame(
        Date = date,
        EventText = event_text,
        EventLink = actual_event_link,
        stringsAsFactors = FALSE
      )
    }
  }
  
  i <- i + 1
}

# Convert list to data frame
trials_raw <- bind_rows(trials_raw)

# Remove any empty rows
trials_raw <- trials_raw %>%
  filter(!is.na(Date), !is.na(EventText))

cat("✓ Scraped", nrow(trials_raw), "events from website\n\n")

if(nrow(trials_raw) == 0) {
  stop("❌ Error: No events found. Website structure may have changed again.")
}

################################################################################
# STEP 2: PARSE AND CLEAN DATA
################################################################################

cat("🧹 Step 2: Parsing and cleaning data...\n")

# Parse event text to extract components
# Format: "Trial Types - Location hosted by Host"
# Example: "NW3/ELT Trials - Waymart, PA hosted by Your Dog's Place, LLC"

trials_clean <- trials_raw %>%
  mutate(
    # Clean date format
    Date = as.Date(Date),
    
    # Extract trial types (everything before " - ")
    TrialTypes_Raw = sub(" -.*", "", EventText),
    
    # Clean up trial types - remove " Trials" and normalize separators
    TrialTypes = gsub(" Trials?", "", TrialTypes_Raw),
    TrialTypes = gsub("/", ", ", TrialTypes),
    
    # Extract location and host (everything after " - ")
    LocationHost = sub(".*? - ", "", EventText),
    
    # Extract location (everything before " hosted by")
    Location = sub(" hosted by.*", "", LocationHost),
    Location = trimws(Location),
    
    # Extract host (everything after "hosted by ")
    Host = sub(".*hosted by ", "", LocationHost),
    Host = trimws(Host),
    
    # Count number of trial types
    EventCount = lengths(regmatches(TrialTypes, gregexpr(",", TrialTypes))) + 1
  ) %>%
  # Remove temporary columns
  select(-EventText, -TrialTypes_Raw, -LocationHost) %>%
  # Remove any trials without valid dates or locations
  filter(!is.na(Date), !is.na(Location), Location != "")

cat("✓ Cleaned", nrow(trials_clean), "valid trials\n")
cat("  • Date range:", min(trials_clean$Date), "to", max(trials_clean$Date), "\n")
cat("  • Unique locations:", length(unique(trials_clean$Location)), "\n\n")

################################################################################
# STEP 3: GEOCODE LOCATIONS (WITH USA SUFFIX)
################################################################################

cat("📍 Step 3: Geocoding locations...\n")

# Prepare location strings with ", USA" suffix for accurate geocoding
trials_clean <- trials_clean %>%
  mutate(
    # Create geocoding string - append ", USA" if not already present
    Location_Geocode = case_when(
      grepl("USA|United States|U.S.A.|U.S.", Location, ignore.case = TRUE) ~ Location,
      TRUE ~ paste0(Location, ", USA")
    )
  )

cat("  • Added USA suffix to", sum(!grepl("USA|United States", trials_clean$Location, ignore.case = TRUE)), "locations\n")

# Load existing geocode cache (if it exists)
cache_file <- "geocode_cache.csv"

if(file.exists(cache_file)) {
  geocode_cache <- read.csv(cache_file, stringsAsFactors = FALSE)
  cat("  • Loaded", nrow(geocode_cache), "cached locations\n")
} else {
  geocode_cache <- data.frame(
    Location = character(),
    lat = numeric(),
    long = numeric(),
    stringsAsFactors = FALSE
  )
  cat("  • No cache found, will geocode all locations\n")
}

# Find locations that need geocoding
locations_to_geocode <- trials_clean %>%
  distinct(Location_Geocode) %>%
  filter(!Location_Geocode %in% geocode_cache$Location)

if(nrow(locations_to_geocode) > 0) {
  cat("  • Geocoding", nrow(locations_to_geocode), "new locations...\n")
  cat("    (This may take several minutes)\n")
  
  # Geocode new locations
  new_coords <- locations_to_geocode %>%
    geocode(Location_Geocode, method = 'osm', verbose = FALSE)
  
  # Check for failed geocoding
  failed_geocodes <- new_coords %>%
    filter(is.na(lat) | is.na(long))
  
  if(nrow(failed_geocodes) > 0) {
    cat("  ⚠️  Warning:", nrow(failed_geocodes), "locations failed to geocode:\n")
    print(failed_geocodes$Location_Geocode)
  }
  
  # Rename columns to match cache format
  new_coords <- new_coords %>%
    rename(Location = Location_Geocode)
  
  # Add to cache
  geocode_cache <- bind_rows(geocode_cache, new_coords)
  
  # Save updated cache
  write.csv(geocode_cache, cache_file, row.names = FALSE)
  cat("  ✓ Geocoded and cached", nrow(new_coords), "new locations\n")
} else {
  cat("  ✓ All locations already in cache\n")
}

# Join coordinates to trials
trials_with_coords <- trials_clean %>%
  left_join(geocode_cache, by = c("Location_Geocode" = "Location")) %>%
  rename(Latitude = lat, Longitude = long)

# Check for missing coordinates
missing_coords <- trials_with_coords %>%
  filter(is.na(Latitude) | is.na(Longitude))

if(nrow(missing_coords) > 0) {
  cat("  ⚠️  Warning:", nrow(missing_coords), "trials have missing coordinates\n")
}

cat("\n")

################################################################################
# STEP 4: GROUP TRIALS BY DATE AND LOCATION
################################################################################

cat("📦 Step 4: Grouping trials by date and location...\n")

# Increase jitter for state-level visibility
JITTER_AMOUNT <- 0.05  # About 3-5 miles, visible at state level

# Group trials that are on the same date and location
# This creates ONE pin per trial, with all event types listed
trials_grouped <- trials_with_coords %>%
  # Remove trials with missing coordinates
  filter(!is.na(Latitude), !is.na(Longitude)) %>%
  # Group by date and original location
  group_by(Date, Location) %>%
  summarize(
    Host = first(Host),
    EventLink = first(EventLink),
    TrialTypes = paste(TrialTypes, collapse = ", "),
    EventCount = sum(EventCount),
    # Keep base coordinates
    Latitude_Base = first(Latitude),
    Longitude_Base = first(Longitude),
    .groups = 'drop'
  ) %>%
  # Add jitter to coordinates for state-level visibility
  mutate(
    Latitude = Latitude_Base + runif(n(), -JITTER_AMOUNT, JITTER_AMOUNT),
    Longitude = Longitude_Base + runif(n(), -JITTER_AMOUNT, JITTER_AMOUNT)
  ) %>%
  # Remove base coordinates from final output
  select(-Latitude_Base, -Longitude_Base)

cat("✓ Grouped into", nrow(trials_grouped), "unique trials (one pin per trial)\n")
cat("  • Total event types:", sum(trials_grouped$EventCount), "\n")
cat("  • Applied 10x jitter for state-level visibility\n\n")

################################################################################
# STEP 5: CREATE FINAL DATASET
################################################################################

cat("💾 Step 5: Creating final dataset...\n")

# Prepare final dataset for export
trials_final <- trials_grouped %>%
  select(Date, Location, Host, EventLink, TrialTypes, EventCount, Latitude, Longitude) %>%
  arrange(Date, Location)

# Summary statistics
date_range <- range(trials_final$Date)
unique_locations <- length(unique(trials_final$Location))

cat("✓ Final dataset ready\n")
cat("  • Trials:", nrow(trials_final), "\n")
cat("  • Date range:", date_range[1], "to", date_range[2], "\n")
cat("  • Unique locations:", unique_locations, "\n\n")

################################################################################
# STEP 6: SAVE TO CSV
################################################################################

cat("💾 Step 6: Saving to CSV file...\n")

output_file <- "trials_for_google_sheets.csv"
write.csv(trials_final, output_file, row.names = FALSE)

cat("✓ CSV file created:", output_file, "\n")
cat("  • File size:", file.size(output_file), "bytes\n\n")

################################################################################
# COMPLETION SUMMARY
################################################################################

cat("============================================================\n")
cat("✅ SUCCESS! Data collection complete.\n")
cat("============================================================\n\n")

cat("📊 Summary:\n")
cat("  • Total trials:", nrow(trials_final), "\n")
cat("  • Total events:", sum(trials_final$EventCount), "\n")
cat("  • Date range:", date_range[1], "to", date_range[2], "\n")
cat("  • Unique locations:", unique_locations, "\n\n")

cat("📋 Next Steps:\n")
cat("  1. Upload to GitHub:\n")
cat("     - Trialmaps_Interactive.R (this updated script)\n")
cat("     - geocode_cache.csv (if it changed)\n")
cat("  2. Trigger workflow or wait for Monday\n")
cat("  3. Your map will automatically update!\n\n")

cat("💡 Note: Script updated for new NACSW table-based layout (2024)\n")
cat("📍 One pin per trial, with all event types listed\n")
cat("🔍 Jitter increased 10x for state-level visibility\n")
cat("🌎 All locations include ', USA' for accurate geocoding\n\n")
