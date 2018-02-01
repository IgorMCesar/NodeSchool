var fs = require('fs');

var string = fs.readFileSync(process.argv[2]).toString();
var lines = string.split('\n');
var nlines = lines.length - 1;

console.log(nlines);