#!/usr/bin/node

var sys = require('sys'),
    srv = require('http');

var host = "localhost",
    port = 8080;

var url =

srv.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text'});
  res.end(sys.inspect(req));
  sys.puts("--- BEGIN NEW REQUEST -----------------------------------");
  sys.puts(sys.inspect(req));
  sys.puts("------ END REQUEST --------------------------------------");
}).listen(port, host);

sys.puts("Check http://localhost:8080/");
