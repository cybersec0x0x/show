const SEARCH_PRESETS = {
  general: [
    { title: "Google", caption: "General web search", buildUrl: (q) => `https://www.google.com/search?q=${encodeURIComponent(q)}` },
    { title: "DuckDuckGo", caption: "Alternative search engine", buildUrl: (q) => `https://duckduckgo.com/?q=${encodeURIComponent(q)}` },
    { title: "Wikipedia", caption: "Encyclopedic context", buildUrl: (q) => `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(q)}` },
    { title: "Wikidata", caption: "Structured knowledge graph", buildUrl: (q) => `https://www.wikidata.org/w/index.php?search=${encodeURIComponent(q)}` },
    { title: "Internet Archive", caption: "Books, media, and historical content", buildUrl: (q) => `https://archive.org/search?query=${encodeURIComponent(q)}` }
  ],
  people: [
    { title: "WhatsMyName", caption: "Username presence search", buildUrl: (q) => `https://whatsmyname.app/?q=${encodeURIComponent(q)}` },
    { title: "Namechk", caption: "Handle availability and profile trail", buildUrl: (q) => `https://namechk.com/${encodeURIComponent(q)}` },
    { title: "Have I Been Pwned", caption: "Public breach awareness for email", buildUrl: (q) => `https://haveibeenpwned.com/unifiedsearch/${encodeURIComponent(q)}` },
    { title: "Hunter", caption: "Public email pattern lookup", buildUrl: (q) => `https://hunter.io/search/${encodeURIComponent(q)}` },
    { title: "Thatsthem Search", caption: "People search reference route", buildUrl: (q) => `https://thatsthem.com/name/${encodeURIComponent(q)}` }
  ],
  social: [
    { title: "GitHub", caption: "Developer profile and repositories", buildUrl: (q) => `https://github.com/${encodeURIComponent(q)}` },
    { title: "Reddit Search", caption: "Public profiles and threads", buildUrl: (q) => `https://www.reddit.com/search/?q=${encodeURIComponent(q)}` },
    { title: "X Search", caption: "Public mention search", buildUrl: (q) => `https://x.com/search?q=${encodeURIComponent(q)}` },
    { title: "Keybase", caption: "Identity proofs and profiles", buildUrl: (q) => `https://keybase.io/${encodeURIComponent(q)}` },
    { title: "Sourcegraph", caption: "Code and account references", buildUrl: (q) => `https://sourcegraph.com/search?q=${encodeURIComponent(q)}` }
  ],
  domain: [
    { title: "who.is", caption: "Registration records", buildUrl: (q) => `https://who.is/whois/${encodeURIComponent(q)}` },
    { title: "crt.sh", caption: "Certificates and subdomains", buildUrl: (q) => `https://crt.sh/?q=${encodeURIComponent(q)}` },
    { title: "SecurityTrails", caption: "DNS history and domain signals", buildUrl: (q) => `https://securitytrails.com/domain/${encodeURIComponent(q)}` },
    { title: "ViewDNS", caption: "DNS tools and reverse lookups", buildUrl: (q) => `https://viewdns.info/whois/?domain=${encodeURIComponent(q)}` },
    { title: "Wayback Machine", caption: "Historical snapshots", buildUrl: (q) => `https://web.archive.org/web/*/${encodeURIComponent(withProtocol(q))}` }
  ],
  cyber: [
    { title: "VirusTotal", caption: "IOC, URL, IP, and hash search", buildUrl: (q) => `https://www.virustotal.com/gui/search/${encodeURIComponent(q)}` },
    { title: "AlienVault OTX", caption: "Indicators and community pulses", buildUrl: (q) => `https://otx.alienvault.com/browse/global/pulses?q=${encodeURIComponent(q)}` },
    { title: "URLScan", caption: "Observed URL and page data", buildUrl: (q) => `https://urlscan.io/search/#${encodeURIComponent(q)}` },
    { title: "Shodan", caption: "Internet-facing devices and services", buildUrl: (q) => `https://www.shodan.io/search?query=${encodeURIComponent(q)}` },
    { title: "GreyNoise", caption: "Internet noise and scanner context", buildUrl: (q) => `https://viz.greynoise.io/query/${encodeURIComponent(q)}` }
  ],
  company: [
    { title: "OpenCorporates", caption: "Company and officer lookup", buildUrl: (q) => `https://opencorporates.com/companies?utf8=%E2%9C%93&q=${encodeURIComponent(q)}` },
    { title: "SEC EDGAR", caption: "Filings and public records", buildUrl: (q) => `https://www.sec.gov/edgar/search/#/q=${encodeURIComponent(q)}` },
    { title: "OpenSanctions", caption: "Sanctions and entity search", buildUrl: (q) => `https://www.opensanctions.org/search/?q=${encodeURIComponent(q)}` },
    { title: "GLEIF", caption: "Legal entity lookup", buildUrl: (q) => `https://search.gleif.org/#/record?filter=${encodeURIComponent(q)}` },
    { title: "Companies House", caption: "UK company registry", buildUrl: (q) => `https://find-and-update.company-information.service.gov.uk/search/companies?q=${encodeURIComponent(q)}` }
  ],
  maps: [
    { title: "Google Maps", caption: "Map and satellite view", buildUrl: (q) => `https://www.google.com/maps/search/${encodeURIComponent(q)}` },
    { title: "OpenStreetMap", caption: "Open map data", buildUrl: (q) => `https://www.openstreetmap.org/search?query=${encodeURIComponent(q)}` },
    { title: "Wikimapia", caption: "Crowd-sourced place labeling", buildUrl: (q) => `https://wikimapia.org/#lang=en&search=${encodeURIComponent(q)}` },
    { title: "SunCalc", caption: "Sun position and shadow timing", buildUrl: (q) => `https://www.suncalc.org/#/${encodeURIComponent(q)}/15/2026.04.22/12:00/1/3` },
    { title: "Windy", caption: "Weather and cloud patterns", buildUrl: (q) => `https://www.windy.com/?${encodeURIComponent(q)}` }
  ],
  media: [
    { title: "Google Lens", caption: "Reverse visual search", buildUrl: (q) => `https://lens.google.com/uploadbyurl?url=${encodeURIComponent(q)}` },
    { title: "Bing Visual Search", caption: "Alternative reverse image search", buildUrl: (q) => `https://www.bing.com/images/search?q=imgurl:${encodeURIComponent(q)}&view=detailv2&iss=sbi` },
    { title: "TinEye", caption: "Image copy lookup", buildUrl: (q) => `https://tineye.com/search?url=${encodeURIComponent(q)}` },
    { title: "Wayback Save", caption: "Archive a page or asset", buildUrl: (q) => `https://web.archive.org/save/${q}` },
    { title: "Archive.today", caption: "Alternative archiving route", buildUrl: (q) => `https://archive.ph/${encodeURIComponent(q)}` }
  ],
  datasets: [
    { title: "Google Dataset Search", caption: "Open datasets", buildUrl: (q) => `https://datasetsearch.research.google.com/search?query=${encodeURIComponent(q)}` },
    { title: "Data.gov", caption: "US public data", buildUrl: (q) => `https://catalog.data.gov/dataset?q=${encodeURIComponent(q)}` },
    { title: "EU Open Data", caption: "European public data", buildUrl: (q) => `https://data.europa.eu/en/search?query=${encodeURIComponent(q)}` },
    { title: "OpenAlex", caption: "Research graph search", buildUrl: (q) => `https://openalex.org/works?page=1&search=${encodeURIComponent(q)}` },
    { title: "Kaggle Datasets", caption: "Public dataset search", buildUrl: (q) => `https://www.kaggle.com/search?q=${encodeURIComponent(q)}` }
  ],
  archives: [
    { title: "Wayback Machine", caption: "Historical web archive", buildUrl: (q) => `https://web.archive.org/web/*/${encodeURIComponent(withProtocol(q))}` },
    { title: "Archive.today", caption: "Snapshot archive", buildUrl: (q) => `https://archive.ph/${encodeURIComponent(q)}` },
    { title: "Internet Archive Texts", caption: "Books and scanned texts", buildUrl: (q) => `https://archive.org/search?query=${encodeURIComponent(q)}` },
    { title: "Library of Congress", caption: "Library and historical material", buildUrl: (q) => `https://www.loc.gov/search/?in=all&q=${encodeURIComponent(q)}` },
    { title: "Google Cache Search", caption: "Cache-oriented lookup", buildUrl: (q) => `https://www.google.com/search?q=cache:${encodeURIComponent(q)}` }
  ]
};

