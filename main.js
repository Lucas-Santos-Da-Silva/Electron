const { app, BrowserWindow, nativeTheme, Menu, shell } = require('electron')

// janela principal
const createWindow = () => {
  //nativeTheme.themeSource = 'dark'
  const win = new BrowserWindow({
    width: 800, //largura
    height: 600, //altura
    resizable: false, // evitar o redimensionamento
    //titleBarStyle: 'hidden'
    //autoHideMenuBar: true, //esconder o menu
    icon: './src/public/img/pendrive.png',
  })
  // iniciar a janela com o menu personalizado
  Menu.setApplicationMenu(Menu.buildFromTemplate(template))

  win.loadFile('./src/views/index.html')
}

// janela principal
const aboutWindow = () => {
  //nativeTheme.themeSource = 'dark'
  const about = new BrowserWindow({
    width: 360, //largura
    height: 220, //altura
    resizable: false, // evitar o redimensionamento
    autoHideMenuBar: true, //esconder o menu
    icon: './src/public/img/pendrive.png',
  })

  about.loadFile('./src/views/sobre.html')
}
// executar de forma assíncrona a aplicação
app.whenReady().then(() => {
  createWindow()
})

//template do menu personalizado

const template = [
  {
    label: 'Arquivo',
    submenu: [{
      label: 'Sair',
      click: () => app.quit(),
      accelerator: 'Alt+F4',
    }],
    
  },
  {
    label: 'Exibir',
    submenu: [{
      label: 'Recarregar',
      role: 'reload',
    },
    {
      label: 'Ferramentas do Desenvolvedor',
      role: 'toggleDevTools',
    },
    {
      type: 'separator',
    },
    {
      label: 'Aumentar Zoom',
      role: 'zoomIn',
    },
    {
      label: 'Diminuir Zoom',
      role: 'zoomOut',
    },
    {
      label: 'Restaurar Zoom',
      role: 'resetZoom',
    },
  ],
  },
  {
    label: 'Ajuda',
    submenu: [
    {
      label: 'Docs',
      click: () => shell.openExternal('https://www.electronjs.org/docs/latest/'),
      accelerator: 'Alt+F1',
    },
    {
      type: 'separator',
    },
    {
      label: 'Sobre o Aplicativo',
      click: () => aboutWindow(),
    },],
  },
]