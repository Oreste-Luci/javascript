/*
    Using Nodes' build int Emitter
 */
var Emitter = require('events');
var eventsConfig = require('./config').events;

// Creating new Emitter object
var emitr = new Emitter();

// Adding listeners to the 'greet' type
emitr.on(eventsConfig.GREET,function(){
    console.log('Somewhere, someone said hello.');
});

emitr.on(eventsConfig.GREET,function(){
    console.log('A greeting occured!');
});

// Manually signaling that greet event happened
console.log('Hello!');
emitr.emit(eventsConfig.GREET);