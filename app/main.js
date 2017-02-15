import { app, BrowserWindow, Tray, Menu } from 'electron';
import path from 'path';

app.on('ready', () => {
  const iconPath = path.join(__dirname, '/img/tray-icon.png');
  const appIcon = new Tray(iconPath);
  const contextMenu = Menu.buildFromTemplate([]);
  appIcon.setToolTip('redego');
  appIcon.setContextMenu(contextMenu);
});
