/* Port Search — seed dataset.
 *
 * Each entry: { code, name, country, region, type }
 *   code   - UN/LOCODE (5-char: 2-letter country + 3-letter location)
 *   region - used for the filter chips
 *
 * This is a CURATED SAMPLE of major world seaports for development.
 * Replace/extend with the full UN/LOCODE list (~100k entries) for production —
 * keep the same shape and the search UI will work unchanged.
 */
window.PORTS = [
  // --- Asia ---
  { code: "SGSIN", name: "Singapore", country: "Singapore", region: "Asia", type: "Seaport" },
  { code: "CNSHA", name: "Shanghai", country: "China", region: "Asia", type: "Seaport" },
  { code: "CNNGB", name: "Ningbo-Zhoushan", country: "China", region: "Asia", type: "Seaport" },
  { code: "CNSZN", name: "Shenzhen", country: "China", region: "Asia", type: "Seaport" },
  { code: "CNCAN", name: "Guangzhou", country: "China", region: "Asia", type: "Seaport" },
  { code: "CNTAO", name: "Qingdao", country: "China", region: "Asia", type: "Seaport" },
  { code: "CNTSN", name: "Tianjin", country: "China", region: "Asia", type: "Seaport" },
  { code: "HKHKG", name: "Hong Kong", country: "Hong Kong", region: "Asia", type: "Seaport" },
  { code: "KRPUS", name: "Busan", country: "South Korea", region: "Asia", type: "Seaport" },
  { code: "TWKHH", name: "Kaohsiung", country: "Taiwan", region: "Asia", type: "Seaport" },
  { code: "JPTYO", name: "Tokyo", country: "Japan", region: "Asia", type: "Seaport" },
  { code: "JPYOK", name: "Yokohama", country: "Japan", region: "Asia", type: "Seaport" },
  { code: "MYPKG", name: "Port Klang", country: "Malaysia", region: "Asia", type: "Seaport" },
  { code: "MYTPP", name: "Tanjung Pelepas", country: "Malaysia", region: "Asia", type: "Seaport" },
  { code: "THLCH", name: "Laem Chabang", country: "Thailand", region: "Asia", type: "Seaport" },
  { code: "VNSGN", name: "Ho Chi Minh City (Saigon)", country: "Vietnam", region: "Asia", type: "Seaport" },
  { code: "VNHPH", name: "Haiphong", country: "Vietnam", region: "Asia", type: "Seaport" },
  { code: "IDJKT", name: "Jakarta (Tanjung Priok)", country: "Indonesia", region: "Asia", type: "Seaport" },
  { code: "PHMNL", name: "Manila", country: "Philippines", region: "Asia", type: "Seaport" },
  { code: "LKCMB", name: "Colombo", country: "Sri Lanka", region: "Asia", type: "Seaport" },
  { code: "INNSA", name: "Nhava Sheva (JNPT)", country: "India", region: "Asia", type: "Seaport" },
  { code: "INMUN", name: "Mundra", country: "India", region: "Asia", type: "Seaport" },
  { code: "INMAA", name: "Chennai", country: "India", region: "Asia", type: "Seaport" },
  { code: "PKKHI", name: "Karachi", country: "Pakistan", region: "Asia", type: "Seaport" },
  { code: "BDCGP", name: "Chittagong", country: "Bangladesh", region: "Asia", type: "Seaport" },

  // --- Europe ---
  { code: "NLRTM", name: "Rotterdam", country: "Netherlands", region: "Europe", type: "Seaport" },
  { code: "BEANR", name: "Antwerp", country: "Belgium", region: "Europe", type: "Seaport" },
  { code: "DEHAM", name: "Hamburg", country: "Germany", region: "Europe", type: "Seaport" },
  { code: "DEBRV", name: "Bremerhaven", country: "Germany", region: "Europe", type: "Seaport" },
  { code: "GBFXT", name: "Felixstowe", country: "United Kingdom", region: "Europe", type: "Seaport" },
  { code: "GBSOU", name: "Southampton", country: "United Kingdom", region: "Europe", type: "Seaport" },
  { code: "ESVLC", name: "Valencia", country: "Spain", region: "Europe", type: "Seaport" },
  { code: "ESALG", name: "Algeciras", country: "Spain", region: "Europe", type: "Seaport" },
  { code: "ESBCN", name: "Barcelona", country: "Spain", region: "Europe", type: "Seaport" },
  { code: "GRPIR", name: "Piraeus", country: "Greece", region: "Europe", type: "Seaport" },
  { code: "ITGOA", name: "Genoa", country: "Italy", region: "Europe", type: "Seaport" },
  { code: "FRLEH", name: "Le Havre", country: "France", region: "Europe", type: "Seaport" },
  { code: "PLGDN", name: "Gdansk", country: "Poland", region: "Europe", type: "Seaport" },

  // --- North America ---
  { code: "USLAX", name: "Los Angeles", country: "United States", region: "North America", type: "Seaport" },
  { code: "USLGB", name: "Long Beach", country: "United States", region: "North America", type: "Seaport" },
  { code: "USNYC", name: "New York / New Jersey", country: "United States", region: "North America", type: "Seaport" },
  { code: "USSAV", name: "Savannah", country: "United States", region: "North America", type: "Seaport" },
  { code: "USHOU", name: "Houston", country: "United States", region: "North America", type: "Seaport" },
  { code: "USSEA", name: "Seattle", country: "United States", region: "North America", type: "Seaport" },
  { code: "USORF", name: "Norfolk", country: "United States", region: "North America", type: "Seaport" },
  { code: "CAVAN", name: "Vancouver", country: "Canada", region: "North America", type: "Seaport" },
  { code: "CAMTR", name: "Montreal", country: "Canada", region: "North America", type: "Seaport" },
  { code: "MXZLO", name: "Manzanillo", country: "Mexico", region: "North America", type: "Seaport" },

  // --- South America ---
  { code: "BRSSZ", name: "Santos", country: "Brazil", region: "South America", type: "Seaport" },
  { code: "COCTG", name: "Cartagena", country: "Colombia", region: "South America", type: "Seaport" },
  { code: "PECLL", name: "Callao", country: "Peru", region: "South America", type: "Seaport" },

  // --- Middle East ---
  { code: "AEJEA", name: "Jebel Ali (Dubai)", country: "United Arab Emirates", region: "Middle East", type: "Seaport" },
  { code: "SAJED", name: "Jeddah", country: "Saudi Arabia", region: "Middle East", type: "Seaport" },
  { code: "OMSLL", name: "Salalah", country: "Oman", region: "Middle East", type: "Seaport" },
  { code: "QAHMD", name: "Hamad", country: "Qatar", region: "Middle East", type: "Seaport" },

  // --- Africa ---
  { code: "ZADUR", name: "Durban", country: "South Africa", region: "Africa", type: "Seaport" },
  { code: "ZACPT", name: "Cape Town", country: "South Africa", region: "Africa", type: "Seaport" },
  { code: "EGPSD", name: "Port Said", country: "Egypt", region: "Africa", type: "Seaport" },
  { code: "MAPTM", name: "Tanger Med", country: "Morocco", region: "Africa", type: "Seaport" },

  // --- Oceania ---
  { code: "AUMEL", name: "Melbourne", country: "Australia", region: "Oceania", type: "Seaport" },
  { code: "AUSYD", name: "Sydney", country: "Australia", region: "Oceania", type: "Seaport" },
  { code: "AUBNE", name: "Brisbane", country: "Australia", region: "Oceania", type: "Seaport" },
  { code: "AUFRE", name: "Fremantle", country: "Australia", region: "Oceania", type: "Seaport" },
  { code: "NZAKL", name: "Auckland", country: "New Zealand", region: "Oceania", type: "Seaport" },
  { code: "NZTRG", name: "Tauranga", country: "New Zealand", region: "Oceania", type: "Seaport" }
];
