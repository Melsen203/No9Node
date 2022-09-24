var express = require('express');
const path = require('path');

var app = express();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get("/anime", function(req, res){
    res.send("<h1>sezione anime</h1>");
});

app.listen(3000, function(){
    console.log("server attivo porta 3000");
});