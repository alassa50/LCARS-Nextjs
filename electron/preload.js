// Preload script for Electron
// Can expose specific Node.js APIs to the renderer process if needed

const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  platform: process.platform
})
