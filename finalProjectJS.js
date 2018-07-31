

<!DOCTYPE html>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
<html>
<body>
<h>Honey Production in the United States from 1998-2012</h>
<h1>Let's get started. There will be 3 questions in this trivia.</h1>
<p>Which US state has the most expensive average price per pound of honey?</p>

<script>

data =
    [
  {
    "state": "AL",
    "numcol": 16000,
    "yieldpercol": 71,
    "totalprod": 1136000,
    "stocks": 159000,
    "priceperlb": 0.72,
    "prodvalue": 818000,
    "year": 1998
  },
  {
    "state": "AZ",
    "numcol": 55000,
    "yieldpercol": 60,
    "totalprod": 3300000,
    "stocks": 1485000,
    "priceperlb": 0.64,
    "prodvalue": 2112000,
    "year": 1998
  },
  {
    "state": "AR",
    "numcol": 53000,
    "yieldpercol": 65,
    "totalprod": 3445000,
    "stocks": 1688000,
    "priceperlb": 0.59,
    "prodvalue": 2033000,
    "year": 1998
  },
  {
    "state": "CA",
    "numcol": 450000,
    "yieldpercol": 83,
    "totalprod": 37350000,
    "stocks": 12326000,
    "priceperlb": 0.62,
    "prodvalue": 23157000,
    "year": 1998
  },
  {
    "state": "CO",
    "numcol": 27000,
    "yieldpercol": 72,
    "totalprod": 1944000,
    "stocks": 1594000,
    "priceperlb": 0.7,
    "prodvalue": 1361000,
    "year": 1998
  },
  {
    "state": "FL",
    "numcol": 230000,
    "yieldpercol": 98,
    "totalprod": 22540000,
    "stocks": 4508000,
    "priceperlb": 0.64,
    "prodvalue": 14426000,
    "year": 1998
  },
  {
    "state": "GA",
    "numcol": 75000,
    "yieldpercol": 56,
    "totalprod": 4200000,
    "stocks": 307000,
    "priceperlb": 0.69,
    "prodvalue": 2898000,
    "year": 1998
  },
  {
    "state": "HI",
    "numcol": 8000,
    "yieldpercol": 118,
    "totalprod": 944000,
    "stocks": 66000,
    "priceperlb": 0.77,
    "prodvalue": 727000,
    "year": 1998
  },
  {
    "state": "ID",
    "numcol": 120000,
    "yieldpercol": 50,
    "totalprod": 6000000,
    "stocks": 2220000,
    "priceperlb": 0.65,
    "prodvalue": 3900000,
    "year": 1998
  },
  {
    "state": "IL",
    "numcol": 9000,
    "yieldpercol": 71,
    "totalprod": 639000,
    "stocks": 204000,
    "priceperlb": 1.19,
    "prodvalue": 760000,
    "year": 1998
  },
  {
    "state": "IN",
    "numcol": 9000,
    "yieldpercol": 92,
    "totalprod": 828000,
    "stocks": 489000,
    "priceperlb": 0.85,
    "prodvalue": 704000,
    "year": 1998
  },
  {
    "state": "IA",
    "numcol": 50000,
    "yieldpercol": 78,
    "totalprod": 3900000,
    "stocks": 2301000,
    "priceperlb": 0.7,
    "prodvalue": 2730000,
    "year": 1998
  },
  {
    "state": "KS",
    "numcol": 16000,
    "yieldpercol": 46,
    "totalprod": 736000,
    "stocks": 390000,
    "priceperlb": 0.87,
    "prodvalue": 640000,
    "year": 1998
  },
  {
    "state": "KY",
    "numcol": 3000,
    "yieldpercol": 50,
    "totalprod": 150000,
    "stocks": 51000,
    "priceperlb": 1.4,
    "prodvalue": 210000,
    "year": 1998
  },
  {
    "state": "LA",
    "numcol": 41000,
    "yieldpercol": 111,
    "totalprod": 4551000,
    "stocks": 865000,
    "priceperlb": 0.59,
    "prodvalue": 2685000,
    "year": 1998
  },
  {
    "state": "ME",
    "numcol": 10000,
    "yieldpercol": 26,
    "totalprod": 260000,
    "stocks": 117000,
    "priceperlb": 0.69,
    "prodvalue": 179000,
    "year": 1998
  },
  {
    "state": "MD",
    "numcol": 7000,
    "yieldpercol": 44,
    "totalprod": 308000,
    "stocks": 92000,
    "priceperlb": 1.1,
    "prodvalue": 339000,
    "year": 1998
  },
  {
    "state": "MI",
    "numcol": 80000,
    "yieldpercol": 85,
    "totalprod": 6800000,
    "stocks": 3672000,
    "priceperlb": 0.66,
    "prodvalue": 4488000,
    "year": 1998
  },
  {
    "state": "MN",
    "numcol": 140000,
    "yieldpercol": 79,
    "totalprod": 11060000,
    "stocks": 2765000,
    "priceperlb": 0.65,
    "prodvalue": 7189000,
    "year": 1998
  },
  {
    "state": "MS",
    "numcol": 18000,
    "yieldpercol": 86,
    "totalprod": 1548000,
    "stocks": 898000,
    "priceperlb": 0.58,
    "prodvalue": 898000,
    "year": 1998
  },
  {
    "state": "MO",
    "numcol": 23000,
    "yieldpercol": 66,
    "totalprod": 1518000,
    "stocks": 455000,
    "priceperlb": 0.76,
    "prodvalue": 1154000,
    "year": 1998
  },
  {
    "state": "MT",
    "numcol": 115000,
    "yieldpercol": 122,
    "totalprod": 14030000,
    "stocks": 5472000,
    "priceperlb": 0.64,
    "prodvalue": 8979000,
    "year": 1998
  },
  {
    "state": "NE",
    "numcol": 64000,
    "yieldpercol": 70,
    "totalprod": 4480000,
    "stocks": 2240000,
    "priceperlb": 0.86,
    "prodvalue": 3853000,
    "year": 1998
  },
  {
    "state": "NV",
    "numcol": 10000,
    "yieldpercol": 46,
    "totalprod": 460000,
    "stocks": 175000,
    "priceperlb": 1.65,
    "prodvalue": 759000,
    "year": 1998
  },
  {
    "state": "NJ",
    "numcol": 11000,
    "yieldpercol": 49,
    "totalprod": 539000,
    "stocks": 167000,
    "priceperlb": 0.76,
    "prodvalue": 410000,
    "year": 1998
  },
  {
    "state": "NM",
    "numcol": 14000,
    "yieldpercol": 55,
    "totalprod": 770000,
    "stocks": 470000,
    "priceperlb": 0.76,
    "prodvalue": 585000,
    "year": 1998
  },
  {
    "state": "NY",
    "numcol": 65000,
    "yieldpercol": 80,
    "totalprod": 5200000,
    "stocks": 2444000,
    "priceperlb": 0.7,
    "prodvalue": 3640000,
    "year": 1998
  },
  {
    "state": "NC",
    "numcol": 8000,
    "yieldpercol": 59,
    "totalprod": 472000,
    "stocks": 151000,
    "priceperlb": 1.38,
    "prodvalue": 651000,
    "year": 1998
  },
  {
    "state": "ND",
    "numcol": 230000,
    "yieldpercol": 128,
    "totalprod": 29440000,
    "stocks": 8832000,
    "priceperlb": 0.63,
    "prodvalue": 18547000,
    "year": 1998
  },
  {
    "state": "OH",
    "numcol": 18000,
    "yieldpercol": 78,
    "totalprod": 1404000,
    "stocks": 702000,
    "priceperlb": 0.83,
    "prodvalue": 1165000,
    "year": 1998
  },
  {
    "state": "OK",
    "numcol": 4000,
    "yieldpercol": 51,
    "totalprod": 204000,
    "stocks": 63000,
    "priceperlb": 1.24,
    "prodvalue": 253000,
    "year": 1998
  },
  {
    "state": "OR",
    "numcol": 50000,
    "yieldpercol": 45,
    "totalprod": 2250000,
    "stocks": 1620000,
    "priceperlb": 0.9,
    "prodvalue": 2025000,
    "year": 1998
  },
  {
    "state": "PA",
    "numcol": 26000,
    "yieldpercol": 66,
    "totalprod": 1716000,
    "stocks": 789000,
    "priceperlb": 0.8,
    "prodvalue": 1373000,
    "year": 1998
  },
  {
    "state": "SD",
    "numcol": 225000,
    "yieldpercol": 95,
    "totalprod": 21375000,
    "stocks": 10901000,
    "priceperlb": 0.64,
    "prodvalue": 13680000,
    "year": 1998
  },
  {
    "state": "TN",
    "numcol": 7000,
    "yieldpercol": 64,
    "totalprod": 448000,
    "stocks": 121000,
    "priceperlb": 1.32,
    "prodvalue": 591000,
    "year": 1998
  },
  {
    "state": "TX",
    "numcol": 91000,
    "yieldpercol": 77,
    "totalprod": 7007000,
    "stocks": 1612000,
    "priceperlb": 0.62,
    "prodvalue": 4344000,
    "year": 1998
  },
  {
    "state": "UT",
    "numcol": 30000,
    "yieldpercol": 58,
    "totalprod": 1740000,
    "stocks": 557000,
    "priceperlb": 0.65,
    "prodvalue": 1131000,
    "year": 1998
  },
  {
    "state": "VT",
    "numcol": 6000,
    "yieldpercol": 64,
    "totalprod": 384000,
    "stocks": 207000,
    "priceperlb": 0.85,
    "prodvalue": 326000,
    "year": 1998
  },
  {
    "state": "VA",
    "numcol": 8000,
    "yieldpercol": 37,
    "totalprod": 296000,
    "stocks": 86000,
    "priceperlb": 1.33,
    "prodvalue": 394000,
    "year": 1998
  },
  {
    "state": "WA",
    "numcol": 58000,
    "yieldpercol": 51,
    "totalprod": 2958000,
    "stocks": 1361000,
    "priceperlb": 0.64,
    "prodvalue": 1893000,
    "year": 1998
  },
  {
    "state": "WV",
    "numcol": 6000,
    "yieldpercol": 55,
    "totalprod": 330000,
    "stocks": 155000,
    "priceperlb": 1.14,
    "prodvalue": 376000,
    "year": 1998
  },
  {
    "state": "WI",
    "numcol": 89000,
    "yieldpercol": 91,
    "totalprod": 8099000,
    "stocks": 5264000,
    "priceperlb": 0.72,
    "prodvalue": 5831000,
    "year": 1998
  },
  {
    "state": "WY",
    "numcol": 46000,
    "yieldpercol": 60,
    "totalprod": 2760000,
    "stocks": 524000,
    "priceperlb": 0.68,
    "prodvalue": 1877000,
    "year": 1998
  },
  {
    "state": "AL",
    "numcol": 17000,
    "yieldpercol": 68,
    "totalprod": 1156000,
    "stocks": 185000,
    "priceperlb": 0.56,
    "prodvalue": 647000,
    "year": 1999
  },
  {
    "state": "AZ",
    "numcol": 52000,
    "yieldpercol": 62,
    "totalprod": 3224000,
    "stocks": 1548000,
    "priceperlb": 0.62,
    "prodvalue": 1999000,
    "year": 1999
  },
  {
    "state": "AR",
    "numcol": 52000,
    "yieldpercol": 89,
    "totalprod": 4628000,
    "stocks": 2592000,
    "priceperlb": 0.53,
    "prodvalue": 2453000,
    "year": 1999
  },
  {
    "state": "CA",
    "numcol": 465000,
    "yieldpercol": 60,
    "totalprod": 27900000,
    "stocks": 9486000,
    "priceperlb": 0.55,
    "prodvalue": 15345000,
    "year": 1999
  },
  {
    "state": "CO",
    "numcol": 27000,
    "yieldpercol": 76,
    "totalprod": 2052000,
    "stocks": 1436000,
    "priceperlb": 0.68,
    "prodvalue": 1395000,
    "year": 1999
  },
  {
    "state": "FL",
    "numcol": 228000,
    "yieldpercol": 102,
    "totalprod": 23256000,
    "stocks": 4186000,
    "priceperlb": 0.53,
    "prodvalue": 12326000,
    "year": 1999
  },
  {
    "state": "GA",
    "numcol": 65000,
    "yieldpercol": 51,
    "totalprod": 3315000,
    "stocks": 497000,
    "priceperlb": 0.64,
    "prodvalue": 2122000,
    "year": 1999
  },
  {
    "state": "HI",
    "numcol": 8000,
    "yieldpercol": 80,
    "totalprod": 640000,
    "stocks": 32000,
    "priceperlb": 0.8,
    "prodvalue": 512000,
    "year": 1999
  },
  {
    "state": "ID",
    "numcol": 120000,
    "yieldpercol": 48,
    "totalprod": 5760000,
    "stocks": 3110000,
    "priceperlb": 0.59,
    "prodvalue": 3398000,
    "year": 1999
  },
  {
    "state": "IL",
    "numcol": 9000,
    "yieldpercol": 66,
    "totalprod": 594000,
    "stocks": 327000,
    "priceperlb": 1.15,
    "prodvalue": 683000,
    "year": 1999
  },
  {
    "state": "IN",
    "numcol": 10000,
    "yieldpercol": 81,
    "totalprod": 810000,
    "stocks": 437000,
    "priceperlb": 0.9,
    "prodvalue": 729000,
    "year": 1999
  },
  {
    "state": "IA",
    "numcol": 40000,
    "yieldpercol": 65,
    "totalprod": 2600000,
    "stocks": 2028000,
    "priceperlb": 0.65,
    "prodvalue": 1690000,
    "year": 1999
  },
  {
    "state": "KS",
    "numcol": 13000,
    "yieldpercol": 67,
    "totalprod": 871000,
    "stocks": 854000,
    "priceperlb": 1.11,
    "prodvalue": 967000,
    "year": 1999
  },
  {
    "state": "KY",
    "numcol": 3000,
    "yieldpercol": 50,
    "totalprod": 150000,
    "stocks": 12000,
    "priceperlb": 1.24,
    "prodvalue": 186000,
    "year": 1999
  },
  {
    "state": "LA",
    "numcol": 48000,
    "yieldpercol": 114,
    "totalprod": 5472000,
    "stocks": 821000,
    "priceperlb": 0.49,
    "prodvalue": 2681000,
    "year": 1999
  },
  {
    "state": "ME",
    "numcol": 14000,
    "yieldpercol": 22,
    "totalprod": 308000,
    "stocks": 89000,
    "priceperlb": 0.83,
    "prodvalue": 256000,
    "year": 1999
  },
  {
    "state": "MD",
    "numcol": 6000,
    "yieldpercol": 46,
    "totalprod": 276000,
    "stocks": 50000,
    "priceperlb": 1.64,
    "prodvalue": 453000,
    "year": 1999
  },
  {
    "state": "MI",
    "numcol": 73000,
    "yieldpercol": 85,
    "totalprod": 6205000,
    "stocks": 3475000,
    "priceperlb": 0.66,
    "prodvalue": 4095000,
    "year": 1999
  },
  {
    "state": "MN",
    "numcol": 145000,
    "yieldpercol": 82,
    "totalprod": 11890000,
    "stocks": 3210000,
    "priceperlb": 0.61,
    "prodvalue": 7253000,
    "year": 1999
  },
  {
    "state": "MS",
    "numcol": 18000,
    "yieldpercol": 73,
    "totalprod": 1314000,
    "stocks": 591000,
    "priceperlb": 0.54,
    "prodvalue": 710000,
    "year": 1999
  },
  {
    "state": "MO",
    "numcol": 24000,
    "yieldpercol": 65,
    "totalprod": 1560000,
    "stocks": 437000,
    "priceperlb": 0.68,
    "prodvalue": 1061000,
    "year": 1999
  },
  {
    "state": "MT",
    "numcol": 122000,
    "yieldpercol": 70,
    "totalprod": 8540000,
    "stocks": 2135000,
    "priceperlb": 0.6,
    "prodvalue": 5124000,
    "year": 1999
  },
  {
    "state": "NE",
    "numcol": 58000,
    "yieldpercol": 77,
    "totalprod": 4466000,
    "stocks": 1965000,
    "priceperlb": 0.61,
    "prodvalue": 2724000,
    "year": 1999
  },
  {
    "state": "NV",
    "numcol": 9000,
    "yieldpercol": 45,
    "totalprod": 405000,
    "stocks": 271000,
    "priceperlb": 1.54,
    "prodvalue": 624000,
    "year": 1999
  },
  {
    "state": "NJ",
    "numcol": 10000,
    "yieldpercol": 44,
    "totalprod": 440000,
    "stocks": 154000,
    "priceperlb": 0.57,
    "prodvalue": 251000,
    "year": 1999
  },
  {
    "state": "NM",
    "numcol": 15000,
    "yieldpercol": 52,
    "totalprod": 780000,
    "stocks": 476000,
    "priceperlb": 0.77,
    "prodvalue": 601000,
    "year": 1999
  },
  {
    "state": "NY",
    "numcol": 69000,
    "yieldpercol": 70,
    "totalprod": 4830000,
    "stocks": 2077000,
    "priceperlb": 0.66,
    "prodvalue": 3188000,
    "year": 1999
  },
  {
    "state": "NC",
    "numcol": 9000,
    "yieldpercol": 46,
    "totalprod": 414000,
    "stocks": 104000,
    "priceperlb": 1.62,
    "prodvalue": 671000,
    "year": 1999
  },
  {
    "state": "ND",
    "numcol": 255000,
    "yieldpercol": 105,
    "totalprod": 26775000,
    "stocks": 8836000,
    "priceperlb": 0.59,
    "prodvalue": 15797000,
    "year": 1999
  },
  {
    "state": "OH",
    "numcol": 20000,
    "yieldpercol": 74,
    "totalprod": 1480000,
    "stocks": 784000,
    "priceperlb": 0.72,
    "prodvalue": 1066000,
    "year": 1999
  },
  {
    "state": "OK",
    "numcol": 6000,
    "yieldpercol": 45,
    "totalprod": 270000,
    "stocks": 49000,
    "priceperlb": 1.34,
    "prodvalue": 362000,
    "year": 1999
  },
  {
    "state": "OR",
    "numcol": 45000,
    "yieldpercol": 57,
    "totalprod": 2565000,
    "stocks": 2026000,
    "priceperlb": 0.8,
    "prodvalue": 2052000,
    "year": 1999
  },
  {
    "state": "PA",
    "numcol": 28000,
    "yieldpercol": 60,
    "totalprod": 1680000,
    "stocks": 790000,
    "priceperlb": 0.76,
    "prodvalue": 1277000,
    "year": 1999
  },
  {
    "state": "SD",
    "numcol": 224000,
    "yieldpercol": 104,
    "totalprod": 23296000,
    "stocks": 13046000,
    "priceperlb": 0.6,
    "prodvalue": 13978000,
    "year": 1999
  },
  {
    "state": "TN",
    "numcol": 8000,
    "yieldpercol": 51,
    "totalprod": 408000,
    "stocks": 106000,
    "priceperlb": 1.3,
    "prodvalue": 530000,
    "year": 1999
  },
  {
    "state": "TX",
    "numcol": 108000,
    "yieldpercol": 81,
    "totalprod": 8748000,
    "stocks": 2799000,
    "priceperlb": 0.64,
    "prodvalue": 5599000,
    "year": 1999
  },
  {
    "state": "UT",
    "numcol": 26000,
    "yieldpercol": 45,
    "totalprod": 1170000,
    "stocks": 433000,
    "priceperlb": 0.68,
    "prodvalue": 796000,
    "year": 1999
  },
  {
    "state": "VT",
    "numcol": 6000,
    "yieldpercol": 66,
    "totalprod": 396000,
    "stocks": 222000,
    "priceperlb": 0.63,
    "prodvalue": 249000,
    "year": 1999
  },
  {
    "state": "VA",
    "numcol": 7000,
    "yieldpercol": 35,
    "totalprod": 245000,
    "stocks": 86000,
    "priceperlb": 1.17,
    "prodvalue": 287000,
    "year": 1999
  },
  {
    "state": "WA",
    "numcol": 52000,
    "yieldpercol": 50,
    "totalprod": 2600000,
    "stocks": 1170000,
    "priceperlb": 0.6,
    "prodvalue": 1560000,
    "year": 1999
  },
  {
    "state": "WV",
    "numcol": 6000,
    "yieldpercol": 39,
    "totalprod": 234000,
    "stocks": 152000,
    "priceperlb": 1.09,
    "prodvalue": 255000,
    "year": 1999
  },
  {
    "state": "WI",
    "numcol": 80000,
    "yieldpercol": 75,
    "totalprod": 6000000,
    "stocks": 4560000,
    "priceperlb": 0.68,
    "prodvalue": 4080000,
    "year": 1999
  },
  {
    "state": "WY",
    "numcol": 37000,
    "yieldpercol": 72,
    "totalprod": 2664000,
    "stocks": 746000,
    "priceperlb": 0.61,
    "prodvalue": 1625000,
    "year": 1999
  },
  {
    "state": "AL",
    "numcol": 16000,
    "yieldpercol": 78,
    "totalprod": 1248000,
    "stocks": 187000,
    "priceperlb": 0.59,
    "prodvalue": 736000,
    "year": 2000
  },
  {
    "state": "AZ",
    "numcol": 40000,
    "yieldpercol": 59,
    "totalprod": 2360000,
    "stocks": 1322000,
    "priceperlb": 0.73,
    "prodvalue": 1723000,
    "year": 2000
  },
  {
    "state": "AR",
    "numcol": 52000,
    "yieldpercol": 93,
    "totalprod": 4836000,
    "stocks": 3337000,
    "priceperlb": 0.57,
    "prodvalue": 2757000,
    "year": 2000
  },
  {
    "state": "CA",
    "numcol": 440000,
    "yieldpercol": 70,
    "totalprod": 30800000,
    "stocks": 11396000,
    "priceperlb": 0.59,
    "prodvalue": 18172000,
    "year": 2000
  },
  {
    "state": "CO",
    "numcol": 29000,
    "yieldpercol": 60,
    "totalprod": 1740000,
    "stocks": 957000,
    "priceperlb": 0.62,
    "prodvalue": 1079000,
    "year": 2000
  },
  {
    "state": "FL",
    "numcol": 232000,
    "yieldpercol": 105,
    "totalprod": 24360000,
    "stocks": 2923000,
    "priceperlb": 0.54,
    "prodvalue": 13154000,
    "year": 2000
  },
  {
    "state": "GA",
    "numcol": 55000,
    "yieldpercol": 57,
    "totalprod": 3135000,
    "stocks": 376000,
    "priceperlb": 0.63,
    "prodvalue": 1975000,
    "year": 2000
  },
  {
    "state": "HI",
    "numcol": 7000,
    "yieldpercol": 112,
    "totalprod": 784000,
    "stocks": 125000,
    "priceperlb": 0.82,
    "prodvalue": 643000,
    "year": 2000
  },
  {
    "state": "ID",
    "numcol": 100000,
    "yieldpercol": 47,
    "totalprod": 4700000,
    "stocks": 2679000,
    "priceperlb": 0.52,
    "prodvalue": 2444000,
    "year": 2000
  },
  {
    "state": "IL",
    "numcol": 8000,
    "yieldpercol": 61,
    "totalprod": 488000,
    "stocks": 146000,
    "priceperlb": 1.17,
    "prodvalue": 571000,
    "year": 2000
  },
  {
    "state": "IN",
    "numcol": 8000,
    "yieldpercol": 65,
    "totalprod": 520000,
    "stocks": 286000,
    "priceperlb": 1.03,
    "prodvalue": 536000,
    "year": 2000
  },
  {
    "state": "IA",
    "numcol": 30000,
    "yieldpercol": 67,
    "totalprod": 2010000,
    "stocks": 1206000,
    "priceperlb": 0.68,
    "prodvalue": 1367000,
    "year": 2000
  },
  {
    "state": "KS",
    "numcol": 15000,
    "yieldpercol": 68,
    "totalprod": 1020000,
    "stocks": 520000,
    "priceperlb": 0.91,
    "prodvalue": 928000,
    "year": 2000
  },
  {
    "state": "KY",
    "numcol": 4000,
    "yieldpercol": 48,
    "totalprod": 192000,
    "stocks": 54000,
    "priceperlb": 1.35,
    "prodvalue": 259000,
    "year": 2000
  },
  {
    "state": "LA",
    "numcol": 43000,
    "yieldpercol": 94,
    "totalprod": 4042000,
    "stocks": 1334000,
    "priceperlb": 0.52,
    "prodvalue": 2102000,
    "year": 2000
  },
  {
    "state": "ME",
    "numcol": 11000,
    "yieldpercol": 21,
    "totalprod": 231000,
    "stocks": 143000,
    "priceperlb": 0.75,
    "prodvalue": 173000,
    "year": 2000
  },
  {
    "state": "MD",
    "numcol": 6000,
    "yieldpercol": 46,
    "totalprod": 276000,
    "stocks": 52000,
    "priceperlb": 1.14,
    "prodvalue": 315000,
    "year": 2000
  },
  {
    "state": "MI",
    "numcol": 72000,
    "yieldpercol": 75,
    "totalprod": 5400000,
    "stocks": 2970000,
    "priceperlb": 0.6,
    "prodvalue": 3240000,
    "year": 2000
  },
  {
    "state": "MN",
    "numcol": 150000,
    "yieldpercol": 90,
    "totalprod": 13500000,
    "stocks": 3105000,
    "priceperlb": 0.57,
    "prodvalue": 7695000,
    "year": 2000
  },
  {
    "state": "MS",
    "numcol": 17000,
    "yieldpercol": 72,
    "totalprod": 1224000,
    "stocks": 649000,
    "priceperlb": 0.69,
    "prodvalue": 845000,
    "year": 2000
  },
  {
    "state": "MO",
    "numcol": 23000,
    "yieldpercol": 75,
    "totalprod": 1725000,
    "stocks": 362000,
    "priceperlb": 0.6,
    "prodvalue": 1035000,
    "year": 2000
  },
  {
    "state": "MT",
    "numcol": 124000,
    "yieldpercol": 88,
    "totalprod": 10912000,
    "stocks": 4692000,
    "priceperlb": 0.59,
    "prodvalue": 6438000,
    "year": 2000
  },
  {
    "state": "NE",
    "numcol": 50000,
    "yieldpercol": 87,
    "totalprod": 4350000,
    "stocks": 2610000,
    "priceperlb": 0.59,
    "prodvalue": 2567000,
    "year": 2000
  },
  {
    "state": "NV",
    "numcol": 10000,
    "yieldpercol": 35,
    "totalprod": 350000,
    "stocks": 95000,
    "priceperlb": 1.45,
    "prodvalue": 508000,
    "year": 2000
  },
  {
    "state": "NJ",
    "numcol": 11000,
    "yieldpercol": 35,
    "totalprod": 385000,
    "stocks": 200000,
    "priceperlb": 0.61,
    "prodvalue": 235000,
    "year": 2000
  },
  {
    "state": "NM",
    "numcol": 15000,
    "yieldpercol": 64,
    "totalprod": 960000,
    "stocks": 739000,
    "priceperlb": 0.72,
    "prodvalue": 691000,
    "year": 2000
  },
  {
    "state": "NY",
    "numcol": 58000,
    "yieldpercol": 80,
    "totalprod": 4640000,
    "stocks": 2274000,
    "priceperlb": 0.55,
    "prodvalue": 2552000,
    "year": 2000
  },
  {
    "state": "NC",
    "numcol": 11000,
    "yieldpercol": 49,
    "totalprod": 539000,
    "stocks": 243000,
    "priceperlb": 1.43,
    "prodvalue": 771000,
    "year": 2000
  },
  {
    "state": "ND",
    "numcol": 300000,
    "yieldpercol": 115,
    "totalprod": 34500000,
    "stocks": 13800000,
    "priceperlb": 0.57,
    "prodvalue": 19665000,
    "year": 2000
  },
  {
    "state": "OH",
    "numcol": 18000,
    "yieldpercol": 65,
    "totalprod": 1170000,
    "stocks": 585000,
    "priceperlb": 0.79,
    "prodvalue": 924000,
    "year": 2000
  },
  {
    "state": "OK",
    "numcol": 7000,
    "yieldpercol": 35,
    "totalprod": 245000,
    "stocks": 64000,
    "priceperlb": 1.26,
    "prodvalue": 309000,
    "year": 2000
  },
  {
    "state": "OR",
    "numcol": 48000,
    "yieldpercol": 51,
    "totalprod": 2448000,
    "stocks": 1665000,
    "priceperlb": 0.66,
    "prodvalue": 1616000,
    "year": 2000
  },
  {
    "state": "PA",
    "numcol": 25000,
    "yieldpercol": 45,
    "totalprod": 1125000,
    "stocks": 630000,
    "priceperlb": 0.76,
    "prodvalue": 855000,
    "year": 2000
  },
  {
    "state": "SD",
    "numcol": 235000,
    "yieldpercol": 121,
    "totalprod": 28435000,
    "stocks": 12796000,
    "priceperlb": 0.58,
    "prodvalue": 16492000,
    "year": 2000
  },
  {
    "state": "TN",
    "numcol": 9000,
    "yieldpercol": 61,
    "totalprod": 549000,
    "stocks": 104000,
    "priceperlb": 1.43,
    "prodvalue": 785000,
    "year": 2000
  },
  {
    "state": "TX",
    "numcol": 105000,
    "yieldpercol": 79,
    "totalprod": 8295000,
    "stocks": 2986000,
    "priceperlb": 0.57,
    "prodvalue": 4728000,
    "year": 2000
  },
  {
    "state": "UT",
    "numcol": 24000,
    "yieldpercol": 41,
    "totalprod": 984000,
    "stocks": 462000,
    "priceperlb": 0.6,
    "prodvalue": 590000,
    "year": 2000
  },
  {
    "state": "VT",
    "numcol": 7000,
    "yieldpercol": 59,
    "totalprod": 413000,
    "stocks": 211000,
    "priceperlb": 0.68,
    "prodvalue": 281000,
    "year": 2000
  },
  {
    "state": "VA",
    "numcol": 7000,
    "yieldpercol": 42,
    "totalprod": 294000,
    "stocks": 103000,
    "priceperlb": 1.5,
    "prodvalue": 441000,
    "year": 2000
  },
  {
    "state": "WA",
    "numcol": 52000,
    "yieldpercol": 54,
    "totalprod": 2808000,
    "stocks": 1151000,
    "priceperlb": 0.58,
    "prodvalue": 1629000,
    "year": 2000
  },
  {
    "state": "WV",
    "numcol": 7000,
    "yieldpercol": 54,
    "totalprod": 378000,
    "stocks": 234000,
    "priceperlb": 1.22,
    "prodvalue": 461000,
    "year": 2000
  },
  {
    "state": "WI",
    "numcol": 84000,
    "yieldpercol": 90,
    "totalprod": 7560000,
    "stocks": 4385000,
    "priceperlb": 0.68,
    "prodvalue": 5141000,
    "year": 2000
  },
  {
    "state": "WY",
    "numcol": 39000,
    "yieldpercol": 93,
    "totalprod": 3627000,
    "stocks": 798000,
    "priceperlb": 0.59,
    "prodvalue": 2140000,
    "year": 2000
  },
  {
    "state": "AL",
    "numcol": 14000,
    "yieldpercol": 73,
    "totalprod": 1022000,
    "stocks": 235000,
    "priceperlb": 0.72,
    "prodvalue": 736000,
    "year": 2001
  },
  {
    "state": "AZ",
    "numcol": 43000,
    "yieldpercol": 59,
    "totalprod": 2537000,
    "stocks": 1142000,
    "priceperlb": 0.72,
    "prodvalue": 1827000,
    "year": 2001
  },
  {
    "state": "AR",
    "numcol": 50000,
    "yieldpercol": 98,
    "totalprod": 4900000,
    "stocks": 1617000,
    "priceperlb": 0.65,
    "prodvalue": 3185000,
    "year": 2001
  },
  {
    "state": "CA",
    "numcol": 460000,
    "yieldpercol": 61,
    "totalprod": 28060000,
    "stocks": 7857000,
    "priceperlb": 0.69,
    "prodvalue": 19361000,
    "year": 2001
  },
  {
    "state": "CO",
    "numcol": 26000,
    "yieldpercol": 55,
    "totalprod": 1430000,
    "stocks": 529000,
    "priceperlb": 0.71,
    "prodvalue": 1015000,
    "year": 2001
  },
  {
    "state": "FL",
    "numcol": 220000,
    "yieldpercol": 100,
    "totalprod": 22000000,
    "stocks": 3432000,
    "priceperlb": 0.64,
    "prodvalue": 14080000,
    "year": 2001
  },
  {
    "state": "GA",
    "numcol": 55000,
    "yieldpercol": 57,
    "totalprod": 3135000,
    "stocks": 188000,
    "priceperlb": 0.7,
    "prodvalue": 2195000,
    "year": 2001
  },
  {
    "state": "HI",
    "numcol": 8000,
    "yieldpercol": 87,
    "totalprod": 696000,
    "stocks": 84000,
    "priceperlb": 0.87,
    "prodvalue": 606000,
    "year": 2001
  },
  {
    "state": "ID",
    "numcol": 100000,
    "yieldpercol": 46,
    "totalprod": 4600000,
    "stocks": 1610000,
    "priceperlb": 0.67,
    "prodvalue": 3082000,
    "year": 2001
  },
  {
    "state": "IL",
    "numcol": 6000,
    "yieldpercol": 76,
    "totalprod": 456000,
    "stocks": 251000,
    "priceperlb": 1.58,
    "prodvalue": 720000,
    "year": 2001
  },
  {
    "state": "IN",
    "numcol": 7000,
    "yieldpercol": 76,
    "totalprod": 532000,
    "stocks": 186000,
    "priceperlb": 0.92,
    "prodvalue": 489000,
    "year": 2001
  },
  {
    "state": "IA",
    "numcol": 33000,
    "yieldpercol": 51,
    "totalprod": 1683000,
    "stocks": 875000,
    "priceperlb": 0.75,
    "prodvalue": 1262000,
    "year": 2001
  },
  {
    "state": "KS",
    "numcol": 13000,
    "yieldpercol": 51,
    "totalprod": 663000,
    "stocks": 530000,
    "priceperlb": 0.96,
    "prodvalue": 636000,
    "year": 2001
  },
  {
    "state": "KY",
    "numcol": 4000,
    "yieldpercol": 78,
    "totalprod": 312000,
    "stocks": 125000,
    "priceperlb": 1.41,
    "prodvalue": 440000,
    "year": 2001
  },
  {
    "state": "LA",
    "numcol": 45000,
    "yieldpercol": 106,
    "totalprod": 4770000,
    "stocks": 572000,
    "priceperlb": 0.6,
    "prodvalue": 2862000,
    "year": 2001
  },
  {
    "state": "ME",
    "numcol": 11000,
    "yieldpercol": 20,
    "totalprod": 220000,
    "stocks": 106000,
    "priceperlb": 0.79,
    "prodvalue": 174000,
    "year": 2001
  },
  {
    "state": "MD",
    "numcol": 4000,
    "yieldpercol": 46,
    "totalprod": 184000,
    "stocks": 55000,
    "priceperlb": 1.6,
    "prodvalue": 294000,
    "year": 2001
  },
  {
    "state": "MI",
    "numcol": 76000,
    "yieldpercol": 60,
    "totalprod": 4560000,
    "stocks": 2827000,
    "priceperlb": 0.81,
    "prodvalue": 3694000,
    "year": 2001
  },
  {
    "state": "MN",
    "numcol": 135000,
    "yieldpercol": 81,
    "totalprod": 10935000,
    "stocks": 1859000,
    "priceperlb": 0.65,
    "prodvalue": 7108000,
    "year": 2001
  },
  {
    "state": "MS",
    "numcol": 17000,
    "yieldpercol": 66,
    "totalprod": 1122000,
    "stocks": 224000,
    "priceperlb": 0.89,
    "prodvalue": 999000,
    "year": 2001
  },
  {
    "state": "MO",
    "numcol": 22000,
    "yieldpercol": 61,
    "totalprod": 1342000,
    "stocks": 336000,
    "priceperlb": 0.71,
    "prodvalue": 953000,
    "year": 2001
  },
  {
    "state": "MT",
    "numcol": 136000,
    "yieldpercol": 102,
    "totalprod": 13872000,
    "stocks": 4578000,
    "priceperlb": 0.67,
    "prodvalue": 9294000,
    "year": 2001
  },
  {
    "state": "NE",
    "numcol": 43000,
    "yieldpercol": 48,
    "totalprod": 2064000,
    "stocks": 1115000,
    "priceperlb": 0.72,
    "prodvalue": 1486000,
    "year": 2001
  },
  {
    "state": "NV",
    "numcol": 9000,
    "yieldpercol": 50,
    "totalprod": 450000,
    "stocks": 36000,
    "priceperlb": 2.14,
    "prodvalue": 963000,
    "year": 2001
  },
  {
    "state": "NJ",
    "numcol": 11000,
    "yieldpercol": 34,
    "totalprod": 374000,
    "stocks": 71000,
    "priceperlb": 0.85,
    "prodvalue": 318000,
    "year": 2001
  },
  {
    "state": "NM",
    "numcol": 10000,
    "yieldpercol": 70,
    "totalprod": 700000,
    "stocks": 350000,
    "priceperlb": 0.66,
    "prodvalue": 462000,
    "year": 2001
  },
  {
    "state": "NY",
    "numcol": 53000,
    "yieldpercol": 70,
    "totalprod": 3710000,
    "stocks": 1781000,
    "priceperlb": 0.79,
    "prodvalue": 2931000,
    "year": 2001
  },
  {
    "state": "NC",
    "numcol": 13000,
    "yieldpercol": 44,
    "totalprod": 572000,
    "stocks": 172000,
    "priceperlb": 1.48,
    "prodvalue": 847000,
    "year": 2001
  },
  {
    "state": "ND",
    "numcol": 280000,
    "yieldpercol": 96,
    "totalprod": 26880000,
    "stocks": 9408000,
    "priceperlb": 0.69,
    "prodvalue": 18547000,
    "year": 2001
  },
  {
    "state": "OH",
    "numcol": 18000,
    "yieldpercol": 81,
    "totalprod": 1458000,
    "stocks": 569000,
    "priceperlb": 1.01,
    "prodvalue": 1473000,
    "year": 2001
  },
  {
    "state": "OK",
    "numcol": 4000,
    "yieldpercol": 47,
    "totalprod": 188000,
    "stocks": 105000,
    "priceperlb": 1.43,
    "prodvalue": 269000,
    "year": 2001
  },
  {
    "state": "OR",
    "numcol": 44000,
    "yieldpercol": 44,
    "totalprod": 1936000,
    "stocks": 1200000,
    "priceperlb": 0.74,
    "prodvalue": 1433000,
    "year": 2001
  },
  {
    "state": "PA",
    "numcol": 26000,
    "yieldpercol": 57,
    "totalprod": 1482000,
    "stocks": 785000,
    "priceperlb": 0.92,
    "prodvalue": 1363000,
    "year": 2001
  },
  {
    "state": "SC",
    "numcol": 7000,
    "yieldpercol": 40,
    "totalprod": 280000,
    "stocks": 67000,
    "priceperlb": 0.79,
    "prodvalue": 221000,
    "year": 2001
  },
  {
    "state": "SD",
    "numcol": 235000,
    "yieldpercol": 65,
    "totalprod": 15275000,
    "stocks": 12220000,
    "priceperlb": 0.71,
    "prodvalue": 10845000,
    "year": 2001
  },
  {
    "state": "TN",
    "numcol": 8000,
    "yieldpercol": 59,
    "totalprod": 472000,
    "stocks": 131000,
    "priceperlb": 1.39,
    "prodvalue": 656000,
    "year": 2001
  },
  {
    "state": "TX",
    "numcol": 97000,
    "yieldpercol": 79,
    "totalprod": 7663000,
    "stocks": 1533000,
    "priceperlb": 0.65,
    "prodvalue": 4981000,
    "year": 2001
  },
  {
    "state": "UT",
    "numcol": 23000,
    "yieldpercol": 38,
    "totalprod": 874000,
    "stocks": 315000,
    "priceperlb": 0.65,
    "prodvalue": 568000,
    "year": 2001
  },
  {
    "state": "VT",
    "numcol": 7000,
    "yieldpercol": 81,
    "totalprod": 567000,
    "stocks": 249000,
    "priceperlb": 0.92,
    "prodvalue": 522000,
    "year": 2001
  },
  {
    "state": "VA",
    "numcol": 9000,
    "yieldpercol": 52,
    "totalprod": 468000,
    "stocks": 94000,
    "priceperlb": 1.26,
    "prodvalue": 590000,
    "year": 2001
  },
  {
    "state": "WA",
    "numcol": 48000,
    "yieldpercol": 52,
    "totalprod": 2496000,
    "stocks": 1048000,
    "priceperlb": 0.72,
    "prodvalue": 1797000,
    "year": 2001
  },
  {
    "state": "WV",
    "numcol": 7000,
    "yieldpercol": 65,
    "totalprod": 455000,
    "stocks": 410000,
    "priceperlb": 1.42,
    "prodvalue": 646000,
    "year": 2001
  },
  {
    "state": "WI",
    "numcol": 67000,
    "yieldpercol": 81,
    "totalprod": 5427000,
    "stocks": 3419000,
    "priceperlb": 0.82,
    "prodvalue": 4450000,
    "year": 2001
  },
  {
    "state": "WY",
    "numcol": 38000,
    "yieldpercol": 77,
    "totalprod": 2926000,
    "stocks": 468000,
    "priceperlb": 0.65,
    "prodvalue": 1902000,
    "year": 2001
  },
  {
    "state": "AL",
    "numcol": 12000,
    "yieldpercol": 86,
    "totalprod": 1032000,
    "stocks": 103000,
    "priceperlb": 1.18,
    "prodvalue": 1218000,
    "year": 2002
  },
  {
    "state": "AZ",
    "numcol": 38000,
    "yieldpercol": 63,
    "totalprod": 2394000,
    "stocks": 1197000,
    "priceperlb": 1.08,
    "prodvalue": 2586000,
    "year": 2002
  },
  {
    "state": "AR",
    "numcol": 45000,
    "yieldpercol": 88,
    "totalprod": 3960000,
    "stocks": 871000,
    "priceperlb": 1.26,
    "prodvalue": 4990000,
    "year": 2002
  },
  {
    "state": "CA",
    "numcol": 470000,
    "yieldpercol": 50,
    "totalprod": 23500000,
    "stocks": 3525000,
    "priceperlb": 1.32,
    "prodvalue": 31020000,
    "year": 2002
  },
  {
    "state": "CO",
    "numcol": 24000,
    "yieldpercol": 60,
    "totalprod": 1440000,
    "stocks": 576000,
    "priceperlb": 1.29,
    "prodvalue": 1858000,
    "year": 2002
  },
  {
    "state": "FL",
    "numcol": 220000,
    "yieldpercol": 93,
    "totalprod": 20460000,
    "stocks": 2026000,
    "priceperlb": 1.14,
    "prodvalue": 23324000,
    "year": 2002
  },
  {
    "state": "GA",
    "numcol": 50000,
    "yieldpercol": 52,
    "totalprod": 2600000,
    "stocks": 52000,
    "priceperlb": 1.13,
    "prodvalue": 2938000,
    "year": 2002
  },
  {
    "state": "HI",
    "numcol": 7000,
    "yieldpercol": 136,
    "totalprod": 952000,
    "stocks": 29000,
    "priceperlb": 1.11,
    "prodvalue": 1057000,
    "year": 2002
  },
  {
    "state": "ID",
    "numcol": 100000,
    "yieldpercol": 57,
    "totalprod": 5700000,
    "stocks": 1653000,
    "priceperlb": 1.37,
    "prodvalue": 7809000,
    "year": 2002
  },
  {
    "state": "IL",
    "numcol": 9000,
    "yieldpercol": 80,
    "totalprod": 720000,
    "stocks": 130000,
    "priceperlb": 1.47,
    "prodvalue": 1058000,
    "year": 2002
  },
  {
    "state": "IN",
    "numcol": 8000,
    "yieldpercol": 62,
    "totalprod": 496000,
    "stocks": 233000,
    "priceperlb": 1.19,
    "prodvalue": 590000,
    "year": 2002
  },
  {
    "state": "IA",
    "numcol": 33000,
    "yieldpercol": 70,
    "totalprod": 2310000,
    "stocks": 901000,
    "priceperlb": 1.43,
    "prodvalue": 3303000,
    "year": 2002
  },
  {
    "state": "KS",
    "numcol": 17000,
    "yieldpercol": 52,
    "totalprod": 884000,
    "stocks": 407000,
    "priceperlb": 1.5,
    "prodvalue": 1326000,
    "year": 2002
  },
  {
    "state": "KY",
    "numcol": 5000,
    "yieldpercol": 54,
    "totalprod": 270000,
    "stocks": 78000,
    "priceperlb": 1.63,
    "prodvalue": 440000,
    "year": 2002
  },
  {
    "state": "LA",
    "numcol": 35000,
    "yieldpercol": 124,
    "totalprod": 4340000,
    "stocks": 347000,
    "priceperlb": 1.16,
    "prodvalue": 5034000,
    "year": 2002
  },
  {
    "state": "ME",
    "numcol": 11000,
    "yieldpercol": 41,
    "totalprod": 451000,
    "stocks": 266000,
    "priceperlb": 1.21,
    "prodvalue": 546000,
    "year": 2002
  },
  {
    "state": "MD",
    "numcol": 3000,
    "yieldpercol": 46,
    "totalprod": 138000,
    "stocks": 21000,
    "priceperlb": 1.96,
    "prodvalue": 270000,
    "year": 2002
  },
  {
    "state": "MI",
    "numcol": 72000,
    "yieldpercol": 77,
    "totalprod": 5544000,
    "stocks": 1885000,
    "priceperlb": 1.4,
    "prodvalue": 7762000,
    "year": 2002
  },
  {
    "state": "MN",
    "numcol": 117000,
    "yieldpercol": 73,
    "totalprod": 8541000,
    "stocks": 1110000,
    "priceperlb": 1.47,
    "prodvalue": 12555000,
    "year": 2002
  },
  {
    "state": "MS",
    "numcol": 18000,
    "yieldpercol": 78,
    "totalprod": 1404000,
    "stocks": 281000,
    "priceperlb": 1.23,
    "prodvalue": 1727000,
    "year": 2002
  },
  {
    "state": "MO",
    "numcol": 18000,
    "yieldpercol": 50,
    "totalprod": 900000,
    "stocks": 189000,
    "priceperlb": 1.42,
    "prodvalue": 1278000,
    "year": 2002
  },
  {
    "state": "MT",
    "numcol": 134000,
    "yieldpercol": 63,
    "totalprod": 8442000,
    "stocks": 1097000,
    "priceperlb": 1.38,
    "prodvalue": 11650000,
    "year": 2002
  },
  {
    "state": "NE",
    "numcol": 43000,
    "yieldpercol": 75,
    "totalprod": 3225000,
    "stocks": 1161000,
    "priceperlb": 1.49,
    "prodvalue": 4805000,
    "year": 2002
  },
  {
    "state": "NV",
    "numcol": 9000,
    "yieldpercol": 62,
    "totalprod": 558000,
    "stocks": 61000,
    "priceperlb": 2.67,
    "prodvalue": 1490000,
    "year": 2002
  },
  {
    "state": "NJ",
    "numcol": 11000,
    "yieldpercol": 40,
    "totalprod": 440000,
    "stocks": 92000,
    "priceperlb": 1,
    "prodvalue": 440000,
    "year": 2002
  },
  {
    "state": "NM",
    "numcol": 11000,
    "yieldpercol": 44,
    "totalprod": 484000,
    "stocks": 252000,
    "priceperlb": 1.1,
    "prodvalue": 532000,
    "year": 2002
  },
  {
    "state": "NY",
    "numcol": 60000,
    "yieldpercol": 98,
    "totalprod": 5880000,
    "stocks": 2470000,
    "priceperlb": 1.25,
    "prodvalue": 7350000,
    "year": 2002
  },
  {
    "state": "NC",
    "numcol": 16000,
    "yieldpercol": 42,
    "totalprod": 672000,
    "stocks": 74000,
    "priceperlb": 1.41,
    "prodvalue": 948000,
    "year": 2002
  },
  {
    "state": "ND",
    "numcol": 320000,
    "yieldpercol": 75,
    "totalprod": 24000000,
    "stocks": 8160000,
    "priceperlb": 1.46,
    "prodvalue": 35040000,
    "year": 2002
  },
  {
    "state": "OH",
    "numcol": 18000,
    "yieldpercol": 70,
    "totalprod": 1260000,
    "stocks": 504000,
    "priceperlb": 1.44,
    "prodvalue": 1814000,
    "year": 2002
  },
  {
    "state": "OK",
    "numcol": 3000,
    "yieldpercol": 53,
    "totalprod": 159000,
    "stocks": 51000,
    "priceperlb": 1.63,
    "prodvalue": 259000,
    "year": 2002
  },
  {
    "state": "OR",
    "numcol": 43000,
    "yieldpercol": 49,
    "totalprod": 2107000,
    "stocks": 885000,
    "priceperlb": 1.35,
    "prodvalue": 2844000,
    "year": 2002
  },
  {
    "state": "PA",
    "numcol": 29000,
    "yieldpercol": 57,
    "totalprod": 1653000,
    "stocks": 827000,
    "priceperlb": 1.34,
    "prodvalue": 2215000,
    "year": 2002
  },
  {
    "state": "SC",
    "numcol": 5000,
    "yieldpercol": 94,
    "totalprod": 470000,
    "stocks": 14000,
    "priceperlb": 1.25,
    "prodvalue": 588000,
    "year": 2002
  },
  {
    "state": "SD",
    "numcol": 225000,
    "yieldpercol": 51,
    "totalprod": 11475000,
    "stocks": 2410000,
    "priceperlb": 1.42,
    "prodvalue": 16295000,
    "year": 2002
  },
  {
    "state": "TN",
    "numcol": 8000,
    "yieldpercol": 61,
    "totalprod": 488000,
    "stocks": 137000,
    "priceperlb": 1.4,
    "prodvalue": 683000,
    "year": 2002
  },
  {
    "state": "TX",
    "numcol": 114000,
    "yieldpercol": 67,
    "totalprod": 7638000,
    "stocks": 985000,
    "priceperlb": 1.14,
    "prodvalue": 8707000,
    "year": 2002
  },
  {
    "state": "UT",
    "numcol": 22000,
    "yieldpercol": 59,
    "totalprod": 1298000,
    "stocks": 208000,
    "priceperlb": 1.3,
    "prodvalue": 1687000,
    "year": 2002
  },
  {
    "state": "VT",
    "numcol": 7000,
    "yieldpercol": 89,
    "totalprod": 623000,
    "stocks": 274000,
    "priceperlb": 1.2,
    "prodvalue": 748000,
    "year": 2002
  },
  {
    "state": "VA",
    "numcol": 8000,
    "yieldpercol": 38,
    "totalprod": 304000,
    "stocks": 79000,
    "priceperlb": 1.9,
    "prodvalue": 578000,
    "year": 2002
  },
  {
    "state": "WA",
    "numcol": 50000,
    "yieldpercol": 51,
    "totalprod": 2550000,
    "stocks": 561000,
    "priceperlb": 1.27,
    "prodvalue": 3239000,
    "year": 2002
  },
  {
    "state": "WV",
    "numcol": 9000,
    "yieldpercol": 51,
    "totalprod": 459000,
    "stocks": 151000,
    "priceperlb": 1.32,
    "prodvalue": 606000,
    "year": 2002
  },
  {
    "state": "WI",
    "numcol": 70000,
    "yieldpercol": 95,
    "totalprod": 6650000,
    "stocks": 2461000,
    "priceperlb": 1.34,
    "prodvalue": 8911000,
    "year": 2002
  },
  {
    "state": "WY",
    "numcol": 38000,
    "yieldpercol": 63,
    "totalprod": 2394000,
    "stocks": 383000,
    "priceperlb": 1.33,
    "prodvalue": 3184000,
    "year": 2002
  },
  {
    "state": "AL",
    "numcol": 13000,
    "yieldpercol": 82,
    "totalprod": 1066000,
    "stocks": 43000,
    "priceperlb": 1.24,
    "prodvalue": 1322000,
    "year": 2003
  },
  {
    "state": "AZ",
    "numcol": 35000,
    "yieldpercol": 72,
    "totalprod": 2520000,
    "stocks": 983000,
    "priceperlb": 1.34,
    "prodvalue": 3377000,
    "year": 2003
  },
  {
    "state": "AR",
    "numcol": 40000,
    "yieldpercol": 75,
    "totalprod": 3000000,
    "stocks": 810000,
    "priceperlb": 1.26,
    "prodvalue": 3780000,
    "year": 2003
  },
  {
    "state": "CA",
    "numcol": 480000,
    "yieldpercol": 67,
    "totalprod": 32160000,
    "stocks": 6432000,
    "priceperlb": 1.39,
    "prodvalue": 44702000,
    "year": 2003
  },
  {
    "state": "CO",
    "numcol": 24000,
    "yieldpercol": 86,
    "totalprod": 2064000,
    "stocks": 722000,
    "priceperlb": 1.4,
    "prodvalue": 2890000,
    "year": 2003
  },
  {
    "state": "FL",
    "numcol": 210000,
    "yieldpercol": 71,
    "totalprod": 14910000,
    "stocks": 1491000,
    "priceperlb": 1.32,
    "prodvalue": 19681000,
    "year": 2003
  },
  {
    "state": "GA",
    "numcol": 52000,
    "yieldpercol": 65,
    "totalprod": 3380000,
    "stocks": 270000,
    "priceperlb": 1.28,
    "prodvalue": 4326000,
    "year": 2003
  },
  {
    "state": "HI",
    "numcol": 7000,
    "yieldpercol": 114,
    "totalprod": 798000,
    "stocks": 43000,
    "priceperlb": 1.45,
    "prodvalue": 1157000,
    "year": 2003
  },
  {
    "state": "ID",
    "numcol": 100000,
    "yieldpercol": 46,
    "totalprod": 4600000,
    "stocks": 1380000,
    "priceperlb": 1.33,
    "prodvalue": 6118000,
    "year": 2003
  },
  {
    "state": "IL",
    "numcol": 7000,
    "yieldpercol": 60,
    "totalprod": 420000,
    "stocks": 252000,
    "priceperlb": 1.83,
    "prodvalue": 769000,
    "year": 2003
  },
  {
    "state": "IN",
    "numcol": 5000,
    "yieldpercol": 56,
    "totalprod": 280000,
    "stocks": 78000,
    "priceperlb": 1.66,
    "prodvalue": 465000,
    "year": 2003
  },
  {
    "state": "IA",
    "numcol": 32000,
    "yieldpercol": 59,
    "totalprod": 1888000,
    "stocks": 868000,
    "priceperlb": 1.42,
    "prodvalue": 2681000,
    "year": 2003
  },
  {
    "state": "KS",
    "numcol": 16000,
    "yieldpercol": 57,
    "totalprod": 912000,
    "stocks": 447000,
    "priceperlb": 1.41,
    "prodvalue": 1286000,
    "year": 2003
  },
  {
    "state": "KY",
    "numcol": 5000,
    "yieldpercol": 48,
    "totalprod": 240000,
    "stocks": 14000,
    "priceperlb": 1.67,
    "prodvalue": 401000,
    "year": 2003
  },
  {
    "state": "LA",
    "numcol": 34000,
    "yieldpercol": 90,
    "totalprod": 3060000,
    "stocks": 275000,
    "priceperlb": 1.24,
    "prodvalue": 3794000,
    "year": 2003
  },
  {
    "state": "ME",
    "numcol": 8000,
    "yieldpercol": 33,
    "totalprod": 264000,
    "stocks": 145000,
    "priceperlb": 1.41,
    "prodvalue": 372000,
    "year": 2003
  },
  {
    "state": "MD",
    "numcol": 2000,
    "yieldpercol": 42,
    "totalprod": 84000,
    "stocks": 21000,
    "priceperlb": 1.93,
    "prodvalue": 162000,
    "year": 2003
  },
  {
    "state": "MI",
    "numcol": 65000,
    "yieldpercol": 74,
    "totalprod": 4810000,
    "stocks": 1732000,
    "priceperlb": 1.41,
    "prodvalue": 6782000,
    "year": 2003
  },
  {
    "state": "MN",
    "numcol": 120000,
    "yieldpercol": 83,
    "totalprod": 9960000,
    "stocks": 1892000,
    "priceperlb": 1.44,
    "prodvalue": 14342000,
    "year": 2003
  },
  {
    "state": "MS",
    "numcol": 21000,
    "yieldpercol": 69,
    "totalprod": 1449000,
    "stocks": 246000,
    "priceperlb": 1.29,
    "prodvalue": 1869000,
    "year": 2003
  },
  {
    "state": "MO",
    "numcol": 17000,
    "yieldpercol": 53,
    "totalprod": 901000,
    "stocks": 189000,
    "priceperlb": 1.41,
    "prodvalue": 1270000,
    "year": 2003
  },
  {
    "state": "MT",
    "numcol": 145000,
    "yieldpercol": 66,
    "totalprod": 9570000,
    "stocks": 1914000,
    "priceperlb": 1.44,
    "prodvalue": 13781000,
    "year": 2003
  },
  {
    "state": "NE",
    "numcol": 45000,
    "yieldpercol": 74,
    "totalprod": 3330000,
    "stocks": 1299000,
    "priceperlb": 1.38,
    "prodvalue": 4595000,
    "year": 2003
  },
  {
    "state": "NV",
    "numcol": 6000,
    "yieldpercol": 64,
    "totalprod": 384000,
    "stocks": 46000,
    "priceperlb": 2.04,
    "prodvalue": 783000,
    "year": 2003
  },
  {
    "state": "NJ",
    "numcol": 10000,
    "yieldpercol": 19,
    "totalprod": 190000,
    "stocks": 101000,
    "priceperlb": 1.6,
    "prodvalue": 304000,
    "year": 2003
  },
  {
    "state": "NM",
    "numcol": 6000,
    "yieldpercol": 41,
    "totalprod": 246000,
    "stocks": 108000,
    "priceperlb": 1.2,
    "prodvalue": 295000,
    "year": 2003
  },
  {
    "state": "NY",
    "numcol": 67000,
    "yieldpercol": 72,
    "totalprod": 4824000,
    "stocks": 1640000,
    "priceperlb": 1.36,
    "prodvalue": 6561000,
    "year": 2003
  },
  {
    "state": "NC",
    "numcol": 10000,
    "yieldpercol": 44,
    "totalprod": 440000,
    "stocks": 79000,
    "priceperlb": 1.92,
    "prodvalue": 845000,
    "year": 2003
  },
  {
    "state": "ND",
    "numcol": 340000,
    "yieldpercol": 87,
    "totalprod": 29580000,
    "stocks": 6803000,
    "priceperlb": 1.36,
    "prodvalue": 40229000,
    "year": 2003
  },
  {
    "state": "OH",
    "numcol": 15000,
    "yieldpercol": 50,
    "totalprod": 750000,
    "stocks": 278000,
    "priceperlb": 1.4,
    "prodvalue": 1050000,
    "year": 2003
  },
  {
    "state": "OK",
    "numcol": 3000,
    "yieldpercol": 47,
    "totalprod": 141000,
    "stocks": 69000,
    "priceperlb": 1.84,
    "prodvalue": 259000,
    "year": 2003
  },
  {
    "state": "OR",
    "numcol": 42000,
    "yieldpercol": 51,
    "totalprod": 2142000,
    "stocks": 964000,
    "priceperlb": 1.27,
    "prodvalue": 2720000,
    "year": 2003
  },
  {
    "state": "PA",
    "numcol": 27000,
    "yieldpercol": 50,
    "totalprod": 1350000,
    "stocks": 419000,
    "priceperlb": 1.44,
    "prodvalue": 1944000,
    "year": 2003
  },
  {
    "state": "SC",
    "numcol": 4000,
    "yieldpercol": 70,
    "totalprod": 280000,
    "stocks": 8000,
    "priceperlb": 1.89,
    "prodvalue": 529000,
    "year": 2003
  },
  {
    "state": "SD",
    "numcol": 215000,
    "yieldpercol": 70,
    "totalprod": 15050000,
    "stocks": 2709000,
    "priceperlb": 1.43,
    "prodvalue": 21522000,
    "year": 2003
  },
  {
    "state": "TN",
    "numcol": 6000,
    "yieldpercol": 40,
    "totalprod": 240000,
    "stocks": 46000,
    "priceperlb": 1.52,
    "prodvalue": 365000,
    "year": 2003
  },
  {
    "state": "TX",
    "numcol": 140000,
    "yieldpercol": 67,
    "totalprod": 9380000,
    "stocks": 1126000,
    "priceperlb": 1.4,
    "prodvalue": 13132000,
    "year": 2003
  },
  {
    "state": "UT",
    "numcol": 25000,
    "yieldpercol": 57,
    "totalprod": 1425000,
    "stocks": 157000,
    "priceperlb": 1.28,
    "prodvalue": 1824000,
    "year": 2003
  },
  {
    "state": "VT",
    "numcol": 7000,
    "yieldpercol": 83,
    "totalprod": 581000,
    "stocks": 163000,
    "priceperlb": 1.96,
    "prodvalue": 1139000,
    "year": 2003
  },
  {
    "state": "VA",
    "numcol": 6000,
    "yieldpercol": 37,
    "totalprod": 222000,
    "stocks": 69000,
    "priceperlb": 1.68,
    "prodvalue": 373000,
    "year": 2003
  },
  {
    "state": "WA",
    "numcol": 58000,
    "yieldpercol": 56,
    "totalprod": 3248000,
    "stocks": 942000,
    "priceperlb": 1.46,
    "prodvalue": 4742000,
    "year": 2003
  },
  {
    "state": "WV",
    "numcol": 8000,
    "yieldpercol": 47,
    "totalprod": 376000,
    "stocks": 194000,
    "priceperlb": 1.89,
    "prodvalue": 711000,
    "year": 2003
  },
  {
    "state": "WI",
    "numcol": 74000,
    "yieldpercol": 77,
    "totalprod": 5698000,
    "stocks": 2678000,
    "priceperlb": 1.47,
    "prodvalue": 8376000,
    "year": 2003
  },
  {
    "state": "WY",
    "numcol": 39000,
    "yieldpercol": 81,
    "totalprod": 3159000,
    "stocks": 474000,
    "priceperlb": 1.41,
    "prodvalue": 4454000,
    "year": 2003
  },
  {
    "state": "AL",
    "numcol": 12000,
    "yieldpercol": 87,
    "totalprod": 1044000,
    "stocks": 282000,
    "priceperlb": 1.41,
    "prodvalue": 1472000,
    "year": 2004
  },
  {
    "state": "AZ",
    "numcol": 32000,
    "yieldpercol": 55,
    "totalprod": 1760000,
    "stocks": 774000,
    "priceperlb": 1.11,
    "prodvalue": 1954000,
    "year": 2004
  },
  {
    "state": "AR",
    "numcol": 40000,
    "yieldpercol": 57,
    "totalprod": 2280000,
    "stocks": 388000,
    "priceperlb": 0.87,
    "prodvalue": 1984000,
    "year": 2004
  },
  {
    "state": "CA",
    "numcol": 390000,
    "yieldpercol": 45,
    "totalprod": 17550000,
    "stocks": 5792000,
    "priceperlb": 1.05,
    "prodvalue": 18428000,
    "year": 2004
  },
  {
    "state": "CO",
    "numcol": 23000,
    "yieldpercol": 80,
    "totalprod": 1840000,
    "stocks": 791000,
    "priceperlb": 1.35,
    "prodvalue": 2484000,
    "year": 2004
  },
  {
    "state": "FL",
    "numcol": 205000,
    "yieldpercol": 98,
    "totalprod": 20090000,
    "stocks": 2009000,
    "priceperlb": 1.02,
    "prodvalue": 20492000,
    "year": 2004
  },
  {
    "state": "GA",
    "numcol": 63000,
    "yieldpercol": 49,
    "totalprod": 3087000,
    "stocks": 648000,
    "priceperlb": 1.2,
    "prodvalue": 3704000,
    "year": 2004
  },
  {
    "state": "HI",
    "numcol": 8000,
    "yieldpercol": 96,
    "totalprod": 768000,
    "stocks": 77000,
    "priceperlb": 1.59,
    "prodvalue": 1221000,
    "year": 2004
  },
  {
    "state": "ID",
    "numcol": 100000,
    "yieldpercol": 63,
    "totalprod": 6300000,
    "stocks": 2520000,
    "priceperlb": 1.02,
    "prodvalue": 6426000,
    "year": 2004
  },
  {
    "state": "IL",
    "numcol": 7000,
    "yieldpercol": 55,
    "totalprod": 385000,
    "stocks": 193000,
    "priceperlb": 1.86,
    "prodvalue": 716000,
    "year": 2004
  },
  {
    "state": "IN",
    "numcol": 7000,
    "yieldpercol": 59,
    "totalprod": 413000,
    "stocks": 145000,
    "priceperlb": 1.47,
    "prodvalue": 607000,
    "year": 2004
  },
  {
    "state": "IA",
    "numcol": 35000,
    "yieldpercol": 67,
    "totalprod": 2345000,
    "stocks": 1337000,
    "priceperlb": 1.06,
    "prodvalue": 2486000,
    "year": 2004
  },
  {
    "state": "KS",
    "numcol": 14000,
    "yieldpercol": 80,
    "totalprod": 1120000,
    "stocks": 683000,
    "priceperlb": 1.18,
    "prodvalue": 1322000,
    "year": 2004
  },
  {
    "state": "KY",
    "numcol": 5000,
    "yieldpercol": 56,
    "totalprod": 280000,
    "stocks": 34000,
    "priceperlb": 1.96,
    "prodvalue": 549000,
    "year": 2004
  },
  {
    "state": "LA",
    "numcol": 35000,
    "yieldpercol": 98,
    "totalprod": 3430000,
    "stocks": 240000,
    "priceperlb": 0.79,
    "prodvalue": 2710000,
    "year": 2004
  },
  {
    "state": "ME",
    "numcol": 7000,
    "yieldpercol": 31,
    "totalprod": 217000,
    "stocks": 37000,
    "priceperlb": 1.28,
    "prodvalue": 278000,
    "year": 2004
  },
  {
    "state": "MI",
    "numcol": 65000,
    "yieldpercol": 67,
    "totalprod": 4355000,
    "stocks": 2439000,
    "priceperlb": 1.16,
    "prodvalue": 5052000,
    "year": 2004
  },
  {
    "state": "MN",
    "numcol": 135000,
    "yieldpercol": 75,
    "totalprod": 10125000,
    "stocks": 1924000,
    "priceperlb": 1.08,
    "prodvalue": 10935000,
    "year": 2004
  },
  {
    "state": "MS",
    "numcol": 18000,
    "yieldpercol": 65,
    "totalprod": 1170000,
    "stocks": 421000,
    "priceperlb": 0.79,
    "prodvalue": 924000,
    "year": 2004
  },
  {
    "state": "MO",
    "numcol": 16000,
    "yieldpercol": 41,
    "totalprod": 656000,
    "stocks": 151000,
    "priceperlb": 1.36,
    "prodvalue": 892000,
    "year": 2004
  },
  {
    "state": "MT",
    "numcol": 140000,
    "yieldpercol": 77,
    "totalprod": 10780000,
    "stocks": 3773000,
    "priceperlb": 1.08,
    "prodvalue": 11642000,
    "year": 2004
  },
  {
    "state": "NE",
    "numcol": 51000,
    "yieldpercol": 89,
    "totalprod": 4539000,
    "stocks": 2043000,
    "priceperlb": 1.01,
    "prodvalue": 4584000,
    "year": 2004
  },
  {
    "state": "NV",
    "numcol": 14000,
    "yieldpercol": 55,
    "totalprod": 770000,
    "stocks": 316000,
    "priceperlb": 1.78,
    "prodvalue": 1371000,
    "year": 2004
  },
  {
    "state": "NJ",
    "numcol": 12000,
    "yieldpercol": 27,
    "totalprod": 324000,
    "stocks": 45000,
    "priceperlb": 1.4,
    "prodvalue": 454000,
    "year": 2004
  },
  {
    "state": "NM",
    "numcol": 8000,
    "yieldpercol": 44,
    "totalprod": 352000,
    "stocks": 127000,
    "priceperlb": 1.19,
    "prodvalue": 419000,
    "year": 2004
  },
  {
    "state": "NY",
    "numcol": 64000,
    "yieldpercol": 67,
    "totalprod": 4288000,
    "stocks": 1887000,
    "priceperlb": 1.36,
    "prodvalue": 5832000,
    "year": 2004
  },
  {
    "state": "NC",
    "numcol": 9000,
    "yieldpercol": 40,
    "totalprod": 360000,
    "stocks": 72000,
    "priceperlb": 1.93,
    "prodvalue": 695000,
    "year": 2004
  },
  {
    "state": "ND",
    "numcol": 390000,
    "yieldpercol": 78,
    "totalprod": 30420000,
    "stocks": 9126000,
    "priceperlb": 1.05,
    "prodvalue": 31941000,
    "year": 2004
  },
  {
    "state": "OH",
    "numcol": 16000,
    "yieldpercol": 58,
    "totalprod": 928000,
    "stocks": 353000,
    "priceperlb": 1.53,
    "prodvalue": 1420000,
    "year": 2004
  },
  {
    "state": "OR",
    "numcol": 42000,
    "yieldpercol": 54,
    "totalprod": 2268000,
    "stocks": 1111000,
    "priceperlb": 1.21,
    "prodvalue": 2744000,
    "year": 2004
  },
  {
    "state": "PA",
    "numcol": 30000,
    "yieldpercol": 54,
    "totalprod": 1620000,
    "stocks": 810000,
    "priceperlb": 1.42,
    "prodvalue": 2300000,
    "year": 2004
  },
  {
    "state": "SD",
    "numcol": 215000,
    "yieldpercol": 105,
    "totalprod": 22575000,
    "stocks": 13545000,
    "priceperlb": 1.01,
    "prodvalue": 22801000,
    "year": 2004
  },
  {
    "state": "TN",
    "numcol": 6000,
    "yieldpercol": 54,
    "totalprod": 324000,
    "stocks": 91000,
    "priceperlb": 1.73,
    "prodvalue": 561000,
    "year": 2004
  },
  {
    "state": "TX",
    "numcol": 116000,
    "yieldpercol": 76,
    "totalprod": 8816000,
    "stocks": 1411000,
    "priceperlb": 0.97,
    "prodvalue": 8552000,
    "year": 2004
  },
  {
    "state": "UT",
    "numcol": 24000,
    "yieldpercol": 70,
    "totalprod": 1680000,
    "stocks": 554000,
    "priceperlb": 1.1,
    "prodvalue": 1848000,
    "year": 2004
  },
  {
    "state": "VT",
    "numcol": 6000,
    "yieldpercol": 68,
    "totalprod": 408000,
    "stocks": 192000,
    "priceperlb": 1.51,
    "prodvalue": 616000,
    "year": 2004
  },
  {
    "state": "VA",
    "numcol": 7000,
    "yieldpercol": 38,
    "totalprod": 266000,
    "stocks": 69000,
    "priceperlb": 2.1,
    "prodvalue": 559000,
    "year": 2004
  },
  {
    "state": "WA",
    "numcol": 56000,
    "yieldpercol": 63,
    "totalprod": 3528000,
    "stocks": 1376000,
    "priceperlb": 0.98,
    "prodvalue": 3457000,
    "year": 2004
  },
  {
    "state": "WV",
    "numcol": 9000,
    "yieldpercol": 55,
    "totalprod": 495000,
    "stocks": 183000,
    "priceperlb": 1.41,
    "prodvalue": 698000,
    "year": 2004
  },
  {
    "state": "WI",
    "numcol": 68000,
    "yieldpercol": 86,
    "totalprod": 5848000,
    "stocks": 2632000,
    "priceperlb": 1.19,
    "prodvalue": 6959000,
    "year": 2004
  },
  {
    "state": "WY",
    "numcol": 39000,
    "yieldpercol": 75,
    "totalprod": 2925000,
    "stocks": 380000,
    "priceperlb": 1.1,
    "prodvalue": 3218000,
    "year": 2004
  },
  {
    "state": "AL",
    "numcol": 13000,
    "yieldpercol": 66,
    "totalprod": 858000,
    "stocks": 266000,
    "priceperlb": 1.02,
    "prodvalue": 875000,
    "year": 2005
  },
  {
    "state": "AZ",
    "numcol": 36000,
    "yieldpercol": 50,
    "totalprod": 1800000,
    "stocks": 720000,
    "priceperlb": 1.04,
    "prodvalue": 1872000,
    "year": 2005
  },
  {
    "state": "AR",
    "numcol": 36000,
    "yieldpercol": 69,
    "totalprod": 2484000,
    "stocks": 571000,
    "priceperlb": 0.97,
    "prodvalue": 2409000,
    "year": 2005
  },
  {
    "state": "CA",
    "numcol": 400000,
    "yieldpercol": 75,
    "totalprod": 30000000,
    "stocks": 9300000,
    "priceperlb": 0.86,
    "prodvalue": 25800000,
    "year": 2005
  },
  {
    "state": "CO",
    "numcol": 28000,
    "yieldpercol": 70,
    "totalprod": 1960000,
    "stocks": 902000,
    "priceperlb": 0.97,
    "prodvalue": 1901000,
    "year": 2005
  },
  {
    "state": "FL",
    "numcol": 160000,
    "yieldpercol": 86,
    "totalprod": 13760000,
    "stocks": 2477000,
    "priceperlb": 0.87,
    "prodvalue": 11971000,
    "year": 2005
  },
  {
    "state": "GA",
    "numcol": 59000,
    "yieldpercol": 49,
    "totalprod": 2891000,
    "stocks": 434000,
    "priceperlb": 0.89,
    "prodvalue": 2573000,
    "year": 2005
  },
  {
    "state": "HI",
    "numcol": 9000,
    "yieldpercol": 131,
    "totalprod": 1179000,
    "stocks": 283000,
    "priceperlb": 1.43,
    "prodvalue": 1686000,
    "year": 2005
  },
  {
    "state": "ID",
    "numcol": 95000,
    "yieldpercol": 37,
    "totalprod": 3515000,
    "stocks": 1793000,
    "priceperlb": 0.8,
    "prodvalue": 2812000,
    "year": 2005
  },
  {
    "state": "IL",
    "numcol": 8000,
    "yieldpercol": 85,
    "totalprod": 680000,
    "stocks": 408000,
    "priceperlb": 1.84,
    "prodvalue": 1251000,
    "year": 2005
  },
  {
    "state": "IN",
    "numcol": 8000,
    "yieldpercol": 64,
    "totalprod": 512000,
    "stocks": 189000,
    "priceperlb": 1.18,
    "prodvalue": 604000,
    "year": 2005
  },
  {
    "state": "IA",
    "numcol": 28000,
    "yieldpercol": 88,
    "totalprod": 2464000,
    "stocks": 1232000,
    "priceperlb": 1.21,
    "prodvalue": 2981000,
    "year": 2005
  },
  {
    "state": "KS",
    "numcol": 16000,
    "yieldpercol": 50,
    "totalprod": 800000,
    "stocks": 328000,
    "priceperlb": 1.05,
    "prodvalue": 840000,
    "year": 2005
  },
  {
    "state": "KY",
    "numcol": 5000,
    "yieldpercol": 50,
    "totalprod": 250000,
    "stocks": 40000,
    "priceperlb": 2.08,
    "prodvalue": 520000,
    "year": 2005
  },
  {
    "state": "LA",
    "numcol": 35000,
    "yieldpercol": 97,
    "totalprod": 3395000,
    "stocks": 611000,
    "priceperlb": 0.72,
    "prodvalue": 2444000,
    "year": 2005
  },
  {
    "state": "ME",
    "numcol": 8000,
    "yieldpercol": 26,
    "totalprod": 208000,
    "stocks": 193000,
    "priceperlb": 1.66,
    "prodvalue": 345000,
    "year": 2005
  },
  {
    "state": "MI",
    "numcol": 65000,
    "yieldpercol": 68,
    "totalprod": 4420000,
    "stocks": 2519000,
    "priceperlb": 0.94,
    "prodvalue": 4155000,
    "year": 2005
  },
  {
    "state": "MN",
    "numcol": 120000,
    "yieldpercol": 74,
    "totalprod": 8880000,
    "stocks": 1598000,
    "priceperlb": 0.9,
    "prodvalue": 7992000,
    "year": 2005
  },
  {
    "state": "MS",
    "numcol": 16000,
    "yieldpercol": 80,
    "totalprod": 1280000,
    "stocks": 346000,
    "priceperlb": 0.67,
    "prodvalue": 858000,
    "year": 2005
  },
  {
    "state": "MO",
    "numcol": 15000,
    "yieldpercol": 50,
    "totalprod": 750000,
    "stocks": 180000,
    "priceperlb": 1.22,
    "prodvalue": 915000,
    "year": 2005
  },
  {
    "state": "MT",
    "numcol": 130000,
    "yieldpercol": 67,
    "totalprod": 8710000,
    "stocks": 3136000,
    "priceperlb": 0.86,
    "prodvalue": 7491000,
    "year": 2005
  },
  {
    "state": "NE",
    "numcol": 40000,
    "yieldpercol": 68,
    "totalprod": 2720000,
    "stocks": 2530000,
    "priceperlb": 0.87,
    "prodvalue": 2366000,
    "year": 2005
  },
  {
    "state": "NV",
    "numcol": 12000,
    "yieldpercol": 46,
    "totalprod": 552000,
    "stocks": 442000,
    "priceperlb": 3.11,
    "prodvalue": 1717000,
    "year": 2005
  },
  {
    "state": "NJ",
    "numcol": 12000,
    "yieldpercol": 32,
    "totalprod": 384000,
    "stocks": 104000,
    "priceperlb": 1.2,
    "prodvalue": 461000,
    "year": 2005
  },
  {
    "state": "NM",
    "numcol": 7000,
    "yieldpercol": 49,
    "totalprod": 343000,
    "stocks": 113000,
    "priceperlb": 1.03,
    "prodvalue": 353000,
    "year": 2005
  },
  {
    "state": "NY",
    "numcol": 59000,
    "yieldpercol": 73,
    "totalprod": 4307000,
    "stocks": 2283000,
    "priceperlb": 1.34,
    "prodvalue": 5771000,
    "year": 2005
  },
  {
    "state": "NC",
    "numcol": 10000,
    "yieldpercol": 54,
    "totalprod": 540000,
    "stocks": 146000,
    "priceperlb": 1.88,
    "prodvalue": 1015000,
    "year": 2005
  },
  {
    "state": "ND",
    "numcol": 370000,
    "yieldpercol": 91,
    "totalprod": 33670000,
    "stocks": 8418000,
    "priceperlb": 0.83,
    "prodvalue": 27946000,
    "year": 2005
  },
  {
    "state": "OH",
    "numcol": 15000,
    "yieldpercol": 69,
    "totalprod": 1035000,
    "stocks": 580000,
    "priceperlb": 1.4,
    "prodvalue": 1449000,
    "year": 2005
  },
  {
    "state": "OR",
    "numcol": 39000,
    "yieldpercol": 42,
    "totalprod": 1638000,
    "stocks": 557000,
    "priceperlb": 1.08,
    "prodvalue": 1769000,
    "year": 2005
  },
  {
    "state": "PA",
    "numcol": 28000,
    "yieldpercol": 56,
    "totalprod": 1568000,
    "stocks": 800000,
    "priceperlb": 1.12,
    "prodvalue": 1756000,
    "year": 2005
  },
  {
    "state": "SD",
    "numcol": 220000,
    "yieldpercol": 79,
    "totalprod": 17380000,
    "stocks": 11818000,
    "priceperlb": 0.83,
    "prodvalue": 14425000,
    "year": 2005
  },
  {
    "state": "TN",
    "numcol": 7000,
    "yieldpercol": 55,
    "totalprod": 385000,
    "stocks": 92000,
    "priceperlb": 1.67,
    "prodvalue": 643000,
    "year": 2005
  },
  {
    "state": "TX",
    "numcol": 84000,
    "yieldpercol": 71,
    "totalprod": 5964000,
    "stocks": 954000,
    "priceperlb": 0.86,
    "prodvalue": 5129000,
    "year": 2005
  },
  {
    "state": "UT",
    "numcol": 24000,
    "yieldpercol": 45,
    "totalprod": 1080000,
    "stocks": 346000,
    "priceperlb": 0.95,
    "prodvalue": 1026000,
    "year": 2005
  },
  {
    "state": "VT",
    "numcol": 6000,
    "yieldpercol": 91,
    "totalprod": 546000,
    "stocks": 169000,
    "priceperlb": 1.12,
    "prodvalue": 612000,
    "year": 2005
  },
  {
    "state": "VA",
    "numcol": 8000,
    "yieldpercol": 37,
    "totalprod": 296000,
    "stocks": 59000,
    "priceperlb": 2.2,
    "prodvalue": 651000,
    "year": 2005
  },
  {
    "state": "WA",
    "numcol": 51000,
    "yieldpercol": 55,
    "totalprod": 2805000,
    "stocks": 1935000,
    "priceperlb": 1.01,
    "prodvalue": 2833000,
    "year": 2005
  },
  {
    "state": "WV",
    "numcol": 8000,
    "yieldpercol": 51,
    "totalprod": 408000,
    "stocks": 102000,
    "priceperlb": 1.29,
    "prodvalue": 526000,
    "year": 2005
  },
  {
    "state": "WI",
    "numcol": 64000,
    "yieldpercol": 83,
    "totalprod": 5312000,
    "stocks": 2922000,
    "priceperlb": 1.14,
    "prodvalue": 6056000,
    "year": 2005
  },
  {
    "state": "WY",
    "numcol": 40000,
    "yieldpercol": 56,
    "totalprod": 2240000,
    "stocks": 291000,
    "priceperlb": 0.89,
    "prodvalue": 1994000,
    "year": 2005
  },
  {
    "state": "AL",
    "numcol": 11000,
    "yieldpercol": 72,
    "totalprod": 792000,
    "stocks": 230000,
    "priceperlb": 1.21,
    "prodvalue": 958000,
    "year": 2006
  },
  {
    "state": "AZ",
    "numcol": 30000,
    "yieldpercol": 65,
    "totalprod": 1950000,
    "stocks": 839000,
    "priceperlb": 0.91,
    "prodvalue": 1775000,
    "year": 2006
  },
  {
    "state": "AR",
    "numcol": 32000,
    "yieldpercol": 76,
    "totalprod": 2432000,
    "stocks": 730000,
    "priceperlb": 0.89,
    "prodvalue": 2164000,
    "year": 2006
  },
  {
    "state": "CA",
    "numcol": 380000,
    "yieldpercol": 52,
    "totalprod": 19760000,
    "stocks": 7706000,
    "priceperlb": 0.97,
    "prodvalue": 19167000,
    "year": 2006
  },
  {
    "state": "CO",
    "numcol": 36000,
    "yieldpercol": 75,
    "totalprod": 2700000,
    "stocks": 1458000,
    "priceperlb": 1.04,
    "prodvalue": 2808000,
    "year": 2006
  },
  {
    "state": "FL",
    "numcol": 170000,
    "yieldpercol": 81,
    "totalprod": 13770000,
    "stocks": 1790000,
    "priceperlb": 1,
    "prodvalue": 13770000,
    "year": 2006
  },
  {
    "state": "GA",
    "numcol": 63000,
    "yieldpercol": 74,
    "totalprod": 4662000,
    "stocks": 746000,
    "priceperlb": 1.2,
    "prodvalue": 5594000,
    "year": 2006
  },
  {
    "state": "HI",
    "numcol": 10000,
    "yieldpercol": 93,
    "totalprod": 930000,
    "stocks": 233000,
    "priceperlb": 1.21,
    "prodvalue": 1125000,
    "year": 2006
  },
  {
    "state": "ID",
    "numcol": 95000,
    "yieldpercol": 44,
    "totalprod": 4180000,
    "stocks": 2592000,
    "priceperlb": 0.97,
    "prodvalue": 4055000,
    "year": 2006
  },
  {
    "state": "IL",
    "numcol": 10000,
    "yieldpercol": 66,
    "totalprod": 660000,
    "stocks": 356000,
    "priceperlb": 2.14,
    "prodvalue": 1412000,
    "year": 2006
  },
  {
    "state": "IN",
    "numcol": 7000,
    "yieldpercol": 54,
    "totalprod": 378000,
    "stocks": 125000,
    "priceperlb": 1.58,
    "prodvalue": 597000,
    "year": 2006
  },
  {
    "state": "IA",
    "numcol": 26000,
    "yieldpercol": 84,
    "totalprod": 2184000,
    "stocks": 1441000,
    "priceperlb": 1.37,
    "prodvalue": 2992000,
    "year": 2006
  },
  {
    "state": "KS",
    "numcol": 14000,
    "yieldpercol": 55,
    "totalprod": 770000,
    "stocks": 246000,
    "priceperlb": 1.17,
    "prodvalue": 901000,
    "year": 2006
  },
  {
    "state": "KY",
    "numcol": 5000,
    "yieldpercol": 56,
    "totalprod": 280000,
    "stocks": 70000,
    "priceperlb": 2.19,
    "prodvalue": 613000,
    "year": 2006
  },
  {
    "state": "LA",
    "numcol": 30000,
    "yieldpercol": 90,
    "totalprod": 2700000,
    "stocks": 675000,
    "priceperlb": 0.9,
    "prodvalue": 2430000,
    "year": 2006
  },
  {
    "state": "ME",
    "numcol": 11000,
    "yieldpercol": 23,
    "totalprod": 253000,
    "stocks": 86000,
    "priceperlb": 1.6,
    "prodvalue": 405000,
    "year": 2006
  },
  {
    "state": "MI",
    "numcol": 72000,
    "yieldpercol": 55,
    "totalprod": 3960000,
    "stocks": 2099000,
    "priceperlb": 1.15,
    "prodvalue": 4554000,
    "year": 2006
  },
  {
    "state": "MN",
    "numcol": 125000,
    "yieldpercol": 80,
    "totalprod": 10000000,
    "stocks": 3300000,
    "priceperlb": 0.94,
    "prodvalue": 9400000,
    "year": 2006
  },
  {
    "state": "MS",
    "numcol": 14000,
    "yieldpercol": 98,
    "totalprod": 1372000,
    "stocks": 453000,
    "priceperlb": 0.93,
    "prodvalue": 1276000,
    "year": 2006
  },
  {
    "state": "MO",
    "numcol": 15000,
    "yieldpercol": 46,
    "totalprod": 690000,
    "stocks": 117000,
    "priceperlb": 0.98,
    "prodvalue": 676000,
    "year": 2006
  },
  {
    "state": "MT",
    "numcol": 132000,
    "yieldpercol": 79,
    "totalprod": 10428000,
    "stocks": 1981000,
    "priceperlb": 0.95,
    "prodvalue": 9907000,
    "year": 2006
  },
  {
    "state": "NE",
    "numcol": 47000,
    "yieldpercol": 73,
    "totalprod": 3431000,
    "stocks": 3843000,
    "priceperlb": 0.93,
    "prodvalue": 3191000,
    "year": 2006
  },
  {
    "state": "NV",
    "numcol": 9000,
    "yieldpercol": 37,
    "totalprod": 333000,
    "stocks": 50000,
    "priceperlb": 3.62,
    "prodvalue": 1205000,
    "year": 2006
  },
  {
    "state": "NJ",
    "numcol": 9000,
    "yieldpercol": 36,
    "totalprod": 324000,
    "stocks": 152000,
    "priceperlb": 1.14,
    "prodvalue": 369000,
    "year": 2006
  },
  {
    "state": "NM",
    "numcol": 7000,
    "yieldpercol": 48,
    "totalprod": 336000,
    "stocks": 104000,
    "priceperlb": 1.19,
    "prodvalue": 400000,
    "year": 2006
  },
  {
    "state": "NY",
    "numcol": 58000,
    "yieldpercol": 64,
    "totalprod": 3712000,
    "stocks": 2376000,
    "priceperlb": 1.3,
    "prodvalue": 4826000,
    "year": 2006
  },
  {
    "state": "NC",
    "numcol": 10000,
    "yieldpercol": 50,
    "totalprod": 500000,
    "stocks": 215000,
    "priceperlb": 1.57,
    "prodvalue": 785000,
    "year": 2006
  },
  {
    "state": "ND",
    "numcol": 350000,
    "yieldpercol": 74,
    "totalprod": 25900000,
    "stocks": 7770000,
    "priceperlb": 0.91,
    "prodvalue": 23569000,
    "year": 2006
  },
  {
    "state": "OH",
    "numcol": 14000,
    "yieldpercol": 56,
    "totalprod": 784000,
    "stocks": 282000,
    "priceperlb": 1.4,
    "prodvalue": 1098000,
    "year": 2006
  },
  {
    "state": "OR",
    "numcol": 46000,
    "yieldpercol": 48,
    "totalprod": 2208000,
    "stocks": 729000,
    "priceperlb": 1.05,
    "prodvalue": 2318000,
    "year": 2006
  },
  {
    "state": "PA",
    "numcol": 28000,
    "yieldpercol": 40,
    "totalprod": 1120000,
    "stocks": 605000,
    "priceperlb": 1.63,
    "prodvalue": 1826000,
    "year": 2006
  },
  {
    "state": "SD",
    "numcol": 225000,
    "yieldpercol": 47,
    "totalprod": 10575000,
    "stocks": 10575000,
    "priceperlb": 0.94,
    "prodvalue": 9941000,
    "year": 2006
  },
  {
    "state": "TN",
    "numcol": 7000,
    "yieldpercol": 55,
    "totalprod": 385000,
    "stocks": 58000,
    "priceperlb": 1.84,
    "prodvalue": 708000,
    "year": 2006
  },
  {
    "state": "TX",
    "numcol": 82000,
    "yieldpercol": 70,
    "totalprod": 5740000,
    "stocks": 976000,
    "priceperlb": 0.89,
    "prodvalue": 5109000,
    "year": 2006
  },
  {
    "state": "UT",
    "numcol": 26000,
    "yieldpercol": 50,
    "totalprod": 1300000,
    "stocks": 299000,
    "priceperlb": 0.98,
    "prodvalue": 1274000,
    "year": 2006
  },
  {
    "state": "VT",
    "numcol": 6000,
    "yieldpercol": 56,
    "totalprod": 336000,
    "stocks": 144000,
    "priceperlb": 1.2,
    "prodvalue": 403000,
    "year": 2006
  },
  {
    "state": "VA",
    "numcol": 8000,
    "yieldpercol": 42,
    "totalprod": 336000,
    "stocks": 114000,
    "priceperlb": 2.2,
    "prodvalue": 739000,
    "year": 2006
  },
  {
    "state": "WA",
    "numcol": 49000,
    "yieldpercol": 52,
    "totalprod": 2548000,
    "stocks": 1605000,
    "priceperlb": 1.24,
    "prodvalue": 3160000,
    "year": 2006
  },
  {
    "state": "WV",
    "numcol": 6000,
    "yieldpercol": 42,
    "totalprod": 252000,
    "stocks": 68000,
    "priceperlb": 2.02,
    "prodvalue": 509000,
    "year": 2006
  },
  {
    "state": "WI",
    "numcol": 64000,
    "yieldpercol": 93,
    "totalprod": 5952000,
    "stocks": 2500000,
    "priceperlb": 1.12,
    "prodvalue": 6666000,
    "year": 2006
  },
  {
    "state": "WY",
    "numcol": 39000,
    "yieldpercol": 85,
    "totalprod": 3315000,
    "stocks": 497000,
    "priceperlb": 0.98,
    "prodvalue": 3249000,
    "year": 2006
  },
  {
    "state": "AL",
    "numcol": 11000,
    "yieldpercol": 56,
    "totalprod": 616000,
    "stocks": 209000,
    "priceperlb": 1.49,
    "prodvalue": 918000,
    "year": 2007
  },
  {
    "state": "AZ",
    "numcol": 30000,
    "yieldpercol": 64,
    "totalprod": 1920000,
    "stocks": 902000,
    "priceperlb": 1.26,
    "prodvalue": 2419000,
    "year": 2007
  },
  {
    "state": "AR",
    "numcol": 28000,
    "yieldpercol": 80,
    "totalprod": 2240000,
    "stocks": 672000,
    "priceperlb": 0.95,
    "prodvalue": 2128000,
    "year": 2007
  },
  {
    "state": "CA",
    "numcol": 340000,
    "yieldpercol": 40,
    "totalprod": 13600000,
    "stocks": 3672000,
    "priceperlb": 1.04,
    "prodvalue": 14144000,
    "year": 2007
  },
  {
    "state": "CO",
    "numcol": 31000,
    "yieldpercol": 51,
    "totalprod": 1581000,
    "stocks": 838000,
    "priceperlb": 1.15,
    "prodvalue": 1818000,
    "year": 2007
  },
  {
    "state": "FL",
    "numcol": 160000,
    "yieldpercol": 71,
    "totalprod": 11360000,
    "stocks": 1363000,
    "priceperlb": 0.99,
    "prodvalue": 11246000,
    "year": 2007
  },
  {
    "state": "GA",
    "numcol": 60000,
    "yieldpercol": 58,
    "totalprod": 3480000,
    "stocks": 522000,
    "priceperlb": 1.19,
    "prodvalue": 4141000,
    "year": 2007
  },
  {
    "state": "HI",
    "numcol": 10000,
    "yieldpercol": 92,
    "totalprod": 920000,
    "stocks": 285000,
    "priceperlb": 1.7,
    "prodvalue": 1564000,
    "year": 2007
  },
  {
    "state": "ID",
    "numcol": 92000,
    "yieldpercol": 41,
    "totalprod": 3772000,
    "stocks": 1848000,
    "priceperlb": 1.15,
    "prodvalue": 4338000,
    "year": 2007
  },
  {
    "state": "IL",
    "numcol": 9000,
    "yieldpercol": 63,
    "totalprod": 567000,
    "stocks": 374000,
    "priceperlb": 2.49,
    "prodvalue": 1412000,
    "year": 2007
  },
  {
    "state": "IN",
    "numcol": 8000,
    "yieldpercol": 53,
    "totalprod": 424000,
    "stocks": 119000,
    "priceperlb": 1.5,
    "prodvalue": 636000,
    "year": 2007
  },
  {
    "state": "IA",
    "numcol": 26000,
    "yieldpercol": 81,
    "totalprod": 2106000,
    "stocks": 1221000,
    "priceperlb": 1.31,
    "prodvalue": 2759000,
    "year": 2007
  },
  {
    "state": "KS",
    "numcol": 14000,
    "yieldpercol": 40,
    "totalprod": 560000,
    "stocks": 196000,
    "priceperlb": 1.18,
    "prodvalue": 661000,
    "year": 2007
  },
  {
    "state": "KY",
    "numcol": 4000,
    "yieldpercol": 61,
    "totalprod": 244000,
    "stocks": 54000,
    "priceperlb": 2.12,
    "prodvalue": 517000,
    "year": 2007
  },
  {
    "state": "LA",
    "numcol": 29000,
    "yieldpercol": 89,
    "totalprod": 2581000,
    "stocks": 413000,
    "priceperlb": 1.08,
    "prodvalue": 2787000,
    "year": 2007
  },
  {
    "state": "ME",
    "numcol": 9000,
    "yieldpercol": 26,
    "totalprod": 234000,
    "stocks": 59000,
    "priceperlb": 1.32,
    "prodvalue": 309000,
    "year": 2007
  },
  {
    "state": "MI",
    "numcol": 72000,
    "yieldpercol": 64,
    "totalprod": 4608000,
    "stocks": 2350000,
    "priceperlb": 1.19,
    "prodvalue": 5484000,
    "year": 2007
  },
  {
    "state": "MN",
    "numcol": 130000,
    "yieldpercol": 68,
    "totalprod": 8840000,
    "stocks": 2564000,
    "priceperlb": 1.04,
    "prodvalue": 9194000,
    "year": 2007
  },
  {
    "state": "MS",
    "numcol": 15000,
    "yieldpercol": 92,
    "totalprod": 1380000,
    "stocks": 166000,
    "priceperlb": 0.91,
    "prodvalue": 1256000,
    "year": 2007
  },
  {
    "state": "MO",
    "numcol": 14000,
    "yieldpercol": 46,
    "totalprod": 644000,
    "stocks": 148000,
    "priceperlb": 1.12,
    "prodvalue": 721000,
    "year": 2007
  },
  {
    "state": "MT",
    "numcol": 135000,
    "yieldpercol": 68,
    "totalprod": 9180000,
    "stocks": 2479000,
    "priceperlb": 0.99,
    "prodvalue": 9088000,
    "year": 2007
  },
  {
    "state": "NE",
    "numcol": 45000,
    "yieldpercol": 49,
    "totalprod": 2205000,
    "stocks": 1477000,
    "priceperlb": 1.03,
    "prodvalue": 2271000,
    "year": 2007
  },
  {
    "state": "NV",
    "numcol": 10000,
    "yieldpercol": 28,
    "totalprod": 280000,
    "stocks": 67000,
    "priceperlb": 2.99,
    "prodvalue": 837000,
    "year": 2007
  },
  {
    "state": "NJ",
    "numcol": 9000,
    "yieldpercol": 57,
    "totalprod": 513000,
    "stocks": 185000,
    "priceperlb": 1.96,
    "prodvalue": 1005000,
    "year": 2007
  },
  {
    "state": "NM",
    "numcol": 6000,
    "yieldpercol": 59,
    "totalprod": 354000,
    "stocks": 138000,
    "priceperlb": 1.42,
    "prodvalue": 503000,
    "year": 2007
  },
  {
    "state": "NY",
    "numcol": 53000,
    "yieldpercol": 57,
    "totalprod": 3021000,
    "stocks": 1843000,
    "priceperlb": 1.38,
    "prodvalue": 4169000,
    "year": 2007
  },
  {
    "state": "NC",
    "numcol": 12000,
    "yieldpercol": 45,
    "totalprod": 540000,
    "stocks": 76000,
    "priceperlb": 2.49,
    "prodvalue": 1345000,
    "year": 2007
  },
  {
    "state": "ND",
    "numcol": 420000,
    "yieldpercol": 74,
    "totalprod": 31080000,
    "stocks": 9013000,
    "priceperlb": 0.96,
    "prodvalue": 29837000,
    "year": 2007
  },
  {
    "state": "OH",
    "numcol": 14000,
    "yieldpercol": 61,
    "totalprod": 854000,
    "stocks": 376000,
    "priceperlb": 1.77,
    "prodvalue": 1512000,
    "year": 2007
  },
  {
    "state": "OR",
    "numcol": 46000,
    "yieldpercol": 43,
    "totalprod": 1978000,
    "stocks": 1088000,
    "priceperlb": 1.31,
    "prodvalue": 2591000,
    "year": 2007
  },
  {
    "state": "PA",
    "numcol": 25000,
    "yieldpercol": 42,
    "totalprod": 1050000,
    "stocks": 326000,
    "priceperlb": 1.7,
    "prodvalue": 1785000,
    "year": 2007
  },
  {
    "state": "SD",
    "numcol": 255000,
    "yieldpercol": 52,
    "totalprod": 13260000,
    "stocks": 10608000,
    "priceperlb": 1.02,
    "prodvalue": 13525000,
    "year": 2007
  },
  {
    "state": "TN",
    "numcol": 7000,
    "yieldpercol": 65,
    "totalprod": 455000,
    "stocks": 114000,
    "priceperlb": 1.99,
    "prodvalue": 905000,
    "year": 2007
  },
  {
    "state": "TX",
    "numcol": 105000,
    "yieldpercol": 82,
    "totalprod": 8610000,
    "stocks": 1550000,
    "priceperlb": 0.96,
    "prodvalue": 8266000,
    "year": 2007
  },
  {
    "state": "UT",
    "numcol": 28000,
    "yieldpercol": 42,
    "totalprod": 1176000,
    "stocks": 270000,
    "priceperlb": 1.13,
    "prodvalue": 1329000,
    "year": 2007
  },
  {
    "state": "VT",
    "numcol": 5000,
    "yieldpercol": 64,
    "totalprod": 320000,
    "stocks": 96000,
    "priceperlb": 1.7,
    "prodvalue": 544000,
    "year": 2007
  },
  {
    "state": "VA",
    "numcol": 6000,
    "yieldpercol": 46,
    "totalprod": 276000,
    "stocks": 63000,
    "priceperlb": 2.43,
    "prodvalue": 671000,
    "year": 2007
  },
  {
    "state": "WA",
    "numcol": 46000,
    "yieldpercol": 44,
    "totalprod": 2024000,
    "stocks": 648000,
    "priceperlb": 1.25,
    "prodvalue": 2530000,
    "year": 2007
  },
  {
    "state": "WV",
    "numcol": 6000,
    "yieldpercol": 48,
    "totalprod": 288000,
    "stocks": 95000,
    "priceperlb": 2.09,
    "prodvalue": 602000,
    "year": 2007
  },
  {
    "state": "WI",
    "numcol": 60000,
    "yieldpercol": 84,
    "totalprod": 5040000,
    "stocks": 3024000,
    "priceperlb": 1.22,
    "prodvalue": 6149000,
    "year": 2007
  },
  {
    "state": "WY",
    "numcol": 43000,
    "yieldpercol": 80,
    "totalprod": 3440000,
    "stocks": 894000,
    "priceperlb": 1,
    "prodvalue": 3440000,
    "year": 2007
  },
  {
    "state": "AL",
    "numcol": 9000,
    "yieldpercol": 66,
    "totalprod": 594000,
    "stocks": 214000,
    "priceperlb": 1.9,
    "prodvalue": 1129000,
    "year": 2008
  },
  {
    "state": "AZ",
    "numcol": 25000,
    "yieldpercol": 64,
    "totalprod": 1600000,
    "stocks": 336000,
    "priceperlb": 1.26,
    "prodvalue": 2016000,
    "year": 2008
  },
  {
    "state": "AR",
    "numcol": 28000,
    "yieldpercol": 75,
    "totalprod": 2100000,
    "stocks": 525000,
    "priceperlb": 1.35,
    "prodvalue": 2835000,
    "year": 2008
  },
  {
    "state": "CA",
    "numcol": 360000,
    "yieldpercol": 51,
    "totalprod": 18360000,
    "stocks": 4039000,
    "priceperlb": 1.39,
    "prodvalue": 25520000,
    "year": 2008
  },
  {
    "state": "CO",
    "numcol": 27000,
    "yieldpercol": 45,
    "totalprod": 1215000,
    "stocks": 656000,
    "priceperlb": 1.51,
    "prodvalue": 1835000,
    "year": 2008
  },
  {
    "state": "FL",
    "numcol": 150000,
    "yieldpercol": 79,
    "totalprod": 11850000,
    "stocks": 1304000,
    "priceperlb": 1.32,
    "prodvalue": 15642000,
    "year": 2008
  },
  {
    "state": "GA",
    "numcol": 65000,
    "yieldpercol": 71,
    "totalprod": 4615000,
    "stocks": 369000,
    "priceperlb": 1.52,
    "prodvalue": 7015000,
    "year": 2008
  },
  {
    "state": "HI",
    "numcol": 10000,
    "yieldpercol": 90,
    "totalprod": 900000,
    "stocks": 225000,
    "priceperlb": 1.59,
    "prodvalue": 1431000,
    "year": 2008
  },
  {
    "state": "ID",
    "numcol": 90000,
    "yieldpercol": 40,
    "totalprod": 3600000,
    "stocks": 1440000,
    "priceperlb": 1.46,
    "prodvalue": 5256000,
    "year": 2008
  },
  {
    "state": "IL",
    "numcol": 8000,
    "yieldpercol": 56,
    "totalprod": 448000,
    "stocks": 116000,
    "priceperlb": 2.59,
    "prodvalue": 1160000,
    "year": 2008
  },
  {
    "state": "IN",
    "numcol": 7000,
    "yieldpercol": 67,
    "totalprod": 469000,
    "stocks": 150000,
    "priceperlb": 1.68,
    "prodvalue": 788000,
    "year": 2008
  },
  {
    "state": "IA",
    "numcol": 24000,
    "yieldpercol": 62,
    "totalprod": 1488000,
    "stocks": 580000,
    "priceperlb": 1.58,
    "prodvalue": 2351000,
    "year": 2008
  },
  {
    "state": "KS",
    "numcol": 10000,
    "yieldpercol": 61,
    "totalprod": 610000,
    "stocks": 128000,
    "priceperlb": 1.55,
    "prodvalue": 946000,
    "year": 2008
  },
  {
    "state": "KY",
    "numcol": 4000,
    "yieldpercol": 39,
    "totalprod": 156000,
    "stocks": 27000,
    "priceperlb": 2.44,
    "prodvalue": 381000,
    "year": 2008
  },
  {
    "state": "LA",
    "numcol": 40000,
    "yieldpercol": 77,
    "totalprod": 3080000,
    "stocks": 493000,
    "priceperlb": 1.36,
    "prodvalue": 4189000,
    "year": 2008
  },
  {
    "state": "ME",
    "numcol": 7000,
    "yieldpercol": 42,
    "totalprod": 294000,
    "stocks": 79000,
    "priceperlb": 1.57,
    "prodvalue": 462000,
    "year": 2008
  },
  {
    "state": "MI",
    "numcol": 71000,
    "yieldpercol": 73,
    "totalprod": 5183000,
    "stocks": 2021000,
    "priceperlb": 1.44,
    "prodvalue": 7464000,
    "year": 2008
  },
  {
    "state": "MN",
    "numcol": 122000,
    "yieldpercol": 78,
    "totalprod": 9516000,
    "stocks": 2569000,
    "priceperlb": 1.39,
    "prodvalue": 13227000,
    "year": 2008
  },
  {
    "state": "MS",
    "numcol": 14000,
    "yieldpercol": 98,
    "totalprod": 1372000,
    "stocks": 110000,
    "priceperlb": 1.3,
    "prodvalue": 1784000,
    "year": 2008
  },
  {
    "state": "MO",
    "numcol": 11000,
    "yieldpercol": 53,
    "totalprod": 583000,
    "stocks": 152000,
    "priceperlb": 1.68,
    "prodvalue": 979000,
    "year": 2008
  },
  {
    "state": "MT",
    "numcol": 134000,
    "yieldpercol": 70,
    "totalprod": 9380000,
    "stocks": 4596000,
    "priceperlb": 1.37,
    "prodvalue": 12851000,
    "year": 2008
  },
  {
    "state": "NE",
    "numcol": 36000,
    "yieldpercol": 67,
    "totalprod": 2412000,
    "stocks": 1254000,
    "priceperlb": 1.45,
    "prodvalue": 3497000,
    "year": 2008
  },
  {
    "state": "NV",
    "numcol": 10000,
    "yieldpercol": 29,
    "totalprod": 290000,
    "stocks": 52000,
    "priceperlb": 1.42,
    "prodvalue": 412000,
    "year": 2008
  },
  {
    "state": "NJ",
    "numcol": 9000,
    "yieldpercol": 40,
    "totalprod": 360000,
    "stocks": 122000,
    "priceperlb": 1.62,
    "prodvalue": 583000,
    "year": 2008
  },
  {
    "state": "NM",
    "numcol": 6000,
    "yieldpercol": 48,
    "totalprod": 288000,
    "stocks": 95000,
    "priceperlb": 1.48,
    "prodvalue": 426000,
    "year": 2008
  },
  {
    "state": "NY",
    "numcol": 50000,
    "yieldpercol": 70,
    "totalprod": 3500000,
    "stocks": 1260000,
    "priceperlb": 1.65,
    "prodvalue": 5775000,
    "year": 2008
  },
  {
    "state": "NC",
    "numcol": 12000,
    "yieldpercol": 52,
    "totalprod": 624000,
    "stocks": 137000,
    "priceperlb": 2.18,
    "prodvalue": 1360000,
    "year": 2008
  },
  {
    "state": "ND",
    "numcol": 400000,
    "yieldpercol": 90,
    "totalprod": 36000000,
    "stocks": 8640000,
    "priceperlb": 1.36,
    "prodvalue": 48960000,
    "year": 2008
  },
  {
    "state": "OH",
    "numcol": 14000,
    "yieldpercol": 53,
    "totalprod": 742000,
    "stocks": 371000,
    "priceperlb": 1.68,
    "prodvalue": 1247000,
    "year": 2008
  },
  {
    "state": "OR",
    "numcol": 50000,
    "yieldpercol": 43,
    "totalprod": 2150000,
    "stocks": 1097000,
    "priceperlb": 1.41,
    "prodvalue": 3032000,
    "year": 2008
  },
  {
    "state": "PA",
    "numcol": 23000,
    "yieldpercol": 48,
    "totalprod": 1104000,
    "stocks": 276000,
    "priceperlb": 1.65,
    "prodvalue": 1822000,
    "year": 2008
  },
  {
    "state": "SD",
    "numcol": 225000,
    "yieldpercol": 95,
    "totalprod": 21375000,
    "stocks": 11970000,
    "priceperlb": 1.34,
    "prodvalue": 28643000,
    "year": 2008
  },
  {
    "state": "TN",
    "numcol": 7000,
    "yieldpercol": 61,
    "totalprod": 427000,
    "stocks": 149000,
    "priceperlb": 2.09,
    "prodvalue": 892000,
    "year": 2008
  },
  {
    "state": "TX",
    "numcol": 77000,
    "yieldpercol": 64,
    "totalprod": 4928000,
    "stocks": 1380000,
    "priceperlb": 1.34,
    "prodvalue": 6604000,
    "year": 2008
  },
  {
    "state": "UT",
    "numcol": 28000,
    "yieldpercol": 48,
    "totalprod": 1344000,
    "stocks": 242000,
    "priceperlb": 1.57,
    "prodvalue": 2110000,
    "year": 2008
  },
  {
    "state": "VT",
    "numcol": 5000,
    "yieldpercol": 66,
    "totalprod": 330000,
    "stocks": 119000,
    "priceperlb": 2.2,
    "prodvalue": 726000,
    "year": 2008
  },
  {
    "state": "VA",
    "numcol": 6000,
    "yieldpercol": 42,
    "totalprod": 252000,
    "stocks": 45000,
    "priceperlb": 2.42,
    "prodvalue": 610000,
    "year": 2008
  },
  {
    "state": "WA",
    "numcol": 49000,
    "yieldpercol": 44,
    "totalprod": 2156000,
    "stocks": 862000,
    "priceperlb": 1.51,
    "prodvalue": 3256000,
    "year": 2008
  },
  {
    "state": "WV",
    "numcol": 6000,
    "yieldpercol": 43,
    "totalprod": 258000,
    "stocks": 49000,
    "priceperlb": 2.16,
    "prodvalue": 557000,
    "year": 2008
  },
  {
    "state": "WI",
    "numcol": 58000,
    "yieldpercol": 80,
    "totalprod": 4640000,
    "stocks": 2366000,
    "priceperlb": 1.5,
    "prodvalue": 6960000,
    "year": 2008
  },
  {
    "state": "WY",
    "numcol": 39000,
    "yieldpercol": 61,
    "totalprod": 2379000,
    "stocks": 381000,
    "priceperlb": 1.37,
    "prodvalue": 3259000,
    "year": 2008
  },
  {
    "state": "AL",
    "numcol": 9000,
    "yieldpercol": 50,
    "totalprod": 450000,
    "stocks": 68000,
    "priceperlb": 1.86,
    "prodvalue": 837000,
    "year": 2009
  },
  {
    "state": "AZ",
    "numcol": 20000,
    "yieldpercol": 52,
    "totalprod": 1040000,
    "stocks": 562000,
    "priceperlb": 1.45,
    "prodvalue": 1508000,
    "year": 2009
  },
  {
    "state": "AR",
    "numcol": 24000,
    "yieldpercol": 57,
    "totalprod": 1368000,
    "stocks": 301000,
    "priceperlb": 1.42,
    "prodvalue": 1943000,
    "year": 2009
  },
  {
    "state": "CA",
    "numcol": 355000,
    "yieldpercol": 33,
    "totalprod": 11715000,
    "stocks": 2109000,
    "priceperlb": 1.39,
    "prodvalue": 16284000,
    "year": 2009
  },
  {
    "state": "CO",
    "numcol": 28000,
    "yieldpercol": 53,
    "totalprod": 1484000,
    "stocks": 326000,
    "priceperlb": 1.43,
    "prodvalue": 2122000,
    "year": 2009
  },
  {
    "state": "FL",
    "numcol": 170000,
    "yieldpercol": 68,
    "totalprod": 11560000,
    "stocks": 1618000,
    "priceperlb": 1.42,
    "prodvalue": 16415000,
    "year": 2009
  },
  {
    "state": "GA",
    "numcol": 65000,
    "yieldpercol": 41,
    "totalprod": 2665000,
    "stocks": 346000,
    "priceperlb": 1.47,
    "prodvalue": 3918000,
    "year": 2009
  },
  {
    "state": "HI",
    "numcol": 10000,
    "yieldpercol": 95,
    "totalprod": 950000,
    "stocks": 323000,
    "priceperlb": 1.76,
    "prodvalue": 1672000,
    "year": 2009
  },
  {
    "state": "ID",
    "numcol": 103000,
    "yieldpercol": 46,
    "totalprod": 4738000,
    "stocks": 1706000,
    "priceperlb": 1.52,
    "prodvalue": 7202000,
    "year": 2009
  },
  {
    "state": "IL",
    "numcol": 8000,
    "yieldpercol": 34,
    "totalprod": 272000,
    "stocks": 57000,
    "priceperlb": 2.55,
    "prodvalue": 694000,
    "year": 2009
  },
  {
    "state": "IN",
    "numcol": 9000,
    "yieldpercol": 32,
    "totalprod": 288000,
    "stocks": 101000,
    "priceperlb": 2.02,
    "prodvalue": 582000,
    "year": 2009
  },
  {
    "state": "IA",
    "numcol": 26000,
    "yieldpercol": 42,
    "totalprod": 1092000,
    "stocks": 339000,
    "priceperlb": 1.6,
    "prodvalue": 1747000,
    "year": 2009
  },
  {
    "state": "KS",
    "numcol": 9000,
    "yieldpercol": 63,
    "totalprod": 567000,
    "stocks": 164000,
    "priceperlb": 1.85,
    "prodvalue": 1049000,
    "year": 2009
  },
  {
    "state": "KY",
    "numcol": 5000,
    "yieldpercol": 35,
    "totalprod": 175000,
    "stocks": 25000,
    "priceperlb": 2.71,
    "prodvalue": 474000,
    "year": 2009
  },
  {
    "state": "LA",
    "numcol": 37000,
    "yieldpercol": 103,
    "totalprod": 3811000,
    "stocks": 610000,
    "priceperlb": 1.36,
    "prodvalue": 5183000,
    "year": 2009
  },
  {
    "state": "ME",
    "numcol": 6000,
    "yieldpercol": 50,
    "totalprod": 300000,
    "stocks": 51000,
    "priceperlb": 1.95,
    "prodvalue": 585000,
    "year": 2009
  },
  {
    "state": "MI",
    "numcol": 66000,
    "yieldpercol": 60,
    "totalprod": 3960000,
    "stocks": 1505000,
    "priceperlb": 1.55,
    "prodvalue": 6138000,
    "year": 2009
  },
  {
    "state": "MN",
    "numcol": 122000,
    "yieldpercol": 65,
    "totalprod": 7930000,
    "stocks": 1427000,
    "priceperlb": 1.44,
    "prodvalue": 11419000,
    "year": 2009
  },
  {
    "state": "MS",
    "numcol": 14000,
    "yieldpercol": 104,
    "totalprod": 1456000,
    "stocks": 87000,
    "priceperlb": 1.32,
    "prodvalue": 1922000,
    "year": 2009
  },
  {
    "state": "MO",
    "numcol": 11000,
    "yieldpercol": 47,
    "totalprod": 517000,
    "stocks": 57000,
    "priceperlb": 1.99,
    "prodvalue": 1029000,
    "year": 2009
  },
  {
    "state": "MT",
    "numcol": 146000,
    "yieldpercol": 70,
    "totalprod": 10220000,
    "stocks": 3577000,
    "priceperlb": 1.46,
    "prodvalue": 14921000,
    "year": 2009
  },
  {
    "state": "NE",
    "numcol": 48000,
    "yieldpercol": 56,
    "totalprod": 2688000,
    "stocks": 1102000,
    "priceperlb": 1.46,
    "prodvalue": 3924000,
    "year": 2009
  },
  {
    "state": "NJ",
    "numcol": 11000,
    "yieldpercol": 32,
    "totalprod": 352000,
    "stocks": 70000,
    "priceperlb": 2.36,
    "prodvalue": 831000,
    "year": 2009
  },
  {
    "state": "NM",
    "numcol": 7000,
    "yieldpercol": 60,
    "totalprod": 420000,
    "stocks": 143000,
    "priceperlb": 1.59,
    "prodvalue": 668000,
    "year": 2009
  },
  {
    "state": "NY",
    "numcol": 45000,
    "yieldpercol": 65,
    "totalprod": 2925000,
    "stocks": 936000,
    "priceperlb": 1.93,
    "prodvalue": 5645000,
    "year": 2009
  },
  {
    "state": "NC",
    "numcol": 11000,
    "yieldpercol": 45,
    "totalprod": 495000,
    "stocks": 84000,
    "priceperlb": 2.57,
    "prodvalue": 1272000,
    "year": 2009
  },
  {
    "state": "ND",
    "numcol": 450000,
    "yieldpercol": 77,
    "totalprod": 34650000,
    "stocks": 7623000,
    "priceperlb": 1.38,
    "prodvalue": 47817000,
    "year": 2009
  },
  {
    "state": "OH",
    "numcol": 11000,
    "yieldpercol": 50,
    "totalprod": 550000,
    "stocks": 132000,
    "priceperlb": 2.81,
    "prodvalue": 1546000,
    "year": 2009
  },
  {
    "state": "OR",
    "numcol": 55000,
    "yieldpercol": 34,
    "totalprod": 1870000,
    "stocks": 767000,
    "priceperlb": 1.54,
    "prodvalue": 2880000,
    "year": 2009
  },
  {
    "state": "PA",
    "numcol": 21000,
    "yieldpercol": 40,
    "totalprod": 840000,
    "stocks": 319000,
    "priceperlb": 2.03,
    "prodvalue": 1705000,
    "year": 2009
  },
  {
    "state": "SD",
    "numcol": 270000,
    "yieldpercol": 66,
    "totalprod": 17820000,
    "stocks": 6237000,
    "priceperlb": 1.42,
    "prodvalue": 25304000,
    "year": 2009
  },
  {
    "state": "TN",
    "numcol": 7000,
    "yieldpercol": 51,
    "totalprod": 357000,
    "stocks": 86000,
    "priceperlb": 2.37,
    "prodvalue": 846000,
    "year": 2009
  },
  {
    "state": "TX",
    "numcol": 89000,
    "yieldpercol": 63,
    "totalprod": 5607000,
    "stocks": 1065000,
    "priceperlb": 1.39,
    "prodvalue": 7794000,
    "year": 2009
  },
  {
    "state": "UT",
    "numcol": 26000,
    "yieldpercol": 38,
    "totalprod": 988000,
    "stocks": 198000,
    "priceperlb": 1.46,
    "prodvalue": 1442000,
    "year": 2009
  },
  {
    "state": "VT",
    "numcol": 5000,
    "yieldpercol": 49,
    "totalprod": 245000,
    "stocks": 69000,
    "priceperlb": 2.01,
    "prodvalue": 492000,
    "year": 2009
  },
  {
    "state": "VA",
    "numcol": 6000,
    "yieldpercol": 39,
    "totalprod": 234000,
    "stocks": 56000,
    "priceperlb": 3.45,
    "prodvalue": 807000,
    "year": 2009
  },
  {
    "state": "WA",
    "numcol": 62000,
    "yieldpercol": 44,
    "totalprod": 2728000,
    "stocks": 1064000,
    "priceperlb": 1.58,
    "prodvalue": 4310000,
    "year": 2009
  },
  {
    "state": "WV",
    "numcol": 5000,
    "yieldpercol": 37,
    "totalprod": 185000,
    "stocks": 33000,
    "priceperlb": 2.6,
    "prodvalue": 481000,
    "year": 2009
  },
  {
    "state": "WI",
    "numcol": 63000,
    "yieldpercol": 60,
    "totalprod": 3780000,
    "stocks": 1588000,
    "priceperlb": 1.58,
    "prodvalue": 5972000,
    "year": 2009
  },
  {
    "state": "WY",
    "numcol": 37000,
    "yieldpercol": 48,
    "totalprod": 1776000,
    "stocks": 391000,
    "priceperlb": 1.43,
    "prodvalue": 2540000,
    "year": 2009
  },
  {
    "state": "AL",
    "numcol": 9000,
    "yieldpercol": 54,
    "totalprod": 486000,
    "stocks": 73000,
    "priceperlb": 2.4,
    "prodvalue": 1166000,
    "year": 2010
  },
  {
    "state": "AZ",
    "numcol": 24000,
    "yieldpercol": 77,
    "totalprod": 1848000,
    "stocks": 665000,
    "priceperlb": 1.52,
    "prodvalue": 2809000,
    "year": 2010
  },
  {
    "state": "AR",
    "numcol": 25000,
    "yieldpercol": 60,
    "totalprod": 1500000,
    "stocks": 360000,
    "priceperlb": 1.47,
    "prodvalue": 2205000,
    "year": 2010
  },
  {
    "state": "CA",
    "numcol": 410000,
    "yieldpercol": 67,
    "totalprod": 27470000,
    "stocks": 6318000,
    "priceperlb": 1.55,
    "prodvalue": 42579000,
    "year": 2010
  },
  {
    "state": "CO",
    "numcol": 34000,
    "yieldpercol": 56,
    "totalprod": 1904000,
    "stocks": 533000,
    "priceperlb": 1.52,
    "prodvalue": 2894000,
    "year": 2010
  },
  {
    "state": "FL",
    "numcol": 200000,
    "yieldpercol": 69,
    "totalprod": 13800000,
    "stocks": 1794000,
    "priceperlb": 1.56,
    "prodvalue": 21528000,
    "year": 2010
  },
  {
    "state": "GA",
    "numcol": 55000,
    "yieldpercol": 46,
    "totalprod": 2530000,
    "stocks": 152000,
    "priceperlb": 1.67,
    "prodvalue": 4225000,
    "year": 2010
  },
  {
    "state": "HI",
    "numcol": 10000,
    "yieldpercol": 77,
    "totalprod": 770000,
    "stocks": 239000,
    "priceperlb": 2.75,
    "prodvalue": 2118000,
    "year": 2010
  },
  {
    "state": "ID",
    "numcol": 97000,
    "yieldpercol": 27,
    "totalprod": 2619000,
    "stocks": 1179000,
    "priceperlb": 1.61,
    "prodvalue": 4217000,
    "year": 2010
  },
  {
    "state": "IL",
    "numcol": 9000,
    "yieldpercol": 41,
    "totalprod": 369000,
    "stocks": 92000,
    "priceperlb": 2.78,
    "prodvalue": 1026000,
    "year": 2010
  },
  {
    "state": "IN",
    "numcol": 10000,
    "yieldpercol": 43,
    "totalprod": 430000,
    "stocks": 151000,
    "priceperlb": 2.23,
    "prodvalue": 959000,
    "year": 2010
  },
  {
    "state": "IA",
    "numcol": 27000,
    "yieldpercol": 49,
    "totalprod": 1323000,
    "stocks": 463000,
    "priceperlb": 1.92,
    "prodvalue": 2540000,
    "year": 2010
  },
  {
    "state": "KS",
    "numcol": 9000,
    "yieldpercol": 52,
    "totalprod": 468000,
    "stocks": 103000,
    "priceperlb": 2.02,
    "prodvalue": 945000,
    "year": 2010
  },
  {
    "state": "KY",
    "numcol": 5000,
    "yieldpercol": 67,
    "totalprod": 335000,
    "stocks": 67000,
    "priceperlb": 2.72,
    "prodvalue": 911000,
    "year": 2010
  },
  {
    "state": "LA",
    "numcol": 36000,
    "yieldpercol": 80,
    "totalprod": 2880000,
    "stocks": 288000,
    "priceperlb": 1.5,
    "prodvalue": 4320000,
    "year": 2010
  },
  {
    "state": "ME",
    "numcol": 5000,
    "yieldpercol": 41,
    "totalprod": 205000,
    "stocks": 33000,
    "priceperlb": 2.05,
    "prodvalue": 420000,
    "year": 2010
  },
  {
    "state": "MI",
    "numcol": 71000,
    "yieldpercol": 58,
    "totalprod": 4118000,
    "stocks": 1524000,
    "priceperlb": 1.67,
    "prodvalue": 6877000,
    "year": 2010
  },
  {
    "state": "MN",
    "numcol": 128000,
    "yieldpercol": 66,
    "totalprod": 8448000,
    "stocks": 1774000,
    "priceperlb": 1.55,
    "prodvalue": 13094000,
    "year": 2010
  },
  {
    "state": "MS",
    "numcol": 16000,
    "yieldpercol": 98,
    "totalprod": 1568000,
    "stocks": 78000,
    "priceperlb": 1.44,
    "prodvalue": 2258000,
    "year": 2010
  },
  {
    "state": "MO",
    "numcol": 11000,
    "yieldpercol": 52,
    "totalprod": 572000,
    "stocks": 92000,
    "priceperlb": 1.8,
    "prodvalue": 1030000,
    "year": 2010
  },
  {
    "state": "MT",
    "numcol": 157000,
    "yieldpercol": 74,
    "totalprod": 11618000,
    "stocks": 2905000,
    "priceperlb": 1.58,
    "prodvalue": 18356000,
    "year": 2010
  },
  {
    "state": "NE",
    "numcol": 41000,
    "yieldpercol": 55,
    "totalprod": 2255000,
    "stocks": 902000,
    "priceperlb": 1.51,
    "prodvalue": 3405000,
    "year": 2010
  },
  {
    "state": "NJ",
    "numcol": 13000,
    "yieldpercol": 35,
    "totalprod": 455000,
    "stocks": 73000,
    "priceperlb": 1.9,
    "prodvalue": 865000,
    "year": 2010
  },
  {
    "state": "NM",
    "numcol": 7000,
    "yieldpercol": 66,
    "totalprod": 462000,
    "stocks": 157000,
    "priceperlb": 1.58,
    "prodvalue": 730000,
    "year": 2010
  },
  {
    "state": "NY",
    "numcol": 45000,
    "yieldpercol": 64,
    "totalprod": 2880000,
    "stocks": 1123000,
    "priceperlb": 1.96,
    "prodvalue": 5645000,
    "year": 2010
  },
  {
    "state": "NC",
    "numcol": 13000,
    "yieldpercol": 46,
    "totalprod": 598000,
    "stocks": 144000,
    "priceperlb": 2.66,
    "prodvalue": 1591000,
    "year": 2010
  },
  {
    "state": "ND",
    "numcol": 510000,
    "yieldpercol": 91,
    "totalprod": 46410000,
    "stocks": 12995000,
    "priceperlb": 1.5,
    "prodvalue": 69615000,
    "year": 2010
  },
  {
    "state": "OH",
    "numcol": 18000,
    "yieldpercol": 62,
    "totalprod": 1116000,
    "stocks": 346000,
    "priceperlb": 2.28,
    "prodvalue": 2544000,
    "year": 2010
  },
  {
    "state": "OR",
    "numcol": 59000,
    "yieldpercol": 39,
    "totalprod": 2301000,
    "stocks": 874000,
    "priceperlb": 1.63,
    "prodvalue": 3751000,
    "year": 2010
  },
  {
    "state": "PA",
    "numcol": 30000,
    "yieldpercol": 37,
    "totalprod": 1110000,
    "stocks": 377000,
    "priceperlb": 2.13,
    "prodvalue": 2364000,
    "year": 2010
  },
  {
    "state": "SD",
    "numcol": 265000,
    "yieldpercol": 58,
    "totalprod": 15370000,
    "stocks": 4765000,
    "priceperlb": 1.51,
    "prodvalue": 23209000,
    "year": 2010
  },
  {
    "state": "TN",
    "numcol": 8000,
    "yieldpercol": 63,
    "totalprod": 504000,
    "stocks": 106000,
    "priceperlb": 2.5,
    "prodvalue": 1260000,
    "year": 2010
  },
  {
    "state": "TX",
    "numcol": 100000,
    "yieldpercol": 72,
    "totalprod": 7200000,
    "stocks": 792000,
    "priceperlb": 1.51,
    "prodvalue": 10872000,
    "year": 2010
  },
  {
    "state": "UT",
    "numcol": 26000,
    "yieldpercol": 30,
    "totalprod": 780000,
    "stocks": 195000,
    "priceperlb": 1.53,
    "prodvalue": 1193000,
    "year": 2010
  },
  {
    "state": "VT",
    "numcol": 4000,
    "yieldpercol": 65,
    "totalprod": 260000,
    "stocks": 73000,
    "priceperlb": 3.1,
    "prodvalue": 806000,
    "year": 2010
  },
  {
    "state": "VA",
    "numcol": 5000,
    "yieldpercol": 37,
    "totalprod": 185000,
    "stocks": 37000,
    "priceperlb": 3.32,
    "prodvalue": 614000,
    "year": 2010
  },
  {
    "state": "WA",
    "numcol": 71000,
    "yieldpercol": 37,
    "totalprod": 2627000,
    "stocks": 1077000,
    "priceperlb": 1.57,
    "prodvalue": 4124000,
    "year": 2010
  },
  {
    "state": "WV",
    "numcol": 5000,
    "yieldpercol": 40,
    "totalprod": 200000,
    "stocks": 40000,
    "priceperlb": 2.39,
    "prodvalue": 478000,
    "year": 2010
  },
  {
    "state": "WI",
    "numcol": 64000,
    "yieldpercol": 64,
    "totalprod": 4096000,
    "stocks": 1556000,
    "priceperlb": 1.68,
    "prodvalue": 6881000,
    "year": 2010
  },
  {
    "state": "WY",
    "numcol": 34000,
    "yieldpercol": 36,
    "totalprod": 1224000,
    "stocks": 282000,
    "priceperlb": 1.59,
    "prodvalue": 1946000,
    "year": 2010
  },
  {
    "state": "AL",
    "numcol": 9000,
    "yieldpercol": 50,
    "totalprod": 450000,
    "stocks": 63000,
    "priceperlb": 2.51,
    "prodvalue": 1130000,
    "year": 2011
  },
  {
    "state": "AZ",
    "numcol": 23000,
    "yieldpercol": 53,
    "totalprod": 1219000,
    "stocks": 427000,
    "priceperlb": 1.55,
    "prodvalue": 1889000,
    "year": 2011
  },
  {
    "state": "AR",
    "numcol": 22000,
    "yieldpercol": 64,
    "totalprod": 1408000,
    "stocks": 239000,
    "priceperlb": 1.62,
    "prodvalue": 2281000,
    "year": 2011
  },
  {
    "state": "CA",
    "numcol": 370000,
    "yieldpercol": 48,
    "totalprod": 17760000,
    "stocks": 3730000,
    "priceperlb": 1.65,
    "prodvalue": 29304000,
    "year": 2011
  },
  {
    "state": "CO",
    "numcol": 31000,
    "yieldpercol": 55,
    "totalprod": 1705000,
    "stocks": 443000,
    "priceperlb": 2,
    "prodvalue": 3410000,
    "year": 2011
  },
  {
    "state": "FL",
    "numcol": 180000,
    "yieldpercol": 61,
    "totalprod": 10980000,
    "stocks": 988000,
    "priceperlb": 1.68,
    "prodvalue": 18446000,
    "year": 2011
  },
  {
    "state": "GA",
    "numcol": 65000,
    "yieldpercol": 43,
    "totalprod": 2795000,
    "stocks": 196000,
    "priceperlb": 1.65,
    "prodvalue": 4612000,
    "year": 2011
  },
  {
    "state": "HI",
    "numcol": 9000,
    "yieldpercol": 74,
    "totalprod": 666000,
    "stocks": 246000,
    "priceperlb": 3.65,
    "prodvalue": 2431000,
    "year": 2011
  },
  {
    "state": "ID",
    "numcol": 87000,
    "yieldpercol": 36,
    "totalprod": 3132000,
    "stocks": 1879000,
    "priceperlb": 1.78,
    "prodvalue": 5575000,
    "year": 2011
  },
  {
    "state": "IL",
    "numcol": 7000,
    "yieldpercol": 50,
    "totalprod": 350000,
    "stocks": 98000,
    "priceperlb": 3.9,
    "prodvalue": 1365000,
    "year": 2011
  },
  {
    "state": "IN",
    "numcol": 8000,
    "yieldpercol": 51,
    "totalprod": 408000,
    "stocks": 147000,
    "priceperlb": 2.14,
    "prodvalue": 873000,
    "year": 2011
  },
  {
    "state": "IA",
    "numcol": 25000,
    "yieldpercol": 62,
    "totalprod": 1550000,
    "stocks": 961000,
    "priceperlb": 1.96,
    "prodvalue": 3038000,
    "year": 2011
  },
  {
    "state": "KS",
    "numcol": 7000,
    "yieldpercol": 44,
    "totalprod": 308000,
    "stocks": 117000,
    "priceperlb": 2.15,
    "prodvalue": 662000,
    "year": 2011
  },
  {
    "state": "KY",
    "numcol": 4000,
    "yieldpercol": 39,
    "totalprod": 156000,
    "stocks": 12000,
    "priceperlb": 3.17,
    "prodvalue": 495000,
    "year": 2011
  },
  {
    "state": "LA",
    "numcol": 36000,
    "yieldpercol": 77,
    "totalprod": 2772000,
    "stocks": 471000,
    "priceperlb": 1.67,
    "prodvalue": 4629000,
    "year": 2011
  },
  {
    "state": "ME",
    "numcol": 4000,
    "yieldpercol": 30,
    "totalprod": 120000,
    "stocks": 17000,
    "priceperlb": 1.98,
    "prodvalue": 238000,
    "year": 2011
  },
  {
    "state": "MI",
    "numcol": 74000,
    "yieldpercol": 64,
    "totalprod": 4736000,
    "stocks": 2084000,
    "priceperlb": 1.81,
    "prodvalue": 8572000,
    "year": 2011
  },
  {
    "state": "MN",
    "numcol": 120000,
    "yieldpercol": 53,
    "totalprod": 6360000,
    "stocks": 2099000,
    "priceperlb": 1.63,
    "prodvalue": 10367000,
    "year": 2011
  },
  {
    "state": "MS",
    "numcol": 18000,
    "yieldpercol": 115,
    "totalprod": 2070000,
    "stocks": 104000,
    "priceperlb": 1.53,
    "prodvalue": 3167000,
    "year": 2011
  },
  {
    "state": "MO",
    "numcol": 8000,
    "yieldpercol": 43,
    "totalprod": 344000,
    "stocks": 76000,
    "priceperlb": 2.14,
    "prodvalue": 736000,
    "year": 2011
  },
  {
    "state": "MT",
    "numcol": 145000,
    "yieldpercol": 92,
    "totalprod": 13340000,
    "stocks": 3202000,
    "priceperlb": 1.7,
    "prodvalue": 22678000,
    "year": 2011
  },
  {
    "state": "NE",
    "numcol": 41000,
    "yieldpercol": 59,
    "totalprod": 2419000,
    "stocks": 653000,
    "priceperlb": 1.75,
    "prodvalue": 4233000,
    "year": 2011
  },
  {
    "state": "NJ",
    "numcol": 11000,
    "yieldpercol": 41,
    "totalprod": 451000,
    "stocks": 135000,
    "priceperlb": 3.7,
    "prodvalue": 1669000,
    "year": 2011
  },
  {
    "state": "NM",
    "numcol": 7000,
    "yieldpercol": 56,
    "totalprod": 392000,
    "stocks": 153000,
    "priceperlb": 1.69,
    "prodvalue": 662000,
    "year": 2011
  },
  {
    "state": "NY",
    "numcol": 49000,
    "yieldpercol": 56,
    "totalprod": 2744000,
    "stocks": 1235000,
    "priceperlb": 1.96,
    "prodvalue": 5378000,
    "year": 2011
  },
  {
    "state": "NC",
    "numcol": 14000,
    "yieldpercol": 62,
    "totalprod": 868000,
    "stocks": 95000,
    "priceperlb": 2.83,
    "prodvalue": 2456000,
    "year": 2011
  },
  {
    "state": "ND",
    "numcol": 460000,
    "yieldpercol": 71,
    "totalprod": 32660000,
    "stocks": 7512000,
    "priceperlb": 1.67,
    "prodvalue": 54542000,
    "year": 2011
  },
  {
    "state": "OH",
    "numcol": 15000,
    "yieldpercol": 66,
    "totalprod": 990000,
    "stocks": 228000,
    "priceperlb": 2.34,
    "prodvalue": 2317000,
    "year": 2011
  },
  {
    "state": "OR",
    "numcol": 60000,
    "yieldpercol": 34,
    "totalprod": 2040000,
    "stocks": 755000,
    "priceperlb": 1.68,
    "prodvalue": 3427000,
    "year": 2011
  },
  {
    "state": "PA",
    "numcol": 24000,
    "yieldpercol": 44,
    "totalprod": 1056000,
    "stocks": 306000,
    "priceperlb": 2.55,
    "prodvalue": 2693000,
    "year": 2011
  },
  {
    "state": "SD",
    "numcol": 250000,
    "yieldpercol": 66,
    "totalprod": 16500000,
    "stocks": 4290000,
    "priceperlb": 1.7,
    "prodvalue": 28050000,
    "year": 2011
  },
  {
    "state": "TN",
    "numcol": 7000,
    "yieldpercol": 44,
    "totalprod": 308000,
    "stocks": 68000,
    "priceperlb": 2.93,
    "prodvalue": 902000,
    "year": 2011
  },
  {
    "state": "TX",
    "numcol": 78000,
    "yieldpercol": 58,
    "totalprod": 4524000,
    "stocks": 633000,
    "priceperlb": 1.78,
    "prodvalue": 8053000,
    "year": 2011
  },
  {
    "state": "UT",
    "numcol": 23000,
    "yieldpercol": 39,
    "totalprod": 897000,
    "stocks": 170000,
    "priceperlb": 1.75,
    "prodvalue": 1570000,
    "year": 2011
  },
  {
    "state": "VT",
    "numcol": 4000,
    "yieldpercol": 43,
    "totalprod": 172000,
    "stocks": 43000,
    "priceperlb": 2.31,
    "prodvalue": 397000,
    "year": 2011
  },
  {
    "state": "VA",
    "numcol": 4000,
    "yieldpercol": 40,
    "totalprod": 160000,
    "stocks": 21000,
    "priceperlb": 4.07,
    "prodvalue": 651000,
    "year": 2011
  },
  {
    "state": "WA",
    "numcol": 71000,
    "yieldpercol": 38,
    "totalprod": 2698000,
    "stocks": 836000,
    "priceperlb": 1.93,
    "prodvalue": 5207000,
    "year": 2011
  },
  {
    "state": "WV",
    "numcol": 4000,
    "yieldpercol": 53,
    "totalprod": 212000,
    "stocks": 45000,
    "priceperlb": 2.57,
    "prodvalue": 545000,
    "year": 2011
  },
  {
    "state": "WI",
    "numcol": 57000,
    "yieldpercol": 63,
    "totalprod": 3591000,
    "stocks": 1508000,
    "priceperlb": 1.89,
    "prodvalue": 6787000,
    "year": 2011
  },
  {
    "state": "WY",
    "numcol": 35000,
    "yieldpercol": 54,
    "totalprod": 1890000,
    "stocks": 265000,
    "priceperlb": 1.72,
    "prodvalue": 3251000,
    "year": 2011
  },
  {
    "state": "AL",
    "numcol": 8000,
    "yieldpercol": 54,
    "totalprod": 432000,
    "stocks": 65000,
    "priceperlb": 2.47,
    "prodvalue": 1067000,
    "year": 2012
  },
  {
    "state": "AZ",
    "numcol": 22000,
    "yieldpercol": 46,
    "totalprod": 1012000,
    "stocks": 253000,
    "priceperlb": 1.79,
    "prodvalue": 1811000,
    "year": 2012
  },
  {
    "state": "AR",
    "numcol": 25000,
    "yieldpercol": 63,
    "totalprod": 1575000,
    "stocks": 189000,
    "priceperlb": 1.98,
    "prodvalue": 3119000,
    "year": 2012
  },
  {
    "state": "CA",
    "numcol": 330000,
    "yieldpercol": 35,
    "totalprod": 11550000,
    "stocks": 3119000,
    "priceperlb": 1.94,
    "prodvalue": 22407000,
    "year": 2012
  },
  {
    "state": "CO",
    "numcol": 25000,
    "yieldpercol": 48,
    "totalprod": 1200000,
    "stocks": 468000,
    "priceperlb": 2.07,
    "prodvalue": 2484000,
    "year": 2012
  },
  {
    "state": "FL",
    "numcol": 193000,
    "yieldpercol": 64,
    "totalprod": 12352000,
    "stocks": 1235000,
    "priceperlb": 1.84,
    "prodvalue": 22728000,
    "year": 2012
  },
  {
    "state": "GA",
    "numcol": 59000,
    "yieldpercol": 51,
    "totalprod": 3009000,
    "stocks": 181000,
    "priceperlb": 1.92,
    "prodvalue": 5777000,
    "year": 2012
  },
  {
    "state": "HI",
    "numcol": 10000,
    "yieldpercol": 75,
    "totalprod": 750000,
    "stocks": 263000,
    "priceperlb": 4.15,
    "prodvalue": 3113000,
    "year": 2012
  },
  {
    "state": "ID",
    "numcol": 92000,
    "yieldpercol": 32,
    "totalprod": 2944000,
    "stocks": 530000,
    "priceperlb": 1.63,
    "prodvalue": 4799000,
    "year": 2012
  },
  {
    "state": "IL",
    "numcol": 7000,
    "yieldpercol": 61,
    "totalprod": 427000,
    "stocks": 145000,
    "priceperlb": 3.55,
    "prodvalue": 1516000,
    "year": 2012
  },
  {
    "state": "IN",
    "numcol": 8000,
    "yieldpercol": 59,
    "totalprod": 472000,
    "stocks": 203000,
    "priceperlb": 2.54,
    "prodvalue": 1199000,
    "year": 2012
  },
  {
    "state": "IA",
    "numcol": 37000,
    "yieldpercol": 61,
    "totalprod": 2257000,
    "stocks": 1196000,
    "priceperlb": 2.17,
    "prodvalue": 4898000,
    "year": 2012
  },
  {
    "state": "KS",
    "numcol": 6000,
    "yieldpercol": 55,
    "totalprod": 330000,
    "stocks": 125000,
    "priceperlb": 2.28,
    "prodvalue": 752000,
    "year": 2012
  },
  {
    "state": "KY",
    "numcol": 5000,
    "yieldpercol": 51,
    "totalprod": 255000,
    "stocks": 41000,
    "priceperlb": 3.15,
    "prodvalue": 803000,
    "year": 2012
  },
  {
    "state": "LA",
    "numcol": 41000,
    "yieldpercol": 86,
    "totalprod": 3526000,
    "stocks": 141000,
    "priceperlb": 1.83,
    "prodvalue": 6453000,
    "year": 2012
  },
  {
    "state": "ME",
    "numcol": 4000,
    "yieldpercol": 34,
    "totalprod": 136000,
    "stocks": 24000,
    "priceperlb": 2.39,
    "prodvalue": 325000,
    "year": 2012
  },
  {
    "state": "MI",
    "numcol": 73000,
    "yieldpercol": 57,
    "totalprod": 4161000,
    "stocks": 1332000,
    "priceperlb": 2.03,
    "prodvalue": 8447000,
    "year": 2012
  },
  {
    "state": "MN",
    "numcol": 125000,
    "yieldpercol": 67,
    "totalprod": 8375000,
    "stocks": 1591000,
    "priceperlb": 1.92,
    "prodvalue": 16080000,
    "year": 2012
  },
  {
    "state": "MS",
    "numcol": 18000,
    "yieldpercol": 118,
    "totalprod": 2124000,
    "stocks": 64000,
    "priceperlb": 1.77,
    "prodvalue": 3759000,
    "year": 2012
  },
  {
    "state": "MO",
    "numcol": 7000,
    "yieldpercol": 53,
    "totalprod": 371000,
    "stocks": 108000,
    "priceperlb": 2.8,
    "prodvalue": 1039000,
    "year": 2012
  },
  {
    "state": "MT",
    "numcol": 145000,
    "yieldpercol": 52,
    "totalprod": 7540000,
    "stocks": 2413000,
    "priceperlb": 1.95,
    "prodvalue": 14703000,
    "year": 2012
  },
  {
    "state": "NE",
    "numcol": 43000,
    "yieldpercol": 65,
    "totalprod": 2795000,
    "stocks": 1146000,
    "priceperlb": 1.93,
    "prodvalue": 5394000,
    "year": 2012
  },
  {
    "state": "NJ",
    "numcol": 14000,
    "yieldpercol": 33,
    "totalprod": 462000,
    "stocks": 51000,
    "priceperlb": 1.97,
    "prodvalue": 910000,
    "year": 2012
  },
  {
    "state": "NM",
    "numcol": 5000,
    "yieldpercol": 52,
    "totalprod": 260000,
    "stocks": 99000,
    "priceperlb": 3.39,
    "prodvalue": 881000,
    "year": 2012
  },
  {
    "state": "NY",
    "numcol": 51000,
    "yieldpercol": 51,
    "totalprod": 2601000,
    "stocks": 988000,
    "priceperlb": 2.23,
    "prodvalue": 5800000,
    "year": 2012
  },
  {
    "state": "NC",
    "numcol": 13000,
    "yieldpercol": 39,
    "totalprod": 507000,
    "stocks": 106000,
    "priceperlb": 3.76,
    "prodvalue": 1906000,
    "year": 2012
  },
  {
    "state": "ND",
    "numcol": 480000,
    "yieldpercol": 69,
    "totalprod": 33120000,
    "stocks": 5962000,
    "priceperlb": 1.92,
    "prodvalue": 63590000,
    "year": 2012
  },
  {
    "state": "OH",
    "numcol": 18000,
    "yieldpercol": 60,
    "totalprod": 1080000,
    "stocks": 410000,
    "priceperlb": 2.46,
    "prodvalue": 2657000,
    "year": 2012
  },
  {
    "state": "OR",
    "numcol": 60000,
    "yieldpercol": 32,
    "totalprod": 1920000,
    "stocks": 845000,
    "priceperlb": 2.16,
    "prodvalue": 4147000,
    "year": 2012
  },
  {
    "state": "PA",
    "numcol": 16000,
    "yieldpercol": 60,
    "totalprod": 960000,
    "stocks": 269000,
    "priceperlb": 2.57,
    "prodvalue": 2467000,
    "year": 2012
  },
  {
    "state": "SD",
    "numcol": 260000,
    "yieldpercol": 63,
    "totalprod": 16380000,
    "stocks": 3604000,
    "priceperlb": 1.95,
    "prodvalue": 31941000,
    "year": 2012
  },
  {
    "state": "TN",
    "numcol": 6000,
    "yieldpercol": 61,
    "totalprod": 366000,
    "stocks": 59000,
    "priceperlb": 2.93,
    "prodvalue": 1072000,
    "year": 2012
  },
  {
    "state": "TX",
    "numcol": 92000,
    "yieldpercol": 52,
    "totalprod": 4784000,
    "stocks": 718000,
    "priceperlb": 2,
    "prodvalue": 9568000,
    "year": 2012
  },
  {
    "state": "UT",
    "numcol": 25000,
    "yieldpercol": 38,
    "totalprod": 950000,
    "stocks": 209000,
    "priceperlb": 1.87,
    "prodvalue": 1777000,
    "year": 2012
  },
  {
    "state": "VT",
    "numcol": 4000,
    "yieldpercol": 60,
    "totalprod": 240000,
    "stocks": 53000,
    "priceperlb": 2.39,
    "prodvalue": 574000,
    "year": 2012
  },
  {
    "state": "VA",
    "numcol": 4000,
    "yieldpercol": 41,
    "totalprod": 164000,
    "stocks": 23000,
    "priceperlb": 3.77,
    "prodvalue": 618000,
    "year": 2012
  },
  {
    "state": "WA",
    "numcol": 62000,
    "yieldpercol": 41,
    "totalprod": 2542000,
    "stocks": 1017000,
    "priceperlb": 2.38,
    "prodvalue": 6050000,
    "year": 2012
  },
  {
    "state": "WV",
    "numcol": 6000,
    "yieldpercol": 48,
    "totalprod": 288000,
    "stocks": 95000,
    "priceperlb": 2.91,
    "prodvalue": 838000,
    "year": 2012
  },
  {
    "state": "WI",
    "numcol": 60000,
    "yieldpercol": 69,
    "totalprod": 4140000,
    "stocks": 1863000,
    "priceperlb": 2.05,
    "prodvalue": 8487000,
    "year": 2012
  },
  {
    "state": "WY",
    "numcol": 50000,
    "yieldpercol": 51,
    "totalprod": 2550000,
    "stocks": 459000,
    "priceperlb": 1.87,
    "prodvalue": 4769000,
    "year": 2012
  }
]
</script>
<button onclick="myFunction()">Virginia</button>
<button onclick="b()">Nevada</button>
<button onclick="c()">Illnois</button>
<button onclick="d()">New York</button>
</body>

