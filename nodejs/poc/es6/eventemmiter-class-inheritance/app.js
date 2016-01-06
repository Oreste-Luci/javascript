'use strict';
// Must use strict for classes in ES6

var Greetr = require('./greetr');

// Add event listener to greeter1 object
var greeter1 = new Greetr();
greeter1.on('greet',function(data){
    console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');