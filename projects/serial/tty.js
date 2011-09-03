#!/usr/bin/node

var sys = require('sys'),
    tty = require('tty');

fd = tty.open("/dev/pts/21", argc=[]);

answer = tty.isatty(fd) ? "Yes" : "No";
fd.setRawMode(

question = "Is it a tty?"

sys.puts(question);
sys.puts(answer);

