var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    
    res.writeHead(200, { 'Content-Type': 'text/html'});
    
    // This is a synchronous read
    var html = fs.readFileSync(__dirname + '/index2.html');
    
    res.end(html);
    
}).listen(1337, '127.0.0.1');