var express = require('express')
var http = require('http');
var serveStatic = require('serve-static');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8081;
app.use(serveStatic(path.join(__dirname + '/public')));
app.use(bodyParser.json());
app.listen(port);
