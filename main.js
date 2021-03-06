const {app, BrowserWindow} = require('electron');
const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
var cors = require('cors')

const engine = express();
const userViews = require("./expressapp/users/views");


engine.use(bodyParser.urlencoded({extended: true}));
engine.use(express.static(path.join(__dirname, "reactapp", 'build')));
engine.use(bodyParser.json());
engine.use(cors());


engine.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, "reactapp", 'build', 'index.html'));
});

userViews.renderUserViews(engine);


function createWindow () {
    var server = engine.listen(3001, function() {});
    window = new BrowserWindow({width: 800, height: 600});
    window.loadURL("http://127.0.0.1:3001/");
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
});

