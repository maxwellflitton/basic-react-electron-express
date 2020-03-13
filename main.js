const {app, BrowserWindow} = require('electron');
const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const {exec} = require('child_process');
// https://dev.to/jsmanifest/create-your-first-react-desktop-application-in-electron-with-hot-reload-4jj5
const engine = express();
engine.use(bodyParser.urlencoded({extended: true}));
exec('cd reactapp && npm start');


engine.get('/', function(req,res) {
  res.sendFile(path.dirname(__filename) + '/views/index.html');
});


function createWindow () {
    window = new BrowserWindow({width: 800, height: 600});

    window.loadURL('http://localhost:3000/');
    // window.loadFile('./views/index.html');
    var server = engine.listen(3001, function() {});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
});