<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "You are correct!";
}
</script>
<script>
function b() {
    document.getElementById("demo").innerHTML = "Sorry, please try again! I made something to help you with this question. Please see this link: https://public.tableau.com/profile/melanie.qu1712#!/vizhome/honeyproduction_0/Dashboard1?publish=yes";
}
</script>
<script>
function c() {
    document.getElementById("demo").innerHTML = "Sorry, please try again! I made something to help you with this question. Please see this link: https://public.tableau.com/profile/melanie.qu1712#!/vizhome/honeyproduction_0/Dashboard1?publish=yes";
}
</script>
<script>
function d() {
    document.getElementById("demo").innerHTML = "Sorry, please try again! I made something to help you with this question. Please see this link: https://public.tableau.com/profile/melanie.qu1712#!/vizhome/honeyproduction_0/Dashboard1?publish=yes";
}
</script>


<p id="demo"></p>
<p>Which US state has the highest stock prices?</p>
<button onclick="myFunction2()">South Dakota</button>
<button onclick="b2()">Nevada</button>
<button onclick="c2()">New Jersey</button>
<button onclick="d2()">California</button>
<script>
function myFunction2() {
    document.getElementById("demo2").innerHTML = "You are correct!";
}
</script>
<script>
function b2() {
    document.getElementById("demo2").innerHTML = "Sorry, please try again! I made something to help you with this question. Please see this link: https://public.tableau.com/profile/melanie.qu1712#!/vizhome/honeyproduction_0/Dashboard1?publish=yes";
}
</script>
<script>
function c2() {
    document.getElementById("demo2").innerHTML = "Sorry, please try again! I made something to help you with this question. Please see this link: https://public.tableau.com/profile/melanie.qu1712#!/vizhome/honeyproduction_0/Dashboard1?publish=yes";
}
</script>
<script>
function d2() {
    document.getElementById("demo2").innerHTML = "Sorry, please try again! I made something to help you with this question. Please see this link: https://public.tableau.com/profile/melanie.qu1712#!/vizhome/honeyproduction_0/Dashboard1?publish=yes";
}
</script>
<p id="demo2"></p>
<p>Which US state has the highest total production of honey?</p>
<button onclick="myFunction3()">North Dakota</button>
<button onclick="b3()">Washington</button>
<button onclick="c3()">Arizona</button>
<button onclick="d3()">Tenessee</button>
<script>
function myFunction3() {
    document.getElementById("demo3").innerHTML = "You are correct!";
}
</script>
<script>
function b3() {
    document.getElementById("demo3").innerHTML = "Sorry, please try again! I made something to help you with this question. Please see this link: https://public.tableau.com/profile/melanie.qu1712#!/vizhome/honeyproduction_0/Dashboard1?publish=yes";
}
</script>
<script>
function c3() {
    document.getElementById("demo3").innerHTML = "Sorry, please try again! I made something to help you with this question. Please see this link: https://public.tableau.com/profile/melanie.qu1712#!/vizhome/honeyproduction_0/Dashboard1?publish=yes";
}
</script>
<script>
function d3() {
    document.getElementById("demo3").innerHTML = "Sorry, please try again! I made something to help you with this question. Please see this link: https://public.tableau.com/profile/melanie.qu1712#!/vizhome/honeyproduction_0/Dashboard1?publish=yes";
}
</script>
<p id="demo3"></p>
</body>

</html>
