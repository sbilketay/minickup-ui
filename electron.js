const { app, BrowserWindow, ipcMain } = require('electron')


BrowserWindow.closeDevTools

function createWindow() {
    // Tarayıcı penceresini oluştur.
    const win = new BrowserWindow({
        width: 770,
        height: 640,
        frame: false,
        titleBarStyle: 'hidden',
        webPreferences: {
            // devTools: false,
            nodeIntegration: true,
            webSecurity: false
        }
    })

    win.setMinimumSize(770, 640)
    win.closeDevTools();

    ipcMain.on('key', (error, data) => {
        console.log(data);

    })

    if (process.env.NODE_ENV === 'development') {
        win.loadURL('http://localhost:8080')
    } else {
        // Build ederken çalışacak
        // ilk önce vue projesi "npm run build" ile build edilecek
        // daha sonra "npm run electron-build" çalıştırılacak
        win.loadFile(`${__dirname}/dist/index.html`)

    }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Bazı API'ler sadece bu olayın gerçekleşmesinin ardından kullanılabilir.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    app.quit()
    // MacOS'de kullanıcı CMD + Q ile çıkana dek uygulamaların ve menü barlarının
    // aktif kalmaya devam etmesi normaldir.
    // if (process.platform !== 'darwin') {
    //     app.quit()
    // }
})

app.on('activate', () => {
    // MacOS'de dock'a tıklandıktan sonra eğer başka pencere yoksa
    // yeni pencere açılması normaldir.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})