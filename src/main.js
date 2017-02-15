import { app, BrowserWindow, Tray, Menu } from 'electron';
import path from 'path';
import './img/tray-icon.png';

app.on('ready', () => {
  const imgPath = path.resolve(__dirname, './img/tray-icon.png');
  const appIcon = new Tray(imgPath);
  const contextMenu = Menu.buildFromTemplate([]);
  appIcon.setToolTip('redego');
  appIcon.setContextMenu(contextMenu);

  const win = new BrowserWindow({ width: 800, height: 600 });
  win.loadURL('http://localhost:8080');
});
