var fs = require('fs');

// Sync call
var greet = fs.readFileSync(__dirname + '/greet.txt','utf8');

console.log(greet);

// Async call
var greet2 = fs.readFile(__dirname + '/greet.txt',function(err,data){
    console.log(data);
});

greet2 = fs.readFile(__dirname + '/greet.txt','utf8',function(err,data){
    console.log(data);
});

console.log('Done!');