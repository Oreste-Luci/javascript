var fs = require('fs');
var zlib = require('zlib'); // for compressing files

// The stream will read a file and fill the buffer.
var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip(); // creating a gzip transform (readle/writable) stream. Creates a compressed file.

// The readable stream will pipe the stream to a writable stream.
readable.pipe(writable);

// The writable stream is being passed to the gzip stream that reads and writes (compressed). 
// Since it writes another stream is piped to it to write the compressed file.
// So three streams are concatenated or Chained. Read file, compress it and write to another file.
readable.pipe(gzip).pipe(compressed);