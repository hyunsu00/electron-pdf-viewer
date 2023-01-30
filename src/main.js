// src/main.js
const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
  });

  // mainWindow.loadFile("./extern/pdf.js/web/viewer.html");
  mainWindow.loadFile(
    "./node_modules/pdfjs-dist-viewer-min/build/minified/web/viewer.html"
  );
}

// After initialization, you can create browser windows.
app.whenReady().then(createWindow);
