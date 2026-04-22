const { contextBridge, ipcRenderer } = require("electron");
const fs = require("node:fs/promises");
const path = require("node:path");

contextBridge.exposeInMainWorld("showsDotaGuide", {
  isDesktop: true,
  openExternal: (url) => ipcRenderer.invoke("guide:openExternal", url),
  loadData: async () => {
    const filePath = path.join(__dirname, "data", "dota-data.json");
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw);
  }
});