const RESOURCE_ATLAS = [
  { title: "OpenCorporates", category: "company", description: "Global company and officer lookup.", tags: ["companies", "registry", "corporate"], url: "https://opencorporates.com/" },
  { title: "SEC EDGAR", category: "company", description: "US public company filings.", tags: ["sec", "filings", "public"], url: "https://www.sec.gov/edgar/search/" },
  { title: "GLEIF", category: "company", description: "Legal entity identifier registry.", tags: ["lei", "legal", "entity"], url: "https://www.gleif.org/en/lei-data/search-lei-data" },
  { title: "OpenSanctions", category: "company", description: "Entity and sanctions search.", tags: ["sanctions", "entity", "compliance"], url: "https://www.opensanctions.org/" },
  { title: "Aleph OCCRP", category: "company", description: "Investigative document platform.", tags: ["documents", "investigation", "occrp"], url: "https://aleph.occrp.org/" },
  { title: "LittleSis", category: "company", description: "Networks of power and influence.", tags: ["network", "people", "power"], url: "https://littlesis.org/" },
  { title: "Companies House", category: "company", description: "UK company registry.", tags: ["uk", "companies", "registry"], url: "https://find-and-update.company-information.service.gov.uk/" },
  { title: "Crunchbase", category: "company", description: "Startup and company profiles.", tags: ["startup", "funding", "profiles"], url: "https://www.crunchbase.com/" },
  { title: "OpenSecrets", category: "company", description: "Political spending and influence data.", tags: ["politics", "money", "records"], url: "https://www.opensecrets.org/" },
  { title: "Google Dataset Search", category: "datasets", description: "Search public datasets.", tags: ["datasets", "open data", "search"], url: "https://datasetsearch.research.google.com/" },
  { title: "Data.gov", category: "datasets", description: "US government open data portal.", tags: ["government", "datasets", "usa"], url: "https://www.data.gov/" },
  { title: "EU Open Data", category: "datasets", description: "European public data portal.", tags: ["eu", "datasets", "public"], url: "https://data.europa.eu/en" },
  { title: "World Bank Data", category: "datasets", description: "Global economic and statistical data.", tags: ["economy", "stats", "world"], url: "https://data.worldbank.org/" },
  { title: "OpenAlex", category: "datasets", description: "Research graph for papers and authors.", tags: ["research", "authors", "papers"], url: "https://openalex.org/" },
  { title: "Wikidata", category: "datasets", description: "Open structured knowledge graph.", tags: ["entities", "knowledge", "graph"], url: "https://www.wikidata.org/" },
  { title: "Kaggle Datasets", category: "datasets", description: "Public datasets and notebooks.", tags: ["data", "analysis", "community"], url: "https://www.kaggle.com/datasets" },
  { title: "Internet Archive", category: "datasets", description: "Open books, media, and snapshots.", tags: ["archive", "media", "books"], url: "https://archive.org/" },
  { title: "Library of Congress", category: "datasets", description: "Catalog and historical resources.", tags: ["library", "history", "documents"], url: "https://www.loc.gov/" },
  { title: "Bellingcat Toolkit", category: "datasets", description: "OSINT guides and resource lists.", tags: ["osint", "toolkit", "research"], url: "https://www.bellingcat.com/resources/how-tos/" },
  { title: "Shodan", category: "cyber", description: "Internet-facing services and banners.", tags: ["infra", "ports", "services"], url: "https://www.shodan.io/" },
  { title: "Censys", category: "cyber", description: "Search hosts and certificates.", tags: ["hosts", "certificates", "internet"], url: "https://search.censys.io/" },
  { title: "VirusTotal", category: "cyber", description: "Search IOC, files, URLs, and IPs.", tags: ["ioc", "malware", "hash"], url: "https://www.virustotal.com/" },
  { title: "AlienVault OTX", category: "cyber", description: "Community threat intel pulses.", tags: ["threat intel", "ioc", "community"], url: "https://otx.alienvault.com/" },
  { title: "AbuseIPDB", category: "cyber", description: "IP reputation and abuse reports.", tags: ["ip", "reputation", "abuse"], url: "https://www.abuseipdb.com/" },
  { title: "URLScan", category: "cyber", description: "Observed web and page scans.", tags: ["url", "web", "scan"], url: "https://urlscan.io/" },
  { title: "MalwareBazaar", category: "cyber", description: "Malware sample and hash lookup.", tags: ["samples", "hash", "malware"], url: "https://bazaar.abuse.ch/" },
  { title: "GreyNoise", category: "cyber", description: "Internet background noise context.", tags: ["internet", "noise", "intel"], url: "https://viz.greynoise.io/" },
  { title: "MITRE ATT&CK", category: "cyber", description: "Tactics, techniques, and procedures.", tags: ["attack", "ttp", "knowledge"], url: "https://attack.mitre.org/" },
  { title: "who.is", category: "domain", description: "WHOIS lookup for domains.", tags: ["whois", "domain", "registration"], url: "https://who.is/" },
  { title: "crt.sh", category: "domain", description: "Certificate transparency search.", tags: ["certificates", "subdomains", "tls"], url: "https://crt.sh/" },
  { title: "SecurityTrails", category: "domain", description: "DNS history and domain signals.", tags: ["dns", "history", "domain"], url: "https://securitytrails.com/" },
  { title: "ViewDNS", category: "domain", description: "DNS and reverse lookup tools.", tags: ["dns", "lookup", "reverse ip"], url: "https://viewdns.info/" },
  { title: "DNSDumpster", category: "domain", description: "DNS mapping and infrastructure view.", tags: ["dns", "map", "infra"], url: "https://dnsdumpster.com/" },
  { title: "BuiltWith", category: "domain", description: "Technology stack lookup.", tags: ["technology", "website", "stack"], url: "https://builtwith.com/" },
  { title: "Wayback Machine", category: "media", description: "Archived website snapshots.", tags: ["archive", "history", "web"], url: "https://web.archive.org/" },
  { title: "Archive.today", category: "media", description: "On-demand page snapshots.", tags: ["snapshot", "archive", "page"], url: "https://archive.ph/" },
  { title: "TinEye", category: "media", description: "Reverse image lookup.", tags: ["image", "reverse", "search"], url: "https://tineye.com/" },
  { title: "Google Lens", category: "media", description: "Visual search and image matching.", tags: ["visual", "image", "google"], url: "https://lens.google.com/" },
  { title: "Bing Visual Search", category: "media", description: "Alternative reverse image route.", tags: ["image", "bing", "visual"], url: "https://www.bing.com/visualsearch" },
  { title: "Exif.tools", category: "media", description: "Reference site for EXIF data.", tags: ["metadata", "exif", "images"], url: "https://exif.tools/" },
  { title: "OpenStreetMap", category: "geo", description: "Open map data and object layers.", tags: ["maps", "geo", "open"], url: "https://www.openstreetmap.org/" },
  { title: "Google Maps", category: "geo", description: "Map and satellite layers.", tags: ["maps", "satellite", "street"], url: "https://maps.google.com/" },
  { title: "Wikimapia", category: "geo", description: "Crowd-labeled places and regions.", tags: ["maps", "community", "places"], url: "https://wikimapia.org/" },
  { title: "SunCalc", category: "geo", description: "Sun angle and shadow modeling.", tags: ["sun", "shadow", "verification"], url: "https://www.suncalc.org/" },
  { title: "Windy", category: "geo", description: "Weather and cloud patterns.", tags: ["weather", "clouds", "climate"], url: "https://www.windy.com/" },
  { title: "GeoHack", category: "geo", description: "Coordinate jump point for map services.", tags: ["coordinates", "maps", "tools"], url: "https://geohack.toolforge.org/" },
  { title: "Mapillary", category: "geo", description: "Street-level open imagery.", tags: ["street", "imagery", "geo"], url: "https://www.mapillary.com/" },
  { title: "WhatsMyName", category: "social", description: "Username presence across services.", tags: ["username", "social", "profiles"], url: "https://whatsmyname.app/" },
  { title: "Namechk", category: "social", description: "Handle discovery and availability.", tags: ["nickname", "handle", "social"], url: "https://namechk.com/" },
  { title: "GitHub", category: "social", description: "Code, profiles, repositories.", tags: ["developer", "profile", "repos"], url: "https://github.com/" },
  { title: "Reddit Search", category: "social", description: "Search public accounts and threads.", tags: ["reddit", "posts", "threads"], url: "https://www.reddit.com/search/" },
  { title: "Keybase", category: "social", description: "Identity proofs and profiles.", tags: ["identity", "proofs", "profiles"], url: "https://keybase.io/" },
  { title: "Sourcegraph", category: "social", description: "Global code search and references.", tags: ["code", "search", "references"], url: "https://sourcegraph.com/" },
  { title: "Hunter", category: "people", description: "Public email patterns by domain.", tags: ["email", "contacts", "domain"], url: "https://hunter.io/" },
  { title: "Have I Been Pwned", category: "people", description: "Public breach awareness search.", tags: ["email", "breach", "identity"], url: "https://haveibeenpwned.com/" },
  { title: "Pipl", category: "people", description: "People search reference page.", tags: ["people", "reference", "identity"], url: "https://pipl.com/" },
  { title: "Searchcode", category: "people", description: "Code and handle references.", tags: ["code", "username", "search"], url: "https://searchcode.com/" }
];

