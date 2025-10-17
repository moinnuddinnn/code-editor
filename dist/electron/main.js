import { app, BrowserWindow } from "electron";
import path from "path";
function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });
    if (process.env.NODE_ENV === "development") {
        win.loadURL("http://localhost:5173");
    }
    else {
        // __dirname is dist/electron after build; point to dist/index.html
        const indexPath = path.join(__dirname, "../index.html");
        win.loadFile(indexPath);
    }
}
app.whenReady().then(createWindow);
