#!/usr/bin/node

var sys = require('sys'),
    srv = require('http');

var host = "localhost",
    port = 8080;

var url =

srv.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>It works!</h1>");
  res.write("<a href=http://www.youtube.com/watch?v=qws6LOvDQRE&feature=related><b>Tutorial Video</b></a>");
  res.end("<h2>It works!!</h2>");
}).listen(port, host);

sys.puts("Check http://localhost:8080/");