const SETTINGS_KEY = "project-catarsis-settings";
const BOOKMARKS_KEY = "project-catarsis-bookmarks";
const CASES_KEY = "project-catarsis-cases";
const HISTORY_KEY = "project-catarsis-history";
const LAUNCHES_KEY = "project-catarsis-launches";

const DEFAULT_SETTINGS = {
  theme: "catarsis",
  font: "manrope",
  density: "cozy",
  borders: true,
  glow: true,
  motion: true
};

const navItems = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");

const resultCardTemplate = document.getElementById("resultCardTemplate");
const resourceCardTemplate = document.getElementById("resourceCardTemplate");
const savedCaseTemplate = document.getElementById("savedCaseTemplate");
const bookmarkTemplate = document.getElementById("bookmarkTemplate");

const searchResults = document.getElementById("searchResults");
const atlasResults = document.getElementById("atlasResults");
const identityResults = document.getElementById("identityResults");
const domainResults = document.getElementById("domainResults");
const mediaResults = document.getElementById("mediaResults");
const geoResults = document.getElementById("geoResults");
const cyberResults = document.getElementById("cyberResults");
const companyResults = document.getElementById("companyResults");
const datasetResults = document.getElementById("datasetResults");
const bookmarksList = document.getElementById("bookmarksList");
const savedCases = document.getElementById("savedCases");
const searchHistoryList = document.getElementById("searchHistoryList");
const recentLaunchesList = document.getElementById("recentLaunchesList");
const toastStack = document.getElementById("toastStack");

