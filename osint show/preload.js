const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("catarsisDesktop", {
  isDesktop: true,
  openExternal: (url) => ipcRenderer.invoke("catarsis:openExternal", url)
});
