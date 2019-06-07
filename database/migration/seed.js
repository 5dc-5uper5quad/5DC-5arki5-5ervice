var fs = require('fs');
var zlib = require('zlib');

// Reads data from CSV file
var readable = fs.createReadStream(__dirname + '/data.csv');
// Creates a copy of it as txt
var writable = fs.createWriteStream(__dirname + '/data.txt');

// Create the compressed file
var compressed = fs.createWriteStream(__dirname + '/data.csv.gz');
// Compresses data
var gzip = zlib.createGzip();

// Reads and write data
readable.pipe(writable);
readable.pipe(gzip).pipe(compressed);