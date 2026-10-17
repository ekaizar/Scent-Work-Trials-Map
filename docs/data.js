const DATA_UPDATED = "October 12, 2026";
const TRIALS_DATA = 
[
  {
    "Date": "2024-10-12",
    "Location": "Homer Glen, IL",
    "Host": "Paws for Scent",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 41.5827,
    "Longitude": -87.9684
  },
  {
    "Date": "2024-10-12",
    "Location": "Lafayette Hill, PA",
    "Host": "Sniff Sniff Hooray",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 40.0957,
    "Longitude": -75.266
  },
  {
    "Date": "2024-10-12",
    "Location": "Sedona, AZ",
    "Host": "Release Canine LLC",
    "TrialTypes": "ELT, ELT-S, NW2, NW1",
    "EventCount": 4,
    "Latitude": 34.9077,
    "Longitude": -111.7242
  },
  {
    "Date": "2024-10-18",
    "Location": "Calhan, CO",
    "Host": "Mountain Dogs, LLC",
    "TrialTypes": "ELT, NW3, ELT-S",
    "EventCount": 3,
    "Latitude": 39.0268,
    "Longitude": -104.2748
  },
  {
    "Date": "2024-10-18",
    "Location": "Loganville, GA",
    "Host": "Canine Country Academy, LLC",
    "TrialTypes": "NW2, NW1",
    "EventCount": 2,
    "Latitude": 33.8087,
    "Longitude": -83.9276
  },
  {
    "Date": "2024-10-18",
    "Location": "Newfoundland, PA",
    "Host": "Your Dog's Place, LLC",
    "TrialTypes": "L1V, ELT-S, L2C, L1E",
    "EventCount": 4,
    "Latitude": 41.3343,
    "Longitude": -75.2895
  },
  {
    "Date": "2024-10-18",
    "Location": "Rossville, GA",
    "Host": "Camelot Shepherds, Inc",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 35.01,
    "Longitude": -85.2616
  },
  {
    "Date": "2024-10-19",
    "Location": "Ferndale, WA",
    "Host": "Nose Work Magic",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 48.8954,
    "Longitude": -122.568
  },
  {
    "Date": "2024-10-19",
    "Location": "Griffith, IN",
    "Host": "Outside the Box, LLC",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 41.4992,
    "Longitude": -87.4445
  },
  {
    "Date": "2024-10-19",
    "Location": "Kilmarnock, VA",
    "Host": "Red Huskies",
    "TrialTypes": "NW3, L1E, NW2",
    "EventCount": 3,
    "Latitude": 37.7012,
    "Longitude": -76.4277
  },
  {
    "Date": "2024-10-19",
    "Location": "Kingston, IL",
    "Host": "Common Scents K9",
    "TrialTypes": "NW1, L2C, NW2",
    "EventCount": 3,
    "Latitude": 42.0974,
    "Longitude": -88.7356
  },
  {
    "Date": "2024-10-19",
    "Location": "Lakeville, MN",
    "Host": "St Paul Dog Training Club",
    "TrialTypes": "ELT-P, NW1, L1E",
    "EventCount": 3,
    "Latitude": 44.6182,
    "Longitude": -93.2066
  },
  {
    "Date": "2024-10-19",
    "Location": "Round Rock, TX",
    "Host": "Heng Ten K9 Training",
    "TrialTypes": "NW3, ELT-S, NW1",
    "EventCount": 3,
    "Latitude": 30.5395,
    "Longitude": -97.7123
  },
  {
    "Date": "2024-10-19",
    "Location": "Yamhill, OR",
    "Host": "Nose Work Detectives, LLC",
    "TrialTypes": "L1C, L1V, L2C, L2V",
    "EventCount": 4,
    "Latitude": 45.2248,
    "Longitude": -123.2091
  },
  {
    "Date": "2024-10-22",
    "Location": "Astoria, OR",
    "Host": "Nosework Detectives, LLC",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 46.1957,
    "Longitude": -123.8613
  },
  {
    "Date": "2024-10-25",
    "Location": "Fishkill, NY",
    "Host": "Pat Tetrault and Dominique Manpel",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 41.5231,
    "Longitude": -73.8536
  },
  {
    "Date": "2024-10-25",
    "Location": "Palmyra, VA",
    "Host": "Paws Plus Training, LLC",
    "TrialTypes": "ELT, NW3, ELT-S, NW1",
    "EventCount": 4,
    "Latitude": 37.8247,
    "Longitude": -78.2841
  },
  {
    "Date": "2024-10-26",
    "Location": "Columbia City, IN",
    "Host": "2 Nose You Is 2 Loves You",
    "TrialTypes": "ELT, NW1",
    "EventCount": 2,
    "Latitude": 41.11,
    "Longitude": -85.4565
  },
  {
    "Date": "2024-10-26",
    "Location": "Columbus, MT",
    "Host": "Nikki Markle of Canine Connection",
    "TrialTypes": "ELT-S, NW2, ELT",
    "EventCount": 3,
    "Latitude": 45.6518,
    "Longitude": -109.263
  },
  {
    "Date": "2024-10-26",
    "Location": "Grand Junction, CO",
    "Host": "Mountain Dogs, LLC",
    "TrialTypes": "NW2, NW1",
    "EventCount": 2,
    "Latitude": 39.0359,
    "Longitude": -108.6102
  },
  {
    "Date": "2024-10-26",
    "Location": "Hammond, LA",
    "Host": "Dog Gone Right, LLC",
    "TrialTypes": "ELT-S, NW1, NW3",
    "EventCount": 3,
    "Latitude": 30.4906,
    "Longitude": -90.5088
  },
  {
    "Date": "2024-10-26",
    "Location": "Medford, NJ",
    "Host": "K9 InScentives",
    "TrialTypes": "NW3, NW1",
    "EventCount": 2,
    "Latitude": 39.8685,
    "Longitude": -74.7783
  },
  {
    "Date": "2024-10-26",
    "Location": "Poland Springs, ME",
    "Host": "Virginia Howe",
    "TrialTypes": "NW1, NW3",
    "EventCount": 2,
    "Latitude": 44.014,
    "Longitude": -70.3424
  },
  {
    "Date": "2024-10-26",
    "Location": "Suring, WI",
    "Host": "Clever Sniffers, LLC",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 44.9598,
    "Longitude": -88.4008
  },
  {
    "Date": "2024-10-26",
    "Location": "Welches, OR",
    "Host": "Trust Your Dog K9 Events",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 45.3703,
    "Longitude": -122.0023
  },
  {
    "Date": "2024-10-26",
    "Location": "West Friendship, MD",
    "Host": "Red Huskies",
    "TrialTypes": "NW3, L2C, NW2",
    "EventCount": 3,
    "Latitude": 39.3161,
    "Longitude": -76.9949
  },
  {
    "Date": "2024-10-26",
    "Location": "Winterset, IA",
    "Host": "KBP Dog Training",
    "TrialTypes": "NW2, NW1",
    "EventCount": 2,
    "Latitude": 41.3317,
    "Longitude": -94.0635
  },
  {
    "Date": "2024-10-27",
    "Location": "San Martin, CA",
    "Host": "B. L. McMutts",
    "TrialTypes": "L1V, L2V",
    "EventCount": 2,
    "Latitude": 37.0465,
    "Longitude": -121.5953
  },
  {
    "Date": "2024-11-01",
    "Location": "Denton, MD",
    "Host": "Fair Play Labradors",
    "TrialTypes": "NW3, ELT-S, L1C, NW2, L1E",
    "EventCount": 5,
    "Latitude": 38.8715,
    "Longitude": -75.8296
  },
  {
    "Date": "2024-11-01",
    "Location": "Guerneville, CA",
    "Host": "Jen Huot",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 38.4894,
    "Longitude": -123.0199
  },
  {
    "Date": "2024-11-01",
    "Location": "Red Feather Lakes, CO",
    "Host": "Beyond Elevation K9 Training",
    "TrialTypes": "NW1, NW2, NW3",
    "EventCount": 3,
    "Latitude": 40.811,
    "Longitude": -105.5702
  },
  {
    "Date": "2024-11-02",
    "Location": "Callaway, VA",
    "Host": "Canny K9 Companions LLC",
    "TrialTypes": "ELT-S, NW1, NW2",
    "EventCount": 3,
    "Latitude": 36.9856,
    "Longitude": -80.0315
  },
  {
    "Date": "2024-11-02",
    "Location": "Greenview, IL",
    "Host": "Capitol Canine Dog Sports",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 40.1176,
    "Longitude": -89.7727
  },
  {
    "Date": "2024-11-02",
    "Location": "Kennebunkport, ME",
    "Host": "Elizabeth Dutton",
    "TrialTypes": "ELT-P, NW3",
    "EventCount": 2,
    "Latitude": 43.3946,
    "Longitude": -70.4977
  },
  {
    "Date": "2024-11-02",
    "Location": "Mays Landing, NJ",
    "Host": "Rotts-n-Notts Nosework, LLC",
    "TrialTypes": "NW3, L1E, NW1",
    "EventCount": 3,
    "Latitude": 39.4149,
    "Longitude": -74.7102
  },
  {
    "Date": "2024-11-02",
    "Location": "Mill Spring, NC",
    "Host": "Foothills Canine Academy, LLC",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 35.2902,
    "Longitude": -82.1593
  },
  {
    "Date": "2024-11-02",
    "Location": "Shawnee, OK",
    "Host": "The Doggie Spot, LLC",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 35.3402,
    "Longitude": -96.9088
  },
  {
    "Date": "2024-11-02",
    "Location": "Valencia, CA",
    "Host": "Pink Biscuit K9s",
    "TrialTypes": "L1I, L2I, L1C, L2C",
    "EventCount": 4,
    "Latitude": 34.4065,
    "Longitude": -118.5772
  },
  {
    "Date": "2024-11-02",
    "Location": "Wappingers Falls, NY",
    "Host": "Top Notch Dogs, LLC",
    "TrialTypes": "ELT-P, ELT-S, L1C",
    "EventCount": 3,
    "Latitude": 41.616,
    "Longitude": -73.9241
  },
  {
    "Date": "2024-11-03",
    "Location": "McMinnville, OR",
    "Host": "Doglandia LLC and Carol Forsberg",
    "TrialTypes": "NW2, ELT",
    "EventCount": 2,
    "Latitude": 45.2044,
    "Longitude": -123.2234
  },
  {
    "Date": "2024-11-04",
    "Location": "Duluth, GA",
    "Host": "Right Choice Dog Training, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 34.0077,
    "Longitude": -84.0962
  },
  {
    "Date": "2024-11-08",
    "Location": "Montrose, CO",
    "Host": "Mountain Dogs, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 38.5028,
    "Longitude": -107.8857
  },
  {
    "Date": "2024-11-09",
    "Location": "Canoga Park, CA",
    "Host": "Pink Biscuit K9s",
    "TrialTypes": "NW1, L3I, L3C",
    "EventCount": 3,
    "Latitude": 34.2219,
    "Longitude": -118.5949
  },
  {
    "Date": "2024-11-09",
    "Location": "Eldred, NY",
    "Host": "Pocono Nose Work",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 41.569,
    "Longitude": -74.9003
  },
  {
    "Date": "2024-11-09",
    "Location": "Escondido, CA",
    "Host": "Anita Cheesman and Jessica Koester",
    "TrialTypes": "NW1, L1C",
    "EventCount": 2,
    "Latitude": 33.0905,
    "Longitude": -117.0582
  },
  {
    "Date": "2024-11-09",
    "Location": "Huntsville, AL",
    "Host": "Sniffers Anonymous",
    "TrialTypes": "NW3, L1I, L1C",
    "EventCount": 3,
    "Latitude": 34.7577,
    "Longitude": -86.5695
  },
  {
    "Date": "2024-11-09",
    "Location": "Milton, NH",
    "Host": "Lucky Dog Events",
    "TrialTypes": "NW3, L2I, NW2",
    "EventCount": 3,
    "Latitude": 43.3896,
    "Longitude": -70.962
  },
  {
    "Date": "2024-11-09",
    "Location": "Moline, IL",
    "Host": "Fur Better Fur Worse, LLC",
    "TrialTypes": "ELT-S",
    "EventCount": 1,
    "Latitude": 41.5048,
    "Longitude": -90.4927
  },
  {
    "Date": "2024-11-09",
    "Location": "New Rochelle, NY",
    "Host": "For the Love of Dogs NY, LLC",
    "TrialTypes": "L3I, L3C, NW1, NW2",
    "EventCount": 4,
    "Latitude": 40.8728,
    "Longitude": -73.7356
  },
  {
    "Date": "2024-11-09",
    "Location": "Schaumburg, IL",
    "Host": "Northwest Obedience Club Inc.",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 42.0778,
    "Longitude": -88.1024
  },
  {
    "Date": "2024-11-10",
    "Location": "Odessa, FL",
    "Host": "Hoppin’ in the Hills",
    "TrialTypes": "NW2, NW1",
    "EventCount": 2,
    "Latitude": 28.1588,
    "Longitude": -82.5878
  },
  {
    "Date": "2024-11-11",
    "Location": "Escondido, CA",
    "Host": "Anita Cheesman and Jessica Koester",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 33.0893,
    "Longitude": -117.034
  },
  {
    "Date": "2024-11-11",
    "Location": "Paso Robles, CA",
    "Host": "Gentle Touch Pet Training",
    "TrialTypes": "L1C, L2I, ELT-S, NW2",
    "EventCount": 4,
    "Latitude": 35.6686,
    "Longitude": -120.7215
  },
  {
    "Date": "2024-11-15",
    "Location": "Harrington, DE",
    "Host": "Shamrock Pot of Gold K9 Scenter",
    "TrialTypes": "NW3, ELT, ELT-P, NW2, NW1",
    "EventCount": 5,
    "Latitude": 38.8916,
    "Longitude": -75.5674
  },
  {
    "Date": "2024-11-15",
    "Location": "Rancho Cucamonga, CA",
    "Host": "Agile Paws Dog Sports",
    "TrialTypes": "L2C, NW2, NW1, L1C",
    "EventCount": 4,
    "Latitude": 34.1137,
    "Longitude": -117.5932
  },
  {
    "Date": "2024-11-16",
    "Location": "Auburn, WA",
    "Host": "Northwest K9 Sniffers",
    "TrialTypes": "ELT-S, NW1, L2C, L2I",
    "EventCount": 4,
    "Latitude": 47.3468,
    "Longitude": -122.2127
  },
  {
    "Date": "2024-11-16",
    "Location": "Foxborough, MA",
    "Host": "MasterPeace Dog Training",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 42.0847,
    "Longitude": -71.2396
  },
  {
    "Date": "2024-11-16",
    "Location": "Marble Falls, TX",
    "Host": "Scent Work Across Texas",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 30.5427,
    "Longitude": -98.3046
  },
  {
    "Date": "2024-11-16",
    "Location": "Nevada City, CA",
    "Host": "Sierra Sniffing Canines",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 39.2583,
    "Longitude": -121.043
  },
  {
    "Date": "2024-11-16",
    "Location": "Tucson, AZ",
    "Host": "Patience Unlimited Professional Dog Training",
    "TrialTypes": "NW1, L1C, L1E, L1I",
    "EventCount": 4,
    "Latitude": 32.1973,
    "Longitude": -111.0086
  },
  {
    "Date": "2024-11-16",
    "Location": "Yanceyville, NC",
    "Host": "Whole Dog Institute, LLC",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 36.3863,
    "Longitude": -79.3127
  },
  {
    "Date": "2024-11-23",
    "Location": "Coburg, OR",
    "Host": "Kiddie Christie",
    "TrialTypes": "L1E, NW1, NW3",
    "EventCount": 3,
    "Latitude": 44.1541,
    "Longitude": -123.1033
  },
  {
    "Date": "2024-11-23",
    "Location": "Delta, CO",
    "Host": "Mountain Dogs, LLC",
    "TrialTypes": "NW3, ELT-P",
    "EventCount": 2,
    "Latitude": 38.8331,
    "Longitude": -107.8627
  },
  {
    "Date": "2024-11-23",
    "Location": "Fork Union, VA",
    "Host": "Your Dog Knows LLC",
    "TrialTypes": "NW3, L3I, L1V",
    "EventCount": 3,
    "Latitude": 37.7986,
    "Longitude": -78.2743
  },
  {
    "Date": "2024-11-23",
    "Location": "Kintnersville, PA",
    "Host": "Paws n' Sniff",
    "TrialTypes": "NW1, L1E, ELT-S",
    "EventCount": 3,
    "Latitude": 40.5974,
    "Longitude": -75.2149
  },
  {
    "Date": "2024-11-23",
    "Location": "Saltsburg, PA",
    "Host": "Steel City Nosework, LLC",
    "TrialTypes": "NW3, ELT-S, NW1",
    "EventCount": 3,
    "Latitude": 40.5157,
    "Longitude": -79.4978
  },
  {
    "Date": "2024-11-23",
    "Location": "Smyrna, TN",
    "Host": "Dogs Have Amazing Noses LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 36.0121,
    "Longitude": -86.4811
  },
  {
    "Date": "2024-11-29",
    "Location": "Capo Beach/Dana Point, CA",
    "Host": "JavaK9s",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 33.4797,
    "Longitude": -117.6401
  },
  {
    "Date": "2024-11-29",
    "Location": "Foxborough, MA",
    "Host": "Tracey Costa",
    "TrialTypes": "ELT, L1C, NW2",
    "EventCount": 3,
    "Latitude": 42.0597,
    "Longitude": -71.2121
  },
  {
    "Date": "2024-11-30",
    "Location": "Cottage Grove, MN",
    "Host": "Gretchen Hofheins-Wackerfuss",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 44.8745,
    "Longitude": -92.9035
  },
  {
    "Date": "2024-11-30",
    "Location": "Cumming, GA",
    "Host": "Georgia Nosework",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 34.1735,
    "Longitude": -84.1473
  },
  {
    "Date": "2024-11-30",
    "Location": "Green Bay, WI",
    "Host": "NEWK9 Scent Work LLC",
    "TrialTypes": "ELT-S, ELT",
    "EventCount": 2,
    "Latitude": 44.5237,
    "Longitude": -87.9988
  },
  {
    "Date": "2024-11-30",
    "Location": "Lebanon, NJ",
    "Host": "Sirius K-9 Solutions",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 40.5967,
    "Longitude": -74.8186
  },
  {
    "Date": "2024-11-30",
    "Location": "Los Osos, CA",
    "Host": "Central Coast Nosework Club, Inc.",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 35.2672,
    "Longitude": -120.8343
  },
  {
    "Date": "2024-11-30",
    "Location": "Plant City, FL",
    "Host": "Hoppin’ in the Hills",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 28.0652,
    "Longitude": -82.085
  },
  {
    "Date": "2024-11-30",
    "Location": "Worcester, PA",
    "Host": "Sniff Sniff Hooray",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 40.2175,
    "Longitude": -75.3358
  },
  {
    "Date": "2024-12-06",
    "Location": "Salem, WI",
    "Host": "Loving Paws Dog Training LLC",
    "TrialTypes": "ELT-P, ELT",
    "EventCount": 2,
    "Latitude": 42.5965,
    "Longitude": -88.0631
  },
  {
    "Date": "2024-12-06",
    "Location": "Ypsilanti, MI",
    "Host": "Every Dog Nosework",
    "TrialTypes": "ELT-P, ELT-S, L2C",
    "EventCount": 3,
    "Latitude": 42.2155,
    "Longitude": -83.5781
  },
  {
    "Date": "2024-12-07",
    "Location": "Batavia, NY",
    "Host": "Do Over Dog Training",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 43.0178,
    "Longitude": -78.1679
  },
  {
    "Date": "2024-12-07",
    "Location": "Bowie, MD",
    "Host": "Red Huskies",
    "TrialTypes": "ELT-P, ELT-S",
    "EventCount": 2,
    "Latitude": 38.9016,
    "Longitude": -76.7514
  },
  {
    "Date": "2024-12-07",
    "Location": "Centralia, WA",
    "Host": "Let's Talk Dogs, LLC and About Face K9 Academy",
    "TrialTypes": "ELT-P, NW2",
    "EventCount": 2,
    "Latitude": 46.6768,
    "Longitude": -122.9427
  },
  {
    "Date": "2024-12-07",
    "Location": "Chester Springs, PA",
    "Host": "Patricia Grassey",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 40.097,
    "Longitude": -75.6602
  },
  {
    "Date": "2024-12-07",
    "Location": "DeLeon Springs, FL",
    "Host": "River Poodles Training, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 29.0952,
    "Longitude": -81.3574
  },
  {
    "Date": "2024-12-07",
    "Location": "Fillmore, CA",
    "Host": "Pink Biscuit K9s",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 34.3782,
    "Longitude": -118.9624
  },
  {
    "Date": "2024-12-07",
    "Location": "Newfoundland, PA",
    "Host": "Your Dog's Place, LLC",
    "TrialTypes": "L3V, NW2, ELT",
    "EventCount": 3,
    "Latitude": 41.3424,
    "Longitude": -75.3209
  },
  {
    "Date": "2024-12-07",
    "Location": "Owenton, KY",
    "Host": "Clermont County Dog Training Club",
    "TrialTypes": "ELT, NW1, NW2",
    "EventCount": 3,
    "Latitude": 38.5387,
    "Longitude": -84.8896
  },
  {
    "Date": "2024-12-09",
    "Location": "Stockton, CA",
    "Host": "Two Nosey Girls",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 37.9373,
    "Longitude": -121.34
  },
  {
    "Date": "2024-12-13",
    "Location": "Pittstown, NJ",
    "Host": "Shamrock Pot of Gold K9 Scenter",
    "TrialTypes": "NW3, ELT-P, ELT-S, NW1",
    "EventCount": 4,
    "Latitude": 40.5442,
    "Longitude": -74.9107
  },
  {
    "Date": "2024-12-14",
    "Location": "Ontario, CA",
    "Host": "Agile Paws Dog Sports",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 34.0302,
    "Longitude": -117.6417
  },
  {
    "Date": "2024-12-21",
    "Location": "Cedar Park, TX",
    "Host": "Scent Work Across Texas",
    "TrialTypes": "L1V, L2I, NW1, L2E",
    "EventCount": 4,
    "Latitude": 30.4747,
    "Longitude": -97.8058
  },
  {
    "Date": "2024-12-21",
    "Location": "Jefferson, GA",
    "Host": "Right Choice Dog Training, LLC",
    "TrialTypes": "NW2, NW1",
    "EventCount": 2,
    "Latitude": 33.0545,
    "Longitude": -82.4492
  },
  {
    "Date": "2024-12-21",
    "Location": "Marriottsville, MD",
    "Host": "Red Huskies",
    "TrialTypes": "ELT-P, ELT-S, NW1",
    "EventCount": 3,
    "Latitude": 39.3497,
    "Longitude": -76.88
  },
  {
    "Date": "2024-12-27",
    "Location": "Crownsville, MD",
    "Host": "Red Huskies",
    "TrialTypes": "ELT-P, ELT, ELT-S",
    "EventCount": 3,
    "Latitude": 38.9711,
    "Longitude": -76.5449
  },
  {
    "Date": "2024-12-28",
    "Location": "Bellingham, WA",
    "Host": "Nose Work Magic",
    "TrialTypes": "L1V, ELT-S, ELT",
    "EventCount": 3,
    "Latitude": 48.722,
    "Longitude": -122.4897
  },
  {
    "Date": "2024-12-28",
    "Location": "Cumming, GA",
    "Host": "Georgia Nosework",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 34.2182,
    "Longitude": -84.1107
  },
  {
    "Date": "2024-12-28",
    "Location": "Salem, OR",
    "Host": "Helix Fairweather & Doglandia, LLC",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 44.9488,
    "Longitude": -123.0227
  },
  {
    "Date": "2024-12-28",
    "Location": "Williamsburg, VA",
    "Host": "Blockade Runners Flyball",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 37.2556,
    "Longitude": -76.6949
  },
  {
    "Date": "2024-12-29",
    "Location": "Waukesha, WI",
    "Host": "Think Pawsitive Dog Training",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 43.0467,
    "Longitude": -88.3074
  },
  {
    "Date": "2024-12-31",
    "Location": "Strasburg, IL",
    "Host": "Kudos for Canines, LLC",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 39.3179,
    "Longitude": -88.6561
  },
  {
    "Date": "2025-01-03",
    "Location": "Brockport, NY",
    "Host": "Savvy Dog Sports",
    "TrialTypes": "ELT-S, ELT",
    "EventCount": 2,
    "Latitude": 43.164,
    "Longitude": -77.9284
  },
  {
    "Date": "2025-01-03",
    "Location": "Emmitsburg, MD",
    "Host": "Red Huskies",
    "TrialTypes": "ELT, ELT-P, ELT-S",
    "EventCount": 3,
    "Latitude": 39.7503,
    "Longitude": -77.3032
  },
  {
    "Date": "2025-01-04",
    "Location": "Bonsall, CA",
    "Host": "Linda Buchanan",
    "TrialTypes": "NW2, ELT",
    "EventCount": 2,
    "Latitude": 33.3008,
    "Longitude": -117.2427
  },
  {
    "Date": "2025-01-09",
    "Location": "Centreville, MD",
    "Host": "Fair Play Labradors",
    "TrialTypes": "ELT-S, NW3, ELT, ELT-P",
    "EventCount": 4,
    "Latitude": 39.0869,
    "Longitude": -76.0938
  },
  {
    "Date": "2025-01-10",
    "Location": "Hartfield, VA",
    "Host": "Paws Plus Training, LLC",
    "TrialTypes": "NW3, NW1, NW2, ELT",
    "EventCount": 4,
    "Latitude": 37.528,
    "Longitude": -76.4033
  },
  {
    "Date": "2025-01-11",
    "Location": "Greensboro, NC",
    "Host": "Dog Fun Forever, LLC",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 36.067,
    "Longitude": -79.8063
  },
  {
    "Date": "2025-01-11",
    "Location": "Lithia, FL",
    "Host": "Hoppin’ in the Hills",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 27.9012,
    "Longitude": -82.1838
  },
  {
    "Date": "2025-01-13",
    "Location": "Oakdale, CA",
    "Host": "Two Nosey Girls",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 37.7342,
    "Longitude": -120.8566
  },
  {
    "Date": "2025-01-18",
    "Location": "Clanton, AL",
    "Host": "Daphne Melillo",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 32.8663,
    "Longitude": -86.6121
  },
  {
    "Date": "2025-01-18",
    "Location": "Elmira, OR",
    "Host": "Wells Creek Dog Training",
    "TrialTypes": "ELT, L1I, NW2",
    "EventCount": 3,
    "Latitude": 44.0908,
    "Longitude": -123.331
  },
  {
    "Date": "2025-01-18",
    "Location": "Flemington, NJ",
    "Host": "Shamrock Pot of Gold K9 Scenter",
    "TrialTypes": "ELT-S, L2I, L2C, ELT",
    "EventCount": 4,
    "Latitude": 40.4657,
    "Longitude": -74.8534
  },
  {
    "Date": "2025-01-18",
    "Location": "Marble Falls, TX",
    "Host": "Heng Ten K9 Training",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 30.5445,
    "Longitude": -98.2675
  },
  {
    "Date": "2025-01-18",
    "Location": "Melrose, FL",
    "Host": "River Poodles Training, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 29.7198,
    "Longitude": -82.0477
  },
  {
    "Date": "2025-01-18",
    "Location": "New Rochelle, NY",
    "Host": "For the Love of Dogs NY, LLC",
    "TrialTypes": "NW2, NW3, ELT-S",
    "EventCount": 3,
    "Latitude": 40.8924,
    "Longitude": -73.7927
  },
  {
    "Date": "2025-01-18",
    "Location": "Redlands, CA",
    "Host": "Agile Paws Dog Sports",
    "TrialTypes": "ELT, NW2",
    "EventCount": 2,
    "Latitude": 34.0467,
    "Longitude": -117.226
  },
  {
    "Date": "2025-01-18",
    "Location": "Sheridan, OR",
    "Host": "Helix Fairweather & Doglandia, LLC",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 45.0712,
    "Longitude": -123.3916
  },
  {
    "Date": "2025-01-25",
    "Location": "Danielsville, GA",
    "Host": "Right Choice Dog Training, LLC",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 34.0939,
    "Longitude": -83.2518
  },
  {
    "Date": "2025-01-25",
    "Location": "Tecumseh, OK",
    "Host": "The Doggie Spot, LLC",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 35.2893,
    "Longitude": -96.9091
  },
  {
    "Date": "2025-01-31",
    "Location": "Vista, CA",
    "Host": "Anita Cheesman and Jessica Koester",
    "TrialTypes": "ELT-S, NW3",
    "EventCount": 2,
    "Latitude": 33.2354,
    "Longitude": -117.2382
  },
  {
    "Date": "2025-02-01",
    "Location": "Northridge, CA",
    "Host": "Scentwork.org",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 34.2132,
    "Longitude": -118.4888
  },
  {
    "Date": "2025-02-08",
    "Location": "Murfreesboro, TN",
    "Host": "Dogs Have Amazing Noses LLC",
    "TrialTypes": "ELT, NW1",
    "EventCount": 2,
    "Latitude": 35.8228,
    "Longitude": -86.4039
  },
  {
    "Date": "2025-02-08",
    "Location": "Veneta, OR",
    "Host": "Kiddy Christie",
    "TrialTypes": "NW3, L1C, NW1",
    "EventCount": 3,
    "Latitude": 44.0036,
    "Longitude": -123.3928
  },
  {
    "Date": "2025-02-14",
    "Location": "Honey Brook, PA",
    "Host": "The Sniffing Hound",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 40.0485,
    "Longitude": -75.9158
  },
  {
    "Date": "2025-02-15",
    "Location": "Bellingham, WA",
    "Host": "Nose Work Magic",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 48.7328,
    "Longitude": -122.4887
  },
  {
    "Date": "2025-02-15",
    "Location": "Flemington, NJ",
    "Host": "Shamrock Pot of Gold K9 Scenter",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 40.5622,
    "Longitude": -74.8258
  },
  {
    "Date": "2025-02-15",
    "Location": "Lakewood, NJ",
    "Host": "Rotts-n-Notts Nosework, LLC",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 40.1197,
    "Longitude": -74.1779
  },
  {
    "Date": "2025-02-15",
    "Location": "Lutherville-Timonium, MD",
    "Host": "Red Huskies",
    "TrialTypes": "L3C, L1I, NW2",
    "EventCount": 3,
    "Latitude": 39.4648,
    "Longitude": -76.6457
  },
  {
    "Date": "2025-02-15",
    "Location": "Medford, NJ",
    "Host": "Sniff Sniff Hooray",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 39.9274,
    "Longitude": -74.8581
  },
  {
    "Date": "2025-02-15",
    "Location": "Modesto, CA",
    "Host": "Two Nosey Girls",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 37.6776,
    "Longitude": -120.9807
  },
  {
    "Date": "2025-02-15",
    "Location": "White Plains, NY",
    "Host": "For the Love of Dogs NY, LLC",
    "TrialTypes": "L1I, L2C, NW3",
    "EventCount": 3,
    "Latitude": 41.0514,
    "Longitude": -73.7252
  },
  {
    "Date": "2025-02-15",
    "Location": "Wilson, NC",
    "Host": "Whole Dog Institute, LLC",
    "TrialTypes": "NW3, NW1",
    "EventCount": 2,
    "Latitude": 35.7129,
    "Longitude": -77.9553
  },
  {
    "Date": "2025-02-16",
    "Location": "Chino, CA",
    "Host": "Agile Paws Dog Sports",
    "TrialTypes": "ELT, ELT-S",
    "EventCount": 2,
    "Latitude": 34.0069,
    "Longitude": -117.734
  },
  {
    "Date": "2025-02-22",
    "Location": "Albuquerque, NM",
    "Host": "The Can Do K9, LLC",
    "TrialTypes": "NW1, NW3",
    "EventCount": 2,
    "Latitude": 35.0794,
    "Longitude": -106.6487
  },
  {
    "Date": "2025-02-23",
    "Location": "Benson, AZ",
    "Host": "Patience Unlimited Professional Dog Training",
    "TrialTypes": "NW3, ELT-S, NW2",
    "EventCount": 3,
    "Latitude": 31.9322,
    "Longitude": -110.3411
  },
  {
    "Date": "2025-02-24",
    "Location": "Paso Robles, CA",
    "Host": "Gentle Touch Pet Training",
    "TrialTypes": "NW3, L2V, L1V",
    "EventCount": 3,
    "Latitude": 35.5858,
    "Longitude": -120.7067
  },
  {
    "Date": "2025-02-28",
    "Location": "San Rafael, CA",
    "Host": "Marin Humane",
    "TrialTypes": "L1C, ELT-S, ELT",
    "EventCount": 3,
    "Latitude": 38.0205,
    "Longitude": -122.5455
  },
  {
    "Date": "2025-03-01",
    "Location": "Augusta, NJ",
    "Host": "Shamrock Pot of Gold K9 Scenter",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 41.0887,
    "Longitude": -74.777
  },
  {
    "Date": "2025-03-01",
    "Location": "Keystone Heights, FL",
    "Host": "River Poodles Training, LLC",
    "TrialTypes": "NW3, ELT-P",
    "EventCount": 2,
    "Latitude": 29.8073,
    "Longitude": -82.0296
  },
  {
    "Date": "2025-03-01",
    "Location": "Oakville, WA",
    "Host": "About Face K9 Academy and Let's Talk Dogs, LLC",
    "TrialTypes": "NW3, L1C, L1I",
    "EventCount": 3,
    "Latitude": 46.8776,
    "Longitude": -123.1981
  },
  {
    "Date": "2025-03-01",
    "Location": "Pomfret, MD",
    "Host": "Nose-It-All, LLC",
    "TrialTypes": "ELT-S, NW2, ELT",
    "EventCount": 3,
    "Latitude": 38.5634,
    "Longitude": -76.9842
  },
  {
    "Date": "2025-03-01",
    "Location": "Santa Paula, CA",
    "Host": "Pink Biscuit K9s",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 34.3088,
    "Longitude": -119.0553
  },
  {
    "Date": "2025-03-01",
    "Location": "Youngwood, PA",
    "Host": "Steel City Nosework, LLC",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 40.2213,
    "Longitude": -79.6241
  },
  {
    "Date": "2025-03-02",
    "Location": "Shawnee, OK",
    "Host": "The Doggie Spot, LLC",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 35.3329,
    "Longitude": -96.9695
  },
  {
    "Date": "2025-03-07",
    "Location": "Elgin, IL",
    "Host": "For Your K9",
    "TrialTypes": "L1C, L2C, L1I, L2I",
    "EventCount": 4,
    "Latitude": 42.0378,
    "Longitude": -88.2602
  },
  {
    "Date": "2025-03-07",
    "Location": "Spring City, PA",
    "Host": "Patricia Grassey",
    "TrialTypes": "NW3, ELT, ELT-S, L1I",
    "EventCount": 4,
    "Latitude": 40.1323,
    "Longitude": -75.5689
  },
  {
    "Date": "2025-03-07",
    "Location": "Stokesdale , NC",
    "Host": "K9 Nose Adventures, LLC",
    "TrialTypes": "ELT, NW1, NW2, L1C, L1I",
    "EventCount": 5,
    "Latitude": 36.2689,
    "Longitude": -79.9889
  },
  {
    "Date": "2025-03-08",
    "Location": "Farmville, VA",
    "Host": "Paws Plus Training, LLC",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 37.3023,
    "Longitude": -78.3867
  },
  {
    "Date": "2025-03-08",
    "Location": "Fort Collins, CO",
    "Host": "Beyond Elevation K9 Training",
    "TrialTypes": "NW1, NW2, ELT",
    "EventCount": 3,
    "Latitude": 40.5634,
    "Longitude": -105.055
  },
  {
    "Date": "2025-03-08",
    "Location": "Foxboro , MA",
    "Host": "Bay State Sniffers",
    "TrialTypes": "L1C, ELT-S, L1I, L3I",
    "EventCount": 4,
    "Latitude": 42.0685,
    "Longitude": -71.2624
  },
  {
    "Date": "2025-03-08",
    "Location": "Rome, GA",
    "Host": "Southeast Scent Work Alliance, LLC",
    "TrialTypes": "ELT, NW2",
    "EventCount": 2,
    "Latitude": 34.2844,
    "Longitude": -85.1519
  },
  {
    "Date": "2025-03-08",
    "Location": "Winterset, IA",
    "Host": "KBP Dog Training",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 41.3126,
    "Longitude": -94.0605
  },
  {
    "Date": "2025-03-10",
    "Location": "Riverside, CA",
    "Host": "Linda Buchanan",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 33.9333,
    "Longitude": -117.3466
  },
  {
    "Date": "2025-03-14",
    "Location": "Phoenix, AZ",
    "Host": "Successful Sniffer",
    "TrialTypes": "NW3, ELT-S, NW1, NW2",
    "EventCount": 4,
    "Latitude": 33.4503,
    "Longitude": -112.066
  },
  {
    "Date": "2025-03-14",
    "Location": "Phoenix, MD",
    "Host": "Oriole Dog Training Club",
    "TrialTypes": "NW3, L2I, NW2",
    "EventCount": 3,
    "Latitude": 39.5176,
    "Longitude": -76.6606
  },
  {
    "Date": "2025-03-15",
    "Location": "Blaine, WA",
    "Host": "Nose Work Magic",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 48.9514,
    "Longitude": -122.701
  },
  {
    "Date": "2025-03-15",
    "Location": "Califon (formerly Pomona), NY",
    "Host": "Shamrock Pot of Gold K9 Scenter",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 41.1675,
    "Longitude": -74.0137
  },
  {
    "Date": "2025-03-15",
    "Location": "Gainesville, GA",
    "Host": "Georgia Nosework",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 34.292,
    "Longitude": -83.8328
  },
  {
    "Date": "2025-03-15",
    "Location": "Kent, WA",
    "Host": "Northwest K9 Sniffers",
    "TrialTypes": "ELT-S, L1V, L1I",
    "EventCount": 3,
    "Latitude": 47.3877,
    "Longitude": -122.2673
  },
  {
    "Date": "2025-03-15",
    "Location": "Pflugerville, TX",
    "Host": "Scent Work Across Texas",
    "TrialTypes": "ELT-S, NW2, L1C, L1E",
    "EventCount": 4,
    "Latitude": 30.4419,
    "Longitude": -97.6023
  },
  {
    "Date": "2025-03-15",
    "Location": "Thaxton, VA",
    "Host": "Canny K9 Companions LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 37.3621,
    "Longitude": -79.5854
  },
  {
    "Date": "2025-03-15",
    "Location": "Westminster, MD",
    "Host": "Red Huskies",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 39.614,
    "Longitude": -76.9869
  },
  {
    "Date": "2025-03-17",
    "Location": "Corralitos, CA",
    "Host": "CalCoastal Dog Owners Group",
    "TrialTypes": "NW2, NW1",
    "EventCount": 2,
    "Latitude": 37.0163,
    "Longitude": -121.7792
  },
  {
    "Date": "2025-03-22",
    "Location": "Johnstown, NY",
    "Host": "My Dog Smells LLC",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 43.0367,
    "Longitude": -74.3845
  },
  {
    "Date": "2025-03-22",
    "Location": "Salem, WI",
    "Host": "Loving Paws Dog Training LLC",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 42.5819,
    "Longitude": -88.0768
  },
  {
    "Date": "2025-03-22",
    "Location": "Shelbyville, TN",
    "Host": "Dogs Have Amazing Noses LLC",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 35.5168,
    "Longitude": -86.4109
  },
  {
    "Date": "2025-03-22",
    "Location": "Tampa, FL",
    "Host": "Hoppin’ in the Hills",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 27.8955,
    "Longitude": -82.4224
  },
  {
    "Date": "2025-03-22",
    "Location": "Wakefield, VA",
    "Host": "Paws Plus Training, LLC",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 36.9484,
    "Longitude": -77.0056
  },
  {
    "Date": "2025-03-23",
    "Location": "Rapid City, SD",
    "Host": "Two Paws Up Dog Training, LLC",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 44.1042,
    "Longitude": -103.2226
  },
  {
    "Date": "2025-03-23",
    "Location": "Upland, CA",
    "Host": "Agile Paws Dog Sports",
    "TrialTypes": "NW1",
    "EventCount": 1,
    "Latitude": 34.0616,
    "Longitude": -117.6143
  },
  {
    "Date": "2025-03-28",
    "Location": "Dobbs Ferry, NY",
    "Host": "For the Love of Dogs NY, LLC",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 41.0498,
    "Longitude": -73.8799
  },
  {
    "Date": "2025-03-28",
    "Location": "Flint, MI",
    "Host": "Every Dog Nosework",
    "TrialTypes": "SMT, ELT-S, L2I",
    "EventCount": 3,
    "Latitude": 43.0346,
    "Longitude": -83.7217
  },
  {
    "Date": "2025-03-28",
    "Location": "Frederick, MD",
    "Host": "Red Huskies",
    "TrialTypes": "ELT-P, ELT, ELT-S",
    "EventCount": 3,
    "Latitude": 39.4452,
    "Longitude": -77.4528
  },
  {
    "Date": "2025-03-28",
    "Location": "Grand Junction, CO",
    "Host": "Mountain Dogs, LLC",
    "TrialTypes": "NW3, L1C, NW2, NW1",
    "EventCount": 4,
    "Latitude": 39.0245,
    "Longitude": -108.5954
  },
  {
    "Date": "2025-03-28",
    "Location": "Salem, OR",
    "Host": "Kristina Leipzig, Doglandia LLC and Carol Forsberg",
    "TrialTypes": "ELT-S",
    "EventCount": 1,
    "Latitude": 44.9091,
    "Longitude": -123.0011
  },
  {
    "Date": "2025-03-28",
    "Location": "Shady Hills, FL",
    "Host": "Hoppin’ in the Hills",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 28.4133,
    "Longitude": -82.5894
  },
  {
    "Date": "2025-03-29",
    "Location": "Clinton, WI",
    "Host": "George and Shannon Carpenter",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 42.5819,
    "Longitude": -88.8808
  },
  {
    "Date": "2025-03-29",
    "Location": "Gilbertsville, PA",
    "Host": "Sniff Sniff Hooray",
    "TrialTypes": "NW2, ELT",
    "EventCount": 2,
    "Latitude": 40.2998,
    "Longitude": -75.6411
  },
  {
    "Date": "2025-03-29",
    "Location": "Goleta, CA",
    "Host": "All Fur Fun",
    "TrialTypes": "ELT-P, NW3",
    "EventCount": 2,
    "Latitude": 34.3865,
    "Longitude": -119.7921
  },
  {
    "Date": "2025-03-29",
    "Location": "Kennett Square, PA",
    "Host": "The Sniffing Hound",
    "TrialTypes": "ELT-S, ELT",
    "EventCount": 2,
    "Latitude": 39.8777,
    "Longitude": -75.7208
  },
  {
    "Date": "2025-03-29",
    "Location": "LeRoy, IL",
    "Host": "Kudos for Canines",
    "TrialTypes": "NW3, L1C, L2I",
    "EventCount": 3,
    "Latitude": 42.4461,
    "Longitude": -88.7381
  },
  {
    "Date": "2025-03-29",
    "Location": "Olathe, KS",
    "Host": "Brookside Pet Training Studio for Dogs",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 38.8538,
    "Longitude": -94.8141
  },
  {
    "Date": "2025-03-30",
    "Location": "East Windsor, CT",
    "Host": "Lucky Dog Events",
    "TrialTypes": "L2V, NW2, NW3",
    "EventCount": 3,
    "Latitude": 41.9218,
    "Longitude": -72.6298
  },
  {
    "Date": "2025-04-03",
    "Location": "Alpharetta, GA",
    "Host": "Georgia Nosework",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 34.0687,
    "Longitude": -84.3215
  },
  {
    "Date": "2025-04-04",
    "Location": "Easton, MD",
    "Host": "Fair Play Labradors",
    "TrialTypes": "SMT, L1V, L2V",
    "EventCount": 3,
    "Latitude": 38.815,
    "Longitude": -76.1135
  },
  {
    "Date": "2025-04-05",
    "Location": "Genoa, IL",
    "Host": "Common Scents K9 Scent Work Club of Elgin",
    "TrialTypes": "NW2, NW3",
    "EventCount": 2,
    "Latitude": 42.056,
    "Longitude": -88.7065
  },
  {
    "Date": "2025-04-05",
    "Location": "Kittanning, PA",
    "Host": "Steel City Nosework, LLC",
    "TrialTypes": "ELT, ELT-S, NW2",
    "EventCount": 3,
    "Latitude": 40.8196,
    "Longitude": -79.5109
  },
  {
    "Date": "2025-04-05",
    "Location": "Maple Falls, WA",
    "Host": "Nose Work Magic",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 48.9293,
    "Longitude": -122.0822
  },
  {
    "Date": "2025-04-05",
    "Location": "North Java, NY",
    "Host": "Do Over Dog Training",
    "TrialTypes": "ELT-S, L2C, L3E",
    "EventCount": 3,
    "Latitude": 42.6634,
    "Longitude": -78.3492
  },
  {
    "Date": "2025-04-05",
    "Location": "Somis, CA",
    "Host": "Pink Biscuit K9s",
    "TrialTypes": "ELT, ELT-S, NW1",
    "EventCount": 3,
    "Latitude": 34.2219,
    "Longitude": -119.0245
  },
  {
    "Date": "2025-04-05",
    "Location": "Tucson, AZ",
    "Host": "Patience Unlimited Professional Dog Training",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 32.2158,
    "Longitude": -111.0198
  },
  {
    "Date": "2025-04-05",
    "Location": "Woodstock, IL",
    "Host": "Northwest Obedience Club Inc.",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 42.3015,
    "Longitude": -88.4127
  },
  {
    "Date": "2025-04-11",
    "Location": "Sequim, WA",
    "Host": "Sarah Becker, Sea Change Canine LLC & Carol Forsberg",
    "TrialTypes": "NW2, NW1",
    "EventCount": 2,
    "Latitude": 48.0682,
    "Longitude": -123.0862
  },
  {
    "Date": "2025-04-12",
    "Location": "Auburn, WA",
    "Host": "Northwest K9 Sniffers",
    "TrialTypes": "NW3, L1C, L1E",
    "EventCount": 3,
    "Latitude": 47.2935,
    "Longitude": -122.2525
  },
  {
    "Date": "2025-04-12",
    "Location": "Boone, IA",
    "Host": "KBP Dog Training",
    "TrialTypes": "ELT, NW2",
    "EventCount": 2,
    "Latitude": 41.9755,
    "Longitude": -93.886
  },
  {
    "Date": "2025-04-12",
    "Location": "Burton, OH",
    "Host": "Barns And Noses, LLC",
    "TrialTypes": "ELT, ELT-S, NW1",
    "EventCount": 3,
    "Latitude": 41.4931,
    "Longitude": -81.145
  },
  {
    "Date": "2025-04-12",
    "Location": "Carlisle, PA",
    "Host": "Nose-It-All, LLC",
    "TrialTypes": "ELT, ELT-S, L2E",
    "EventCount": 3,
    "Latitude": 40.2297,
    "Longitude": -77.1948
  },
  {
    "Date": "2025-04-12",
    "Location": "Laramie, WY",
    "Host": "Mountain Dogs, LLC",
    "TrialTypes": "ELT, NW3, ELT-S, NW2",
    "EventCount": 4,
    "Latitude": 41.301,
    "Longitude": -105.639
  },
  {
    "Date": "2025-04-12",
    "Location": "Michigan City, IN",
    "Host": "Indiana Scentwork",
    "TrialTypes": "NW3, ELT-S, NW2",
    "EventCount": 3,
    "Latitude": 41.7122,
    "Longitude": -86.8638
  },
  {
    "Date": "2025-04-12",
    "Location": "Peekskill, NY",
    "Host": "For the Love of Dogs NY, LLC",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 41.2701,
    "Longitude": -73.9657
  },
  {
    "Date": "2025-04-12",
    "Location": "Rhinebeck, NY",
    "Host": "Top Notch Dogs, LLC",
    "TrialTypes": "ELT, L1C, L2C",
    "EventCount": 3,
    "Latitude": 41.9671,
    "Longitude": -73.9167
  },
  {
    "Date": "2025-04-12",
    "Location": "Starke, FL",
    "Host": "River Poodles Training, LLC",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 29.9292,
    "Longitude": -82.1385
  },
  {
    "Date": "2025-04-14",
    "Location": "Sacramento, CA",
    "Host": "Two Nosey Girls",
    "TrialTypes": "L2E, L3E, ELT",
    "EventCount": 3,
    "Latitude": 38.5314,
    "Longitude": -121.4703
  },
  {
    "Date": "2025-04-18",
    "Location": "Asheboro, NC",
    "Host": "K9 Nose Adventures, LLC",
    "TrialTypes": "ELT, NW3, ELT-S, L2C",
    "EventCount": 4,
    "Latitude": 35.6733,
    "Longitude": -79.8087
  },
  {
    "Date": "2025-04-18",
    "Location": "Grand Junction, CO",
    "Host": "Mountain Dogs, LLC",
    "TrialTypes": "ELT, NW3, NW1, NW2",
    "EventCount": 4,
    "Latitude": 39.0811,
    "Longitude": -108.5741
  },
  {
    "Date": "2025-04-18",
    "Location": "Palmer, MA",
    "Host": "HeavenScent Sniffers",
    "TrialTypes": "ELT, NW3, NW1, NW2",
    "EventCount": 4,
    "Latitude": 42.16,
    "Longitude": -72.3097
  },
  {
    "Date": "2025-04-18",
    "Location": "Rochester, NY",
    "Host": "Tami Sullivan",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 43.1193,
    "Longitude": -77.6425
  },
  {
    "Date": "2025-04-19",
    "Location": "Brooksville, FL",
    "Host": "Hoppin’ in the Hills",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 28.5086,
    "Longitude": -82.3668
  },
  {
    "Date": "2025-04-19",
    "Location": "Kunkletown, PA",
    "Host": "Paws n' Sniff",
    "TrialTypes": "NW3, L3E, ELT-S",
    "EventCount": 3,
    "Latitude": 40.8627,
    "Longitude": -75.4595
  },
  {
    "Date": "2025-04-24",
    "Location": "Concord, CA",
    "Host": "The Bay Team",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 37.9367,
    "Longitude": -122.0631
  },
  {
    "Date": "2025-04-25",
    "Location": "Eagan, MN",
    "Host": "St Paul Dog Training Club",
    "TrialTypes": "ELT, NW2, L2C, L3I",
    "EventCount": 4,
    "Latitude": 44.8388,
    "Longitude": -93.2087
  },
  {
    "Date": "2025-04-26",
    "Location": "Decatur, GA",
    "Host": "Right Choice Dog Training LLC",
    "TrialTypes": "L1C, L1I",
    "EventCount": 2,
    "Latitude": 30.922,
    "Longitude": -84.5943
  },
  {
    "Date": "2025-04-26",
    "Location": "Ellicottville, NY",
    "Host": "Do Over Dog Training",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 42.2907,
    "Longitude": -78.6548
  },
  {
    "Date": "2025-04-26",
    "Location": "FT. Pierce, FL",
    "Host": "Obedience Training Club of Palm Beach County",
    "TrialTypes": "L1E, NW2, NW1, L1C",
    "EventCount": 4,
    "Latitude": 27.4914,
    "Longitude": -80.3459
  },
  {
    "Date": "2025-04-26",
    "Location": "Greenfield, WI",
    "Host": "Loving Paws Dog Training LLC",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 42.9123,
    "Longitude": -88.024
  },
  {
    "Date": "2025-04-26",
    "Location": "Hammond, LA",
    "Host": "Dog Gone Right",
    "TrialTypes": "NW1, NW2, ELT",
    "EventCount": 3,
    "Latitude": 30.4922,
    "Longitude": -90.4477
  },
  {
    "Date": "2025-04-26",
    "Location": "Kingston, NH",
    "Host": "The Big Sniff, LLC",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 42.9645,
    "Longitude": -71.0979
  },
  {
    "Date": "2025-04-26",
    "Location": "Lyons, OR",
    "Host": "Canine Discovery Corps",
    "TrialTypes": "L1I, L2C, ELT",
    "EventCount": 3,
    "Latitude": 44.7836,
    "Longitude": -122.5749
  },
  {
    "Date": "2025-04-26",
    "Location": "Newtown, PA",
    "Host": "K9 Nosen Around, LLC",
    "TrialTypes": "L1V, NW1, L2V, NW2",
    "EventCount": 4,
    "Latitude": 40.1915,
    "Longitude": -74.9716
  },
  {
    "Date": "2025-04-26",
    "Location": "Northampton, MA",
    "Host": "Lucky Dog Events",
    "TrialTypes": "ELT-P, ELT-S, L1C",
    "EventCount": 3,
    "Latitude": 42.3547,
    "Longitude": -72.6689
  },
  {
    "Date": "2025-04-26",
    "Location": "Ocoee, TN",
    "Host": "Camelot Shepherds, Inc.",
    "TrialTypes": "NW1, NW2, NW3",
    "EventCount": 3,
    "Latitude": 35.0879,
    "Longitude": -84.6873
  },
  {
    "Date": "2025-04-26",
    "Location": "Red Feather Lakes, CO",
    "Host": "Beyond Elevation K9",
    "TrialTypes": "NW2, NW3",
    "EventCount": 2,
    "Latitude": 40.8085,
    "Longitude": -105.535
  },
  {
    "Date": "2025-04-26",
    "Location": "Traverse City, MI",
    "Host": "Every Dog Nosework",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 44.7667,
    "Longitude": -85.5977
  },
  {
    "Date": "2025-04-26",
    "Location": "West Friendship, MD",
    "Host": "Red Huskies",
    "TrialTypes": "NW1, NW2, L2V, L1C",
    "EventCount": 4,
    "Latitude": 39.2656,
    "Longitude": -76.9413
  },
  {
    "Date": "2025-05-01",
    "Location": "Gainesville, GA",
    "Host": "Georgia Nosework",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 34.2539,
    "Longitude": -83.8378
  },
  {
    "Date": "2025-05-02",
    "Location": "Faribault, MN",
    "Host": "St Paul Dog Training Club",
    "TrialTypes": "NW3, ELT-P, L3E, L3C",
    "EventCount": 4,
    "Latitude": 43.6967,
    "Longitude": -93.9359
  },
  {
    "Date": "2025-05-02",
    "Location": "Nyack, NY",
    "Host": "Waggin Work",
    "TrialTypes": "NW3, ELT, ELT-S",
    "EventCount": 3,
    "Latitude": 41.1009,
    "Longitude": -73.9055
  },
  {
    "Date": "2025-05-03",
    "Location": "Alexis, IL",
    "Host": "Kudos for Canines",
    "TrialTypes": "NW3, ELT-P",
    "EventCount": 2,
    "Latitude": 41.0244,
    "Longitude": -90.5357
  },
  {
    "Date": "2025-05-03",
    "Location": "Ashby, MA",
    "Host": "Carolyn Barney dba Dogs!",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 42.7061,
    "Longitude": -71.8636
  },
  {
    "Date": "2025-05-03",
    "Location": "Columbus, MT",
    "Host": "Canine Connection",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 45.6728,
    "Longitude": -109.2597
  },
  {
    "Date": "2025-05-03",
    "Location": "Gray Court, SC",
    "Host": "Foothills Canine Academy, LLC",
    "TrialTypes": "L1V, NW1, NW3",
    "EventCount": 3,
    "Latitude": 34.5692,
    "Longitude": -82.1465
  },
  {
    "Date": "2025-05-03",
    "Location": "Redwood City, CA",
    "Host": "B. L. McMutts",
    "TrialTypes": "NW2, NW1",
    "EventCount": 2,
    "Latitude": 37.4648,
    "Longitude": -122.1909
  },
  {
    "Date": "2025-05-03",
    "Location": "Sandy, OR",
    "Host": "Trust Your Dog K9 Events",
    "TrialTypes": "NW2, NW3",
    "EventCount": 2,
    "Latitude": 45.383,
    "Longitude": -122.2697
  },
  {
    "Date": "2025-05-03",
    "Location": "Santa Paula, CA",
    "Host": "Pink Biscuit K9s",
    "TrialTypes": "ELT, NW1, NW2",
    "EventCount": 3,
    "Latitude": 34.3768,
    "Longitude": -119.0689
  },
  {
    "Date": "2025-05-03",
    "Location": "White Salmon, WA",
    "Host": "Trisha Thompson and Sharon Smith",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 45.7044,
    "Longitude": -121.4992
  },
  {
    "Date": "2025-05-09",
    "Location": "South Sterling, PA",
    "Host": "Paws n' Sniff",
    "TrialTypes": "L3C, L2I, NW2",
    "EventCount": 3,
    "Latitude": 41.2467,
    "Longitude": -75.3371
  },
  {
    "Date": "2025-05-09",
    "Location": "Warwick, NY",
    "Host": "Top Notch Dogs, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 41.232,
    "Longitude": -74.3688
  },
  {
    "Date": "2025-05-10",
    "Location": "Alexander, NY",
    "Host": "Do Over Dog Training",
    "TrialTypes": "L1V, L2I, L1C, L3V",
    "EventCount": 4,
    "Latitude": 42.8554,
    "Longitude": -78.2793
  },
  {
    "Date": "2025-05-10",
    "Location": "Denton, MD",
    "Host": "Fair Play Labradors",
    "TrialTypes": "NW3, ELT-S",
    "EventCount": 2,
    "Latitude": 38.8552,
    "Longitude": -75.8133
  },
  {
    "Date": "2025-05-10",
    "Location": "Poland Springs, ME",
    "Host": "Virginia Howe",
    "TrialTypes": "NW2, ELT",
    "EventCount": 2,
    "Latitude": 44.0398,
    "Longitude": -70.3867
  },
  {
    "Date": "2025-05-10",
    "Location": "Rainier, WA",
    "Host": "Rachelle Bailey-Austin/About Face K9 Academy & Dorothy Turley/Let's Talk Dogs, LLC",
    "TrialTypes": "ELT-S, NW2",
    "EventCount": 2,
    "Latitude": 46.9127,
    "Longitude": -122.7212
  },
  {
    "Date": "2025-05-10",
    "Location": "Santa Barbara, CA",
    "Host": "All Fur Fun",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 34.4113,
    "Longitude": -119.6962
  },
  {
    "Date": "2025-05-13",
    "Location": "Paso Robles, CA",
    "Host": "Gentle Touch Pet Training",
    "TrialTypes": "L2C, NW1",
    "EventCount": 2,
    "Latitude": 35.6228,
    "Longitude": -120.6984
  },
  {
    "Date": "2025-05-16",
    "Location": "Montrose, CO",
    "Host": "Mountain Dogs, LLC",
    "TrialTypes": "ELT, NW3, ELT-P",
    "EventCount": 3,
    "Latitude": 38.4711,
    "Longitude": -107.8333
  },
  {
    "Date": "2025-05-16",
    "Location": "Watsonville, CA",
    "Host": "CalCoastal Dog Owners Group",
    "TrialTypes": "ELT-S, L2C, L3C",
    "EventCount": 3,
    "Latitude": 36.9196,
    "Longitude": -121.7147
  },
  {
    "Date": "2025-05-17",
    "Location": "Burien, WA",
    "Host": "Northwest K9 Sniffers",
    "TrialTypes": "ELT, L2V, L2I",
    "EventCount": 3,
    "Latitude": 47.4664,
    "Longitude": -122.3321
  },
  {
    "Date": "2025-05-17",
    "Location": "Cobleskill, NY",
    "Host": "The Brainy Canine",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 42.663,
    "Longitude": -74.482
  },
  {
    "Date": "2025-05-17",
    "Location": "Emmitsburg, MD",
    "Host": "Red Huskies",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 39.6575,
    "Longitude": -77.3485
  },
  {
    "Date": "2025-05-17",
    "Location": "Forest Junction, WI",
    "Host": "N.E.W K9 Scent Work LLC",
    "TrialTypes": "L1C, NW1, NW2",
    "EventCount": 3,
    "Latitude": 44.1977,
    "Longitude": -88.1431
  },
  {
    "Date": "2025-05-17",
    "Location": "Norton, MA",
    "Host": "Dogs Make Scents",
    "TrialTypes": "NW3, NW1",
    "EventCount": 2,
    "Latitude": 41.965,
    "Longitude": -71.197
  },
  {
    "Date": "2025-05-17",
    "Location": "Peru, MA",
    "Host": "Lucky Dog Events",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 42.3931,
    "Longitude": -73.0012
  },
  {
    "Date": "2025-05-17",
    "Location": "Valley Forge, PA",
    "Host": "Sniff Sniff Hooray",
    "TrialTypes": "NW1, ELT",
    "EventCount": 2,
    "Latitude": 40.1409,
    "Longitude": -75.4901
  },
  {
    "Date": "2025-05-23",
    "Location": "La Jolla, CA",
    "Host": "Anita Cheesman and Jessica Koester",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 32.8934,
    "Longitude": -117.2193
  },
  {
    "Date": "2025-05-24",
    "Location": "Altamont , NY",
    "Host": "My Dog Smells LLC",
    "TrialTypes": "ELT, NW2",
    "EventCount": 2,
    "Latitude": 42.7115,
    "Longitude": -74.0768
  },
  {
    "Date": "2025-05-24",
    "Location": "Batavia, NY",
    "Host": "Do Over Dog Training",
    "TrialTypes": "ELT-P, L1I, L3I",
    "EventCount": 3,
    "Latitude": 43.0074,
    "Longitude": -78.1563
  },
  {
    "Date": "2025-05-24",
    "Location": "Lancaster, PA",
    "Host": "Nose-It-All, LLC",
    "TrialTypes": "L3I, NW2, ELT",
    "EventCount": 3,
    "Latitude": 40.0657,
    "Longitude": -76.3256
  },
  {
    "Date": "2025-05-24",
    "Location": "Norwich , CT",
    "Host": "For the Love of Dogs NY LLC",
    "TrialTypes": "ELT-S, NW2, NW3, ELT",
    "EventCount": 4,
    "Latitude": 41.508,
    "Longitude": -72.0614
  },
  {
    "Date": "2025-05-24",
    "Location": "Rockaway, NJ",
    "Host": "Shamrock Pot of Gold K9 Scenter",
    "TrialTypes": "NW3, ELT-S, NW1, ELT-P",
    "EventCount": 4,
    "Latitude": 40.869,
    "Longitude": -74.5388
  },
  {
    "Date": "2025-05-24",
    "Location": "Waukesha , WI",
    "Host": "Think Pawsitive Dog Training",
    "TrialTypes": "NW1, L1V, L1C",
    "EventCount": 3,
    "Latitude": 43.0912,
    "Longitude": -88.3434
  },
  {
    "Date": "2025-05-24",
    "Location": "Welches, OR",
    "Host": "Trust Your Dog K9 Events",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 45.3774,
    "Longitude": -121.9724
  },
  {
    "Date": "2025-05-29",
    "Location": "Bayfield, CO",
    "Host": "Wag Between Barks",
    "TrialTypes": "ELT-S, ELT, NW3",
    "EventCount": 3,
    "Latitude": 37.2493,
    "Longitude": -107.6303
  },
  {
    "Date": "2025-05-30",
    "Location": "Honesdale, PA",
    "Host": "Your Dog's Place, LLC",
    "TrialTypes": "NW3, ELT, ELT-S, NW2",
    "EventCount": 4,
    "Latitude": 41.5917,
    "Longitude": -75.2923
  },
  {
    "Date": "2025-05-30",
    "Location": "Moline, IL",
    "Host": "Fur Better Fur Worse Dog Training",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 41.5021,
    "Longitude": -90.5557
  },
  {
    "Date": "2025-05-31",
    "Location": "Amherst, NY",
    "Host": "Do Over Dog Training",
    "TrialTypes": "NW2, ELT-S, NW1",
    "EventCount": 3,
    "Latitude": 42.9462,
    "Longitude": -78.7667
  },
  {
    "Date": "2025-05-31",
    "Location": "Columbus, MT",
    "Host": "Canine Connection",
    "TrialTypes": "L1V, NW1, NW3",
    "EventCount": 3,
    "Latitude": 45.6759,
    "Longitude": -109.2688
  },
  {
    "Date": "2025-05-31",
    "Location": "Eden Prairie, MN",
    "Host": "The K9 Nose",
    "TrialTypes": "NW1, L1I, L2I",
    "EventCount": 3,
    "Latitude": 44.8092,
    "Longitude": -93.4794
  },
  {
    "Date": "2025-05-31",
    "Location": "Napa, CA",
    "Host": "Napa Valley Dog Training Club",
    "TrialTypes": "NW2, NW1",
    "EventCount": 2,
    "Latitude": 38.5166,
    "Longitude": -122.2886
  },
  {
    "Date": "2025-05-31",
    "Location": "New Wilmington, PA",
    "Host": "Steel City Nosework, LLC",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 41.1199,
    "Longitude": -80.359
  },
  {
    "Date": "2025-05-31",
    "Location": "North Manchester, IN",
    "Host": "2 Nose You Is 2 Loves You",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 41.0487,
    "Longitude": -85.7434
  },
  {
    "Date": "2025-06-06",
    "Location": "Pueblo, CO",
    "Host": "Mountain Dogs, LLC",
    "TrialTypes": "SMT, ELT",
    "EventCount": 2,
    "Latitude": 38.2354,
    "Longitude": -104.5697
  },
  {
    "Date": "2025-06-06",
    "Location": "Winsted, CT",
    "Host": "Waggin’ Work",
    "TrialTypes": "ELT, NW2, L2C",
    "EventCount": 3,
    "Latitude": 41.9583,
    "Longitude": -73.0386
  },
  {
    "Date": "2025-06-07",
    "Location": "Clancy, MT",
    "Host": "Nosework Breakfast Club",
    "TrialTypes": "NW2, NW3",
    "EventCount": 2,
    "Latitude": 46.4719,
    "Longitude": -111.9648
  },
  {
    "Date": "2025-06-07",
    "Location": "Cumming, GA",
    "Host": "Georgia Nosework",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 34.2325,
    "Longitude": -84.1174
  },
  {
    "Date": "2025-06-07",
    "Location": "Davenport, IA",
    "Host": "Fur Better Fur Worse Dog Training",
    "TrialTypes": "ELT-S, NW2, NW1",
    "EventCount": 3,
    "Latitude": 41.4817,
    "Longitude": -90.6204
  },
  {
    "Date": "2025-06-07",
    "Location": "Enterprise, OR",
    "Host": "Country K9 Nosework, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 45.4745,
    "Longitude": -117.2286
  },
  {
    "Date": "2025-06-07",
    "Location": "Grants Pass, OR",
    "Host": "Nose Work Detectives",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 42.4243,
    "Longitude": -123.3715
  },
  {
    "Date": "2025-06-07",
    "Location": "Meadowbrook, PA",
    "Host": "Patricia Grassey",
    "TrialTypes": "NW1, NW2, ELT-S, ELT",
    "EventCount": 4,
    "Latitude": 40.0737,
    "Longitude": -75.0856
  },
  {
    "Date": "2025-06-07",
    "Location": "Palmyra, VA",
    "Host": "Your Dog Knows, LLC",
    "TrialTypes": "NW1, L1I",
    "EventCount": 2,
    "Latitude": 37.8605,
    "Longitude": -78.3023
  },
  {
    "Date": "2025-06-07",
    "Location": "Wrightstown, WI",
    "Host": "N.E.W. K9 Scent Work, LLC",
    "TrialTypes": "ELT-P, L2C, L3I",
    "EventCount": 3,
    "Latitude": 44.2955,
    "Longitude": -88.2054
  },
  {
    "Date": "2025-06-13",
    "Location": "Jordan, MN",
    "Host": "St Paul Dog Training Club",
    "TrialTypes": "NW3, ELT-S, L1V, L2E, L3V",
    "EventCount": 5,
    "Latitude": 44.7037,
    "Longitude": -93.6005
  },
  {
    "Date": "2025-06-14",
    "Location": "Cummington, MA",
    "Host": "Lucky Dog Events",
    "TrialTypes": "ELT-P, ELT-S, L2C",
    "EventCount": 3,
    "Latitude": 42.4523,
    "Longitude": -72.889
  },
  {
    "Date": "2025-06-14",
    "Location": "Danvers, MA",
    "Host": "Everydog, LLC",
    "TrialTypes": "L2I, NW2, NW1",
    "EventCount": 3,
    "Latitude": 42.5973,
    "Longitude": -70.9682
  },
  {
    "Date": "2025-06-14",
    "Location": "Ithaca, NY",
    "Host": "The Brainy Canine",
    "TrialTypes": "ELT-P, ELT",
    "EventCount": 2,
    "Latitude": 42.3913,
    "Longitude": -76.5311
  },
  {
    "Date": "2025-06-14",
    "Location": "Linden, MI",
    "Host": "Every Dog Nosework",
    "TrialTypes": "NW1, ELT-P",
    "EventCount": 2,
    "Latitude": 42.7654,
    "Longitude": -83.8078
  },
  {
    "Date": "2025-06-20",
    "Location": "Greeley, CO",
    "Host": "Beyond Elevation K9",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 40.4242,
    "Longitude": -104.708
  },
  {
    "Date": "2025-06-20",
    "Location": "San Luis Obispo, CA",
    "Host": "Central Coast Nosework Club of California, Inc.",
    "TrialTypes": "NW2, ELT",
    "EventCount": 2,
    "Latitude": 35.3603,
    "Longitude": -120.391
  },
  {
    "Date": "2025-06-20",
    "Location": "Upland, CA",
    "Host": "Agile Paws Dog Sports",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 34.0689,
    "Longitude": -117.625
  },
  {
    "Date": "2025-06-20",
    "Location": "Warwick, NY",
    "Host": "For the Love of Dogs NY LLC",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 41.2228,
    "Longitude": -74.3634
  },
  {
    "Date": "2025-06-21",
    "Location": "Fayette, MO",
    "Host": "Columbia Canine Sports Center",
    "TrialTypes": "ELT, NW1, NW2",
    "EventCount": 3,
    "Latitude": 39.1479,
    "Longitude": -92.6614
  },
  {
    "Date": "2025-06-21",
    "Location": "Inver Grove Heights, MN",
    "Host": "Outside The Box Dog Training, LLC",
    "TrialTypes": "L1C, NW2, ELT",
    "EventCount": 3,
    "Latitude": 44.8002,
    "Longitude": -93.0861
  },
  {
    "Date": "2025-06-21",
    "Location": "Jefferson, WI",
    "Host": "Think Pawsitive Dog Training",
    "TrialTypes": "NW2",
    "EventCount": 1,
    "Latitude": 43.029,
    "Longitude": -88.7863
  },
  {
    "Date": "2025-06-21",
    "Location": "Toledo, OH",
    "Host": "Robin Ford Dog Training, LLC",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 41.6164,
    "Longitude": -83.4956
  },
  {
    "Date": "2025-06-21",
    "Location": "Woodstock, GA",
    "Host": "Georgia Nosework LLC",
    "TrialTypes": "NW3, L2C, NW1",
    "EventCount": 3,
    "Latitude": 34.0778,
    "Longitude": -84.5281
  },
  {
    "Date": "2025-06-25",
    "Location": "Kenai, AK",
    "Host": "Peninsula Dog Obedience Group",
    "TrialTypes": "NW1, NW2, NW3, ELT",
    "EventCount": 4,
    "Latitude": 60.5917,
    "Longitude": -151.2922
  },
  {
    "Date": "2025-06-28",
    "Location": "Delran, NJ",
    "Host": "K9 InScentives",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 40.0458,
    "Longitude": -74.919
  },
  {
    "Date": "2025-06-28",
    "Location": "Deming, WA",
    "Host": "Nose Work Magic",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 48.8547,
    "Longitude": -122.286
  },
  {
    "Date": "2025-06-28",
    "Location": "Kenosha, WI",
    "Host": "Loving Paws Dog Training LLC",
    "TrialTypes": "NW3, NW1",
    "EventCount": 2,
    "Latitude": 42.632,
    "Longitude": -87.7941
  },
  {
    "Date": "2025-06-28",
    "Location": "Somers, CT",
    "Host": "HeavenScent Sniffers",
    "TrialTypes": "ELT, L1V, NW1",
    "EventCount": 3,
    "Latitude": 42.0114,
    "Longitude": -72.4155
  },
  {
    "Date": "2025-06-28",
    "Location": "St. Paul, MN",
    "Host": "Bark and Bond LLC",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 44.9333,
    "Longitude": -93.1318
  },
  {
    "Date": "2025-06-28",
    "Location": "Stevenson, WA",
    "Host": "Sharon Smith",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 45.6615,
    "Longitude": -121.8494
  },
  {
    "Date": "2025-07-04",
    "Location": "Huntington, MA",
    "Host": "Shamrock Pot Of Gold K9 Scenter",
    "TrialTypes": "ELT, NW3, L2I, ELT-S",
    "EventCount": 4,
    "Latitude": 42.2134,
    "Longitude": -72.8387
  },
  {
    "Date": "2025-07-05",
    "Location": "Delran, NJ",
    "Host": "Ev-ry Earthdog, LLC",
    "TrialTypes": "NW3, NW1, NW2, ELT",
    "EventCount": 4,
    "Latitude": 40.0595,
    "Longitude": -74.9381
  },
  {
    "Date": "2025-07-11",
    "Location": "Leadville, CO",
    "Host": "Mountain Dogs LLC",
    "TrialTypes": "ELT, NW3, ELT-S, NW2",
    "EventCount": 4,
    "Latitude": 39.2082,
    "Longitude": -106.3284
  },
  {
    "Date": "2025-07-12",
    "Location": "Brainerd, MN",
    "Host": "Nose 2 Tail Dog Training LLC",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 46.3392,
    "Longitude": -94.2048
  },
  {
    "Date": "2025-07-12",
    "Location": "Livonia, MI",
    "Host": "Every Dog Nosework",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 42.371,
    "Longitude": -83.3496
  },
  {
    "Date": "2025-07-18",
    "Location": "Leadville, CO",
    "Host": "Mountain Dogs, LLC",
    "TrialTypes": "NW3, NW1, NW2, L1C, L1I",
    "EventCount": 5,
    "Latitude": 39.2051,
    "Longitude": -106.2477
  },
  {
    "Date": "2025-07-19",
    "Location": "Dunmore, PA",
    "Host": "Your Dog's Place, LLC",
    "TrialTypes": "ELT-S, NW1, L1C",
    "EventCount": 3,
    "Latitude": 41.4594,
    "Longitude": -75.6308
  },
  {
    "Date": "2025-07-19",
    "Location": "Fayette , MO",
    "Host": "Columbia Canine Sports Center",
    "TrialTypes": "NW3, L1C, L1I",
    "EventCount": 3,
    "Latitude": 39.196,
    "Longitude": -92.655
  },
  {
    "Date": "2025-07-19",
    "Location": "Houlton, WI",
    "Host": "Gretchen Hofheins-Wackerfuss",
    "TrialTypes": "NW1, ELT-S, ELT-P",
    "EventCount": 3,
    "Latitude": 45.0587,
    "Longitude": -92.7502
  },
  {
    "Date": "2025-07-19",
    "Location": "Walpole, MA",
    "Host": "MasterPeace Dog Training",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 42.1635,
    "Longitude": -71.2995
  },
  {
    "Date": "2025-07-21",
    "Location": "Montgomery, NY",
    "Host": "For the Love of Dogs NY LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 42.8835,
    "Longitude": -74.3611
  },
  {
    "Date": "2025-08-02",
    "Location": "Altamont, IL",
    "Host": "Kudos for Canines, LLC",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 39.048,
    "Longitude": -88.7512
  },
  {
    "Date": "2025-08-02",
    "Location": "Anchorage, AK",
    "Host": "Alaska Dog Sports, LLC",
    "TrialTypes": "NW3, NW2, NW1",
    "EventCount": 3,
    "Latitude": 61.2121,
    "Longitude": -149.8824
  },
  {
    "Date": "2025-08-02",
    "Location": "Bettendorf, IA",
    "Host": "Fur Better Fur Worse Dog Training",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 41.5523,
    "Longitude": -90.526
  },
  {
    "Date": "2025-08-02",
    "Location": "Jefferson, WI",
    "Host": "Think Pawsitive Dog Training LLC",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 42.983,
    "Longitude": -88.7884
  },
  {
    "Date": "2025-08-02",
    "Location": "Pillager, MN",
    "Host": "Nose 2 Tail Dog Training, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 46.3346,
    "Longitude": -94.4492
  },
  {
    "Date": "2025-08-02",
    "Location": "Red Lodge, MT",
    "Host": "Canine Connection",
    "TrialTypes": "L1I, ELT-S, ELT",
    "EventCount": 3,
    "Latitude": 45.1954,
    "Longitude": -109.2568
  },
  {
    "Date": "2025-08-02",
    "Location": "Rochester, NY",
    "Host": "Suzan Tessier",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 43.148,
    "Longitude": -77.6244
  },
  {
    "Date": "2025-08-11",
    "Location": "Cambria, CA",
    "Host": "Gentle Touch Pet Training",
    "TrialTypes": "L1C, L2I, ELT",
    "EventCount": 3,
    "Latitude": 35.5063,
    "Longitude": -121.0522
  },
  {
    "Date": "2025-08-15",
    "Location": "Huntington Beach, CA",
    "Host": "JavaK9s, LLC",
    "TrialTypes": "ELT-P, L1C, L1I",
    "EventCount": 3,
    "Latitude": 33.6998,
    "Longitude": -117.9589
  },
  {
    "Date": "2025-08-16",
    "Location": "Colesville , MD",
    "Host": "Red Huskies",
    "TrialTypes": "L3C, ELT-S, NW2, ELT",
    "EventCount": 4,
    "Latitude": 39.1215,
    "Longitude": -77.049
  },
  {
    "Date": "2025-08-16",
    "Location": "Mount Kisco, NY",
    "Host": "For the Love of Dogs, LLC",
    "TrialTypes": "L2I, NW2, L1I, NW1",
    "EventCount": 4,
    "Latitude": 41.2517,
    "Longitude": -73.7183
  },
  {
    "Date": "2025-08-16",
    "Location": "Reedsport, OR",
    "Host": "Kiddy Christie",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 43.6634,
    "Longitude": -124.0803
  },
  {
    "Date": "2025-08-22",
    "Location": "Chelsea, MI",
    "Host": "Force Free Dale, LLC",
    "TrialTypes": "NW3, NW2, NW1",
    "EventCount": 3,
    "Latitude": 42.2977,
    "Longitude": -84.0171
  },
  {
    "Date": "2025-08-23",
    "Location": "Gervais, OR",
    "Host": "Helix Fairweather & Doglandia, LLC",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 45.1039,
    "Longitude": -122.8547
  },
  {
    "Date": "2025-08-23",
    "Location": "Johnstown, NY",
    "Host": "My Dog Smells, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 42.9862,
    "Longitude": -74.3736
  },
  {
    "Date": "2025-08-23",
    "Location": "Tyngsborough, MA",
    "Host": "Spot-On K9 Coaching",
    "TrialTypes": "NW3, L1C, L1I",
    "EventCount": 3,
    "Latitude": 42.6896,
    "Longitude": -71.4014
  },
  {
    "Date": "2025-08-29",
    "Location": "Bridger, MT",
    "Host": "Canine Connection",
    "TrialTypes": "NW1, L2I, NW3",
    "EventCount": 3,
    "Latitude": 45.2854,
    "Longitude": -108.9255
  },
  {
    "Date": "2025-08-30",
    "Location": "Eliot, ME",
    "Host": "McLean Pups, LLC",
    "TrialTypes": "L1V, L1E",
    "EventCount": 2,
    "Latitude": 43.1267,
    "Longitude": -70.7661
  },
  {
    "Date": "2025-08-30",
    "Location": "Fort Worth, TX",
    "Host": "North Texas Nosework Club",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 32.7839,
    "Longitude": -97.3203
  },
  {
    "Date": "2025-08-30",
    "Location": "Pomfret Center, CT",
    "Host": "HeavenScent Sniffers",
    "TrialTypes": "NW3, NW2, NW1",
    "EventCount": 3,
    "Latitude": 41.8638,
    "Longitude": -71.9738
  },
  {
    "Date": "2025-08-31",
    "Location": "Helena, MT",
    "Host": "Nosework Breakfast Club",
    "TrialTypes": "NW2, NW3",
    "EventCount": 2,
    "Latitude": 46.5994,
    "Longitude": -111.9969
  },
  {
    "Date": "2025-09-05",
    "Location": "Centreville, MD",
    "Host": "Fair Play Labradors",
    "TrialTypes": "ELT, NW3, ELT-S",
    "EventCount": 3,
    "Latitude": 39.0498,
    "Longitude": -76.0942
  },
  {
    "Date": "2025-09-06",
    "Location": "Dunkirk, NY",
    "Host": "Do Over Dog Training",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 42.4819,
    "Longitude": -79.3829
  },
  {
    "Date": "2025-09-06",
    "Location": "Loma Mar, CA",
    "Host": "The Bay Team",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 37.2542,
    "Longitude": -122.2958
  },
  {
    "Date": "2025-09-06",
    "Location": "North Bend, WA",
    "Host": "Northwest K9 Sniffers",
    "TrialTypes": "NW2, L2E, L2C",
    "EventCount": 3,
    "Latitude": 47.4801,
    "Longitude": -121.7598
  },
  {
    "Date": "2025-09-12",
    "Location": "Frederick, MD",
    "Host": "Red Huskies",
    "TrialTypes": "NW3, ELT, ELT-S",
    "EventCount": 3,
    "Latitude": 39.4183,
    "Longitude": -77.4577
  },
  {
    "Date": "2025-09-12",
    "Location": "Honey Brook, PA",
    "Host": "Patricia Grassey",
    "TrialTypes": "ELT, ELT-S, NW3",
    "EventCount": 3,
    "Latitude": 40.1398,
    "Longitude": -75.8624
  },
  {
    "Date": "2025-09-12",
    "Location": "Lakeville, MN",
    "Host": "St Paul Dog Training Club",
    "TrialTypes": "ELT, NW2, NW1",
    "EventCount": 3,
    "Latitude": 44.6574,
    "Longitude": -93.1934
  },
  {
    "Date": "2025-09-12",
    "Location": "New Milford, PA",
    "Host": "Your Dog's Place, LLC",
    "TrialTypes": "ELT-P, ELT-S, L2V, L1E",
    "EventCount": 4,
    "Latitude": 41.9044,
    "Longitude": -75.7359
  },
  {
    "Date": "2025-09-13",
    "Location": "Ames, IA",
    "Host": "KBP Dog Training",
    "TrialTypes": "ELT-S, ELT",
    "EventCount": 2,
    "Latitude": 42.0498,
    "Longitude": -93.5863
  },
  {
    "Date": "2025-09-13",
    "Location": "Colebrook, CT",
    "Host": "For the Love of Dogs, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 42.0165,
    "Longitude": -73.0903
  },
  {
    "Date": "2025-09-13",
    "Location": "Hermosa, SD",
    "Host": "Two Paws Up Dog Training, LLC",
    "TrialTypes": "NW3, L1C, L1I",
    "EventCount": 3,
    "Latitude": 43.8673,
    "Longitude": -103.1545
  },
  {
    "Date": "2025-09-13",
    "Location": "Jefferson, GA",
    "Host": "Right Choice Dog Training, LLC",
    "TrialTypes": "L2V, NW2, ELT-S, L1C",
    "EventCount": 4,
    "Latitude": 33.0774,
    "Longitude": -82.4743
  },
  {
    "Date": "2025-09-13",
    "Location": "Pittsburgh , PA",
    "Host": "Steel City Nosework, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 40.4767,
    "Longitude": -79.9726
  },
  {
    "Date": "2025-09-15",
    "Location": "Green Lane, PA",
    "Host": "Sniff Sniff Hooray",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 40.3644,
    "Longitude": -75.5052
  },
  {
    "Date": "2025-09-19",
    "Location": "Flint, MI",
    "Host": "Every Dog Nosework",
    "TrialTypes": "NW3, ELT-S, L1C, NW2",
    "EventCount": 4,
    "Latitude": 43.0154,
    "Longitude": -83.6622
  },
  {
    "Date": "2025-09-19",
    "Location": "Fruita, CO",
    "Host": "Mountain Dogs LLC",
    "TrialTypes": "ELT, NW3, NW2",
    "EventCount": 3,
    "Latitude": 39.1603,
    "Longitude": -108.6992
  },
  {
    "Date": "2025-09-20",
    "Location": "Cumming, GA",
    "Host": "Georgia Nosework",
    "TrialTypes": "NW3, ELT-S, L2I, ELT",
    "EventCount": 4,
    "Latitude": 34.2309,
    "Longitude": -84.1468
  },
  {
    "Date": "2025-09-20",
    "Location": "Darlington, MD",
    "Host": "Firezone GS",
    "TrialTypes": "NW3, L1E, NW2",
    "EventCount": 3,
    "Latitude": 39.6163,
    "Longitude": -76.2538
  },
  {
    "Date": "2025-09-20",
    "Location": "Egg Harbor City, NJ",
    "Host": "Rotts-n-Notts Nosework, LLC",
    "TrialTypes": "NW3, L2I, NW2",
    "EventCount": 3,
    "Latitude": 39.5591,
    "Longitude": -74.6725
  },
  {
    "Date": "2025-09-20",
    "Location": "Fishkill, NY",
    "Host": "Top Notch Dogs, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 41.5004,
    "Longitude": -73.9155
  },
  {
    "Date": "2025-09-20",
    "Location": "Mesquite, TX",
    "Host": "All About The Nose",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 32.8141,
    "Longitude": -96.6136
  },
  {
    "Date": "2025-09-20",
    "Location": "Novato, CA",
    "Host": "Marin Humane",
    "TrialTypes": "NW1, NW2, NW3",
    "EventCount": 3,
    "Latitude": 38.1487,
    "Longitude": -122.5401
  },
  {
    "Date": "2025-09-20",
    "Location": "Sunriver, OR",
    "Host": "Canine Discovery Corps",
    "TrialTypes": "NW1, NW2, NW3",
    "EventCount": 3,
    "Latitude": 43.9086,
    "Longitude": -121.4362
  },
  {
    "Date": "2025-09-20",
    "Location": "Tuftonboro, NH",
    "Host": "The Big Sniff, LLC",
    "TrialTypes": "NW2, L2E, L2V",
    "EventCount": 3,
    "Latitude": 43.6783,
    "Longitude": -71.3281
  },
  {
    "Date": "2025-09-20",
    "Location": "White Salmon, WA",
    "Host": "Sharon Smith",
    "TrialTypes": "NW1, NW2, NW3",
    "EventCount": 3,
    "Latitude": 45.7343,
    "Longitude": -121.4641
  },
  {
    "Date": "2025-09-26",
    "Location": "Hockessin, DE",
    "Host": "Patricia Grassey",
    "TrialTypes": "L2E, NW2, NW1, L2I, NW3",
    "EventCount": 5,
    "Latitude": 39.7991,
    "Longitude": -75.6567
  },
  {
    "Date": "2025-09-27",
    "Location": "Copake, NY",
    "Host": "Saints2Source, LLC",
    "TrialTypes": "NW3, ELT-P, ELT",
    "EventCount": 3,
    "Latitude": 42.1471,
    "Longitude": -73.5697
  },
  {
    "Date": "2025-09-27",
    "Location": "Florissant, MO",
    "Host": "Happy Dog Concepts, LLC",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 38.7731,
    "Longitude": -90.342
  },
  {
    "Date": "2025-09-27",
    "Location": "Kilmarnock, VA",
    "Host": "Red Huskies",
    "TrialTypes": "ELT, ELT-S, NW2",
    "EventCount": 3,
    "Latitude": 37.7026,
    "Longitude": -76.3356
  },
  {
    "Date": "2025-09-27",
    "Location": "Moultonborough, NH",
    "Host": "Dogs Makes Scents",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 43.8025,
    "Longitude": -71.4114
  },
  {
    "Date": "2025-09-27",
    "Location": "Reedsport, OR",
    "Host": "Wells Creek Dog Training",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 43.7518,
    "Longitude": -124.0522
  },
  {
    "Date": "2025-09-27",
    "Location": "Waynesboro, PA",
    "Host": "Nose-It-All, LLC",
    "TrialTypes": "L3E, NW2, ELT",
    "EventCount": 3,
    "Latitude": 39.7901,
    "Longitude": -77.5834
  },
  {
    "Date": "2025-10-03",
    "Location": "Middlebury, CT",
    "Host": "For the Love of Dogs NY LLC",
    "TrialTypes": "NW3, ELT-S, ELT",
    "EventCount": 3,
    "Latitude": 41.5305,
    "Longitude": -73.1164
  },
  {
    "Date": "2025-10-04",
    "Location": "Crosslake, MN",
    "Host": "Nose 2 Tail Dog Training LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 46.6962,
    "Longitude": -94.1583
  },
  {
    "Date": "2025-10-04",
    "Location": "Nashua, NH",
    "Host": "The Big Sniff, LLC",
    "TrialTypes": "ELT, L3I, L2C",
    "EventCount": 3,
    "Latitude": 42.7966,
    "Longitude": -71.4895
  },
  {
    "Date": "2025-10-04",
    "Location": "New Paltz, NY",
    "Host": "Top Notch Dogs, LLC",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 41.7578,
    "Longitude": -74.1306
  },
  {
    "Date": "2025-10-04",
    "Location": "Smithton, PA",
    "Host": "Steel City Nosework, LLC",
    "TrialTypes": "NW2, ELT",
    "EventCount": 2,
    "Latitude": 40.1377,
    "Longitude": -79.7306
  },
  {
    "Date": "2025-10-06",
    "Location": "Monterey, CA",
    "Host": "CalCoastal Dog Owners Group",
    "TrialTypes": "ELT-S, NW1, L2I, NW2",
    "EventCount": 4,
    "Latitude": 36.2269,
    "Longitude": -121.4132
  },
  {
    "Date": "2025-10-10",
    "Location": "West Bend, WI",
    "Host": "Think Pawsitive Dog Training LLC",
    "TrialTypes": "ELT, L2C, L1E",
    "EventCount": 3,
    "Latitude": 43.4702,
    "Longitude": -88.2286
  },
  {
    "Date": "2025-10-11",
    "Location": "Bloomington, MN",
    "Host": "St Paul Dog Training Club",
    "TrialTypes": "ELT-P, ELT-S",
    "EventCount": 2,
    "Latitude": 44.8573,
    "Longitude": -93.3247
  },
  {
    "Date": "2025-10-11",
    "Location": "Colfax, IA",
    "Host": "KBP Dog Training",
    "TrialTypes": "NW1, NW2, NW3",
    "EventCount": 3,
    "Latitude": 41.6919,
    "Longitude": -93.236
  },
  {
    "Date": "2025-10-11",
    "Location": "Columbus, MT",
    "Host": "Canine Connection",
    "TrialTypes": "L1C, NW2, NW3",
    "EventCount": 3,
    "Latitude": 45.6119,
    "Longitude": -109.233
  },
  {
    "Date": "2025-10-11",
    "Location": "Durham, NC",
    "Host": "Whole Dog Institute, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 35.9584,
    "Longitude": -78.9147
  },
  {
    "Date": "2025-10-11",
    "Location": "Ferndale, WA",
    "Host": "Nose Work Magic",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 48.8899,
    "Longitude": -122.5698
  },
  {
    "Date": "2025-10-11",
    "Location": "Loveland, CO",
    "Host": "Paws 4 Thought Dog Training, LLC",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 40.3749,
    "Longitude": -105.1167
  },
  {
    "Date": "2025-10-11",
    "Location": "New City , NY",
    "Host": "Saints2Source, LLC",
    "TrialTypes": "NW2, NW3, ELT",
    "EventCount": 3,
    "Latitude": 41.1665,
    "Longitude": -74.0293
  },
  {
    "Date": "2025-10-11",
    "Location": "Occidental, CA",
    "Host": "Marin Humane",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 38.3644,
    "Longitude": -122.9767
  },
  {
    "Date": "2025-10-11",
    "Location": "Roseburg, OR",
    "Host": "Canine Discovery Corps",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 43.2198,
    "Longitude": -123.3028
  },
  {
    "Date": "2025-10-11",
    "Location": "Sedona, AZ",
    "Host": "Successful Sniffer",
    "TrialTypes": "ELT-P, ELT, NW3",
    "EventCount": 3,
    "Latitude": 34.8707,
    "Longitude": -111.7693
  },
  {
    "Date": "2025-10-17",
    "Location": "Elizabeth, CO",
    "Host": "Beyond Elevation K9",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 39.3803,
    "Longitude": -104.5641
  },
  {
    "Date": "2025-10-17",
    "Location": "Lawrenceville, GA",
    "Host": "Chestnut Hill Canine Sports",
    "TrialTypes": "NW3, L2C, NW1",
    "EventCount": 3,
    "Latitude": 33.9306,
    "Longitude": -83.9545
  },
  {
    "Date": "2025-10-17",
    "Location": "Newfoundland, PA",
    "Host": "Your Dog's Place, LLC",
    "TrialTypes": "L1V, ELT-S, L2C, L2E",
    "EventCount": 4,
    "Latitude": 41.3119,
    "Longitude": -75.2754
  },
  {
    "Date": "2025-10-18",
    "Location": "Centralia, WA",
    "Host": "Rachelle Bailey-Austin/About Face K9 Academy & Dorothy Turley/Let's Talk Dogs, LLC",
    "TrialTypes": "L3I, L2C, NW2",
    "EventCount": 3,
    "Latitude": 46.7288,
    "Longitude": -123.006
  },
  {
    "Date": "2025-10-18",
    "Location": "Delevan, NY",
    "Host": "Do Over Dog Training",
    "TrialTypes": "ELT, ELT-S, NW2",
    "EventCount": 3,
    "Latitude": 42.4437,
    "Longitude": -78.4864
  },
  {
    "Date": "2025-10-18",
    "Location": "Lafayette Hill, PA",
    "Host": "Sniff Sniff Hooray",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 40.1187,
    "Longitude": -75.255
  },
  {
    "Date": "2025-10-18",
    "Location": "Milton, NH",
    "Host": "Lucky Dog Events",
    "TrialTypes": "NW2, NW3",
    "EventCount": 2,
    "Latitude": 43.4426,
    "Longitude": -70.9646
  },
  {
    "Date": "2025-10-18",
    "Location": "Nevada City, CA",
    "Host": "Sierra Sniffing Canines",
    "TrialTypes": "L1I, L2I, ELT",
    "EventCount": 3,
    "Latitude": 39.2949,
    "Longitude": -121.0557
  },
  {
    "Date": "2025-10-18",
    "Location": "Terryville, CT",
    "Host": "Willoughby Training",
    "TrialTypes": "NW2, NW1",
    "EventCount": 2,
    "Latitude": 41.7219,
    "Longitude": -72.9914
  },
  {
    "Date": "2025-10-18",
    "Location": "Troy, VA",
    "Host": "Your Dog Knows, LLC",
    "TrialTypes": "ELT, L1V, L2V",
    "EventCount": 3,
    "Latitude": 37.9774,
    "Longitude": -78.2282
  },
  {
    "Date": "2025-10-18",
    "Location": "Watsonville, CA",
    "Host": "CalCoastal Dog Owners Group",
    "TrialTypes": "L3V, L2V, L1V",
    "EventCount": 3,
    "Latitude": 36.9468,
    "Longitude": -121.7785
  },
  {
    "Date": "2025-10-19",
    "Location": "San Martin, CA",
    "Host": "B.L. McMutts",
    "TrialTypes": "L1V, L3V",
    "EventCount": 2,
    "Latitude": 37.0447,
    "Longitude": -121.5533
  },
  {
    "Date": "2025-10-24",
    "Location": "Calhan, CO",
    "Host": "Mountain Dogs, LLC",
    "TrialTypes": "ELT, SMT",
    "EventCount": 2,
    "Latitude": 39.078,
    "Longitude": -104.2935
  },
  {
    "Date": "2025-10-24",
    "Location": "Easton, MD",
    "Host": "Fair Play Point Labradors",
    "TrialTypes": "ELT, ELT-S, L2V, L2C, L3C",
    "EventCount": 5,
    "Latitude": 38.7883,
    "Longitude": -76.0864
  },
  {
    "Date": "2025-10-24",
    "Location": "Palmyra, VA",
    "Host": "Paws Plus Training, LLC",
    "TrialTypes": "NW3, NW1, NW2, ELT-P",
    "EventCount": 4,
    "Latitude": 37.8154,
    "Longitude": -78.2392
  },
  {
    "Date": "2025-10-24",
    "Location": "Ypsilanti, MI",
    "Host": "Every Dog Nosework",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 42.2007,
    "Longitude": -83.6446
  },
  {
    "Date": "2025-10-25",
    "Location": "Auburn, WA",
    "Host": "Northwest K9 Sniffers",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 47.345,
    "Longitude": -122.2311
  },
  {
    "Date": "2025-10-25",
    "Location": "Fishkill, NY",
    "Host": "Top Notch Dogs, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 41.5281,
    "Longitude": -73.9133
  },
  {
    "Date": "2025-10-25",
    "Location": "Lyle, WA",
    "Host": "Trust Your Dog K9 Events",
    "TrialTypes": "NW3, L3I, L3C",
    "EventCount": 3,
    "Latitude": 45.7451,
    "Longitude": -121.3201
  },
  {
    "Date": "2025-10-25",
    "Location": "Niantic, IL",
    "Host": "Kudos for Canines, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 39.8278,
    "Longitude": -89.1856
  },
  {
    "Date": "2025-10-25",
    "Location": "Poland Springs, ME",
    "Host": "Virginia Howe",
    "TrialTypes": "NW1, NW3",
    "EventCount": 2,
    "Latitude": 43.997,
    "Longitude": -70.3243
  },
  {
    "Date": "2025-10-25",
    "Location": "West Friendship, MD",
    "Host": "Red Huskies",
    "TrialTypes": "NW3, NW1, L1C",
    "EventCount": 3,
    "Latitude": 39.2606,
    "Longitude": -76.9109
  },
  {
    "Date": "2025-10-27",
    "Location": "Clayton, GA",
    "Host": "Right Choice Dog Training LLC",
    "TrialTypes": "NW3, ELT, ELT-P",
    "EventCount": 3,
    "Latitude": 33.5615,
    "Longitude": -84.3746
  },
  {
    "Date": "2025-10-27",
    "Location": "Paicines, CA",
    "Host": "Two Nosey Girls",
    "TrialTypes": "NW2, ELT-P",
    "EventCount": 2,
    "Latitude": 36.7177,
    "Longitude": -121.3009
  },
  {
    "Date": "2025-10-31",
    "Location": "Cannon Falls, MN",
    "Host": "St Paul Dog Training Club",
    "TrialTypes": "SMT, NW3",
    "EventCount": 2,
    "Latitude": 44.5544,
    "Longitude": -92.9343
  },
  {
    "Date": "2025-10-31",
    "Location": "Loranger, LA",
    "Host": "Dog Gone Right",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 30.6077,
    "Longitude": -90.3607
  },
  {
    "Date": "2025-10-31",
    "Location": "Meeker, CO",
    "Host": "Mountain Dogs LLC",
    "TrialTypes": "ELT, NW3, NW1, NW2",
    "EventCount": 4,
    "Latitude": 39.9904,
    "Longitude": -107.8665
  },
  {
    "Date": "2025-10-31",
    "Location": "Scotts Mills, OR",
    "Host": "Canine Discovery Corps",
    "TrialTypes": "ELT, NW1, L3C",
    "EventCount": 3,
    "Latitude": 45.0424,
    "Longitude": -122.7016
  },
  {
    "Date": "2025-11-01",
    "Location": "Beloit, WI",
    "Host": "George Carpenter",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 42.5556,
    "Longitude": -89.0084
  },
  {
    "Date": "2025-11-01",
    "Location": "Charlton, MA",
    "Host": "HeavenScent Sniffers",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 42.1389,
    "Longitude": -71.9401
  },
  {
    "Date": "2025-11-01",
    "Location": "Kennebunkport, ME",
    "Host": "Elizabeth Dutton",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 43.3547,
    "Longitude": -70.4581
  },
  {
    "Date": "2025-11-01",
    "Location": "Mill Spring, NC",
    "Host": "Foothills Canine Academy, LLC",
    "TrialTypes": "NW1, NW2, ELT",
    "EventCount": 3,
    "Latitude": 35.2489,
    "Longitude": -82.174
  },
  {
    "Date": "2025-11-01",
    "Location": "Monkton, MD",
    "Host": "Firezone GS",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 39.6251,
    "Longitude": -76.5975
  },
  {
    "Date": "2025-11-01",
    "Location": "Wappingers Falls, NY",
    "Host": "Top Notch Dogs, LLC",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 41.6109,
    "Longitude": -73.9453
  },
  {
    "Date": "2025-11-01",
    "Location": "Woodstock, GA",
    "Host": "Georgia Nosework LLC",
    "TrialTypes": "L1C, L3I, L3C, L1I",
    "EventCount": 4,
    "Latitude": 34.0832,
    "Longitude": -84.4924
  },
  {
    "Date": "2025-11-01",
    "Location": "Yamhill, OR",
    "Host": "Nose Work Detectives",
    "TrialTypes": "ELT-S, L1C",
    "EventCount": 2,
    "Latitude": 45.2082,
    "Longitude": -123.1685
  },
  {
    "Date": "2025-11-05",
    "Location": "Ventura, CA",
    "Host": "Pink Biscuit K9s",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 34.4164,
    "Longitude": -119.1172
  },
  {
    "Date": "2025-11-07",
    "Location": "Montrose, CO",
    "Host": "Mountain Dogs LLC",
    "TrialTypes": "ELT-S, NW2, ELT",
    "EventCount": 3,
    "Latitude": 38.4974,
    "Longitude": -107.8742
  },
  {
    "Date": "2025-11-07",
    "Location": "Rancho Cucamonga , CA",
    "Host": "Agile Paws Dog Sports",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 34.1004,
    "Longitude": -117.5731
  },
  {
    "Date": "2025-11-08",
    "Location": "Coburg, OR",
    "Host": "Kiddy Christie",
    "TrialTypes": "NW1, NW2, ELT-S, L1E",
    "EventCount": 4,
    "Latitude": 44.1791,
    "Longitude": -123.0242
  },
  {
    "Date": "2025-11-08",
    "Location": "Elkhorn, WI",
    "Host": "Loving Paws Dog Training LLC",
    "TrialTypes": "ELT, NW2",
    "EventCount": 2,
    "Latitude": 42.6915,
    "Longitude": -88.5687
  },
  {
    "Date": "2025-11-08",
    "Location": "Guerneville, CA",
    "Host": "Jen Huot",
    "TrialTypes": "NW3, ELT, ELT-P",
    "EventCount": 3,
    "Latitude": 38.4876,
    "Longitude": -122.9888
  },
  {
    "Date": "2025-11-08",
    "Location": "Mays Landing, NJ",
    "Host": "Rotts-n-Notts Nosework, LLC",
    "TrialTypes": "NW3, L2E, NW2",
    "EventCount": 3,
    "Latitude": 39.4813,
    "Longitude": -74.7142
  },
  {
    "Date": "2025-11-08",
    "Location": "Pine Grove, PA",
    "Host": "Paws n' Sniff",
    "TrialTypes": "ELT-P, NW3",
    "EventCount": 2,
    "Latitude": 40.5863,
    "Longitude": -76.4008
  },
  {
    "Date": "2025-11-08",
    "Location": "Tucson, AZ",
    "Host": "Patience Unlimited Professional Dog Training",
    "TrialTypes": "NW3, L2C, NW2",
    "EventCount": 3,
    "Latitude": 32.2152,
    "Longitude": -110.964
  },
  {
    "Date": "2025-11-11",
    "Location": "Guerneville, CA",
    "Host": "Jen Huot",
    "TrialTypes": "ELT-P",
    "EventCount": 1,
    "Latitude": 38.5633,
    "Longitude": -122.9956
  },
  {
    "Date": "2025-11-12",
    "Location": "Astoria, OR",
    "Host": "Nose Work Detectives, LLC",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 46.1586,
    "Longitude": -123.8739
  },
  {
    "Date": "2025-11-14",
    "Location": "Elgin, IL",
    "Host": "Common Scents K9",
    "TrialTypes": "L1C, L2C, L1I, L2I, NW1",
    "EventCount": 5,
    "Latitude": 42.0456,
    "Longitude": -88.2875
  },
  {
    "Date": "2025-11-14",
    "Location": "New Freedom, PA",
    "Host": "Firezone GS",
    "TrialTypes": "ELT, NW3, ELT-S, NW2",
    "EventCount": 4,
    "Latitude": 39.7356,
    "Longitude": -76.7245
  },
  {
    "Date": "2025-11-15",
    "Location": "Albuquerque, NM",
    "Host": "New Mexico Canine Scent Work, LLC",
    "TrialTypes": "NW3, L1C, NW2",
    "EventCount": 3,
    "Latitude": 35.0664,
    "Longitude": -106.6086
  },
  {
    "Date": "2025-11-15",
    "Location": "Bonham, TX",
    "Host": "All About The Nose",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 33.5473,
    "Longitude": -96.1664
  },
  {
    "Date": "2025-11-15",
    "Location": "Bradenton, FL",
    "Host": "Hoppin' in the Hills",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 27.5119,
    "Longitude": -82.5822
  },
  {
    "Date": "2025-11-15",
    "Location": "Eldred, NY",
    "Host": "Your Dog's Place, LLC",
    "TrialTypes": "L1I, NW2, L3I, L3C",
    "EventCount": 4,
    "Latitude": 41.4982,
    "Longitude": -74.8833
  },
  {
    "Date": "2025-11-15",
    "Location": "Marbury, AL",
    "Host": "Kaye Stevenson",
    "TrialTypes": "NW2, NW1, L1E",
    "EventCount": 3,
    "Latitude": 32.7025,
    "Longitude": -86.4507
  },
  {
    "Date": "2025-11-15",
    "Location": "Montgomery, AL",
    "Host": "By A Nose Nosework",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 32.4158,
    "Longitude": -86.2817
  },
  {
    "Date": "2025-11-15",
    "Location": "Welches, OR",
    "Host": "Trust Your Dog K9 Events",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 45.3811,
    "Longitude": -121.9297
  },
  {
    "Date": "2025-11-17",
    "Location": "Hudson, MA",
    "Host": "For the Love of Dogs NY LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 42.4162,
    "Longitude": -71.5284
  },
  {
    "Date": "2025-11-21",
    "Location": "Harrington, DE",
    "Host": "Shamrock Pot Of Gold K9 Scenter",
    "TrialTypes": "NW3, ELT-S, NW2, NW1, L1C, ELT",
    "EventCount": 6,
    "Latitude": 38.9177,
    "Longitude": -75.5312
  },
  {
    "Date": "2025-11-21",
    "Location": "San Luis Obispo, CA",
    "Host": "Gentle Touch Pet Training",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 35.3147,
    "Longitude": -120.3702
  },
  {
    "Date": "2025-11-22",
    "Location": "Crownsville, MD",
    "Host": "Red Huskies",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 38.9735,
    "Longitude": -76.618
  },
  {
    "Date": "2025-11-22",
    "Location": "Defuniak Springs, FL",
    "Host": "Linda Culliton",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 30.6774,
    "Longitude": -86.0849
  },
  {
    "Date": "2025-11-22",
    "Location": "Delta, CO",
    "Host": "Mountain Dogs, LLC",
    "TrialTypes": "ELT, NW3, ELT-S, NW2",
    "EventCount": 4,
    "Latitude": 38.8549,
    "Longitude": -107.8096
  },
  {
    "Date": "2025-11-22",
    "Location": "Foxborough , MA",
    "Host": "MasterPeace Dog Training",
    "TrialTypes": "L3C, NW1, NW2",
    "EventCount": 3,
    "Latitude": 42.08,
    "Longitude": -71.2738
  },
  {
    "Date": "2025-11-22",
    "Location": "Kintnersville, PA",
    "Host": "Paws n' Sniff",
    "TrialTypes": "L1C, NW1, L2I, L2E",
    "EventCount": 4,
    "Latitude": 40.5589,
    "Longitude": -75.2254
  },
  {
    "Date": "2025-11-22",
    "Location": "Marble Falls, TX",
    "Host": "Scent Work Across Texas",
    "TrialTypes": "ELT-S, NW2, NW1, L1I",
    "EventCount": 4,
    "Latitude": 30.5519,
    "Longitude": -98.299
  },
  {
    "Date": "2025-11-22",
    "Location": "Medford, NJ",
    "Host": "K9 InScentives",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 39.9252,
    "Longitude": -74.8474
  },
  {
    "Date": "2025-11-22",
    "Location": "Norton, MA",
    "Host": "Dogs Make Scents",
    "TrialTypes": "ELT, L1E, L1C",
    "EventCount": 3,
    "Latitude": 41.934,
    "Longitude": -71.1657
  },
  {
    "Date": "2025-11-22",
    "Location": "Salem Lakes, WI",
    "Host": "Loving Paws Dog Training, LLC",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 42.5258,
    "Longitude": -88.067
  },
  {
    "Date": "2025-11-22",
    "Location": "Smyrna, TN",
    "Host": "Dogs Have Amazing Noses, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 35.9481,
    "Longitude": -86.5422
  },
  {
    "Date": "2025-11-28",
    "Location": "Dana Point, CA",
    "Host": "JavaK9s, LLC",
    "TrialTypes": "NW3, ELT-S",
    "EventCount": 2,
    "Latitude": 33.4199,
    "Longitude": -117.666
  },
  {
    "Date": "2025-11-28",
    "Location": "San Jose, CA",
    "Host": "The Bay Team",
    "TrialTypes": "NW2, NW1",
    "EventCount": 2,
    "Latitude": 37.2959,
    "Longitude": -121.9201
  },
  {
    "Date": "2025-11-29",
    "Location": "Alpharetta, GA",
    "Host": "Georgia Nosework",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 34.1029,
    "Longitude": -84.3285
  },
  {
    "Date": "2025-11-29",
    "Location": "Canandaigua, NY",
    "Host": "Savvy Dog Sports",
    "TrialTypes": "ELT, NW2",
    "EventCount": 2,
    "Latitude": 42.8029,
    "Longitude": -77.2762
  },
  {
    "Date": "2025-11-29",
    "Location": "Cottage Grove, MN",
    "Host": "Gretchen Hofheins-Wackerfuss",
    "TrialTypes": "ELT-S, ELT-P",
    "EventCount": 2,
    "Latitude": 44.8725,
    "Longitude": -92.9834
  },
  {
    "Date": "2025-11-29",
    "Location": "Lebanon, NJ",
    "Host": "Sirius K9 Solutions",
    "TrialTypes": "NW3, L3I, ELT-S",
    "EventCount": 3,
    "Latitude": 40.6348,
    "Longitude": -74.8769
  },
  {
    "Date": "2025-12-05",
    "Location": "Bowie, MD",
    "Host": "Red Huskies",
    "TrialTypes": "ELT, ELT-P, ELT-S",
    "EventCount": 3,
    "Latitude": 38.9379,
    "Longitude": -76.7577
  },
  {
    "Date": "2025-12-06",
    "Location": "Annapolis, MD",
    "Host": "Chesapeake Search Dogs",
    "TrialTypes": "NW3, NW2, L2C",
    "EventCount": 3,
    "Latitude": 39.0182,
    "Longitude": -76.4901
  },
  {
    "Date": "2025-12-06",
    "Location": "Auburn, WA",
    "Host": "Northwest K9 Sniffers",
    "TrialTypes": "L1C, L2C, NW3",
    "EventCount": 3,
    "Latitude": 47.2677,
    "Longitude": -122.203
  },
  {
    "Date": "2025-12-06",
    "Location": "Centralia, WA",
    "Host": "About Face K9 Academy and Let's Talk Dogs",
    "TrialTypes": "NW3, NW1",
    "EventCount": 2,
    "Latitude": 46.7204,
    "Longitude": -122.9222
  },
  {
    "Date": "2025-12-06",
    "Location": "Fillmore, CA",
    "Host": "Pink Biscuit K9s",
    "TrialTypes": "NW1, NW2, ELT",
    "EventCount": 3,
    "Latitude": 34.3804,
    "Longitude": -118.8674
  },
  {
    "Date": "2025-12-06",
    "Location": "Hoover, AL",
    "Host": "Southeast Scent Work Alliance, LLC",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 33.3334,
    "Longitude": -86.8023
  },
  {
    "Date": "2025-12-06",
    "Location": "Kittanning, PA",
    "Host": "Steel City Nosework, LLC",
    "TrialTypes": "NW3, ELT-S, NW1",
    "EventCount": 3,
    "Latitude": 40.8478,
    "Longitude": -79.4935
  },
  {
    "Date": "2025-12-06",
    "Location": "Newfoundland, PA",
    "Host": "Your Dog's Place, LLC",
    "TrialTypes": "L2I, L3V, NW3",
    "EventCount": 3,
    "Latitude": 41.3091,
    "Longitude": -75.284
  },
  {
    "Date": "2025-12-07",
    "Location": "Cape Coral, FL",
    "Host": "Your Dog Knows, LLC",
    "TrialTypes": "NW1",
    "EventCount": 1,
    "Latitude": 26.551,
    "Longitude": -81.9343
  },
  {
    "Date": "2025-12-12",
    "Location": "Douglassville, PA",
    "Host": "Patricia Grassey",
    "TrialTypes": "NW3, ELT, ELT-P",
    "EventCount": 3,
    "Latitude": 40.2522,
    "Longitude": -75.7154
  },
  {
    "Date": "2025-12-12",
    "Location": "Pittstown, NJ",
    "Host": "Shamrock Pot Of Gold K9 Scenter",
    "TrialTypes": "NW3, ELT, ELT-S, NW1",
    "EventCount": 4,
    "Latitude": 40.6019,
    "Longitude": -75.0011
  },
  {
    "Date": "2025-12-13",
    "Location": "DeLeon Springs, FL",
    "Host": "River Poodles Training, LLC",
    "TrialTypes": "ELT-P, ELT-S, L2C",
    "EventCount": 3,
    "Latitude": 29.1378,
    "Longitude": -81.377
  },
  {
    "Date": "2025-12-13",
    "Location": "Easton, MA",
    "Host": "South Coast Scent Dogs",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 42.0736,
    "Longitude": -71.1752
  },
  {
    "Date": "2025-12-13",
    "Location": "Escondido, CA",
    "Host": "Uber Dog and Rewarding Rover LLC",
    "TrialTypes": "NW2",
    "EventCount": 1,
    "Latitude": 33.1706,
    "Longitude": -117.1044
  },
  {
    "Date": "2025-12-13",
    "Location": "Greer, SC",
    "Host": "Trained to Trust LLC",
    "TrialTypes": "ELT, ELT-S, NW2",
    "EventCount": 3,
    "Latitude": 34.9569,
    "Longitude": -82.2676
  },
  {
    "Date": "2025-12-13",
    "Location": "Independence, OR",
    "Host": "Doglandia, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 44.8844,
    "Longitude": -123.1455
  },
  {
    "Date": "2025-12-13",
    "Location": "Westminster, MD",
    "Host": "Red Huskies",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 39.5798,
    "Longitude": -76.9913
  },
  {
    "Date": "2025-12-16",
    "Location": "Duluth, GA",
    "Host": "Right Choice Dog Training LLC",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 34.043,
    "Longitude": -84.1723
  },
  {
    "Date": "2025-12-20",
    "Location": "Cumming, GA",
    "Host": "Georgia Nosework LLC",
    "TrialTypes": "SMT, ELT",
    "EventCount": 2,
    "Latitude": 34.2106,
    "Longitude": -84.1699
  },
  {
    "Date": "2025-12-20",
    "Location": "Florissant, MO",
    "Host": "Happy Dog Concepts, LLC",
    "TrialTypes": "ELT-P",
    "EventCount": 1,
    "Latitude": 38.8375,
    "Longitude": -90.366
  },
  {
    "Date": "2025-12-20",
    "Location": "Salem, OR",
    "Host": "Helix Fairweather & Doglandia, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 44.9415,
    "Longitude": -123.0576
  },
  {
    "Date": "2025-12-20",
    "Location": "Silex, MO",
    "Host": "WestInn Kennels",
    "TrialTypes": "NW1, NW2, NW3",
    "EventCount": 3,
    "Latitude": 39.1524,
    "Longitude": -91.0842
  },
  {
    "Date": "2025-12-20",
    "Location": "Stockton, CA",
    "Host": "Two Nosey Girls",
    "TrialTypes": "NW3, NW1",
    "EventCount": 2,
    "Latitude": 37.9567,
    "Longitude": -121.2825
  },
  {
    "Date": "2025-12-27",
    "Location": "Auburn, AL",
    "Host": "Daphne Melillo",
    "TrialTypes": "NW2, NW1",
    "EventCount": 2,
    "Latitude": 32.6077,
    "Longitude": -85.5036
  },
  {
    "Date": "2025-12-27",
    "Location": "Fort Morgan, CO",
    "Host": "Paws 4 Thought Dog Training, LLC",
    "TrialTypes": "L1V, NW2, NW1, L1I",
    "EventCount": 4,
    "Latitude": 40.2702,
    "Longitude": -103.8358
  },
  {
    "Date": "2025-12-27",
    "Location": "New Rochelle, NY",
    "Host": "For the Love of Dogs NY LLC",
    "TrialTypes": "NW3, ELT-S, ELT",
    "EventCount": 3,
    "Latitude": 40.9218,
    "Longitude": -73.7675
  },
  {
    "Date": "2025-12-27",
    "Location": "White Plains, NY",
    "Host": "Saints2Source",
    "TrialTypes": "NW1, NW2, L2E, L2C",
    "EventCount": 4,
    "Latitude": 41.078,
    "Longitude": -73.7608
  },
  {
    "Date": "2025-12-28",
    "Location": "Exton, PA",
    "Host": "Patricia Grassey",
    "TrialTypes": "ELT, ELT-P, NW3",
    "EventCount": 3,
    "Latitude": 40.0558,
    "Longitude": -75.6735
  },
  {
    "Date": "2025-12-28",
    "Location": "Waukesha, WI",
    "Host": "Think Pawsitive Dog Training",
    "TrialTypes": "NW2, NW1",
    "EventCount": 2,
    "Latitude": 43.1043,
    "Longitude": -88.2921
  },
  {
    "Date": "2025-12-29",
    "Location": "Barrington, RI",
    "Host": "Bay State Sniffers",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 41.7138,
    "Longitude": -71.3102
  },
  {
    "Date": "2026-01-02",
    "Location": "Emmitsburg , MD",
    "Host": "Red Huskies",
    "TrialTypes": "NW3, ELT, ELT-S",
    "EventCount": 3,
    "Latitude": 39.7138,
    "Longitude": -77.3365
  },
  {
    "Date": "2026-01-03",
    "Location": "Bonsall, CA",
    "Host": "Linda Buchanan",
    "TrialTypes": "NW3, ELT-P",
    "EventCount": 2,
    "Latitude": 33.3099,
    "Longitude": -117.1958
  },
  {
    "Date": "2026-01-03",
    "Location": "Green Cove Springs, FL",
    "Host": "Hoppin' in the Hills",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 30.0223,
    "Longitude": -81.7017
  },
  {
    "Date": "2026-01-03",
    "Location": "Maryville, TN",
    "Host": "Rachel Hawkins",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 35.7289,
    "Longitude": -83.9742
  },
  {
    "Date": "2026-01-03",
    "Location": "Montevallo, AL",
    "Host": "Southeast Scent Work Alliance, LLC",
    "TrialTypes": "NW1",
    "EventCount": 1,
    "Latitude": 33.1,
    "Longitude": -86.8233
  },
  {
    "Date": "2026-01-09",
    "Location": "Hartfield, VA",
    "Host": "Paws Plus Training, LLC",
    "TrialTypes": "NW3, NW1, NW2, ELT",
    "EventCount": 4,
    "Latitude": 37.551,
    "Longitude": -76.4673
  },
  {
    "Date": "2026-01-09",
    "Location": "Spring City, PA",
    "Host": "Patricia Grassey",
    "TrialTypes": "NW3, NW2, NW1, L2I",
    "EventCount": 4,
    "Latitude": 40.1726,
    "Longitude": -75.5021
  },
  {
    "Date": "2026-01-10",
    "Location": "Canton , GA",
    "Host": "Run Spot Jump Dog Training",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 34.2066,
    "Longitude": -84.45
  },
  {
    "Date": "2026-01-10",
    "Location": "Pflugerville, TX",
    "Host": "Scent Work Across Texas",
    "TrialTypes": "ELT-S, L2C, NW3",
    "EventCount": 3,
    "Latitude": 30.4708,
    "Longitude": -97.6234
  },
  {
    "Date": "2026-01-10",
    "Location": "Valencia, CA",
    "Host": "Pink Biscuit K9s",
    "TrialTypes": "NW1, NW2, ELT",
    "EventCount": 3,
    "Latitude": 34.458,
    "Longitude": -118.5954
  },
  {
    "Date": "2026-01-16",
    "Location": "Bristol, PA",
    "Host": "Patricia Grassey",
    "TrialTypes": "ELT, ELT-P, ELT-S, NW2",
    "EventCount": 4,
    "Latitude": 40.1365,
    "Longitude": -74.8711
  },
  {
    "Date": "2026-01-17",
    "Location": "Clanton, AL",
    "Host": "By A Nose Nosework",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 32.8025,
    "Longitude": -86.6642
  },
  {
    "Date": "2026-01-17",
    "Location": "Melrose, FL",
    "Host": "River Poodles Training, LLC",
    "TrialTypes": "NW1, NW2, L1V, L1E",
    "EventCount": 4,
    "Latitude": 29.6773,
    "Longitude": -82.0817
  },
  {
    "Date": "2026-01-17",
    "Location": "New Rochelle, NY",
    "Host": "For the Love of Dogs NY LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 40.8985,
    "Longitude": -73.7346
  },
  {
    "Date": "2026-01-17",
    "Location": "San Marcos, CA",
    "Host": "Rewarding Rover LLC and Uberdog",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 33.1565,
    "Longitude": -117.2179
  },
  {
    "Date": "2026-01-17",
    "Location": "Tecumseh, OK",
    "Host": "The Doggie Spot, LLC",
    "TrialTypes": "ELT, NW3, NW2",
    "EventCount": 3,
    "Latitude": 35.2841,
    "Longitude": -96.9156
  },
  {
    "Date": "2026-01-19",
    "Location": "Redlands, CA",
    "Host": "Agile Paws Dog Sports",
    "TrialTypes": "NW3, ELT-P",
    "EventCount": 2,
    "Latitude": 34.0509,
    "Longitude": -117.1512
  },
  {
    "Date": "2026-01-20",
    "Location": "Murfreesboro, TN",
    "Host": "Dogs Have Amazing Noses, LLC",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 35.8586,
    "Longitude": -86.396
  },
  {
    "Date": "2026-01-23",
    "Location": "Rome, GA",
    "Host": "Georgia Nosework, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 34.2666,
    "Longitude": -85.2105
  },
  {
    "Date": "2026-01-30",
    "Location": "Greeley, CO",
    "Host": "Beyond Elevation K9 Training",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 40.4404,
    "Longitude": -104.6744
  },
  {
    "Date": "2026-01-31",
    "Location": "Denton, MD",
    "Host": "Fair Play Labradors",
    "TrialTypes": "ELT-S, L2C, NW1, L1E",
    "EventCount": 4,
    "Latitude": 38.8478,
    "Longitude": -75.8507
  },
  {
    "Date": "2026-01-31",
    "Location": "Tucson, AZ",
    "Host": "Patience Unlimited Professional Dog Training",
    "TrialTypes": "NW3, ELT-S, L1V",
    "EventCount": 3,
    "Latitude": 32.1986,
    "Longitude": -110.9562
  },
  {
    "Date": "2026-02-07",
    "Location": "Lakewood, NJ",
    "Host": "Rotts n Notts Nosework",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 40.0862,
    "Longitude": -74.1875
  },
  {
    "Date": "2026-02-07",
    "Location": "Murfreesboro, TN",
    "Host": "Dogs Have Amazing Noses, LLC",
    "TrialTypes": "ELT, NW1",
    "EventCount": 2,
    "Latitude": 35.8011,
    "Longitude": -86.406
  },
  {
    "Date": "2026-02-13",
    "Location": "Havre De Grace, MD",
    "Host": "Firezone GS",
    "TrialTypes": "ELT-P, NW3, L3I, NW2",
    "EventCount": 4,
    "Latitude": 39.5676,
    "Longitude": -76.115
  },
  {
    "Date": "2026-02-13",
    "Location": "Vista, CA",
    "Host": "Rewarding Rover LLC and Uberdog",
    "TrialTypes": "ELT, L1C, L2C",
    "EventCount": 3,
    "Latitude": 33.1555,
    "Longitude": -117.2908
  },
  {
    "Date": "2026-02-14",
    "Location": "Clarkesville, GA",
    "Host": "Right Choice Dog Training, LLC",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 34.5994,
    "Longitude": -83.5686
  },
  {
    "Date": "2026-02-14",
    "Location": "Colesville, MD",
    "Host": "Red Huskies",
    "TrialTypes": "L1C, NW1, ELT-S, ELT",
    "EventCount": 4,
    "Latitude": 39.0481,
    "Longitude": -77.0066
  },
  {
    "Date": "2026-02-14",
    "Location": "Flemington, NJ",
    "Host": "Shamrock Pot Of Gold K9 Scenter",
    "TrialTypes": "ELT, ELT-S, NW1",
    "EventCount": 3,
    "Latitude": 40.5392,
    "Longitude": -74.8979
  },
  {
    "Date": "2026-02-14",
    "Location": "Northridge, CA",
    "Host": "SCENTwork.org",
    "TrialTypes": "NW2, ELT",
    "EventCount": 2,
    "Latitude": 34.2098,
    "Longitude": -118.5001
  },
  {
    "Date": "2026-02-14",
    "Location": "Pottsboro, TX",
    "Host": "All About The Nose",
    "TrialTypes": "NW3, NW2, NW1",
    "EventCount": 3,
    "Latitude": 33.7128,
    "Longitude": -96.6464
  },
  {
    "Date": "2026-02-14",
    "Location": "Strafford, PA",
    "Host": "The Sniffing Hound",
    "TrialTypes": "NW3, ELT, ELT-P",
    "EventCount": 3,
    "Latitude": 40.0757,
    "Longitude": -75.3651
  },
  {
    "Date": "2026-02-15",
    "Location": "Chino, CA",
    "Host": "Agile Paws Dog Sports",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 34.0148,
    "Longitude": -117.688
  },
  {
    "Date": "2026-02-15",
    "Location": "New Rochelle, NY",
    "Host": "For the Love of Dogs NY LLC",
    "TrialTypes": "ELT-P, NW3, ELT",
    "EventCount": 3,
    "Latitude": 40.8884,
    "Longitude": -73.818
  },
  {
    "Date": "2026-02-20",
    "Location": "San Rafael/Novato, CA",
    "Host": "Marin Humane",
    "TrialTypes": "L2C, L1I, NW3",
    "EventCount": 3,
    "Latitude": 38.0782,
    "Longitude": -122.3593
  },
  {
    "Date": "2026-02-21",
    "Location": "Clearwater, FL",
    "Host": "Hoppin' in the Hills",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 27.9362,
    "Longitude": -82.7606
  },
  {
    "Date": "2026-02-21",
    "Location": "Veneta, OR",
    "Host": "Wells Creek Dog Training",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 44.0763,
    "Longitude": -123.3194
  },
  {
    "Date": "2026-02-22",
    "Location": "Benson, AZ",
    "Host": "Patience Unlimited Professional Dog Training",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 32.0007,
    "Longitude": -110.3223
  },
  {
    "Date": "2026-02-24",
    "Location": "Paso Robles, CA",
    "Host": "Gentle Touch Pet Training",
    "TrialTypes": "ELT-S, L3I",
    "EventCount": 2,
    "Latitude": 35.6745,
    "Longitude": -120.7199
  },
  {
    "Date": "2026-02-28",
    "Location": "Danielsville, GA",
    "Host": "Right Choice Dog Training, LLC",
    "TrialTypes": "NW1, L2I, NW2",
    "EventCount": 3,
    "Latitude": 34.1517,
    "Longitude": -83.246
  },
  {
    "Date": "2026-02-28",
    "Location": "Keystone Heights, FL",
    "Host": "River Poodles Training, LLC",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 29.8352,
    "Longitude": -81.9901
  },
  {
    "Date": "2026-02-28",
    "Location": "Lutherville, MD",
    "Host": "Red Huskies",
    "TrialTypes": "L3C, L1I, NW2",
    "EventCount": 3,
    "Latitude": 39.3938,
    "Longitude": -76.5943
  },
  {
    "Date": "2026-02-28",
    "Location": "Tygh Valley, OR",
    "Host": "Nose Work Detectives, LLC",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 45.2042,
    "Longitude": -121.1514
  },
  {
    "Date": "2026-02-28",
    "Location": "Wilson, NC",
    "Host": "Whole Dog Institute, LLC",
    "TrialTypes": "ELT, ELT-S, NW1",
    "EventCount": 3,
    "Latitude": 35.6715,
    "Longitude": -77.9623
  },
  {
    "Date": "2026-03-06",
    "Location": "Chesterfield, VA",
    "Host": "Paws Plus Training, LLC",
    "TrialTypes": "NW3, NW1, NW2, ELT",
    "EventCount": 4,
    "Latitude": 37.3437,
    "Longitude": -77.5655
  },
  {
    "Date": "2026-03-06",
    "Location": "Elgin, IL",
    "Host": "For Your K9, Inc",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 42.0829,
    "Longitude": -88.3031
  },
  {
    "Date": "2026-03-06",
    "Location": "Westlake Village, CA",
    "Host": "JavaK9s, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 34.1671,
    "Longitude": -118.7931
  },
  {
    "Date": "2026-03-07",
    "Location": "Cumming, GA",
    "Host": "Georgia Nosework LLC",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 34.2026,
    "Longitude": -84.1779
  },
  {
    "Date": "2026-03-07",
    "Location": "Honesdale, PA",
    "Host": "Your Dog's Place, LLC",
    "TrialTypes": "L3C, ELT, ELT-S, L3I",
    "EventCount": 4,
    "Latitude": 41.5724,
    "Longitude": -75.2411
  },
  {
    "Date": "2026-03-07",
    "Location": "Moriarty, NM",
    "Host": "New Mexico Canine Scent Work, LLC",
    "TrialTypes": "NW3, L1I, NW1",
    "EventCount": 3,
    "Latitude": 34.9684,
    "Longitude": -106.0427
  },
  {
    "Date": "2026-03-07",
    "Location": "Warrensburg, IL",
    "Host": "Kudos for Canines",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 39.8991,
    "Longitude": -89.0983
  },
  {
    "Date": "2026-03-13",
    "Location": "Centreville , MD",
    "Host": "Fair Play Point Labradors",
    "TrialTypes": "SMT, L2C, L3C",
    "EventCount": 3,
    "Latitude": 39.0227,
    "Longitude": -76.0848
  },
  {
    "Date": "2026-03-13",
    "Location": "Colebrook, CT",
    "Host": "For the Love of Dogs NY LLC",
    "TrialTypes": "NW3, SMT",
    "EventCount": 2,
    "Latitude": 41.9443,
    "Longitude": -73.1327
  },
  {
    "Date": "2026-03-13",
    "Location": "Stokesdale, NC",
    "Host": "K9 Nose Adventures, LLC",
    "TrialTypes": "ELT, NW3, NW1, NW2",
    "EventCount": 4,
    "Latitude": 36.2088,
    "Longitude": -79.9546
  },
  {
    "Date": "2026-03-14",
    "Location": "Channahon, IL",
    "Host": "4G & TB",
    "TrialTypes": "NW2, NW1",
    "EventCount": 2,
    "Latitude": 41.3879,
    "Longitude": -88.2626
  },
  {
    "Date": "2026-03-14",
    "Location": "Hammond, LA",
    "Host": "Dog Gone Right",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 30.4856,
    "Longitude": -90.5004
  },
  {
    "Date": "2026-03-14",
    "Location": "Kent, WA",
    "Host": "K9 Sniffers",
    "TrialTypes": "ELT, L1V, L1E",
    "EventCount": 3,
    "Latitude": 47.3805,
    "Longitude": -122.19
  },
  {
    "Date": "2026-03-14",
    "Location": "Phoenix, AZ",
    "Host": "Release Canine, LLC",
    "TrialTypes": "ELT, NW1",
    "EventCount": 2,
    "Latitude": 33.4675,
    "Longitude": -112.0852
  },
  {
    "Date": "2026-03-14",
    "Location": "Santa Paula, CA",
    "Host": "Pink Biscuit K9s",
    "TrialTypes": "NW3, NW1, ELT-S",
    "EventCount": 3,
    "Latitude": 34.3194,
    "Longitude": -119.0241
  },
  {
    "Date": "2026-03-16",
    "Location": "Paso Robles, CA",
    "Host": "Central Coast Nosework Club",
    "TrialTypes": "NW3, ELT-S, L3V",
    "EventCount": 3,
    "Latitude": 35.6243,
    "Longitude": -120.6568
  },
  {
    "Date": "2026-03-20",
    "Location": "Shady Hills, FL",
    "Host": "Hoppin' in the Hills",
    "TrialTypes": "L1C, NW1, NW2",
    "EventCount": 3,
    "Latitude": 28.4087,
    "Longitude": -82.5532
  },
  {
    "Date": "2026-03-20",
    "Location": "Street, MD",
    "Host": "Firezone GS",
    "TrialTypes": "ELT-P, NW3, ELT-S, NW2",
    "EventCount": 4,
    "Latitude": 39.6972,
    "Longitude": -76.4128
  },
  {
    "Date": "2026-03-21",
    "Location": "Califon, NJ",
    "Host": "Shamrock Pot Of Gold K9 Scenter",
    "TrialTypes": "NW2, ELT-S, ELT",
    "EventCount": 3,
    "Latitude": 40.7022,
    "Longitude": -74.832
  },
  {
    "Date": "2026-03-21",
    "Location": "Dittmer, MO",
    "Host": "Happy Dog Concepts LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 38.354,
    "Longitude": -90.7223
  },
  {
    "Date": "2026-03-21",
    "Location": "East Windsor, CT",
    "Host": "Lucky Dog Events",
    "TrialTypes": "ELT, L2C, NW2",
    "EventCount": 3,
    "Latitude": 41.9497,
    "Longitude": -72.5746
  },
  {
    "Date": "2026-03-21",
    "Location": "Elkridge, MD",
    "Host": "Red Huskies",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 39.2304,
    "Longitude": -76.7181
  },
  {
    "Date": "2026-03-21",
    "Location": "Foxboro, MA",
    "Host": "Bay State Sniffers",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 42.0477,
    "Longitude": -71.2364
  },
  {
    "Date": "2026-03-21",
    "Location": "Lawrenceville, GA",
    "Host": "Right Choice Dog Training LLC",
    "TrialTypes": "ELT-P, ELT",
    "EventCount": 2,
    "Latitude": 33.9708,
    "Longitude": -84.0089
  },
  {
    "Date": "2026-03-21",
    "Location": "Oakville, WA",
    "Host": "About Face K9 Academy & Let's Talk Dogs, LLC",
    "TrialTypes": "NW2, ELT",
    "EventCount": 2,
    "Latitude": 46.8721,
    "Longitude": -123.2217
  },
  {
    "Date": "2026-03-21",
    "Location": "Redwood City, CA",
    "Host": "B.L. McMutts LLC",
    "TrialTypes": "ELT-S, L1I, L3C",
    "EventCount": 3,
    "Latitude": 37.488,
    "Longitude": -122.2028
  },
  {
    "Date": "2026-03-21",
    "Location": "Salem Lakes, WI",
    "Host": "Loving Paws Dog Training LLC",
    "TrialTypes": "NW2, L2I, ELT-S",
    "EventCount": 3,
    "Latitude": 42.5545,
    "Longitude": -88.0696
  },
  {
    "Date": "2026-03-21",
    "Location": "Winterset, IA",
    "Host": "KBP Dog Training",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 41.3088,
    "Longitude": -94.0241
  },
  {
    "Date": "2026-03-23",
    "Location": "Riverside, CA",
    "Host": "Linda Buchanan",
    "TrialTypes": "NW2, NW3",
    "EventCount": 2,
    "Latitude": 34.0025,
    "Longitude": -117.4016
  },
  {
    "Date": "2026-03-27",
    "Location": "Grand Junction, CO",
    "Host": "Mountain Dogs, LLC",
    "TrialTypes": "ELT-P, ELT-S, NW1, NW2",
    "EventCount": 4,
    "Latitude": 39.1134,
    "Longitude": -108.5801
  },
  {
    "Date": "2026-03-27",
    "Location": "Kennett Square, PA",
    "Host": "The Sniffing Hound",
    "TrialTypes": "NW3, ELT, ELT-S, L3I",
    "EventCount": 4,
    "Latitude": 39.8491,
    "Longitude": -75.6932
  },
  {
    "Date": "2026-03-27",
    "Location": "Salem, OR",
    "Host": "Just Nose Work & Doglandia LLC",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 44.9802,
    "Longitude": -123.0132
  },
  {
    "Date": "2026-03-27",
    "Location": "Watertown, TN",
    "Host": "Dogs Have Amazing Noses, LLC",
    "TrialTypes": "ELT, NW2",
    "EventCount": 2,
    "Latitude": 36.0544,
    "Longitude": -86.1514
  },
  {
    "Date": "2026-03-28",
    "Location": "Batavia, OH",
    "Host": "Clermont County Dog Training Club",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 39.0958,
    "Longitude": -84.1788
  },
  {
    "Date": "2026-03-28",
    "Location": "Colorado Springs, CO",
    "Host": "Beyond Elevation K9",
    "TrialTypes": "NW2, NW3",
    "EventCount": 2,
    "Latitude": 38.8803,
    "Longitude": -104.8214
  },
  {
    "Date": "2026-03-28",
    "Location": "Forks, WA",
    "Host": "Sea Change Canine LLC",
    "TrialTypes": "NW2, NW3",
    "EventCount": 2,
    "Latitude": 47.9393,
    "Longitude": -124.3515
  },
  {
    "Date": "2026-03-29",
    "Location": "Canton, GA",
    "Host": "Run Spot Jump Dog Training",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 34.2353,
    "Longitude": -84.5323
  },
  {
    "Date": "2026-03-30",
    "Location": "Watsonville, CA",
    "Host": "CalCoastal Dog Owners Group",
    "TrialTypes": "NW2, NW1",
    "EventCount": 2,
    "Latitude": 36.8971,
    "Longitude": -121.7309
  },
  {
    "Date": "2026-04-03",
    "Location": "Eagan, MN",
    "Host": "St. Paul Dog Training Center",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 44.7738,
    "Longitude": -93.1517
  },
  {
    "Date": "2026-04-03",
    "Location": "Rochester, NY",
    "Host": "2 Psyched 4 dogs",
    "TrialTypes": "NW3, L1I, L1C",
    "EventCount": 3,
    "Latitude": 43.1876,
    "Longitude": -77.5835
  },
  {
    "Date": "2026-04-03",
    "Location": "Warwick, NY",
    "Host": "For the Love of Dogs NY LLC",
    "TrialTypes": "ELT, NW3, NW1",
    "EventCount": 3,
    "Latitude": 41.2691,
    "Longitude": -74.4037
  },
  {
    "Date": "2026-04-04",
    "Location": "Blaine, WA",
    "Host": "The Nosework Magic",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 49.0345,
    "Longitude": -122.7355
  },
  {
    "Date": "2026-04-04",
    "Location": "Burnet, TX",
    "Host": "Scent Work Across Texas",
    "TrialTypes": "L1C, NW2, ELT",
    "EventCount": 3,
    "Latitude": 30.7614,
    "Longitude": -98.1558
  },
  {
    "Date": "2026-04-04",
    "Location": "Stayton, OR",
    "Host": "Canine Discovery Corps",
    "TrialTypes": "L2E, L1V, L1E, L2C",
    "EventCount": 4,
    "Latitude": 44.812,
    "Longitude": -122.7598
  },
  {
    "Date": "2026-04-06",
    "Location": "Sacramento, CA",
    "Host": "Two Nosey Girls",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 38.6143,
    "Longitude": -121.5119
  },
  {
    "Date": "2026-04-08",
    "Location": "Olympia, WA",
    "Host": "Rachelle Bailey-Austin & Dorothy Turley",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 47.0907,
    "Longitude": -122.8671
  },
  {
    "Date": "2026-04-10",
    "Location": "Rapid City, SD",
    "Host": "Two Paws Up Dog Training, LLC",
    "TrialTypes": "ELT, NW3, NW1, NW2",
    "EventCount": 4,
    "Latitude": 44.1251,
    "Longitude": -103.2772
  },
  {
    "Date": "2026-04-10",
    "Location": "Somis, CA",
    "Host": "Pink Biscuit K9s",
    "TrialTypes": "NW3, ELT-P, L2C, L2I",
    "EventCount": 4,
    "Latitude": 34.2163,
    "Longitude": -119.006
  },
  {
    "Date": "2026-04-11",
    "Location": "Bel Air, MD",
    "Host": "Firezone GS",
    "TrialTypes": "ELT-P, ELT-S, NW2",
    "EventCount": 3,
    "Latitude": 39.5815,
    "Longitude": -76.3143
  },
  {
    "Date": "2026-04-11",
    "Location": "Blue Ridge , VA",
    "Host": "Canny K9 Companions, LLC",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 37.3482,
    "Longitude": -79.7903
  },
  {
    "Date": "2026-04-11",
    "Location": "Clinton, WI",
    "Host": "George Carpenter",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 42.5691,
    "Longitude": -88.8542
  },
  {
    "Date": "2026-04-11",
    "Location": "Durham, NC",
    "Host": "Dog Fun Forever, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 35.9588,
    "Longitude": -78.8549
  },
  {
    "Date": "2026-04-11",
    "Location": "Genoa, IL",
    "Host": "Common Scents K9",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 42.1232,
    "Longitude": -88.6598
  },
  {
    "Date": "2026-04-11",
    "Location": "Limerick, PA",
    "Host": "Sniff Sniff Hooray",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 40.1951,
    "Longitude": -75.5689
  },
  {
    "Date": "2026-04-11",
    "Location": "Rocklin, CA",
    "Host": "Sierra Sniffing Canines",
    "TrialTypes": "NW2, L1E, L2E",
    "EventCount": 3,
    "Latitude": 38.7895,
    "Longitude": -121.2661
  },
  {
    "Date": "2026-04-13",
    "Location": "Ellicott City, MD",
    "Host": "Red Huskies",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 39.2301,
    "Longitude": -76.8078
  },
  {
    "Date": "2026-04-17",
    "Location": "Amity, OR",
    "Host": "Doglandia, LLC",
    "TrialTypes": "NW1, NW2, NW3",
    "EventCount": 3,
    "Latitude": 45.1496,
    "Longitude": -123.2517
  },
  {
    "Date": "2026-04-17",
    "Location": "Garrison, NY",
    "Host": "Top Notch Dogs, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 41.3676,
    "Longitude": -73.9204
  },
  {
    "Date": "2026-04-17",
    "Location": "Upland, CA",
    "Host": "Agile Paws Dog Sports",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 34.1462,
    "Longitude": -117.6849
  },
  {
    "Date": "2026-04-18",
    "Location": "Auburn, WA",
    "Host": "Northwest K9 Sniffers",
    "TrialTypes": "L1V, NW1, L1I, NW2",
    "EventCount": 4,
    "Latitude": 47.3567,
    "Longitude": -122.2192
  },
  {
    "Date": "2026-04-18",
    "Location": "Keystone Heights, FL",
    "Host": "River Poodles Training, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 29.7638,
    "Longitude": -82.0545
  },
  {
    "Date": "2026-04-18",
    "Location": "Laramie, WY",
    "Host": "Mountain Dogs LLC",
    "TrialTypes": "SMT, ELT",
    "EventCount": 2,
    "Latitude": 41.2711,
    "Longitude": -105.5928
  },
  {
    "Date": "2026-04-18",
    "Location": "Pomfret, MD",
    "Host": "Nose-It-All, LLC",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 38.5381,
    "Longitude": -77.0223
  },
  {
    "Date": "2026-04-18",
    "Location": "Toledo, OH",
    "Host": "Robin Ford Dog Training LLC",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 41.6261,
    "Longitude": -83.5097
  },
  {
    "Date": "2026-04-18",
    "Location": "Winterset, IA",
    "Host": "KBP Dog Training",
    "TrialTypes": "NW2, NW1",
    "EventCount": 2,
    "Latitude": 41.3691,
    "Longitude": -94.0597
  },
  {
    "Date": "2026-04-18",
    "Location": "Woodstock, IL",
    "Host": "Northwest Obedience Club Inc",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 42.3385,
    "Longitude": -88.4966
  },
  {
    "Date": "2026-04-19",
    "Location": "Glenwood, NY",
    "Host": "Do Over Dog Training",
    "TrialTypes": "L2I, L1E, L2C, ELT-S",
    "EventCount": 4,
    "Latitude": 42.5748,
    "Longitude": -78.614
  },
  {
    "Date": "2026-04-20",
    "Location": "Amherst, NH",
    "Host": "Lucky Dog Events",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 42.8379,
    "Longitude": -71.625
  },
  {
    "Date": "2026-04-21",
    "Location": "Stony Point , NY",
    "Host": "Saints2Source, LLC",
    "TrialTypes": "NW3, ELT, ELT-S, NW2",
    "EventCount": 4,
    "Latitude": 41.2582,
    "Longitude": -74.0015
  },
  {
    "Date": "2026-04-24",
    "Location": "Asheboro, NC",
    "Host": "K9 Nose Adventures, LLC",
    "TrialTypes": "ELT, NW3, ELT-S, NW2",
    "EventCount": 4,
    "Latitude": 35.7409,
    "Longitude": -79.7851
  },
  {
    "Date": "2026-04-24",
    "Location": "Easton, MD",
    "Host": "Red Huskies",
    "TrialTypes": "L3C, NW2, L3V, NW1",
    "EventCount": 4,
    "Latitude": 38.8186,
    "Longitude": -76.0663
  },
  {
    "Date": "2026-04-25",
    "Location": "Canfield, OH",
    "Host": "Nosework Addicts, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 41.0297,
    "Longitude": -80.7717
  },
  {
    "Date": "2026-04-25",
    "Location": "Columbus, MT",
    "Host": "Canine Connection",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 45.6162,
    "Longitude": -109.2837
  },
  {
    "Date": "2026-04-25",
    "Location": "Ellicottville, NY",
    "Host": "Do Over Dog Training",
    "TrialTypes": "ELT, ELT-S, NW1",
    "EventCount": 3,
    "Latitude": 42.2861,
    "Longitude": -78.662
  },
  {
    "Date": "2026-04-25",
    "Location": "Havre de Grace, MD",
    "Host": "Chesapeake Search Dogs",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 39.5829,
    "Longitude": -76.0813
  },
  {
    "Date": "2026-04-25",
    "Location": "Portland, OR",
    "Host": "Trust Your Dog K9 Events",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 45.5442,
    "Longitude": -122.6915
  },
  {
    "Date": "2026-04-25",
    "Location": "Sharon, MA",
    "Host": "Bay State Sniffers",
    "TrialTypes": "NW3, ELT-P",
    "EventCount": 2,
    "Latitude": 42.1316,
    "Longitude": -71.1701
  },
  {
    "Date": "2026-04-25",
    "Location": "Suring, WI",
    "Host": "Clever Sniffers, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 45.0191,
    "Longitude": -88.3978
  },
  {
    "Date": "2026-04-25",
    "Location": "Traverse City, MI",
    "Host": "Every Dog Nosework",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 44.7626,
    "Longitude": -85.6614
  },
  {
    "Date": "2026-05-01",
    "Location": "Faribault, MN",
    "Host": "St. Paul Dog Training Club",
    "TrialTypes": "NW3, NW1, L2E, L3C",
    "EventCount": 4,
    "Latitude": 43.6552,
    "Longitude": -93.9908
  },
  {
    "Date": "2026-05-01",
    "Location": "Nyack, NY",
    "Host": "Waggin' Work",
    "TrialTypes": "NW2, NW1, ELT-P, ELT-S",
    "EventCount": 4,
    "Latitude": 41.0451,
    "Longitude": -73.8934
  },
  {
    "Date": "2026-05-01",
    "Location": "Turlock, CA",
    "Host": "Two Nosey Girls",
    "TrialTypes": "L1I, L2I, ELT-S, L3I",
    "EventCount": 4,
    "Latitude": 37.4839,
    "Longitude": -120.8745
  },
  {
    "Date": "2026-05-02",
    "Location": "Alexis, IL",
    "Host": "Kudos for Canines, LLC",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 41.0336,
    "Longitude": -90.5301
  },
  {
    "Date": "2026-05-02",
    "Location": "Ashby , MA",
    "Host": "Dogs! Carolyn Barney",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 42.7029,
    "Longitude": -71.7919
  },
  {
    "Date": "2026-05-02",
    "Location": "Hillsdale, NY",
    "Host": "For the Love of Dogs NY LLC",
    "TrialTypes": "ELT-P, ELT",
    "EventCount": 2,
    "Latitude": 42.1761,
    "Longitude": -73.5224
  },
  {
    "Date": "2026-05-02",
    "Location": "Santa Paula, CA",
    "Host": "Pink Biscuit K9s",
    "TrialTypes": "NW3, ELT-S, NW2",
    "EventCount": 3,
    "Latitude": 34.3343,
    "Longitude": -119.1092
  },
  {
    "Date": "2026-05-02",
    "Location": "Sedona, AZ",
    "Host": "Successful Sniffer",
    "TrialTypes": "L1I, NW2, NW3",
    "EventCount": 3,
    "Latitude": 34.9066,
    "Longitude": -111.7386
  },
  {
    "Date": "2026-05-02",
    "Location": "Vancouver, WA",
    "Host": "Sniffketeers",
    "TrialTypes": "ELT-S",
    "EventCount": 1,
    "Latitude": 45.618,
    "Longitude": -122.6937
  },
  {
    "Date": "2026-05-07",
    "Location": "Lancaster, PA",
    "Host": "Red Huskies Nose Work, LLC",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 39.9974,
    "Longitude": -76.3121
  },
  {
    "Date": "2026-05-08",
    "Location": "Grand Island, NY",
    "Host": "Do Over Dog Training",
    "TrialTypes": "SMT, ELT",
    "EventCount": 2,
    "Latitude": 42.9871,
    "Longitude": -78.9347
  },
  {
    "Date": "2026-05-08",
    "Location": "Jarrettsville, MD",
    "Host": "Firezone GS",
    "TrialTypes": "ELT, NW3, ELT-S, L2I",
    "EventCount": 4,
    "Latitude": 39.6409,
    "Longitude": -76.4882
  },
  {
    "Date": "2026-05-08",
    "Location": "Warwick, NY",
    "Host": "Top Notch Dogs, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 41.2266,
    "Longitude": -74.3526
  },
  {
    "Date": "2026-05-08",
    "Location": "Wrightwood, CA",
    "Host": "JavaK9s, LLC",
    "TrialTypes": "NW3, L1C, L1I",
    "EventCount": 3,
    "Latitude": 34.3879,
    "Longitude": -117.6419
  },
  {
    "Date": "2026-05-09",
    "Location": "Brighton, MI",
    "Host": "Every Dog Nosework",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 42.5467,
    "Longitude": -83.8137
  },
  {
    "Date": "2026-05-09",
    "Location": "Charlton, MA",
    "Host": "HeavenScent Sniffers",
    "TrialTypes": "ELT-P, L2C, NW1",
    "EventCount": 3,
    "Latitude": 42.0909,
    "Longitude": -72.0039
  },
  {
    "Date": "2026-05-09",
    "Location": "Egg Harbor City, NJ",
    "Host": "Rotts-n-Notts Nosework LLC",
    "TrialTypes": "L3I, NW1, NW3",
    "EventCount": 3,
    "Latitude": 39.5157,
    "Longitude": -74.6897
  },
  {
    "Date": "2026-05-09",
    "Location": "Livingston, MT",
    "Host": "Trails and Tails Dog School",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 45.657,
    "Longitude": -110.5212
  },
  {
    "Date": "2026-05-09",
    "Location": "Malvern, IA",
    "Host": "Two Tails Unlimited",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 41.0359,
    "Longitude": -95.5908
  },
  {
    "Date": "2026-05-09",
    "Location": "Poland Springs, ME",
    "Host": "Bare Bones Nosework, LLC",
    "TrialTypes": "L1I, L2I",
    "EventCount": 2,
    "Latitude": 44.0512,
    "Longitude": -70.3474
  },
  {
    "Date": "2026-05-09",
    "Location": "Union Grove, WI",
    "Host": "Loving Paws, LLC",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 42.6832,
    "Longitude": -88.0677
  },
  {
    "Date": "2026-05-14",
    "Location": "Frederick, MD",
    "Host": "Red Huskies",
    "TrialTypes": "ELT-P, ELT-S, L2I, L2E, L1E",
    "EventCount": 5,
    "Latitude": 39.4377,
    "Longitude": -77.4551
  },
  {
    "Date": "2026-05-15",
    "Location": "Cannon Falls, MN",
    "Host": "Saint Paul Dog Training Club",
    "TrialTypes": "ELT, ELT-S, L3E, L1I, L1E",
    "EventCount": 5,
    "Latitude": 44.5162,
    "Longitude": -92.8725
  },
  {
    "Date": "2026-05-15",
    "Location": "Phoenix, MD",
    "Host": "Oriole Dog Training Club",
    "TrialTypes": "NW3, L1I, NW1",
    "EventCount": 3,
    "Latitude": 39.5486,
    "Longitude": -76.6102
  },
  {
    "Date": "2026-05-15",
    "Location": "Watsonville, CA",
    "Host": "CalCoastal Dog Owners Group",
    "TrialTypes": "ELT-S, L3C, L1C",
    "EventCount": 3,
    "Latitude": 36.87,
    "Longitude": -121.7471
  },
  {
    "Date": "2026-05-16",
    "Location": "Alexander, NY",
    "Host": "Do Over Dog Training",
    "TrialTypes": "L1V, L2V, L3C, L3I",
    "EventCount": 4,
    "Latitude": 42.9357,
    "Longitude": -78.2903
  },
  {
    "Date": "2026-05-16",
    "Location": "Bellingham, WA",
    "Host": "The Nosework Magic",
    "TrialTypes": "NW2, NW1",
    "EventCount": 2,
    "Latitude": 48.7488,
    "Longitude": -122.4483
  },
  {
    "Date": "2026-05-16",
    "Location": "Burien, WA",
    "Host": "Northwest K9 Sniffers",
    "TrialTypes": "NW3, L2V, L2I",
    "EventCount": 3,
    "Latitude": 47.441,
    "Longitude": -122.3774
  },
  {
    "Date": "2026-05-16",
    "Location": "Durham, NC",
    "Host": "Whole Dog Institute, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 36.0005,
    "Longitude": -78.8912
  },
  {
    "Date": "2026-05-16",
    "Location": "Kittanning, PA",
    "Host": "Steel City Nosework, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 40.8234,
    "Longitude": -79.5036
  },
  {
    "Date": "2026-05-16",
    "Location": "Monticello , NY",
    "Host": "Saints2Source, LLC",
    "TrialTypes": "NW3, ELT, ELT-S",
    "EventCount": 3,
    "Latitude": 41.6087,
    "Longitude": -74.6481
  },
  {
    "Date": "2026-05-16",
    "Location": "Peru, MA",
    "Host": "Lucky Dog Events",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 42.4112,
    "Longitude": -73.0858
  },
  {
    "Date": "2026-05-16",
    "Location": "Sandwich, IL",
    "Host": "For Your K9, Inc.",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 41.602,
    "Longitude": -88.6409
  },
  {
    "Date": "2026-05-22",
    "Location": "Anchorage, AK",
    "Host": "Alaska Dog Sports",
    "TrialTypes": "NW1, NW2, NW3",
    "EventCount": 3,
    "Latitude": 61.1797,
    "Longitude": -149.8721
  },
  {
    "Date": "2026-05-22",
    "Location": "Montrose, CO",
    "Host": "Mountain Dogs LLC",
    "TrialTypes": "ELT, NW3, NW2, NW1",
    "EventCount": 4,
    "Latitude": 38.5211,
    "Longitude": -107.895
  },
  {
    "Date": "2026-05-22",
    "Location": "San Luis Obispo, CA",
    "Host": "Gentle Touch Pet Training",
    "TrialTypes": "NW1, L1I, NW2",
    "EventCount": 3,
    "Latitude": 35.3279,
    "Longitude": -120.3985
  },
  {
    "Date": "2026-05-23",
    "Location": "Alpharetta, GA",
    "Host": "Georgia Nosework, LLC",
    "TrialTypes": "NW3, ELT-S, NW2, ELT",
    "EventCount": 4,
    "Latitude": 34.0854,
    "Longitude": -84.2449
  },
  {
    "Date": "2026-05-23",
    "Location": "Columbus, MT",
    "Host": "Canine Connection",
    "TrialTypes": "L1I, L2I, ELT-S, NW2",
    "EventCount": 4,
    "Latitude": 45.658,
    "Longitude": -109.2055
  },
  {
    "Date": "2026-05-23",
    "Location": "Emmitsburg, MD",
    "Host": "Red Huskies",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 39.7311,
    "Longitude": -77.3653
  },
  {
    "Date": "2026-05-23",
    "Location": "Lancaster, PA",
    "Host": "Nose-It-All, LLC",
    "TrialTypes": "ELT, ELT-P, NW3",
    "EventCount": 3,
    "Latitude": 40.0162,
    "Longitude": -76.2686
  },
  {
    "Date": "2026-05-23",
    "Location": "Murfreesboro, TN",
    "Host": "Dogs Have Amazing Noses, LLC",
    "TrialTypes": "ELT, NW1",
    "EventCount": 2,
    "Latitude": 35.8204,
    "Longitude": -86.3698
  },
  {
    "Date": "2026-05-23",
    "Location": "North Manchester, IN",
    "Host": "2 Nose You Is 2 Loves You",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 41.0484,
    "Longitude": -85.7804
  },
  {
    "Date": "2026-05-23",
    "Location": "Rainier, WA",
    "Host": "Let's Talk Dogs, LLC & About Face K9 Academy",
    "TrialTypes": "ELT-S, L1C, NW2",
    "EventCount": 3,
    "Latitude": 46.8928,
    "Longitude": -122.6808
  },
  {
    "Date": "2026-05-23",
    "Location": "Red Feather Lakes, CO",
    "Host": "Beyond Elevation K9 Training LLC",
    "TrialTypes": "NW1, NW2, NW3",
    "EventCount": 3,
    "Latitude": 40.7921,
    "Longitude": -105.5899
  },
  {
    "Date": "2026-05-23",
    "Location": "Rockaway, NJ",
    "Host": "Shamrock Pot Of Gold K9 Scenter",
    "TrialTypes": "NW3, L3E, NW2, ELT-S",
    "EventCount": 4,
    "Latitude": 40.9491,
    "Longitude": -74.4639
  },
  {
    "Date": "2026-05-23",
    "Location": "Sandy, OR",
    "Host": "Trust Your Dog K9 Events",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 45.3599,
    "Longitude": -122.3017
  },
  {
    "Date": "2026-05-25",
    "Location": "Manchester, NH",
    "Host": "For the Love of Dogs NY, LLC",
    "TrialTypes": "NW2, ELT-P, ELT",
    "EventCount": 3,
    "Latitude": 43.027,
    "Longitude": -71.4102
  },
  {
    "Date": "2026-05-28",
    "Location": "Concord, CA",
    "Host": "The Bay Team",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 38.0176,
    "Longitude": -122.0102
  },
  {
    "Date": "2026-05-29",
    "Location": "Grand Junction, CO",
    "Host": "Mountain Dogs LLC",
    "TrialTypes": "NW3, L1V, L1E",
    "EventCount": 3,
    "Latitude": 39.1131,
    "Longitude": -108.5603
  },
  {
    "Date": "2026-05-30",
    "Location": "Amherst, NY",
    "Host": "Do Over Dog Training",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 42.9326,
    "Longitude": -78.7703
  },
  {
    "Date": "2026-05-30",
    "Location": "Eden Prairie, MN",
    "Host": "The K9 Nose",
    "TrialTypes": "NW2",
    "EventCount": 1,
    "Latitude": 44.8373,
    "Longitude": -93.4258
  },
  {
    "Date": "2026-05-30",
    "Location": "Spencer, MA",
    "Host": "Lucky Dog Events",
    "TrialTypes": "ELT, L1E, L2C",
    "EventCount": 3,
    "Latitude": 42.2526,
    "Longitude": -71.9978
  },
  {
    "Date": "2026-06-06",
    "Location": "Dunmore, PA",
    "Host": "Your Dog's Place, LLC",
    "TrialTypes": "ELT, ELT-S, L1C",
    "EventCount": 3,
    "Latitude": 41.3738,
    "Longitude": -75.6242
  },
  {
    "Date": "2026-06-06",
    "Location": "Enterprise, OR",
    "Host": "Country K9 Nosework, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 45.4161,
    "Longitude": -117.3262
  },
  {
    "Date": "2026-06-06",
    "Location": "Manheim, PA",
    "Host": "Nose-It-All, LLC",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 40.1391,
    "Longitude": -76.3729
  },
  {
    "Date": "2026-06-06",
    "Location": "Meadowbrook, PA",
    "Host": "Patricia Grassey",
    "TrialTypes": "NW3, NW1, NW2, ELT",
    "EventCount": 4,
    "Latitude": 40.1181,
    "Longitude": -75.1101
  },
  {
    "Date": "2026-06-06",
    "Location": "Rochester, NH",
    "Host": "Pawsitive Image",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 43.3432,
    "Longitude": -71.0177
  },
  {
    "Date": "2026-06-06",
    "Location": "Shawnee, OK",
    "Host": "The Doggie Spot, LLC",
    "TrialTypes": "NW3, NW2, NW1",
    "EventCount": 3,
    "Latitude": 35.285,
    "Longitude": -96.9319
  },
  {
    "Date": "2026-06-06",
    "Location": "Slippery Rock, PA",
    "Host": "Nosework Addicts, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 41.0479,
    "Longitude": -80.0999
  },
  {
    "Date": "2026-06-06",
    "Location": "Sparks Glencoe, MD",
    "Host": "Chesapeake Search Dogs",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 39.5256,
    "Longitude": -76.6405
  },
  {
    "Date": "2026-06-06",
    "Location": "Wrightstown, WI",
    "Host": "NEWk9Scent Work LLC",
    "TrialTypes": "NW3, NW1, L1I",
    "EventCount": 3,
    "Latitude": 44.2809,
    "Longitude": -88.2018
  },
  {
    "Date": "2026-06-12",
    "Location": "Gunnison, CO",
    "Host": "Mountain Dogs LLC",
    "TrialTypes": "ELT, ELT-S, ELT-P",
    "EventCount": 3,
    "Latitude": 38.6488,
    "Longitude": -107.1097
  },
  {
    "Date": "2026-06-12",
    "Location": "New Hope, PA",
    "Host": "Patricia Grassey",
    "TrialTypes": "ELT, ELT-P, ELT-S, L3E",
    "EventCount": 4,
    "Latitude": 40.3213,
    "Longitude": -74.9726
  },
  {
    "Date": "2026-06-13",
    "Location": "East Helena, MT",
    "Host": "Nose Work Breakfast Club",
    "TrialTypes": "NW1, NW2, NW3",
    "EventCount": 3,
    "Latitude": 46.5982,
    "Longitude": -111.9459
  },
  {
    "Date": "2026-06-13",
    "Location": "Ithaca, NY",
    "Host": "The Brainy Canine",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 42.3968,
    "Longitude": -76.5281
  },
  {
    "Date": "2026-06-13",
    "Location": "Kenosha, WI",
    "Host": "Loving Paws Dog Training LLC",
    "TrialTypes": "ELT-S, L1I, NW1",
    "EventCount": 3,
    "Latitude": 42.5521,
    "Longitude": -87.8153
  },
  {
    "Date": "2026-06-13",
    "Location": "Linden, MI",
    "Host": "Every Dog Nosework",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 42.8524,
    "Longitude": -83.7956
  },
  {
    "Date": "2026-06-13",
    "Location": "Nazareth/Windgap, PA",
    "Host": "Paws n' Sniff",
    "TrialTypes": "NW2, ELT, NW1, ELT-S, NW3",
    "EventCount": 5,
    "Latitude": 40.7304,
    "Longitude": -75.3243
  },
  {
    "Date": "2026-06-13",
    "Location": "Palmyra, VA",
    "Host": "Your Dog Knows LLC",
    "TrialTypes": "L1I, L2I, L1C, L2C",
    "EventCount": 4,
    "Latitude": 37.8881,
    "Longitude": -78.2163
  },
  {
    "Date": "2026-06-18",
    "Location": "Westminster, MD",
    "Host": "Firezone GS",
    "TrialTypes": "ELT, NW3, ELT-S, NW2",
    "EventCount": 4,
    "Latitude": 39.6146,
    "Longitude": -76.9561
  },
  {
    "Date": "2026-06-19",
    "Location": "Bayfield, CO",
    "Host": "Mountain Dogs, LLC",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 37.2619,
    "Longitude": -107.5604
  },
  {
    "Date": "2026-06-19",
    "Location": "Jordan, MN",
    "Host": "St. Paul Dog Training Club",
    "TrialTypes": "ELT, ELT-P, L1V, L2V",
    "EventCount": 4,
    "Latitude": 44.6527,
    "Longitude": -93.6145
  },
  {
    "Date": "2026-06-19",
    "Location": "New Rochelle, NY",
    "Host": "For the Love of Dogs NY, LLC",
    "TrialTypes": "ELT, NW3, ELT-P",
    "EventCount": 3,
    "Latitude": 40.9403,
    "Longitude": -73.794
  },
  {
    "Date": "2026-06-20",
    "Location": "Cumming, GA",
    "Host": "Georgia Nosework, LLC",
    "TrialTypes": "L2I, L2C, L3C, L1I",
    "EventCount": 4,
    "Latitude": 34.2533,
    "Longitude": -84.0906
  },
  {
    "Date": "2026-06-20",
    "Location": "Danvers, MA",
    "Host": "Everydog, LLC",
    "TrialTypes": "NW1, NW2, NW3",
    "EventCount": 3,
    "Latitude": 42.5637,
    "Longitude": -70.9841
  },
  {
    "Date": "2026-06-20",
    "Location": "Florissant, MO",
    "Host": "Happy Dog Concepts",
    "TrialTypes": "NW1, NW2, NW3",
    "EventCount": 3,
    "Latitude": 38.7879,
    "Longitude": -90.2813
  },
  {
    "Date": "2026-06-20",
    "Location": "Pittsburgh, PA",
    "Host": "Nosework Addicts, LLC",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 40.4873,
    "Longitude": -80.018
  },
  {
    "Date": "2026-06-20",
    "Location": "Terryville, CT",
    "Host": "Willoughby Training",
    "TrialTypes": "NW3, NW1",
    "EventCount": 2,
    "Latitude": 41.6996,
    "Longitude": -73.0255
  },
  {
    "Date": "2026-06-20",
    "Location": "White Salmon, WA",
    "Host": "Sharon Smith",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 45.7202,
    "Longitude": -121.529
  },
  {
    "Date": "2026-06-26",
    "Location": "Delran, NJ",
    "Host": "K9 InScentives",
    "TrialTypes": "NW1, ELT",
    "EventCount": 2,
    "Latitude": 39.987,
    "Longitude": -74.9546
  },
  {
    "Date": "2026-06-26",
    "Location": "Loveland, CO",
    "Host": "NoCo Unleashed LLC",
    "TrialTypes": "ELT-S, L2C, L2I, L1C",
    "EventCount": 4,
    "Latitude": 40.385,
    "Longitude": -105.1056
  },
  {
    "Date": "2026-06-26",
    "Location": "Red Lodge, MT",
    "Host": "Canine Connection",
    "TrialTypes": "ELT, NW3, NW1, NW2",
    "EventCount": 4,
    "Latitude": 45.1699,
    "Longitude": -109.2274
  },
  {
    "Date": "2026-06-27",
    "Location": "Burlington, WI",
    "Host": "Loving Paws Dog Training LLC",
    "TrialTypes": "NW2, ELT",
    "EventCount": 2,
    "Latitude": 42.6462,
    "Longitude": -88.2792
  },
  {
    "Date": "2026-06-27",
    "Location": "De Pere, WI",
    "Host": "NEWk9Scent Work LLC",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 44.4772,
    "Longitude": -88.0513
  },
  {
    "Date": "2026-06-27",
    "Location": "Deming, WA",
    "Host": "The Nosework Magic",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 48.8021,
    "Longitude": -122.1885
  },
  {
    "Date": "2026-06-27",
    "Location": "Inver Grove Heights, MN",
    "Host": "Outside the Box Dog Training, LLC",
    "TrialTypes": "NW3, L2C, L2I",
    "EventCount": 3,
    "Latitude": 44.8187,
    "Longitude": -93.0545
  },
  {
    "Date": "2026-06-27",
    "Location": "Lockport, IL",
    "Host": "4G & TB",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 41.6096,
    "Longitude": -88.0716
  },
  {
    "Date": "2026-06-27",
    "Location": "New Wilmington, PA",
    "Host": "Steel City Nosework, LLC",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 41.1399,
    "Longitude": -80.2872
  },
  {
    "Date": "2026-06-27",
    "Location": "Salem, OR",
    "Host": "Doglandia, LLC",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 44.9745,
    "Longitude": -123.0518
  },
  {
    "Date": "2026-06-27",
    "Location": "Somers, CT",
    "Host": "HeavenScent Sniffers",
    "TrialTypes": "NW2, L3C, ELT-S",
    "EventCount": 3,
    "Latitude": 41.9501,
    "Longitude": -72.4005
  },
  {
    "Date": "2026-06-30",
    "Location": "Delran, NJ",
    "Host": "Ev-ry Earthdog, LLC",
    "TrialTypes": "NW3, NW1, NW2, ELT-P",
    "EventCount": 4,
    "Latitude": 40.0014,
    "Longitude": -74.9757
  },
  {
    "Date": "2026-07-03",
    "Location": "Huntington, MA",
    "Host": "Shamrock Pot Of Gold K9 Scenter",
    "TrialTypes": "NW3, ELT, ELT-S, L2I",
    "EventCount": 4,
    "Latitude": 42.2542,
    "Longitude": -72.8404
  },
  {
    "Date": "2026-07-06",
    "Location": "Montgomery, NY",
    "Host": "For the Love of Dogs NY LLC",
    "TrialTypes": "NW2, ELT",
    "EventCount": 2,
    "Latitude": 42.9076,
    "Longitude": -74.3772
  },
  {
    "Date": "2026-07-10",
    "Location": "Leadville, CO",
    "Host": "Mountain Dogs LLC",
    "TrialTypes": "NW3, NW2, NW1, L2I, L2C",
    "EventCount": 5,
    "Latitude": 39.2943,
    "Longitude": -106.3172
  },
  {
    "Date": "2026-07-10",
    "Location": "Sparks Glencoe, MD",
    "Host": "Firezone GS",
    "TrialTypes": "ELT-P, ELT-S, L3I, ELT",
    "EventCount": 4,
    "Latitude": 39.5535,
    "Longitude": -76.6355
  },
  {
    "Date": "2026-07-11",
    "Location": "Livonia, MI",
    "Host": "Every Dog Nosework",
    "TrialTypes": "ELT-P, NW1",
    "EventCount": 2,
    "Latitude": 42.369,
    "Longitude": -83.3914
  },
  {
    "Date": "2026-07-13",
    "Location": "Derry, NH",
    "Host": "Lucky Dog Events",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 42.9066,
    "Longitude": -71.3052
  },
  {
    "Date": "2026-07-13",
    "Location": "Florham Park, NJ",
    "Host": "For the Love of Dogs NY LLC",
    "TrialTypes": "L1C, L1I, ELT",
    "EventCount": 3,
    "Latitude": 40.8354,
    "Longitude": -74.3543
  },
  {
    "Date": "2026-07-17",
    "Location": "Encinitas, CA",
    "Host": "Rewarding Rover LLC & UberDog/Jessica Koester",
    "TrialTypes": "NW2, NW1, ELT-S",
    "EventCount": 3,
    "Latitude": 33.0302,
    "Longitude": -117.3128
  },
  {
    "Date": "2026-07-17",
    "Location": "Leadville, CO",
    "Host": "Mountain Dogs LLC",
    "TrialTypes": "ELT, NW3, ELT-S, NW2",
    "EventCount": 4,
    "Latitude": 39.2284,
    "Longitude": -106.2795
  },
  {
    "Date": "2026-07-18",
    "Location": "Los Osos, CA",
    "Host": "Central Coast Nosework Club",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 35.3574,
    "Longitude": -120.8684
  },
  {
    "Date": "2026-07-18",
    "Location": "Woodbury, MN",
    "Host": "Gretchen Hofheins-Wackerfuss",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 44.9284,
    "Longitude": -92.9151
  },
  {
    "Date": "2026-07-25",
    "Location": "Elmira, OR",
    "Host": "Kiddy Christie",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 44.0853,
    "Longitude": -123.3979
  },
  {
    "Date": "2026-07-29",
    "Location": "Soldotna, AK",
    "Host": "Peninsula Dog Obedience Group LLC",
    "TrialTypes": "NW1, NW2, NW3, ELT",
    "EventCount": 4,
    "Latitude": 60.4915,
    "Longitude": -151.1073
  },
  {
    "Date": "2026-08-01",
    "Location": "Bettendorf, IA",
    "Host": "Fur Better Fur Worse Dog Training",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 41.5713,
    "Longitude": -90.5405
  },
  {
    "Date": "2026-08-01",
    "Location": "Columbia, MO",
    "Host": "Columbia Canine Sports Center, LLC",
    "TrialTypes": "L1V, L1I, L1C, L2C",
    "EventCount": 4,
    "Latitude": 38.9515,
    "Longitude": -92.3415
  },
  {
    "Date": "2026-08-01",
    "Location": "Deming, WA",
    "Host": "The Nosework Magic",
    "TrialTypes": "ELT, NW2",
    "EventCount": 2,
    "Latitude": 48.8735,
    "Longitude": -122.256
  },
  {
    "Date": "2026-08-01",
    "Location": "Jefferson, WI",
    "Host": "K9 Ventures",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 43.0698,
    "Longitude": -88.8164
  },
  {
    "Date": "2026-08-01",
    "Location": "Pillager, MN",
    "Host": "Nose 2 Tail Dog Training LLC",
    "TrialTypes": "NW1, NW2, ELT-P",
    "EventCount": 3,
    "Latitude": 46.2846,
    "Longitude": -94.5069
  },
  {
    "Date": "2026-08-07",
    "Location": "Huntington Beach, CA",
    "Host": "JavaK9s, LLC",
    "TrialTypes": "ELT, L2C, L2I",
    "EventCount": 3,
    "Latitude": 33.6322,
    "Longitude": -118.0221
  },
  {
    "Date": "2026-08-08",
    "Location": "Altamont, IL",
    "Host": "Kudos for Canines, LLC",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 39.0463,
    "Longitude": -88.7315
  },
  {
    "Date": "2026-08-14",
    "Location": "La Jolla, CA",
    "Host": "Rewarding Rover LLC & UberDog/Jessica Koester",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 32.8179,
    "Longitude": -117.2327
  },
  {
    "Date": "2026-08-15",
    "Location": "Greenwich, CT",
    "Host": "For the Love of Dogs NY LLC",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 40.9823,
    "Longitude": -73.5935
  },
  {
    "Date": "2026-08-15",
    "Location": "Monmouth, OR",
    "Host": "Doglandia, LLC",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 44.8195,
    "Longitude": -123.2563
  },
  {
    "Date": "2026-08-21",
    "Location": "Chelsea, MI",
    "Host": "Force Free Dale, LLC",
    "TrialTypes": "NW3, L1V, L1C, NW2",
    "EventCount": 4,
    "Latitude": 42.3627,
    "Longitude": -83.9973
  },
  {
    "Date": "2026-08-22",
    "Location": "Greenfield, MA",
    "Host": "Lucky Dog Events",
    "TrialTypes": "NW3, NW2, NW1",
    "EventCount": 3,
    "Latitude": 42.5448,
    "Longitude": -72.6047
  },
  {
    "Date": "2026-08-22",
    "Location": "Johnstown, NY",
    "Host": "My Dog Smells LLC",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 43.0015,
    "Longitude": -74.3489
  },
  {
    "Date": "2026-08-22",
    "Location": "North Bend, WA",
    "Host": "Northwest K9 Sniffers",
    "TrialTypes": "ELT, L1C, L2I",
    "EventCount": 3,
    "Latitude": 47.4663,
    "Longitude": -121.8327
  },
  {
    "Date": "2026-08-28",
    "Location": "Easton and Lutherville, MD",
    "Host": "Fair Play Labradors",
    "TrialTypes": "ELT-S, L2E, L2C, NW1, L1I",
    "EventCount": 5,
    "Latitude": 39.3865,
    "Longitude": -76.6357
  },
  {
    "Date": "2026-08-28",
    "Location": "Meeker, CO",
    "Host": "Mountain Dogs LLC",
    "TrialTypes": "NW3, NW1, L2C, NW2",
    "EventCount": 4,
    "Latitude": 40.0843,
    "Longitude": -107.9423
  },
  {
    "Date": "2026-08-29",
    "Location": "Dunkirk, NY",
    "Host": "Do Over Dog Training",
    "TrialTypes": "NW1, NW2, ELT-S, L3E",
    "EventCount": 4,
    "Latitude": 42.4696,
    "Longitude": -79.3024
  },
  {
    "Date": "2026-08-31",
    "Location": "Cambria, CA",
    "Host": "Gentle Touch Pet Training",
    "TrialTypes": "ELT, L1E, L2E",
    "EventCount": 3,
    "Latitude": 35.5943,
    "Longitude": -121.1118
  },
  {
    "Date": "2026-09-05",
    "Location": "Luthersville, GA",
    "Host": "Hold The Line K9 LLC",
    "TrialTypes": "L1I, L2I, NW3",
    "EventCount": 3,
    "Latitude": 33.2273,
    "Longitude": -84.7315
  },
  {
    "Date": "2026-09-11",
    "Location": "Richmond, VA",
    "Host": "Paws Plus Training, LLC",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 37.5322,
    "Longitude": -77.4051
  },
  {
    "Date": "2026-09-12",
    "Location": "Clinton, PA",
    "Host": "Nosework Addicts, LLC",
    "TrialTypes": "NW1, ELT",
    "EventCount": 2,
    "Latitude": 40.5182,
    "Longitude": -80.296
  },
  {
    "Date": "2026-09-12",
    "Location": "Lafayette Hill, PA",
    "Host": "Sniff Sniff Hooray",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 40.09,
    "Longitude": -75.2696
  },
  {
    "Date": "2026-09-12",
    "Location": "Loma Mar, CA",
    "Host": "The Bay Team",
    "TrialTypes": "NW2, ELT",
    "EventCount": 2,
    "Latitude": 37.2192,
    "Longitude": -122.3026
  },
  {
    "Date": "2026-09-12",
    "Location": "Sharon, MA",
    "Host": "Bay State Sniffers",
    "TrialTypes": "ELT, ELT-S, NW2",
    "EventCount": 3,
    "Latitude": 42.1684,
    "Longitude": -71.2052
  },
  {
    "Date": "2026-09-13",
    "Location": "Colesville, MD",
    "Host": "Red Huskies",
    "TrialTypes": "ELT-S, L3C, NW3",
    "EventCount": 3,
    "Latitude": 39.0497,
    "Longitude": -76.9777
  },
  {
    "Date": "2026-09-18",
    "Location": "Flint, MI",
    "Host": "Every Dog Nosework",
    "TrialTypes": "NW3, NW1, NW2, ELT-P",
    "EventCount": 4,
    "Latitude": 43.0002,
    "Longitude": -83.6514
  },
  {
    "Date": "2026-09-18",
    "Location": "New Milford, PA",
    "Host": "Your Dog's Place, LLC",
    "TrialTypes": "ELT, ELT-S, L1V",
    "EventCount": 3,
    "Latitude": 41.8376,
    "Longitude": -75.7646
  },
  {
    "Date": "2026-09-19",
    "Location": "Ford City, PA",
    "Host": "Steel City Nosework, LLC",
    "TrialTypes": "ELT, ELT-S, NW2",
    "EventCount": 3,
    "Latitude": 40.7395,
    "Longitude": -79.5646
  },
  {
    "Date": "2026-09-19",
    "Location": "Glen Mills, PA",
    "Host": "Firezone GS",
    "TrialTypes": "NW3, ELT-P",
    "EventCount": 2,
    "Latitude": 39.9257,
    "Longitude": -75.4515
  },
  {
    "Date": "2026-09-19",
    "Location": "Palmer, MA",
    "Host": "HeavenScent Sniffers",
    "TrialTypes": "NW3, L2V, L1E",
    "EventCount": 3,
    "Latitude": 42.139,
    "Longitude": -72.354
  },
  {
    "Date": "2026-09-19",
    "Location": "Stevenson, WA",
    "Host": "Sharon Smith",
    "TrialTypes": "NW1, NW2, L1V, L1C",
    "EventCount": 4,
    "Latitude": 45.6539,
    "Longitude": -121.8893
  },
  {
    "Date": "2026-09-25",
    "Location": "Frederick, MD",
    "Host": "Red Huskies",
    "TrialTypes": "L3E, ELT-S, ELT-P, ELT",
    "EventCount": 4,
    "Latitude": 39.411,
    "Longitude": -77.4219
  },
  {
    "Date": "2026-09-26",
    "Location": "Columbus, MT",
    "Host": "Canine Connection",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 45.5956,
    "Longitude": -109.2636
  },
  {
    "Date": "2026-09-26",
    "Location": "Glenview, IL",
    "Host": "Northwest Obedience Club Inc",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 42.0281,
    "Longitude": -87.7632
  },
  {
    "Date": "2026-09-26",
    "Location": "Kintnersville, PA",
    "Host": "Paws n’ Sniff",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 40.5619,
    "Longitude": -75.1886
  },
  {
    "Date": "2026-09-26",
    "Location": "Lawrenceville, GA",
    "Host": "Right Choice Dog Training, LLC",
    "TrialTypes": "L1E, NW2, ELT-S, L3I",
    "EventCount": 4,
    "Latitude": 33.9679,
    "Longitude": -84.0339
  },
  {
    "Date": "2026-09-26",
    "Location": "New City, NY",
    "Host": "Saints2Source, LLC",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 41.1495,
    "Longitude": -73.9796
  },
  {
    "Date": "2026-09-26",
    "Location": "Rehoboth, MA",
    "Host": "Dogs Make Scents",
    "TrialTypes": "NW3, NW1",
    "EventCount": 2,
    "Latitude": 41.8712,
    "Longitude": -71.268
  },
  {
    "Date": "2026-09-27",
    "Location": "Dover, DE",
    "Host": "Patricia Grassey",
    "TrialTypes": "NW3, NW2, ELT",
    "EventCount": 3,
    "Latitude": 39.1219,
    "Longitude": -75.5108
  },
  {
    "Date": "2026-09-28",
    "Location": "Concord, NH",
    "Host": "For the Love of Dogs NY LLC",
    "TrialTypes": "NW2, NW3",
    "EventCount": 2,
    "Latitude": 43.182,
    "Longitude": -71.5721
  },
  {
    "Date": "2026-10-03",
    "Location": "Hagerstown, MD",
    "Host": "Firezone GS",
    "TrialTypes": "ELT-S, NW3, ELT",
    "EventCount": 3,
    "Latitude": 39.6876,
    "Longitude": -77.7582
  },
  {
    "Date": "2026-10-03",
    "Location": "Hammond, LA",
    "Host": "Dog Gone Right, LLC",
    "TrialTypes": "NW1, NW2, L1I, ELT-S",
    "EventCount": 4,
    "Latitude": 30.476,
    "Longitude": -90.47
  },
  {
    "Date": "2026-10-03",
    "Location": "Jefferson, OR",
    "Host": "Doglandia, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 44.6526,
    "Longitude": -121.2788
  },
  {
    "Date": "2026-10-03",
    "Location": "Nashua, NH",
    "Host": "The Big Sniff, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 42.7459,
    "Longitude": -71.5127
  },
  {
    "Date": "2026-10-03",
    "Location": "New Paltz, NY",
    "Host": "Top Notch Dogs, LLC",
    "TrialTypes": "NW1, L2C, ELT",
    "EventCount": 3,
    "Latitude": 41.7123,
    "Longitude": -74.0767
  },
  {
    "Date": "2026-10-03",
    "Location": "Northampton, MA",
    "Host": "Lucky Dog Events",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 42.297,
    "Longitude": -72.5855
  },
  {
    "Date": "2026-10-03",
    "Location": "Seguin, TX",
    "Host": "Scent Work Across Texas",
    "TrialTypes": "NW1, NW2, NW3",
    "EventCount": 3,
    "Latitude": 29.5461,
    "Longitude": -97.9593
  },
  {
    "Date": "2026-10-03",
    "Location": "Sisters, OR",
    "Host": "Sunriver K9 Genie, LLC",
    "TrialTypes": "NW2, ELT",
    "EventCount": 2,
    "Latitude": 44.2558,
    "Longitude": -121.534
  },
  {
    "Date": "2026-10-03",
    "Location": "Waynesboro, PA",
    "Host": "Nose-It-All, LLC",
    "TrialTypes": "NW1, NW2, NW3",
    "EventCount": 3,
    "Latitude": 39.7813,
    "Longitude": -77.6154
  },
  {
    "Date": "2026-10-09",
    "Location": "Middlebury, CT",
    "Host": "For the Love of Dogs NY LLC",
    "TrialTypes": "ELT, ELT-P, NW1",
    "EventCount": 3,
    "Latitude": 41.4899,
    "Longitude": -73.161
  },
  {
    "Date": "2026-10-09",
    "Location": "Pueblo, CO",
    "Host": "Mountain Dogs, LLC",
    "TrialTypes": "SMT, ELT",
    "EventCount": 2,
    "Latitude": 38.2146,
    "Longitude": -104.597
  },
  {
    "Date": "2026-10-09",
    "Location": "Rock Island, IL",
    "Host": "Fur Better Fur Worse Dog Training",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 41.402,
    "Longitude": -90.549
  },
  {
    "Date": "2026-10-10",
    "Location": "Auburn, WA",
    "Host": "Northwest K9 Sniffers",
    "TrialTypes": "ELT-S, L2E, L3I",
    "EventCount": 3,
    "Latitude": 47.2617,
    "Longitude": -122.2047
  },
  {
    "Date": "2026-10-10",
    "Location": "Court Granger, IA",
    "Host": "KBP Dog Training",
    "TrialTypes": "NW1, NW2, NW3",
    "EventCount": 3,
    "Latitude": 41.8052,
    "Longitude": -93.8548
  },
  {
    "Date": "2026-10-10",
    "Location": "Eagan, MN",
    "Host": "St Paul Dog Training Club",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 44.8288,
    "Longitude": -93.1423
  },
  {
    "Date": "2026-10-10",
    "Location": "Eldred, NY",
    "Host": "Your Dog's Place, LLC",
    "TrialTypes": "L2C, NW2, ELT-S, L1C",
    "EventCount": 4,
    "Latitude": 41.4903,
    "Longitude": -74.9045
  },
  {
    "Date": "2026-10-10",
    "Location": "Helena, MT",
    "Host": "Nose Work Breakfast Club",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 46.5607,
    "Longitude": -112.0534
  },
  {
    "Date": "2026-10-10",
    "Location": "Loveland, CO",
    "Host": "Paws 4 Thought Dog Training, LLC",
    "TrialTypes": "NW2, NW1, L1E",
    "EventCount": 3,
    "Latitude": 40.4364,
    "Longitude": -105.101
  },
  {
    "Date": "2026-10-10",
    "Location": "Sedona, AZ",
    "Host": "Successful Sniffer",
    "EventLink": "https://www.successfulsniffer.com/trials-and-events",
    "TrialTypes": "ELT, NW1, NW2",
    "EventCount": 3,
    "Latitude": 34.8672,
    "Longitude": -111.7211
  },
  {
    "Date": "2026-10-10",
    "Location": "Troy, VA",
    "Host": "Your Dogs Knows LLC",
    "TrialTypes": "NW1, ELT-S, L1V, L2V",
    "EventCount": 4,
    "Latitude": 37.9591,
    "Longitude": -78.296
  },
  {
    "Date": "2026-10-10",
    "Location": "Youngwood, PA",
    "Host": "Steel City Nosework, LLC",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 40.2632,
    "Longitude": -79.5599
  },
  {
    "Date": "2026-10-12",
    "Location": "Swansea, MA",
    "Host": "Amy Conrad & Heaven Scent Sniffers",
    "EventLink": "https://sniffstreams.smugmug.com/Events",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 41.7043,
    "Longitude": -71.1657
  },
  {
    "Date": "2026-10-16",
    "Location": "Calhan, CO",
    "Host": "Mountain Dogs LLC",
    "EventLink": "https://mountaindogs.org/",
    "TrialTypes": "ELT, NW3, ELT-P",
    "EventCount": 3,
    "Latitude": 39.04,
    "Longitude": -104.2528
  },
  {
    "Date": "2026-10-16",
    "Location": "Rossville, GA",
    "Host": "Camelot Shepherds, Inc.",
    "EventLink": "https://www.snifferschool.com/events",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 34.9504,
    "Longitude": -85.3326
  },
  {
    "Date": "2026-10-16",
    "Location": "Wilmington, DE",
    "Host": "Patricia Grassey",
    "EventLink": "https://thesniffinghound.com/about",
    "TrialTypes": "NW3, ELT, ELT-P",
    "EventCount": 3,
    "Latitude": 39.7772,
    "Longitude": -75.5288
  },
  {
    "Date": "2026-10-17",
    "Location": "Albuquerque, NM",
    "Host": "New Mexico Canine Scent Work, LLC",
    "EventLink": "https://www.nmcsw.com/events/#oct26",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 35.1243,
    "Longitude": -106.6265
  },
  {
    "Date": "2026-10-17",
    "Location": "Centralia, WA",
    "Host": "Let's Talk Dogs, LLC and About Face K9",
    "EventLink": "https://dorothyturley.com/trials-and-orts/",
    "TrialTypes": "ELT-S, NW2, L3C",
    "EventCount": 3,
    "Latitude": 46.7504,
    "Longitude": -122.9276
  },
  {
    "Date": "2026-10-17",
    "Location": "Colebrook, CT",
    "Host": "For the Love of Dogs NY LLC",
    "EventLink": "https://www.fortheloveofdogsny.com/nacsw-trials",
    "TrialTypes": "L1E, ELT-S, NW2, ELT",
    "EventCount": 4,
    "Latitude": 42.0074,
    "Longitude": -73.0503
  },
  {
    "Date": "2026-10-17",
    "Location": "Conroe, TX",
    "Host": "Scent Work Across Texas",
    "EventLink": "https://scentworkacrosstexas.com/",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 30.3395,
    "Longitude": -95.464
  },
  {
    "Date": "2026-10-17",
    "Location": "Delevan, NY",
    "Host": "Do Over Dog Training",
    "EventLink": "https://www.dooverdogtraining.com/trials",
    "TrialTypes": "NW3, L1C, L3V",
    "EventCount": 3,
    "Latitude": 42.4638,
    "Longitude": -78.4456
  },
  {
    "Date": "2026-10-17",
    "Location": "Niantic, IL",
    "Host": "Kudos for Canines, LLC",
    "EventLink": "https://kudosforcanines.com/",
    "TrialTypes": "L2C, ELT-S, NW3",
    "EventCount": 3,
    "Latitude": 39.8982,
    "Longitude": -89.2052
  },
  {
    "Date": "2026-10-17",
    "Location": "Staples, MN",
    "Host": "Nose 2 Tail Dog Training LLC",
    "EventLink": "https://nose2tail.net/nacsw-nw3-elite-2/",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 46.3196,
    "Longitude": -94.7613
  },
  {
    "Date": "2026-10-17",
    "Location": "Watsonville, CA",
    "Host": "CalCoastal Dog Owners Group",
    "EventLink": "https://cc-dog.org/",
    "TrialTypes": "L3V, L2V, L1V",
    "EventCount": 3,
    "Latitude": 36.923,
    "Longitude": -121.7607
  },
  {
    "Date": "2026-10-24",
    "Location": "Cumming, GA",
    "Host": "Georgia Nosework",
    "EventLink": "https://georgianosework.com/",
    "TrialTypes": "NW3, L1C, NW2",
    "EventCount": 3,
    "Latitude": 34.1827,
    "Longitude": -84.1825
  },
  {
    "Date": "2026-10-24",
    "Location": "Fishkill, NY",
    "Host": "Top Notch Dogs, LLC",
    "EventLink": "https://www.topnotchdogtraining.com",
    "TrialTypes": "ELT-P, ELT",
    "EventCount": 2,
    "Latitude": 41.5056,
    "Longitude": -73.9475
  },
  {
    "Date": "2026-10-24",
    "Location": "Green Bay, WI",
    "Host": "NEWk9Scent Work LLC",
    "EventLink": "https://newk9scentwork.com/nose-work-trials-2",
    "TrialTypes": "NW2, ELT",
    "EventCount": 2,
    "Latitude": 44.5441,
    "Longitude": -87.9788
  },
  {
    "Date": "2026-10-24",
    "Location": "Kilmarnock, VA",
    "Host": "Red Huskies",
    "EventLink": "https://nosework.redhuskies.com/",
    "TrialTypes": "ELT, NW1, ELT-S",
    "EventCount": 3,
    "Latitude": 37.6873,
    "Longitude": -76.428
  },
  {
    "Date": "2026-10-24",
    "Location": "Norton, MA",
    "Host": "Dogs Make Scents",
    "EventLink": "https://dogsmakescents.com/events/",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 41.9594,
    "Longitude": -71.2303
  },
  {
    "Date": "2026-10-24",
    "Location": "Penn Yan, NY",
    "Host": "2 Psyched 4 Dogs",
    "EventLink": "https://2psyched4dogs.com/",
    "TrialTypes": "ELT, ELT-S, NW2",
    "EventCount": 3,
    "Latitude": 42.6315,
    "Longitude": -77.0337
  },
  {
    "Date": "2026-10-24",
    "Location": "Reedsport, OR",
    "Host": "Wells Creek Dog Training",
    "EventLink": "https://wellscreekdogtraining.com/",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 43.6903,
    "Longitude": -124.1013
  },
  {
    "Date": "2026-10-26",
    "Location": "Stockton, CA",
    "Host": "Two Nosey Girls",
    "EventLink": "https://twonoseygirls.com/",
    "TrialTypes": "L3E, L2E",
    "EventCount": 2,
    "Latitude": 37.9195,
    "Longitude": -121.3264
  },
  {
    "Date": "2026-10-28",
    "Location": "Aberdeen, MD",
    "Host": "Red Huskies",
    "EventLink": "https://nosework.redhuskies.com/",
    "TrialTypes": "ELT, ELT-P, ELT-S, L2I",
    "EventCount": 4,
    "Latitude": 39.5541,
    "Longitude": -76.2075
  },
  {
    "Date": "2026-10-30",
    "Location": "Cameron Park, CA",
    "Host": "Sierra Sniffing Canines, Inc",
    "EventLink": "https://sierrasniffingcanines.org/",
    "TrialTypes": "NW1, NW3",
    "EventCount": 2,
    "Latitude": 38.6657,
    "Longitude": -120.9647
  },
  {
    "Date": "2026-10-30",
    "Location": "Harrington, DE",
    "Host": "Shamrock Pot Of Gold K9 Scenter",
    "EventLink": "https://shamrockpotofgoldk9scenter.com/",
    "TrialTypes": "NW3, ELT, NW1, ELT-S, L2E",
    "EventCount": 5,
    "Latitude": 38.9508,
    "Longitude": -75.5924
  },
  {
    "Date": "2026-10-30",
    "Location": "Honey Brook, PA",
    "Host": "Patricia Grassey",
    "EventLink": "https://thesniffinghound.com/about",
    "TrialTypes": "NW1, L1C, L2C, NW2, L3I, L3C",
    "EventCount": 6,
    "Latitude": 40.1351,
    "Longitude": -75.9605
  },
  {
    "Date": "2026-10-30",
    "Location": "Lakeville, MN",
    "Host": "St Paul Dog Training Club",
    "EventLink": "https://spdtc.com/events-at-spdtc/",
    "TrialTypes": "ELT-P, NW2, ELT-S, L1C",
    "EventCount": 4,
    "Latitude": 44.6824,
    "Longitude": -93.2667
  },
  {
    "Date": "2026-10-30",
    "Location": "Lawrenceville, GA",
    "Host": "Chestnut Hill Canine Sports",
    "EventLink": "http://chestnuthillcaninesports.com/lawrenceville-2025/",
    "TrialTypes": "NW3, NW1, L2I",
    "EventCount": 3,
    "Latitude": 33.962,
    "Longitude": -83.9894
  },
  {
    "Date": "2026-10-30",
    "Location": "Montrose, CO",
    "Host": "Mountain Dogs LLC",
    "EventLink": "https://mountaindogs.org/",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 38.4848,
    "Longitude": -107.837
  },
  {
    "Date": "2026-10-30",
    "Location": "York, PA",
    "Host": "Firezone GS",
    "EventLink": "https://www.firezonegiantschnauzers.com/nose-work-trials",
    "TrialTypes": "ELT, NW3, ELT-P",
    "EventCount": 3,
    "Latitude": 39.9754,
    "Longitude": -76.7539
  },
  {
    "Date": "2026-10-31",
    "Location": "Beloit, WI",
    "Host": "George Carpenter",
    "EventLink": "https://gscarpenter.wixsite.com/scwnw/trials",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 42.5507,
    "Longitude": -89.0226
  },
  {
    "Date": "2026-10-31",
    "Location": "Bonham, TX",
    "Host": "All About The Nose",
    "EventLink": "https://www.allaboutthenose.com/",
    "TrialTypes": "NW2, NW1",
    "EventCount": 2,
    "Latitude": 33.5421,
    "Longitude": -96.1846
  },
  {
    "Date": "2026-10-31",
    "Location": "Franklin, GA",
    "Host": "Hold The Line K9 LLC",
    "EventLink": "https://www.holdthelinek9nosework.com/",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 34.3306,
    "Longitude": -83.1728
  },
  {
    "Date": "2026-10-31",
    "Location": "Kennebunkport, ME",
    "Host": "Elizabeth Dutton",
    "EventLink": "https://ehdutton.wordpress.com/",
    "TrialTypes": "NW3, ELT-P",
    "EventCount": 2,
    "Latitude": 43.3981,
    "Longitude": -70.4835
  },
  {
    "Date": "2026-10-31",
    "Location": "Sturgis, SD",
    "Host": "Two Paws Up Dog Training, LLC",
    "EventLink": "https://www.twopawsupdogtrainingllc.com/events",
    "TrialTypes": "L2V, L2E, L1V, L1E",
    "EventCount": 4,
    "Latitude": 44.3711,
    "Longitude": -103.4817
  },
  {
    "Date": "2026-10-31",
    "Location": "White Plains, NY",
    "Host": "Saints2Source, LLC",
    "EventLink": "https://www.saints2source.com/copy-of-new-city-ny-oct-2025",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 41.0817,
    "Longitude": -73.8047
  },
  {
    "Date": "2026-10-31",
    "Location": "Yamhill, OR",
    "Host": "Nose Work Detectives, LLC",
    "EventLink": "https://noseworkdetectives.com/",
    "TrialTypes": "ELT-P",
    "EventCount": 1,
    "Latitude": 45.2748,
    "Longitude": -123.2292
  },
  {
    "Date": "2026-11-01",
    "Location": "San Martin, CA",
    "Host": "B.L. McMutts LLC",
    "EventLink": "https://blmcmutts.com/events/nacsw-element-specialty-trial-nov26",
    "TrialTypes": "L1V, L2V",
    "EventCount": 2,
    "Latitude": 37.0903,
    "Longitude": -121.6234
  },
  {
    "Date": "2026-11-03",
    "Location": "Ventura, CA",
    "Host": "Pink Biscuit K9s",
    "EventLink": "https://www.pinkbiscuitk9s.com/arnaz-25-premium.html",
    "TrialTypes": "NW1, NW2, ELT-P",
    "EventCount": 3,
    "Latitude": 34.4803,
    "Longitude": -119.1039
  },
  {
    "Date": "2026-11-06",
    "Location": "Rome, GA",
    "Host": "Georgia Nosework, LLC",
    "EventLink": "https://georgianosework.com/events/",
    "TrialTypes": "NW3, NW1, NW2, ELT",
    "EventCount": 4,
    "Latitude": 34.3027,
    "Longitude": -85.1954
  },
  {
    "Date": "2026-11-07",
    "Location": "Bonner Springs, KS",
    "Host": "Brookside Pet Concierge",
    "EventLink": "https://bksdogtraining.com/",
    "TrialTypes": "NW1, NW2, NW3",
    "EventCount": 3,
    "Latitude": 39.0784,
    "Longitude": -94.9068
  },
  {
    "Date": "2026-11-07",
    "Location": "Colorado Springs, CO",
    "Host": "Beyond Elevation K9",
    "EventLink": "https://www.beyondelevationk9.com/",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 38.8585,
    "Longitude": -104.8132
  },
  {
    "Date": "2026-11-07",
    "Location": "Fishkill, NY",
    "Host": "Top Notch Dogs, LLC",
    "EventLink": "https://www.topnotchdogtraining.com/",
    "TrialTypes": "L3C, NW2, ELT",
    "EventCount": 3,
    "Latitude": 41.5814,
    "Longitude": -73.8862
  },
  {
    "Date": "2026-11-07",
    "Location": "Geneva, IL",
    "Host": "For Your K9, Inc",
    "EventLink": "http://www.foryourk9.com/",
    "TrialTypes": "ELT, NW1, NW2",
    "EventCount": 3,
    "Latitude": 41.8796,
    "Longitude": -88.2596
  },
  {
    "Date": "2026-11-07",
    "Location": "Guerneville, CA",
    "Host": "Jen Huot",
    "EventLink": "https://k9noseworkacademy.com/",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 38.4984,
    "Longitude": -122.9453
  },
  {
    "Date": "2026-11-07",
    "Location": "Lancaster, PA",
    "Host": "Red Huskies Nose Work, LLC",
    "EventLink": "https://nosework.redhuskies.com/index.php/events/lancaster_nov2026/",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 40.0151,
    "Longitude": -76.2704
  },
  {
    "Date": "2026-11-07",
    "Location": "Las Vegas, NV",
    "Host": "imPETus Animal Training",
    "EventLink": "https://www.impetusanimaltraining.com/",
    "TrialTypes": "NW3, NW1, L1C",
    "EventCount": 3,
    "Latitude": 36.1433,
    "Longitude": -115.1826
  },
  {
    "Date": "2026-11-07",
    "Location": "Mays Landing, NJ",
    "Host": "Rotts-n-Notts Nosework LLC",
    "EventLink": "https://www.rottsnnottsnosework.com/",
    "TrialTypes": "L1C, NW2, L1E, NW1",
    "EventCount": 4,
    "Latitude": 39.4757,
    "Longitude": -74.704
  },
  {
    "Date": "2026-11-07",
    "Location": "Woodward, IA",
    "Host": "KBP Dog Training",
    "EventLink": "https://kbpdogtraining.com/202611-nw3-elt/",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 41.8704,
    "Longitude": -93.8984
  },
  {
    "Date": "2026-11-09",
    "Location": "West Berlin, NJ",
    "Host": "For the Love of Dogs NY LLC",
    "EventLink": "https://www.fortheloveofdogsny.com/trials-events",
    "TrialTypes": "L2E, L1V, NW3, ELT-P",
    "EventCount": 4,
    "Latitude": 39.7753,
    "Longitude": -74.9467
  },
  {
    "Date": "2026-11-11",
    "Location": "Petaluma, CA",
    "Host": "Marin Humane",
    "EventLink": "https://marinhumane.org/oh-behave/nose-work-events/",
    "TrialTypes": "ELT-P, ELT",
    "EventCount": 2,
    "Latitude": 38.216,
    "Longitude": -122.6194
  },
  {
    "Date": "2026-11-13",
    "Location": "Chula Vista, CA",
    "Host": "Rewarding Rover LLC, Uberdog, & Claire Brocato",
    "EventLink": "https://www.rewardingrover.com/",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 32.6532,
    "Longitude": -117.0961
  },
  {
    "Date": "2026-11-13",
    "Location": "Gilbertsville, PA",
    "Host": "Sniff Sniff Hooray",
    "EventLink": "https://sniffsniffhooray.com/events",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 40.3308,
    "Longitude": -75.642
  },
  {
    "Date": "2026-11-13",
    "Location": "Ypsilanti, MI",
    "Host": "Every Dog Nosework",
    "EventLink": "https://everydognosework.com/trials",
    "TrialTypes": "ELT, ELT-S, L2C",
    "EventCount": 3,
    "Latitude": 42.2794,
    "Longitude": -83.5771
  },
  {
    "Date": "2026-11-14",
    "Location": "Coburg, OR",
    "Host": "Kiddy Christie",
    "EventLink": "https://wellscreekdogtraining.com/",
    "TrialTypes": "NW1, NW2, L2I, L3C",
    "EventCount": 4,
    "Latitude": 44.1079,
    "Longitude": -123.0988
  },
  {
    "Date": "2026-11-14",
    "Location": "Greer, SC",
    "Host": "Trained to Trust, LLC",
    "EventLink": "https://www.k9trainedtotrust.com/events",
    "TrialTypes": "NW3, L2V, NW1",
    "EventCount": 3,
    "Latitude": 34.8961,
    "Longitude": -82.1879
  },
  {
    "Date": "2026-11-14",
    "Location": "Montgomery, AL",
    "Host": "By A Nose Nosework",
    "EventLink": "https://www.byanosenosework.com/event-details/montgomery-al-elt-nw3",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 32.3758,
    "Longitude": -86.3346
  },
  {
    "Date": "2026-11-14",
    "Location": "Waymart, PA",
    "Host": "Your Dog's Place, LLC",
    "EventLink": "https://yourdogsplace.com/nacsw-trials/",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 41.5683,
    "Longitude": -75.4201
  },
  {
    "Date": "2026-11-16",
    "Location": "Ellicott City, MD",
    "Host": "Red Huskies",
    "EventLink": "https://nosework.redhuskies.com/index.php/events/ellicottcity_nov2026/",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 39.2938,
    "Longitude": -76.7947
  },
  {
    "Date": "2026-11-16",
    "Location": "Hartford, CT",
    "Host": "For the Love of Dogs NY LLC",
    "EventLink": "https://www.fortheloveofdogsny.com/trials-events",
    "TrialTypes": "L1I, ELT-S, ELT",
    "EventCount": 3,
    "Latitude": 41.767,
    "Longitude": -72.6686
  },
  {
    "Date": "2026-11-18",
    "Location": "Monkton, MD",
    "Host": "Firezone GS",
    "EventLink": "https://firezonegiantschnauzers.com/nose-work-trials",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 39.5687,
    "Longitude": -76.6297
  },
  {
    "Date": "2026-11-20",
    "Location": "Boring, OR",
    "Host": "Trust Your Dog K9 Events",
    "EventLink": "https://trustyourdogk9events.com/",
    "TrialTypes": "NW2, NW3, ELT",
    "EventCount": 3,
    "Latitude": 45.3855,
    "Longitude": -122.3605
  },
  {
    "Date": "2026-11-20",
    "Location": "Centreville, MD",
    "Host": "Fair Play Point Labradors",
    "EventLink": "https://www.fairplaylabradors.com/",
    "TrialTypes": "SMT, ELT-S, L1I",
    "EventCount": 3,
    "Latitude": 38.9957,
    "Longitude": -76.0544
  },
  {
    "Date": "2026-11-20",
    "Location": "Denver, PA",
    "Host": "Patricia Grassey",
    "EventLink": "https://thesniffinghound.com/about",
    "TrialTypes": "ELT, ELT-P, ELT-S, L3V",
    "EventCount": 4,
    "Latitude": 40.217,
    "Longitude": -76.104
  },
  {
    "Date": "2026-11-20",
    "Location": "Kintnersville, PA",
    "Host": "Paws n' Sniff",
    "EventLink": "http://www.pawsnsniff.com/",
    "TrialTypes": "NW1, L1C, L1E, L1I",
    "EventCount": 4,
    "Latitude": 40.5541,
    "Longitude": -75.2147
  },
  {
    "Date": "2026-11-20",
    "Location": "Lompoc, CA",
    "Host": "Gentle Touch Pet Training",
    "EventLink": "https://www.gentlepets.com/gtpt-events/nacsw%E2%84%A2-nw3",
    "TrialTypes": "NW3, NW2, NW1",
    "EventCount": 3,
    "Latitude": 34.5939,
    "Longitude": -120.4619
  },
  {
    "Date": "2026-11-20",
    "Location": "Loranger, LA",
    "Host": "Dog Gone Right",
    "EventLink": "http://www.doggoneright.net/",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 30.6294,
    "Longitude": -90.4404
  },
  {
    "Date": "2026-11-21",
    "Location": "Centralia, WA",
    "Host": "Let's Talk Dogs, LLC & About Face K9 Academy",
    "EventLink": "https://www.aboutfacek9academy.com/",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 46.7491,
    "Longitude": -123.0055
  },
  {
    "Date": "2026-11-21",
    "Location": "DeLeon Springs, FL",
    "Host": "River Poodles Training, LLC",
    "EventLink": "https://riverpoodlestraining.com/",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 29.091,
    "Longitude": -81.327
  },
  {
    "Date": "2026-11-21",
    "Location": "Delta, CO",
    "Host": "Mountain Dogs LLC",
    "EventLink": "https://mountaindogs.org/",
    "TrialTypes": "ELT, NW3, NW1, NW2",
    "EventCount": 4,
    "Latitude": 38.8257,
    "Longitude": -107.9024
  },
  {
    "Date": "2026-11-21",
    "Location": "Fork Union, VA",
    "Host": "Your Dog Knows, LLC",
    "EventLink": "https://yourdogknows.net/",
    "TrialTypes": "ELT, L2I, NW2",
    "EventCount": 3,
    "Latitude": 37.7467,
    "Longitude": -78.2152
  },
  {
    "Date": "2026-11-21",
    "Location": "Marble Falls, TX",
    "Host": "Scent Work Across Texas",
    "EventLink": "https://scentworkacrosstexas.com/nacsw-nov-21-22",
    "TrialTypes": "ELT-S, L2I, NW3",
    "EventCount": 3,
    "Latitude": 30.6096,
    "Longitude": -98.2435
  },
  {
    "Date": "2026-11-21",
    "Location": "Ontario, CA",
    "Host": "Agile Paws Dog Sports",
    "EventLink": "https://agilepawsdogsports.com/",
    "TrialTypes": "NW1, L3I, L3C",
    "EventCount": 3,
    "Latitude": 34.1158,
    "Longitude": -117.6519
  },
  {
    "Date": "2026-11-21",
    "Location": "Smyrna, TN",
    "Host": "Dogs Have Amazing Noses, LLC",
    "EventLink": "https://dogshaveamazingnoses.com/events/",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 35.9334,
    "Longitude": -86.5481
  },
  {
    "Date": "2026-11-22",
    "Location": "Wilbraham, MA",
    "Host": "Heaven Scent Sniffers",
    "EventLink": "https://www.heavenscentsniffers.com/",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 42.1364,
    "Longitude": -72.3866
  },
  {
    "Date": "2026-11-27",
    "Location": "Elizabeth, CO",
    "Host": "Beyond Elevation K9",
    "EventLink": "https://www.beyondelevationk9.com/",
    "TrialTypes": "NW2, NW3",
    "EventCount": 2,
    "Latitude": 39.3523,
    "Longitude": -104.6463
  },
  {
    "Date": "2026-11-27",
    "Location": "Long Beach, CA",
    "Host": "JavaK9s, LLC",
    "EventLink": "http://www.javak9s.com/",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 33.7864,
    "Longitude": -118.2182
  },
  {
    "Date": "2026-11-27",
    "Location": "San Jose, CA",
    "Host": "The Bay Team",
    "EventLink": "https://www.bayteam.org/",
    "TrialTypes": "NW2, NW1",
    "EventCount": 2,
    "Latitude": 37.3061,
    "Longitude": -121.9372
  },
  {
    "Date": "2026-11-28",
    "Location": "Bowie, MD",
    "Host": "Red Huskies Nose Work, LLC",
    "EventLink": "https://nosework.redhuskies.com/",
    "TrialTypes": "ELT-P, L3I, ELT-S, ELT",
    "EventCount": 4,
    "Latitude": 38.9104,
    "Longitude": -76.7244
  },
  {
    "Date": "2026-11-28",
    "Location": "Cottage Grove, MN",
    "Host": "Gretchen Hofheins-Wackerfuss",
    "EventLink": "https://www.sniffingminpin.com/",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 44.7933,
    "Longitude": -92.9506
  },
  {
    "Date": "2026-11-28",
    "Location": "Cumming, GA",
    "Host": "Georgia Nosework",
    "EventLink": "https://georgianosework.com/events/",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 34.2185,
    "Longitude": -84.1271
  },
  {
    "Date": "2026-11-28",
    "Location": "Lebanon, NJ",
    "Host": "Sirius K9 Solutions",
    "EventLink": "http://www.siriusk9solutions.net/NoseWork.html",
    "TrialTypes": "L2I, NW2, ELT-P",
    "EventCount": 3,
    "Latitude": 40.6858,
    "Longitude": -74.8003
  },
  {
    "Date": "2026-11-28",
    "Location": "Mifflinburg, PA",
    "Host": "Paws-itively Obedient Dog Training School",
    "EventLink": "https://pawsitivelyobedient.net/special-events/",
    "TrialTypes": "NW3, NW1",
    "EventCount": 2,
    "Latitude": 40.8681,
    "Longitude": -77.0119
  },
  {
    "Date": "2026-11-28",
    "Location": "Silex, MO",
    "Host": "WestInn Kennels",
    "EventLink": "https://westinnkennels.wixsite.com/silex",
    "TrialTypes": "NW1, NW2, NW3",
    "EventCount": 3,
    "Latitude": 39.1224,
    "Longitude": -91.018
  },
  {
    "Date": "2026-11-28",
    "Location": "Vancouver, WA",
    "Host": "Sniffketeers",
    "EventLink": "https://noseworktrial.blogspot.com/",
    "TrialTypes": "NW1, L1E, L1I, L3V",
    "EventCount": 4,
    "Latitude": 45.6185,
    "Longitude": -122.6648
  },
  {
    "Date": "2026-11-29",
    "Location": "Gettysburg, PA",
    "Host": "Firezone GS",
    "EventLink": "https://www.firezonegiantschnauzers.com/wwiimuseum",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 39.8024,
    "Longitude": -77.2125
  },
  {
    "Date": "2026-12-05",
    "Location": "Centralia, WA",
    "Host": "Let's Talk Dogs, LLC and About Face K9",
    "EventLink": "http://www.dorothyturley.com/",
    "TrialTypes": "ELT, NW1, L2I",
    "EventCount": 3,
    "Latitude": 46.6763,
    "Longitude": -122.9383
  },
  {
    "Date": "2026-12-05",
    "Location": "Charlton, MA",
    "Host": "HeavenScent Sniffers",
    "EventLink": "https://www.heavenscentsniffers.com/",
    "TrialTypes": "NW2, NW1",
    "EventCount": 2,
    "Latitude": 42.1271,
    "Longitude": -72.0098
  },
  {
    "Date": "2026-12-05",
    "Location": "Fillmore, CA",
    "Host": "Pink Biscuit K9s",
    "EventLink": "https://www.pinkbiscuitk9s.com/",
    "TrialTypes": "NW3, ELT-S, L2C",
    "EventCount": 3,
    "Latitude": 34.4091,
    "Longitude": -118.9119
  },
  {
    "Date": "2026-12-05",
    "Location": "Fredonia, WI",
    "Host": "On Point Elite Dog Sports, LLC",
    "EventLink": "https://www.opedogsports.com/nacsw-trials",
    "TrialTypes": "NW1, NW2, NW3",
    "EventCount": 3,
    "Latitude": 43.4337,
    "Longitude": -87.9834
  },
  {
    "Date": "2026-12-05",
    "Location": "Hoover, AL",
    "Host": "Southeast Scent Work Alliance, LLC (SSWA)",
    "EventLink": "https://www.southeastscent.com/nw3-elite-hoover-al/",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 33.3364,
    "Longitude": -86.8613
  },
  {
    "Date": "2026-12-05",
    "Location": "Hubertus, WI",
    "Host": "Loving Paws Dog Training, LLC",
    "EventLink": "https://www.lovingpawsllc.com/premium-elt-elt",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 43.2266,
    "Longitude": -88.2497
  },
  {
    "Date": "2026-12-05",
    "Location": "Newfoundland, PA",
    "Host": "Your Dog's Place, LLC",
    "EventLink": "https://yourdogsplace.com/nacsw-trials/",
    "TrialTypes": "L2V, ELT-S, NW3",
    "EventCount": 3,
    "Latitude": 41.2668,
    "Longitude": -75.3131
  },
  {
    "Date": "2026-12-05",
    "Location": "Tecumseh, OK",
    "Host": "The Doggie Spot",
    "EventLink": "https://thedoggiespot.com/",
    "TrialTypes": "NW3, NW1",
    "EventCount": 2,
    "Latitude": 35.272,
    "Longitude": -96.9281
  },
  {
    "Date": "2026-12-05",
    "Location": "Tucson, AZ",
    "Host": "Patience Unlimited Dog Training",
    "EventLink": "http://www.patienceunlimited.com/nacsw.html",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 32.1756,
    "Longitude": -111.0064
  },
  {
    "Date": "2026-12-05",
    "Location": "West River, MD",
    "Host": "Chesapeake Search Dogs",
    "EventLink": "https://chesapeakesearchdogs.org/",
    "TrialTypes": "ELT-S, L3E, NW1, NW2",
    "EventCount": 4,
    "Latitude": 38.8791,
    "Longitude": -76.6312
  },
  {
    "Date": "2026-12-07",
    "Location": "Stockton, CA",
    "Host": "Two Nosey Girls",
    "EventLink": "https://www.twonoseygirls.com/events.html",
    "TrialTypes": "ELT, ELT-S, L3I",
    "EventCount": 3,
    "Latitude": 37.9478,
    "Longitude": -121.2892
  },
  {
    "Date": "2026-12-11",
    "Location": "Douglassville, PA",
    "Host": "Patricia Grassey",
    "EventLink": "https://www.thesniffinghound.com/",
    "TrialTypes": "NW3, NW2, ELT",
    "EventCount": 3,
    "Latitude": 40.2831,
    "Longitude": -75.6819
  },
  {
    "Date": "2026-12-12",
    "Location": "Deckers, CO",
    "Host": "Beyond Elevation K9",
    "EventLink": "https://www.beyondelevationk9.com/",
    "TrialTypes": "NW3, ELT-S, L2E",
    "EventCount": 3,
    "Latitude": 39.2552,
    "Longitude": -105.1957
  },
  {
    "Date": "2026-12-12",
    "Location": "Durham, NC",
    "Host": "Whole Dog Institute, LLC",
    "EventLink": "https://wholedoginstitute.com/",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 36.0405,
    "Longitude": -78.9157
  },
  {
    "Date": "2026-12-12",
    "Location": "Obetz, OH",
    "Host": "CleverDogs",
    "EventLink": "https://cleverdogsohio.com/",
    "TrialTypes": "NW1, NW2, ELT",
    "EventCount": 3,
    "Latitude": 39.8307,
    "Longitude": -82.9453
  },
  {
    "Date": "2026-12-12",
    "Location": "Sauget, IL",
    "Host": "Happy Dog Concepts, LLC",
    "EventLink": "https://happydogconcepts.com/events",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 38.5973,
    "Longitude": -90.2073
  },
  {
    "Date": "2026-12-12",
    "Location": "Westminster, MD",
    "Host": "Red Huskies Nose Work, LLC",
    "EventLink": "https://nosework.redhuskies.com/",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 39.5606,
    "Longitude": -77.0259
  },
  {
    "Date": "2026-12-18",
    "Location": "Pittstown, NJ",
    "Host": "Shamrock Pot Of Gold K9 Scenter",
    "EventLink": "https://shamrockpotofgoldk9scenter.com/",
    "TrialTypes": "ELT-S, L1C, NW3, ELT",
    "EventCount": 4,
    "Latitude": 40.5708,
    "Longitude": -74.9496
  },
  {
    "Date": "2026-12-19",
    "Location": "Alpharetta, GA",
    "Host": "Georgia Nosework",
    "EventLink": "https://georgianosework.com/",
    "TrialTypes": "SMT, ELT-P",
    "EventCount": 2,
    "Latitude": 34.0859,
    "Longitude": -84.3238
  },
  {
    "Date": "2026-12-19",
    "Location": "Crownsville, MD",
    "Host": "Red Huskies Nose Work, LLC",
    "EventLink": "https://nosework.redhuskies.com/",
    "TrialTypes": "ELT, ELT-S, NW3",
    "EventCount": 3,
    "Latitude": 39.0012,
    "Longitude": -76.6356
  },
  {
    "Date": "2026-12-19",
    "Location": "Imperial Beach, CA",
    "Host": "Rewarding Rover LLC/Uber dog/Claire Brocato",
    "EventLink": "https://www.rewardingrover.com/",
    "TrialTypes": "ELT, L1E, NW1",
    "EventCount": 3,
    "Latitude": 32.5494,
    "Longitude": -117.1362
  },
  {
    "Date": "2026-12-19",
    "Location": "Salem, OR",
    "Host": "Doglandia, LLC",
    "EventLink": "https://cyberdogonline.net/?page_id=235",
    "TrialTypes": "NW3, ELT-P",
    "EventCount": 2,
    "Latitude": 44.9857,
    "Longitude": -122.9864
  },
  {
    "Date": "2026-12-27",
    "Location": "Exton, PA",
    "Host": "Patricia Grassey",
    "EventLink": "https://www.thesniffinghound.com/",
    "TrialTypes": "NW3, ELT-P, ELT-S, NW2",
    "EventCount": 4,
    "Latitude": 40.0161,
    "Longitude": -75.6055
  },
  {
    "Date": "2026-12-27",
    "Location": "Hartsdale, NY",
    "Host": "For the Love of Dogs NY LLC",
    "EventLink": "https://www.fortheloveofdogsny.com/trials-events",
    "TrialTypes": "L2I, L3I, NW3, ELT",
    "EventCount": 4,
    "Latitude": 41.0085,
    "Longitude": -73.7626
  },
  {
    "Date": "2026-12-27",
    "Location": "Waukesha, WI",
    "Host": "K9 Ventures",
    "EventLink": "https://www.k9ventureswi.net/",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 43.074,
    "Longitude": -88.2736
  },
  {
    "Date": "2026-12-28",
    "Location": "Phoenix, AZ",
    "Host": "Release Canine LLC",
    "EventLink": "https://www.releasecanine.com/nacsw",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 33.4615,
    "Longitude": -112.0555
  },
  {
    "Date": "2026-12-28",
    "Location": "Tyngsborough, MA",
    "Host": "Spot On K9 Coaching",
    "EventLink": "https://www.sniffalertfinish.com/",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 42.6821,
    "Longitude": -71.3847
  },
  {
    "Date": "2026-12-29",
    "Location": "Duluth, GA",
    "Host": "Right Choice Dog Training, LLC",
    "EventLink": "https://www.rightchoicedogtraining.net/eventandvolunteer",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 33.994,
    "Longitude": -84.1115
  },
  {
    "Date": "2026-12-31",
    "Location": "Corvallis, OR",
    "Host": "PNW Sniffers",
    "EventLink": "https://pnwsniffers.com/nye-trial",
    "TrialTypes": "NW3, NW1",
    "EventCount": 2,
    "Latitude": 44.518,
    "Longitude": -123.2253
  },
  {
    "Date": "2027-01-01",
    "Location": "Emmitsburg, MD",
    "Host": "Red Huskies Nose Work, LLC",
    "EventLink": "https://nosework.redhuskies.com/",
    "TrialTypes": "ELT, ELT-P, ELT-S",
    "EventCount": 3,
    "Latitude": 39.6668,
    "Longitude": -77.354
  },
  {
    "Date": "2027-01-01",
    "Location": "Exton, PA",
    "Host": "Patricia Grassey",
    "EventLink": "https://www.thesniffinghound.com/",
    "TrialTypes": "NW3, ELT-P, NW1, ELT-S",
    "EventCount": 4,
    "Latitude": 40.0075,
    "Longitude": -75.6606
  },
  {
    "Date": "2027-01-01",
    "Location": "Santa Rosa, CA",
    "Host": "Marin Humane",
    "EventLink": "https://marinhumane.org/oh-behave/nose-work-events/",
    "TrialTypes": "NW3, SMT",
    "EventCount": 2,
    "Latitude": 38.4779,
    "Longitude": -122.7253
  },
  {
    "Date": "2027-01-02",
    "Location": "Bonsall, CA",
    "Host": "Linda Buchanan",
    "EventLink": "https://www.k9slovetosearch.com/",
    "TrialTypes": "NW2, ELT",
    "EventCount": 2,
    "Latitude": 33.3026,
    "Longitude": -117.2312
  },
  {
    "Date": "2027-01-03",
    "Location": "Bee Cave, TX",
    "Host": "Scent Work Across Texas",
    "EventLink": "https://scentworkacrosstexas.com/nacsw-jan-3-4%2C-2027",
    "TrialTypes": "ELT-S, NW1, NW3",
    "EventCount": 3,
    "Latitude": 30.3065,
    "Longitude": -97.9639
  },
  {
    "Date": "2027-01-08",
    "Location": "Hartfield, VA",
    "Host": "Paws Plus Training, LLC",
    "EventLink": "https://pawsplustraining.com/",
    "TrialTypes": "ELT, NW1, NW2",
    "EventCount": 3,
    "Latitude": 37.5197,
    "Longitude": -76.4874
  },
  {
    "Date": "2027-01-09",
    "Location": "Bellingham, WA",
    "Host": "The Nosework Magic",
    "EventLink": "https://www.noseworkmagic.com/",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 48.7543,
    "Longitude": -122.5242
  },
  {
    "Date": "2027-01-09",
    "Location": "Cape Coral, FL",
    "Host": "Your Dog Knows LLC",
    "EventLink": "https://yourdogknows.net/",
    "TrialTypes": "NW1, NW2, L1I, L1C",
    "EventCount": 4,
    "Latitude": 26.5935,
    "Longitude": -81.9446
  },
  {
    "Date": "2027-01-09",
    "Location": "Merced, CA",
    "Host": "Two Nosey Girls",
    "EventLink": "https://twonoseygirls.com/",
    "TrialTypes": "ELT-P, ELT",
    "EventCount": 2,
    "Latitude": 37.1917,
    "Longitude": -120.7565
  },
  {
    "Date": "2027-01-09",
    "Location": "Novato, CA",
    "Host": "Marin Humane",
    "EventLink": "https://marinhumane.org/oh-behave/nose-work-events/",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 38.0855,
    "Longitude": -122.5386
  },
  {
    "Date": "2027-01-15",
    "Location": "Upland, CA",
    "Host": "Agile Paws Dog Sports",
    "EventLink": "https://agilepawsdogsports.com/",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 34.1384,
    "Longitude": -117.6786
  },
  {
    "Date": "2027-01-16",
    "Location": "Clanton, AL",
    "Host": "Daphne Melillo",
    "EventLink": "https://www.byanosenosework.com/",
    "TrialTypes": "NW2, ELT",
    "EventCount": 2,
    "Latitude": 32.819,
    "Longitude": -86.5916
  },
  {
    "Date": "2027-01-16",
    "Location": "Melrose, FL",
    "Host": "River Poodles Training, LLC",
    "EventLink": "https://riverpoodlestraining.com/",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 29.7202,
    "Longitude": -82.0202
  },
  {
    "Date": "2027-01-16",
    "Location": "Purchase, NY",
    "Host": "For the Love of Dogs NY LLC",
    "EventLink": "https://www.fortheloveofdogsny.com/",
    "TrialTypes": "SMT, NW3",
    "EventCount": 2,
    "Latitude": 41.0757,
    "Longitude": -73.73
  },
  {
    "Date": "2027-01-19",
    "Location": "Murfreesboro, TN",
    "Host": "Dogs Have Amazing Noses, LLC",
    "EventLink": "https://dogshaveamazingnoses.com/events/",
    "TrialTypes": "ELT, ELT-S",
    "EventCount": 2,
    "Latitude": 35.8494,
    "Longitude": -86.4326
  },
  {
    "Date": "2027-01-23",
    "Location": "Danielsville, GA",
    "Host": "Right Choice Dog Training, LLC",
    "EventLink": "https://www.rightchoicedogtraining.net/",
    "TrialTypes": "NW3, NW1, L2I",
    "EventCount": 3,
    "Latitude": 34.1471,
    "Longitude": -83.2052
  },
  {
    "Date": "2027-01-23",
    "Location": "Montgomery, TX",
    "Host": "Nosy Dogs Houston",
    "EventLink": "http://www.nosydogshouston.com/",
    "TrialTypes": "NW1, L1C, L1V, NW2",
    "EventCount": 4,
    "Latitude": 30.2595,
    "Longitude": -95.5511
  },
  {
    "Date": "2027-01-23",
    "Location": "Valencia, CA",
    "Host": "Pink Biscuit K9s",
    "EventLink": "https://www.pinkbiscuitk9s.com/",
    "TrialTypes": "ELT-P, L2I, L3C",
    "EventCount": 3,
    "Latitude": 34.3804,
    "Longitude": -118.5709
  },
  {
    "Date": "2027-01-30",
    "Location": "Durham, NC",
    "Host": "Whole Dog Institute",
    "EventLink": "https://wholedoginstitute.com/",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 36.0317,
    "Longitude": -78.9022
  },
  {
    "Date": "2027-01-30",
    "Location": "Las Vegas, NV",
    "Host": "imPETus Animal Training",
    "EventLink": "http://impetusanimaltraining.com/",
    "TrialTypes": "NW3, L1I, NW2",
    "EventCount": 3,
    "Latitude": 36.1513,
    "Longitude": -115.1602
  },
  {
    "Date": "2027-01-30",
    "Location": "Petaluma, CA",
    "Host": "Seaside Sniffers",
    "EventLink": "https://www.seasidesniffers.com/",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 38.2193,
    "Longitude": -122.6294
  },
  {
    "Date": "2027-01-30",
    "Location": "San Marcos, CA",
    "Host": "Rewarding Rover LLC, Uberdog, & Claire Brocato",
    "EventLink": "https://www.rewardingrover.com/",
    "TrialTypes": "ELT-S, NW3",
    "EventCount": 2,
    "Latitude": 33.1573,
    "Longitude": -117.1605
  },
  {
    "Date": "2027-01-30",
    "Location": "Seguin, TX",
    "Host": "Sniff Happens",
    "EventLink": "https://www.sniffhappenstx.com/Jan-NACSW-Trial",
    "TrialTypes": "L2C, ELT-S, NW3",
    "EventCount": 3,
    "Latitude": 29.5815,
    "Longitude": -97.9155
  },
  {
    "Date": "2027-02-06",
    "Location": "Murfreesboro, TN",
    "Host": "Dogs Have Amazing Noses, LLC",
    "EventLink": "https://dogshaveamazingnoses.com/events/",
    "TrialTypes": "NW2",
    "EventCount": 1,
    "Latitude": 35.8502,
    "Longitude": -86.3599
  },
  {
    "Date": "2027-02-13",
    "Location": "Modesto, CA",
    "Host": "Two Nosey Girls",
    "EventLink": "https://twonoseygirls.com/",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 37.6034,
    "Longitude": -120.9628
  },
  {
    "Date": "2027-02-13",
    "Location": "New Rochelle, NY",
    "Host": "For the Love of Dogs NY LLC",
    "EventLink": "https://www.fortheloveofdogsny.com/nacsw-trials",
    "TrialTypes": "L1I, ELT-S, NW3, ELT",
    "EventCount": 4,
    "Latitude": 40.9483,
    "Longitude": -73.7703
  },
  {
    "Date": "2027-02-19",
    "Location": "Vista, CA",
    "Host": "Rewarding Rover LLC, Uber Dog and Claire Brocato",
    "EventLink": "https://www.rewardingrover.com/",
    "TrialTypes": "NW3, ELT-S, NW2",
    "EventCount": 3,
    "Latitude": 33.2481,
    "Longitude": -117.2618
  },
  {
    "Date": "2027-02-20",
    "Location": "Clarkesville, GA",
    "Host": "Right Choice Dog Training, LLC",
    "EventLink": "https://www.rightchoicedogtraining.net/eventandvolunteer",
    "TrialTypes": "L3I, NW2, ELT",
    "EventCount": 3,
    "Latitude": 34.6007,
    "Longitude": -83.5316
  },
  {
    "Date": "2027-02-21",
    "Location": "Benson, AZ",
    "Host": "Patience Unlimited Dog Training",
    "EventLink": "http://www.patienceunlimited.com/nacsw.html",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 32.0085,
    "Longitude": -110.2555
  },
  {
    "Date": "2027-02-22",
    "Location": "Paso Robles, CA",
    "Host": "Gentle Touch Pet Training",
    "EventLink": "https://www.gentlepets.com/gtpt-events/nacsw%E2%84%A2-elt%2Felt-trials",
    "TrialTypes": "ELT",
    "EventCount": 1,
    "Latitude": 35.6012,
    "Longitude": -120.7365
  },
  {
    "Date": "2027-02-26",
    "Location": "McKinney, TX",
    "Host": "All About The Nose",
    "EventLink": "https://www.allaboutthenose.com/",
    "TrialTypes": "L1C, L1I, NW1, NW2",
    "EventCount": 4,
    "Latitude": 33.1769,
    "Longitude": -96.593
  },
  {
    "Date": "2027-02-26",
    "Location": "Westlake Village, CA",
    "Host": "JavaK9s, LLC",
    "EventLink": "http://www.javak9s.com/",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 34.1687,
    "Longitude": -118.81
  },
  {
    "Date": "2027-02-27",
    "Location": "Brooksville, FL",
    "Host": "Hoppin’ in the Hills",
    "EventLink": "https://hoppininthehillscom.wordpress.com",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 28.5947,
    "Longitude": -82.4308
  },
  {
    "Date": "2027-03-05",
    "Location": "Glen Mills, PA",
    "Host": "Firezone GS",
    "EventLink": "https://www.firezonegiantschnauzers.com/nose-work-trials",
    "TrialTypes": "SMT, NW3",
    "EventCount": 2,
    "Latitude": 39.9435,
    "Longitude": -75.4691
  },
  {
    "Date": "2027-03-06",
    "Location": "Keystone Heights, FL",
    "Host": "River Poodles Training, LLC",
    "EventLink": "https://riverpoodlestraining.com/",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 29.7813,
    "Longitude": -82.0043
  },
  {
    "Date": "2027-03-08",
    "Location": "Glendora, CA",
    "Host": "Agile Paws Dog Sports",
    "EventLink": "https://agilepawsdogsports.com/",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 34.1213,
    "Longitude": -117.8312
  },
  {
    "Date": "2027-03-12",
    "Location": "Stokesdale, NC",
    "Host": "K9 Nose Adventures, LLC",
    "EventLink": "https://www.doggonefunnc.com/",
    "TrialTypes": "ELT-S, NW1, NW2",
    "EventCount": 3,
    "Latitude": 36.2077,
    "Longitude": -79.9929
  },
  {
    "Date": "2027-03-13",
    "Location": "Hammond, LA",
    "Host": "Dog Gone Right",
    "EventLink": "https://doggoneright.net/",
    "TrialTypes": "NW1, NW2, NW3",
    "EventCount": 3,
    "Latitude": 30.5224,
    "Longitude": -90.4559
  },
  {
    "Date": "2027-03-13",
    "Location": "Rome, GA",
    "Host": "Southeast Scent Work Alliance, LLC (SSWA)",
    "EventLink": "https://southeastscent.com/events",
    "TrialTypes": "NW3, NW1, NW2",
    "EventCount": 3,
    "Latitude": 34.2477,
    "Longitude": -85.1617
  },
  {
    "Date": "2027-03-13",
    "Location": "Wilmington, DE",
    "Host": "The Sniffing Hound",
    "EventLink": "https://www.thesniffinghound.com/",
    "TrialTypes": "ELT, ELT-P, NW1, ELT-S",
    "EventCount": 4,
    "Latitude": 39.7137,
    "Longitude": -75.5892
  },
  {
    "Date": "2027-03-15",
    "Location": "Riverside, CA",
    "Host": "Linda Buchanan",
    "EventLink": "https://www.k9slovetosearch.com/",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 34.0043,
    "Longitude": -117.3959
  },
  {
    "Date": "2027-03-19",
    "Location": "Honesdale, PA",
    "Host": "Your Dog’s Place, LLC",
    "EventLink": "http://www.yourdogsplace.com/",
    "TrialTypes": "L2C, ELT-P, ELT-S, L1I",
    "EventCount": 4,
    "Latitude": 41.5842,
    "Longitude": -75.2976
  },
  {
    "Date": "2027-03-20",
    "Location": "Foxboro, MA",
    "Host": "Bay State Sniffers",
    "EventLink": "http://www.baystatesniffers.com/",
    "TrialTypes": "NW1, L1C, L2I",
    "EventCount": 3,
    "Latitude": 42.0803,
    "Longitude": -71.2949
  },
  {
    "Date": "2027-03-20",
    "Location": "Redwood City, CA",
    "Host": "B. L. McMutts, LLC",
    "EventLink": "https://blmcmutts.com/",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 37.4937,
    "Longitude": -122.2342
  },
  {
    "Date": "2027-03-20",
    "Location": "Selma, TX",
    "Host": "Sniff Happens",
    "EventLink": "https://www.sniffhappenstx.com/march-2027-nacsw-trial",
    "TrialTypes": "L1E, ELT-S, ELT",
    "EventCount": 3,
    "Latitude": 29.6155,
    "Longitude": -98.3216
  },
  {
    "Date": "2027-03-20",
    "Location": "Troy, MO",
    "Host": "Happy Dog Concepts LLC",
    "EventLink": "https://happydogconcepts.com/events",
    "TrialTypes": "ELT, NW3",
    "EventCount": 2,
    "Latitude": 39.0119,
    "Longitude": -90.977
  },
  {
    "Date": "2027-03-25",
    "Location": "Rochester, NY",
    "Host": "2 Psyched 4 Dogs",
    "EventLink": "https://2psyched4dogs.com/",
    "TrialTypes": "NW1, NW3, ELT",
    "EventCount": 3,
    "Latitude": 43.2053,
    "Longitude": -77.5887
  },
  {
    "Date": "2027-03-26",
    "Location": "Albuquerque, NM",
    "Host": "New Mexico Canine Scent Work, LLC",
    "EventLink": "https://www.nmcsw.com/",
    "TrialTypes": "ELT, NW3, L2I, NW1",
    "EventCount": 4,
    "Latitude": 35.0988,
    "Longitude": -106.6253
  },
  {
    "Date": "2027-03-26",
    "Location": "Bensalem, PA",
    "Host": "For the Love of Dogs NY LLC",
    "EventLink": "https://www.fortheloveofdogsny.com/",
    "TrialTypes": "SMT, NW2",
    "EventCount": 2,
    "Latitude": 40.151,
    "Longitude": -74.9579
  },
  {
    "Date": "2027-03-27",
    "Location": "Groveport, OH",
    "Host": "CleverDogs",
    "EventLink": "https://cleverdogsohio.com/",
    "TrialTypes": "NW1, NW2, NW3",
    "EventCount": 3,
    "Latitude": 39.8168,
    "Longitude": -82.912
  },
  {
    "Date": "2027-04-02",
    "Location": "Forest Lake, MN",
    "Host": "St. Paul Dog Training Club",
    "EventLink": "https://spdtc.com/events-at-spdtc/",
    "TrialTypes": "ELT, NW2, NW1",
    "EventCount": 3,
    "Latitude": 45.2691,
    "Longitude": -92.9371
  },
  {
    "Date": "2027-04-02",
    "Location": "Rapid City, SD",
    "Host": "Two Paws Up Dog Training, LLC",
    "EventLink": "https://www.twopawsupdogtrainingllc.com/",
    "TrialTypes": "ELT, NW3, NW2, NW1",
    "EventCount": 4,
    "Latitude": 44.0927,
    "Longitude": -103.2522
  },
  {
    "Date": "2027-04-03",
    "Location": "Keystone Heights, FL",
    "Host": "River Poodles Training, LLC",
    "EventLink": "https://riverpoodlestraining.com/",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 29.8304,
    "Longitude": -82.043
  },
  {
    "Date": "2027-04-03",
    "Location": "Wilmot, WI",
    "Host": "SuperDog Industries LLC",
    "EventLink": "https://www.superdogevents.com/",
    "TrialTypes": "NW2, ELT",
    "EventCount": 2,
    "Latitude": 42.531,
    "Longitude": -88.1476
  },
  {
    "Date": "2027-04-05",
    "Location": "Chester, NY",
    "Host": "For the Love of Dogs NY LLC",
    "EventLink": "https://www.fortheloveofdogsny.com/trials-events",
    "TrialTypes": "NW2, ELT",
    "EventCount": 2,
    "Latitude": 41.3604,
    "Longitude": -74.2223
  },
  {
    "Date": "2027-04-07",
    "Location": "Olympia, WA",
    "Host": "Let's Talk Dogs, LLC & About Face K9 Academy",
    "EventLink": "https://www.aboutfacek9academy.com",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 47.0104,
    "Longitude": -122.9137
  },
  {
    "Date": "2027-04-09",
    "Location": "Shady Hills, FL",
    "Host": "Hoppin’ in the Hills",
    "EventLink": "https://hoppininthehillscom.wordpress.com/",
    "TrialTypes": "NW1, L1C, NW2",
    "EventCount": 3,
    "Latitude": 28.3332,
    "Longitude": -82.5763
  },
  {
    "Date": "2027-04-10",
    "Location": "Northfield, OH",
    "Host": "Nosework Addicts, LLC",
    "EventLink": "https://www.noseworkaddictsllc.com/",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 41.32,
    "Longitude": -81.5233
  },
  {
    "Date": "2027-04-10",
    "Location": "Red Feather Lakes, CO",
    "Host": "Beyond Elevation K9",
    "EventLink": "https://www.beyondelevationk9.com/",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 40.8389,
    "Longitude": -105.5312
  },
  {
    "Date": "2027-04-10",
    "Location": "Winterset, IA",
    "Host": "KBP Dog Training",
    "EventLink": "https://kbpdogtraining.com/",
    "TrialTypes": "NW2, NW1",
    "EventCount": 2,
    "Latitude": 41.3731,
    "Longitude": -94.0059
  },
  {
    "Date": "2027-04-16",
    "Location": "Upland, CA",
    "Host": "Agile Paws Dog Sports",
    "EventLink": "https://agilepawsdogsports.com/",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 34.1456,
    "Longitude": -117.6408
  },
  {
    "Date": "2027-04-17",
    "Location": "Glenwood, NY",
    "Host": "Do Over Dog Training",
    "EventLink": "https://www.dooverdogtraining.com/trials",
    "TrialTypes": "ELT-S, L2E, L2C, L1I",
    "EventCount": 4,
    "Latitude": 42.6647,
    "Longitude": -78.6397
  },
  {
    "Date": "2027-04-19",
    "Location": "Paso Robles, CA",
    "Host": "Gentle Touch Pet Training",
    "EventLink": "https://www.gentlepets.com/",
    "TrialTypes": "ELT-S, L2C",
    "EventCount": 2,
    "Latitude": 35.66,
    "Longitude": -120.6742
  },
  {
    "Date": "2027-04-24",
    "Location": "Ellicottville, NY",
    "Host": "Do Over Dog Training",
    "EventLink": "https://www.dooverdogtraining.com/trials",
    "TrialTypes": "NW3, NW2",
    "EventCount": 2,
    "Latitude": 42.3195,
    "Longitude": -78.683
  },
  {
    "Date": "2027-05-01",
    "Location": "Manhattan , MT",
    "Host": "Trails and Tails Dog School",
    "EventLink": "https://www.trailsandtailsdogschool.com/events",
    "TrialTypes": "NW1, NW2, NW3",
    "EventCount": 3,
    "Latitude": 45.8804,
    "Longitude": -111.3742
  },
  {
    "Date": "2027-05-01",
    "Location": "Poland Springs, ME",
    "Host": "Bare Bones Nosework, LLC",
    "EventLink": "https://virginiahowe.com/",
    "TrialTypes": "L2I, L3I",
    "EventCount": 2,
    "Latitude": 44.0697,
    "Longitude": -70.3489
  },
  {
    "Date": "2027-05-01",
    "Location": "Sharon, MA",
    "Host": "Bay State Sniffers",
    "EventLink": "http://www.baystatesniffers.com/",
    "TrialTypes": "SMT",
    "EventCount": 1,
    "Latitude": 42.1401,
    "Longitude": -71.1894
  },
  {
    "Date": "2027-05-07",
    "Location": "Wrightwood, CA",
    "Host": "JavaK9s, LLC",
    "EventLink": "https://www.javak9s.com/",
    "TrialTypes": "ELT, L1C, L1I",
    "EventCount": 3,
    "Latitude": 34.3346,
    "Longitude": -117.6532
  },
  {
    "Date": "2027-05-08",
    "Location": "Ashby, MA",
    "Host": "Carolyn Barney dba Dogs!",
    "EventLink": "https://carolynbarney.com/",
    "TrialTypes": "NW1, NW2",
    "EventCount": 2,
    "Latitude": 42.7107,
    "Longitude": -71.7774
  },
  {
    "Date": "2027-05-22",
    "Location": "Amherst, NY",
    "Host": "Do Over Dog Training",
    "EventLink": "https://www.dooverdogtraining.com/trials",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 43.0282,
    "Longitude": -78.7977
  },
  {
    "Date": "2027-05-29",
    "Location": "Atherton, CA",
    "Host": "B.L. McMutts LLC",
    "EventLink": "https://blmcmutts.com/events",
    "TrialTypes": "NW3",
    "EventCount": 1,
    "Latitude": 37.4861,
    "Longitude": -122.2106
  },
  {
    "Date": "2027-06-05",
    "Location": "Enterprise, OR",
    "Host": "Country K9 Nosework, LLC",
    "EventLink": "https://www.countryk9nosework.com/",
    "TrialTypes": "NW2, ELT-P",
    "EventCount": 2,
    "Latitude": 45.3823,
    "Longitude": -117.2614
  },
  {
    "Date": "2027-06-12",
    "Location": "Portland, OR",
    "Host": "Trust Your Dog K9 Events",
    "EventLink": "https://trustyourdogk9events.com/",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 45.5377,
    "Longitude": -122.6403
  },
  {
    "Date": "2027-06-19",
    "Location": "Spring Grove, IL",
    "Host": "SuperDog Industries LLC",
    "EventLink": "https://www.superdogevents.com/",
    "TrialTypes": "NW3, ELT",
    "EventCount": 2,
    "Latitude": 42.4619,
    "Longitude": -88.2858
  },
  {
    "Date": "2027-06-26",
    "Location": "Delran, NJ",
    "Host": "K9 InScentives",
    "EventLink": "https://www.k9inscentives.com/",
    "TrialTypes": "NW3, NW1, L2I",
    "EventCount": 3,
    "Latitude": 40.0302,
    "Longitude": -74.9981
  },
  {
    "Date": "2027-06-29",
    "Location": "Delran, NJ",
    "Host": "Ev-ry earthdog LLC",
    "EventLink": "https://ev-ryearthdog.com/",
    "TrialTypes": "ELT-P, NW2, NW1, L1I, L2C",
    "EventCount": 5,
    "Latitude": 39.9797,
    "Longitude": -74.9123
  },
  {
    "Date": "2027-09-25",
    "Location": "Eastlake, OH",
    "Host": "Nosework Addicts, LLC",
    "EventLink": "https://www.noseworkaddictsllc.com/",
    "TrialTypes": "ELT, ELT-P",
    "EventCount": 2,
    "Latitude": 41.6956,
    "Longitude": -81.465
  }
]
;
