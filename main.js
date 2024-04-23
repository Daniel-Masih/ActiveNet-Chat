const { app, BrowserWindow } = require('electron');

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true // It's important to understand the security implications of this setting.
    }
  });

  // and load the index.html of the app.
  win.loadFile('index.html');

  // Open the DevTools. (You can remove this line if you don't want the dev tools to open automatically)
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
