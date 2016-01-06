'use strict';
// Must use strict for classes in ES6

/**
 * Adds EventsEmitter properties to Greetr object by Class Inheritance
 */
var EventEmitter = require('events');

/**
 * Under the hood its creating a function Greetr that has the same prototype members as EventEmmiter
 */
module.exports = class Greetr extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello World!';
    }
    
    // Adding function to the prototype
    greet(data) {
        console.log(`${ this.greeting }: ${ data }`);
        this.emit('greet', data);
    }
}