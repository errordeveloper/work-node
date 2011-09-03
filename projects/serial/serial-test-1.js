#!/usr/bin/node

//var argv = require('optimist').argv;
/*
  .default(port, "/dev/ttyS0")
  .default(baud, 9600)
  .argv
;*/

var dev = require('serialport').SerialPort;
var sys = require("sys"),
    repl = require("repl");

sys.puts("Atempting to open " + argv.port +
          " at baudrate " + argv.baud);

var serial_port = new SerialPort(argv.port, {baudrate: argv.baud});

serial_port.on("data", function (data) {
  sys.puts("here: "+data);
})
serial_port.on("error", function (msg) {
  sys.puts("error: "+msg);
})
repl.start("=>")

//serial_port.close();
