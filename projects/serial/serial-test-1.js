#!/usr/bin/node

var argv = require('optimist')

  .default('port', "/dev/ttyS0")
  .default('baud', 9600)       // the library defaults to 9600
  .argv
;

var serialport = require('serialport').SerialPort;
var sys = require("sys"),
    repl = require("repl");

sys.puts("Atempting to open " + argv.port +
          " at baudrate " + argv.baud);

var dev = new serialport(argv.port, {baudrate: argv.baud});

dev.on("data", function (data) {
  sys.puts("here: "+data);
})
dev.on("error", function (msg) {
  sys.puts("error: "+msg);
})
repl.start("=>")

dev.close();