let activeSearchCategory = "general";
let latestSearchRoutes = [];
let latestAtlasResults = RESOURCE_ATLAS.slice();

function safeJsonParse(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function withProtocol(value) {
  if (!value) {
    return "";
  }

  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

function showToast(message, tone = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${tone}`;
  toast.textContent = message;
  toastStack.append(toast);

  window.setTimeout(() => {
    toast.remove();
  }, 2600);
}

function activatePage(target) {
  navItems.forEach((button) => button.classList.toggle("active", button.dataset.target === target));
  pages.forEach((page) => page.classList.toggle("active", page.id === target));
}

async function openExternal(url, meta = {}) {
  let opened = false;

  if (window.catarsisDesktop?.openExternal) {
    try {
      opened = await window.catarsisDesktop.openExternal(url);
    } catch {
      opened = false;
    }
  }

  if (!opened) {
    const popup = window.open(url, "_blank", "noopener,noreferrer");
    if (popup) {
      opened = true;
    } else {
      window.location.href = url;
      opened = true;
    }
  }

  if (opened) {
    recordLaunch({
      title: meta.title || "External resource",
      href: url,
      caption: meta.caption || ""
    });
  } else {
    showToast("Failed to open external resource.", "error");
  }
}

function getBookmarks() {
  return safeJsonParse(BOOKMARKS_KEY, []);
}

function getCases() {
  return safeJsonParse(CASES_KEY, []);
}

function getHistory() {
  return safeJsonParse(HISTORY_KEY, []);
}

function getLaunches() {
  return safeJsonParse(LAUNCHES_KEY, []);
}

function getSettings() {
  return {
    ...DEFAULT_SETTINGS,
    ...safeJsonParse(SETTINGS_KEY, DEFAULT_SETTINGS)
  };
}

function saveSettings(settings) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function saveBookmarks(items) {
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(items));
}

function saveCases(items) {
  localStorage.setItem(CASES_KEY, JSON.stringify(items));
}

function saveHistory(items) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(items));
}

function saveLaunches(items) {
  localStorage.setItem(LAUNCHES_KEY, JSON.stringify(items));
}

function recordSearch(query, category) {
  const next = [
    {
      query,
      category,
      time: new Date().toLocaleString()
    },
    ...getHistory().filter((item) => item.query !== query || item.category !== category)
  ].slice(0, 12);

  saveHistory(next);
  renderHistory();
}

function recordLaunch(item) {
  const next = [
    {
      ...item,
      time: new Date().toLocaleString()
    },
    ...getLaunches().filter((entry) => entry.href !== item.href)
  ].slice(0, 12);

  saveLaunches(next);
  renderLaunches();
  updateStats();
}

function downloadJson(filename, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function importJsonFile(input, onLoad) {
  const file = input.files?.[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      onLoad(parsed);
      showToast("Import complete.");
    } catch {
      showToast("Import failed: invalid JSON.", "error");
    }
    input.value = "";
  };
  reader.readAsText(file);
}

async function copyToClipboard(value) {
  try {
    await navigator.clipboard.writeText(value);
    showToast("Copied to clipboard.");
  } catch {
    showToast("Clipboard copy failed.", "error");
  }
}

function saveBookmark(item) {
  const current = getBookmarks();
  if (current.some((bookmark) => bookmark.href === item.href)) {
    showToast("Already saved.");
    return;
  }

  current.push(item);
  saveBookmarks(current);
  renderBookmarks();
  updateStats();
  showToast("Saved to Collections.");
}

function removeBookmark(href) {
  saveBookmarks(getBookmarks().filter((item) => item.href !== href));
  renderBookmarks();
  updateStats();
}

function createResultCard(item) {
  const node = resultCardTemplate.content.firstElementChild.cloneNode(true);
  node.querySelector(".result-title").textContent = item.title;
  node.querySelector(".result-caption").textContent = item.caption;
  node.querySelector(".result-link").addEventListener("click", () => openExternal(item.href, item));
  node.querySelector(".bookmark-btn").addEventListener("click", () => saveBookmark(item));
  return node;
}

function createAtlasCard(item) {
  const node = resourceCardTemplate.content.firstElementChild.cloneNode(true);
  node.querySelector(".resource-category").textContent = item.category;
  node.querySelector(".resource-title").textContent = item.title;
  node.querySelector(".resource-description").textContent = item.description;
  node.querySelector(".resource-tags").textContent = item.tags.join(" • ");
  node.querySelector(".result-link").addEventListener("click", () => openExternal(item.url, {
    title: item.title,
    caption: item.description
  }));
  node.querySelector(".bookmark-btn").addEventListener("click", () => saveBookmark({
    title: item.title,
    caption: item.description,
    href: item.url
  }));
  return node;
}

function renderResultGrid(container, items, emptyMessage) {
  container.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "panel-copy";
    empty.textContent = emptyMessage;
    container.append(empty);
    return;
  }

  items.forEach((item) => container.append(createResultCard(item)));
}

function renderAtlas() {
  const query = document.getElementById("atlasQuery").value.trim().toLowerCase();
  const category = document.getElementById("atlasFilter").value;

  latestAtlasResults = RESOURCE_ATLAS.filter((resource) => {
    const haystack = `${resource.title} ${resource.description} ${resource.tags.join(" ")} ${resource.category}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    const matchesCategory = category === "all" || resource.category === category;
    return matchesQuery && matchesCategory;
  });

  atlasResults.innerHTML = "";

  if (!latestAtlasResults.length) {
    const empty = document.createElement("p");
    empty.className = "panel-copy";
    empty.textContent = "No resources match the current atlas filter.";
    atlasResults.append(empty);
    return;
  }

  latestAtlasResults.forEach((item) => atlasResults.append(createAtlasCard(item)));
}

