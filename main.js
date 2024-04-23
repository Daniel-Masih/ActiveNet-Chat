import { app, BrowserWindow } from 'electron';
import path from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const isDev = process.env.NODE_ENV === 'development';
console.log("Is development environment:", isDev);


function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  // Load the index.html of the app.
  const URL = isDev
    ? 'http://localhost:5173' // Vite dev server
    : `file://${path.join(__dirname, 'dist/index.html')}`;

  win.loadURL(URL);
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
