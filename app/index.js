const { app, Menu, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const spawn = require('child_process').spawn

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ width: 800, height: 600 });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    Menu.setApplicationMenu(null);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    getStdout();
}

async function getStdout() {
    const proc = spawn('python', ['printman.py']);
    proc.stdout.on('data', (data) => {
        console.log(data.toString())
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
