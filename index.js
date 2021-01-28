const http = require('http');
const port = process.env.PORT || 5000;


const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/query', function(req, res) {
    const sn = req.query["sn"];
    var obj = {name:"CT02", sn : sn, description : "this is a test CT", };
    res.send(obj);
});

app.listen(port, () => console.log(`url-shortener listening on port ${port}!`));