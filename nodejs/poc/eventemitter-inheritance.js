/**
 * Adds EventsEmitter properties to Greetr object by Util Inheritance
 */
var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = 'Hello World!';
};

// Greetr inherits EventEmitter properties
util.inherits(Greetr, EventEmitter);

// Add greet funtion to prototype which emits event through inherited function
Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
};

// Add event listener to greeter1 object
var greeter1 = new Greetr();
greeter1.on('greet',function(data){
    console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');