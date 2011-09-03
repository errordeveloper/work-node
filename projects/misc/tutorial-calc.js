#!/usr/bin/node

var sys = require('sys'),
    srv = require('http');

var host = "localhost",
    port = 8080;

var calc_tab = {
  add: function(a,b){ return a+b },
  sub: function(a,b){ return a-b },
  mul: function(a,b){ return a*b },
  div: function(a,b){ return a/b },
}

srv.createServer(function(req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});

  sys.puts(sys.inspect(req.url));

  var expr = req.url.split("/"),
      operation = calc_tab[expr[1]],
      operand_a = parseInt(expr[2], 10),
      operand_b = parseInt(expr[3], 10);

  res.write("<i>Operator: </i>");
  res.write(expr[1]);
  res.write("<br><i>Operand A: </i>");
  res.write(expr[2]);
  res.write("<br><i>Operand A: </i>");
  res.write(expr[3]);
  res.write("<br><b>Result: </b>");
  res.end();

// result = operation ? operation(operand_a, operand_b) : "ERROR";

// res.end("" + result + "");

}).listen(port, host);

sys.puts("Check http://localhost:8080/");
