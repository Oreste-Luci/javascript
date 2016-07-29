var req = require('request');
var sync = require('sync-request');

// Load example.com N times (yes, it's a real website):
var N = 10;

console.log('BLOCKING test ==========');
var start = new Date().valueOf();
for (var i=0;i<N;i++) {
    var res = sync('GET','http://www.example.com')
    console.log('Downloaded ' + res.getBody().length + ' bytes');
}
var end = new Date().valueOf();
console.log('Total time: ' + (end-start) + 'ms');

console.log('NON-BLOCKING test ======');
var loaded = 0;
var start = new Date().valueOf();
for (var i=0;i<N;i++) {
    req('http://www.example.com',function( err, response, body ) {
        loaded++;
        console.log('Downloaded ' + body.length + ' bytes');
        if (loaded == N) {
            var end = new Date().valueOf();
            console.log('Total time: ' + (end-start) + 'ms');
        }
    })
}