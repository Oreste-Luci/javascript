/*
    Using a simple custom made Emitter
 */
var Emitter = require('./emitter');

// Creating new Emitter object
var emitr = new Emitter();

// Adding listeners to the 'greet' type
emitr.on('greet',function(){
    console.log('Somewhere, someone said hello.');
});

emitr.on('greet',function(){
    console.log('A greeting occured!');
});

// Manually signaling that greet event happened
console.log('Hello!');
emitr.emit('greet');