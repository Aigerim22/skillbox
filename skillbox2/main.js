const { app, BrowserWindow } = require('electron');
app.whenReady().then(() => {
  const win = new BrowserWindow({
      frame: false,
  });
  win.loadFile('dist/index.html');
  // win.loadURL("http://localhost:1234")
//   win.webContents.openDevTools();
});