function renderBookmarks() {
  const items = getBookmarks();
  bookmarksList.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "panel-copy";
    empty.textContent = "Collections are empty.";
    bookmarksList.append(empty);
    return;
  }

  items.forEach((item) => {
    const node = bookmarkTemplate.content.firstElementChild.cloneNode(true);
    node.querySelector(".result-title").textContent = item.title;
    node.querySelector(".result-caption").textContent = item.caption;
    node.querySelector(".result-link").addEventListener("click", () => openExternal(item.href, item));
    node.querySelector(".bookmark-remove").addEventListener("click", () => removeBookmark(item.href));
    bookmarksList.append(node);
  });
}

function renderCases() {
  const items = getCases();
  savedCases.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "panel-copy";
    empty.textContent = "No cases saved yet.";
    savedCases.append(empty);
    return;
  }

  items.slice().reverse().forEach((item) => {
    const node = savedCaseTemplate.content.firstElementChild.cloneNode(true);
    node.querySelector(".saved-case-title").textContent = item.title;
    node.querySelector(".saved-case-priority").textContent = item.priority;
    node.querySelector(".saved-case-date").textContent = item.createdAt;
    node.querySelector(".saved-case-notes").textContent = item.notes;
    savedCases.append(node);
  });
}

function renderActivityList(container, items, emptyMessage) {
  container.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "panel-copy";
    empty.textContent = emptyMessage;
    container.append(empty);
    return;
  }

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "activity-item";

    const title = document.createElement("p");
    title.className = "activity-title";
    title.textContent = item.query || item.title;

    const meta = document.createElement("p");
    meta.className = "activity-meta";
    meta.textContent = item.category || item.caption || "";

    const time = document.createElement("p");
    time.className = "panel-copy";
    time.textContent = item.time;

    card.append(title, meta, time);
    container.append(card);
  });
}

function renderHistory() {
  renderActivityList(searchHistoryList, getHistory(), "No search history yet.");
}

function renderLaunches() {
  renderActivityList(recentLaunchesList, getLaunches(), "No resources launched yet.");
}

function updateStats() {
  document.getElementById("resourceCount").textContent = RESOURCE_ATLAS.length.toString();
  document.getElementById("bookmarkCount").textContent = getBookmarks().length.toString();
  document.getElementById("caseCount").textContent = getCases().length.toString();
  document.getElementById("launchCount").textContent = getLaunches().length.toString();
}

