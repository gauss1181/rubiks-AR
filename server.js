var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080);
