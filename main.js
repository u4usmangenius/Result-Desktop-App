const { app, BrowserWindow, ipcMain, globalShortcut } = require("electron");

const path = require("path");
const url = require("url");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const expressApp = require("./server");
const routes = require("./routes");
expressApp.use(cors());
expressApp.use(bodyParser.json());
expressApp.use(express.static(path.join(__dirname, "frontend/build")));
const port = 8080;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    minHeight: 650,
    height: 600,
    minWidth: 850,
    title: "Result Management System",
    webPreferences: {
      // devTools: false,
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      enableRemoteModule: false,
    },
  });
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "frontend/build/index.html"),
      protocol: "file:",
      slashes: true,
    })
  );

  // Open the DevTools during development
  if (process.env.NODE_ENV === "development") {
    mainWindow.webContents.closeDevTools();
  }

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
// start express
expressApp.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

expressApp.use("/", routes);