function applySettings() {
  const settings = getSettings();
  document.body.dataset.theme = settings.theme;
  document.body.dataset.font = settings.font;
  document.body.dataset.density = settings.density;
  document.body.classList.toggle("no-borders", !settings.borders);
  document.body.classList.toggle("no-glow", !settings.glow);
  document.body.classList.toggle("no-motion", !settings.motion);

  document.querySelectorAll(".theme-option").forEach((button) => {
    button.classList.toggle("active", button.dataset.themeValue === settings.theme);
  });
  document.querySelectorAll(".font-option").forEach((button) => {
    button.classList.toggle("active", button.dataset.fontValue === settings.font);
  });
  document.querySelectorAll(".density-option").forEach((button) => {
    button.classList.toggle("active", button.dataset.densityValue === settings.density);
  });

  document.getElementById("toggleBorders").checked = settings.borders;
  document.getElementById("toggleGlow").checked = settings.glow;
  document.getElementById("toggleMotion").checked = settings.motion;
}

function patchSettings(update) {
  saveSettings({
    ...getSettings(),
    ...update
  });
  applySettings();
  showToast("Studio settings updated.");
}

function getSearchRoutes(query, category) {
  return (SEARCH_PRESETS[category] || []).map((item) => ({
    title: item.title,
    caption: item.caption,
    href: item.buildUrl(query)
  }));
}

function buildToolResultSet(container, items, emptyMessage) {
  renderResultGrid(container, items, emptyMessage);
}

navItems.forEach((item) => {
  item.addEventListener("click", () => activatePage(item.dataset.target));
});

document.querySelectorAll("[data-nav]").forEach((button) => {
  button.addEventListener("click", () => activatePage(button.dataset.nav));
});

document.querySelectorAll("#searchCategoryChips .chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll("#searchCategoryChips .chip").forEach((value) => value.classList.remove("active"));
    chip.classList.add("active");
    activeSearchCategory = chip.dataset.category;
  });
});

document.querySelectorAll(".theme-option").forEach((button) => {
  button.addEventListener("click", () => patchSettings({ theme: button.dataset.themeValue }));
});

document.querySelectorAll(".font-option").forEach((button) => {
  button.addEventListener("click", () => patchSettings({ font: button.dataset.fontValue }));
});

document.querySelectorAll(".density-option").forEach((button) => {
  button.addEventListener("click", () => patchSettings({ density: button.dataset.densityValue }));
});

document.getElementById("toggleBorders").addEventListener("change", (event) => {
  patchSettings({ borders: event.target.checked });
});

document.getElementById("toggleGlow").addEventListener("change", (event) => {
  patchSettings({ glow: event.target.checked });
});

document.getElementById("toggleMotion").addEventListener("change", (event) => {
  patchSettings({ motion: event.target.checked });
});

document.getElementById("buildSearchRoutes").addEventListener("click", () => {
  const query = document.getElementById("searchQuery").value.trim();
  latestSearchRoutes = query ? getSearchRoutes(query, activeSearchCategory) : [];
  if (query) {
    recordSearch(query, activeSearchCategory);
  }
  renderResultGrid(searchResults, latestSearchRoutes, "Enter a query to build public search routes.");
});

document.getElementById("openSearchBatch").addEventListener("click", () => {
  if (!latestSearchRoutes.length) {
    showToast("Build routes first.", "error");
    return;
  }

  latestSearchRoutes.forEach((item, index) => {
    window.setTimeout(() => {
      openExternal(item.href, item);
    }, index * 140);
  });
});

document.getElementById("copySearchQuery").addEventListener("click", () => {
  const query = document.getElementById("searchQuery").value.trim();
  if (!query) {
    showToast("Nothing to copy.", "error");
    return;
  }
  copyToClipboard(query);
});

document.getElementById("atlasQuery").addEventListener("input", renderAtlas);
document.getElementById("atlasFilter").addEventListener("change", renderAtlas);

document.getElementById("atlasRandomButton").addEventListener("click", () => {
  const list = latestAtlasResults.length ? latestAtlasResults : RESOURCE_ATLAS;
  const item = list[Math.floor(Math.random() * list.length)];
  openExternal(item.url, { title: item.title, caption: item.description });
});

document.getElementById("atlasOpenTop").addEventListener("click", () => {
  const list = latestAtlasResults.slice(0, 5);
  if (!list.length) {
    showToast("Atlas filter is empty.", "error");
    return;
  }
  list.forEach((item, index) => {
    window.setTimeout(() => {
      openExternal(item.url, { title: item.title, caption: item.description });
    }, index * 140);
  });
});

document.getElementById("openRandomResource").addEventListener("click", () => {
  const item = RESOURCE_ATLAS[Math.floor(Math.random() * RESOURCE_ATLAS.length)];
  openExternal(item.url, { title: item.title, caption: item.description });
});

