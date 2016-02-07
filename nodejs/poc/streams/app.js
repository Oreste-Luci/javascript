var fs = require('fs');

// The stream will read a file and fill the buffer. If no encoding is given it will read as binary data. Setting buffer size to 16KB
var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt', { encoding: 'utf8' });

// On event 'on' pass the data to the function.
readable.on('data', function(chunk) {
    //console.log(chunk);
    console.log('Size: ' + chunk.length);
    writable.write(chunk);
});