var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var serverPort = 3000;

app.use(express.static(__dirname + "/"));

app.listen(serverPort);
console.log("Server running on port : " + serverPort);