document.getElementById("buildIdentityLinks").addEventListener("click", () => {
  const username = document.getElementById("usernameInput").value.trim();
  const email = document.getElementById("emailInput").value.trim();
  const domain = email.includes("@") ? email.split("@")[1] : email;
  const items = [];

  if (username) {
    items.push(
      { title: "WhatsMyName", caption: "Username presence lookup", href: `https://whatsmyname.app/?q=${encodeURIComponent(username)}` },
      { title: "Namechk", caption: "Handle discovery", href: `https://namechk.com/${encodeURIComponent(username)}` },
      { title: "GitHub", caption: "Developer profile trail", href: `https://github.com/${encodeURIComponent(username)}` },
      { title: "Reddit Search", caption: "Profile and post search", href: `https://www.reddit.com/search/?q=${encodeURIComponent(username)}` },
      { title: "Keybase", caption: "Identity proofs", href: `https://keybase.io/${encodeURIComponent(username)}` }
    );
  }

  if (email) {
    items.push({ title: "Have I Been Pwned", caption: "Public breach awareness", href: `https://haveibeenpwned.com/unifiedsearch/${encodeURIComponent(email)}` });
  }

  if (domain) {
    items.push({ title: "Hunter", caption: "Public email patterns by domain", href: `https://hunter.io/search/${encodeURIComponent(domain)}` });
  }

  buildToolResultSet(identityResults, items, "Enter a username or email.");
});

document.getElementById("buildDomainLinks").addEventListener("click", () => {
  const value = document.getElementById("domainInput").value.trim();
  const clean = value.replace(/^https?:\/\//i, "").replace(/\/.*$/, "");
  const items = clean ? [
    { title: "who.is", caption: "Registration data", href: `https://who.is/whois/${encodeURIComponent(clean)}` },
    { title: "crt.sh", caption: "Certificates and subdomains", href: `https://crt.sh/?q=${encodeURIComponent(clean)}` },
    { title: "SecurityTrails", caption: "DNS history", href: `https://securitytrails.com/domain/${encodeURIComponent(clean)}` },
    { title: "ViewDNS", caption: "DNS and reverse tools", href: `https://viewdns.info/whois/?domain=${encodeURIComponent(clean)}` },
    { title: "BuiltWith", caption: "Tech stack detection", href: `https://builtwith.com/${encodeURIComponent(clean)}` }
  ] : [];

  buildToolResultSet(domainResults, items, "Enter a domain or URL.");
});

document.getElementById("buildMediaLinks").addEventListener("click", () => {
  const value = document.getElementById("mediaInput").value.trim();
  const encoded = encodeURIComponent(value);
  const items = value ? [
    { title: "Google Lens", caption: "Reverse image search", href: `https://lens.google.com/uploadbyurl?url=${encoded}` },
    { title: "Bing Visual Search", caption: "Alternative visual search", href: `https://www.bing.com/images/search?q=imgurl:${encoded}&view=detailv2&iss=sbi` },
    { title: "TinEye", caption: "Image copy lookup", href: `https://tineye.com/search?url=${encoded}` },
    { title: "Wayback Save", caption: "Archive the target", href: `https://web.archive.org/save/${value}` },
    { title: "Archive.today", caption: "Snapshot route", href: `https://archive.ph/${encoded}` }
  ] : [];

  buildToolResultSet(mediaResults, items, "Enter an image or page URL.");
});

document.getElementById("buildGeoLinks").addEventListener("click", () => {
  const value = document.getElementById("geoInput").value.trim();
  const encoded = encodeURIComponent(value);
  const items = value ? [
    { title: "Google Maps", caption: "Maps and satellite", href: `https://www.google.com/maps/search/${encoded}` },
    { title: "OpenStreetMap", caption: "Open map layers", href: `https://www.openstreetmap.org/search?query=${encoded}` },
    { title: "Wikimapia", caption: "Community place labels", href: `https://wikimapia.org/#lang=en&search=${encoded}` },
    { title: "Windy", caption: "Weather and cloud context", href: `https://www.windy.com/?${encoded}` },
    { title: "SunCalc", caption: "Sun and shadow analysis", href: `https://www.suncalc.org/#/${encoded}/15/2026.04.22/12:00/1/3` }
  ] : [];

  buildToolResultSet(geoResults, items, "Enter a place or coordinates.");
});

document.getElementById("buildCyberLinks").addEventListener("click", () => {
  const ioc = document.getElementById("iocInput").value.trim();
  const hash = document.getElementById("hashInput").value.trim();
  const items = [];

  if (ioc) {
    items.push(
      { title: "VirusTotal", caption: "IOC search", href: `https://www.virustotal.com/gui/search/${encodeURIComponent(ioc)}` },
      { title: "AlienVault OTX", caption: "Indicator context", href: `https://otx.alienvault.com/browse/global/pulses?q=${encodeURIComponent(ioc)}` },
      { title: "URLScan", caption: "Observed web data", href: `https://urlscan.io/search/#${encodeURIComponent(ioc)}` },
      { title: "AbuseIPDB", caption: "IP reputation", href: `https://www.abuseipdb.com/check/${encodeURIComponent(ioc)}` },
      { title: "GreyNoise", caption: "Noise and scanner context", href: `https://viz.greynoise.io/query/${encodeURIComponent(ioc)}` }
    );
  }

  if (hash) {
    items.push(
      { title: "VirusTotal Hash", caption: "Hash lookup", href: `https://www.virustotal.com/gui/search/${encodeURIComponent(hash)}` },
      { title: "MalwareBazaar", caption: "Sample and hash context", href: `https://bazaar.abuse.ch/browse.php?search=${encodeURIComponent(hash)}` }
    );
  }

  buildToolResultSet(cyberResults, items, "Enter an IOC, IP, URL, domain, or hash.");
});

document.getElementById("buildCompanyLinks").addEventListener("click", () => {
  const value = document.getElementById("companyInput").value.trim();
  const encoded = encodeURIComponent(value);
  const items = value ? [
    { title: "OpenCorporates", caption: "Company lookup", href: `https://opencorporates.com/companies?utf8=%E2%9C%93&q=${encoded}` },
    { title: "SEC EDGAR", caption: "US filings", href: `https://www.sec.gov/edgar/search/#/q=${encoded}` },
    { title: "OpenSanctions", caption: "Entity search", href: `https://www.opensanctions.org/search/?q=${encoded}` },
    { title: "GLEIF", caption: "LEI records", href: `https://search.gleif.org/#/record?filter=${encoded}` },
    { title: "Companies House", caption: "UK registry", href: `https://find-and-update.company-information.service.gov.uk/search/companies?q=${encoded}` }
  ] : [];

  buildToolResultSet(companyResults, items, "Enter a company or entity name.");
});

document.getElementById("buildDatasetLinks").addEventListener("click", () => {
  const value = document.getElementById("datasetInput").value.trim();
  const encoded = encodeURIComponent(value);
  const items = value ? [
    { title: "Google Dataset Search", caption: "Open datasets", href: `https://datasetsearch.research.google.com/search?query=${encoded}` },
    { title: "Data.gov", caption: "US public data", href: `https://catalog.data.gov/dataset?q=${encoded}` },
    { title: "EU Open Data", caption: "EU public data", href: `https://data.europa.eu/en/search?query=${encoded}` },
    { title: "OpenAlex", caption: "Research graph", href: `https://openalex.org/works?page=1&search=${encoded}` },
    { title: "Library of Congress", caption: "Documents and collections", href: `https://www.loc.gov/search/?in=all&q=${encoded}` }
  ] : [];

  buildToolResultSet(datasetResults, items, "Enter a dataset or document query.");
});

document.getElementById("openAllBookmarks").addEventListener("click", () => {
  const items = getBookmarks();
  if (!items.length) {
    showToast("Collections are empty.", "error");
    return;
  }
  items.forEach((item, index) => {
    window.setTimeout(() => openExternal(item.href, item), index * 140);
  });
});

document.getElementById("exportBookmarks").addEventListener("click", () => {
  downloadJson("project-catarsis-bookmarks.json", getBookmarks());
});

document.getElementById("importBookmarks").addEventListener("click", () => {
  document.getElementById("bookmarksImportInput").click();
});

document.getElementById("bookmarksImportInput").addEventListener("change", (event) => {
  importJsonFile(event.target, (parsed) => {
    if (!Array.isArray(parsed)) {
      throw new Error("Invalid format");
    }
    saveBookmarks(parsed);
    renderBookmarks();
    updateStats();
  });
});

document.getElementById("clearBookmarks").addEventListener("click", () => {
  saveBookmarks([]);
  renderBookmarks();
  updateStats();
  showToast("Collections cleared.");
});

document.getElementById("saveCase").addEventListener("click", () => {
  const title = document.getElementById("caseTitle").value.trim() || "Untitled Case";
  const priority = document.getElementById("casePriority").value;
  const notes = document.getElementById("caseNotes").value.trim();

  if (!notes) {
    showToast("Case notes are empty.", "error");
    return;
  }

  const next = getCases();
  next.push({
    title,
    priority,
    notes,
    createdAt: new Date().toLocaleString()
  });

  saveCases(next);
  renderCases();
  updateStats();
  document.getElementById("caseNotes").value = "";
  showToast("Case saved.");
});

document.getElementById("exportCases").addEventListener("click", () => {
  downloadJson("project-catarsis-cases.json", getCases());
});

document.getElementById("importCases").addEventListener("click", () => {
  document.getElementById("casesImportInput").click();
});

document.getElementById("casesImportInput").addEventListener("change", (event) => {
  importJsonFile(event.target, (parsed) => {
    if (!Array.isArray(parsed)) {
      throw new Error("Invalid format");
    }
    saveCases(parsed);
    renderCases();
    updateStats();
  });
});

document.getElementById("clearCases").addEventListener("click", () => {
  saveCases([]);
  renderCases();
  updateStats();
  showToast("Cases cleared.");
});

document.addEventListener("keydown", (event) => {
  const tag = document.activeElement?.tagName;
  const isTyping = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";

  if (event.key === "/" && !isTyping) {
    event.preventDefault();
    activatePage("search");
    document.getElementById("searchQuery").focus();
  }

  if (event.altKey && !event.shiftKey && !event.ctrlKey) {
    const map = {
      Digit1: "dashboard",
      Digit2: "search",
      Digit3: "atlas",
      Digit4: "tools",
      Digit5: "collections",
      Digit6: "studio",
      Digit7: "creator",
      Digit8: "caseboard"
    };

    const target = map[event.code];
    if (target) {
      event.preventDefault();
      activatePage(target);
    }
  }

  if (event.ctrlKey && event.key === "Enter" && document.activeElement?.id === "searchQuery") {
    event.preventDefault();
    document.getElementById("buildSearchRoutes").click();
  }
});

renderResultGrid(searchResults, [], "Enter a query to build public search routes.");
renderResultGrid(identityResults, [], "Enter a username or email.");
renderResultGrid(domainResults, [], "Enter a domain or URL.");
renderResultGrid(mediaResults, [], "Enter an image or page URL.");
renderResultGrid(geoResults, [], "Enter a place or coordinates.");
renderResultGrid(cyberResults, [], "Enter an IOC, IP, URL, domain, or hash.");
renderResultGrid(companyResults, [], "Enter a company or entity name.");
renderResultGrid(datasetResults, [], "Enter a dataset or document query.");
renderAtlas();
renderBookmarks();
renderCases();
renderHistory();
renderLaunches();
applySettings();
updateStats();
