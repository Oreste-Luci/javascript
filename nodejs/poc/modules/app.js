/*
    MODULE PATTERNS
    Different ways/patterns to use modules    
*/

var greet = require('./greet1');
greet();

var greet2 = require('./greet2');
greet2.greet();

greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed Hello World!!!';

// module.exports is chached so the same object as before is returned.
// the require() function caches the module.exports returned.
var greet3b = require('./greet3');
greet3b.greet();

// This way we can create new objects by not using the cached one.
var Greet4 = require('./greet4');
var greetr = new Greet4();
greetr.greet();

var greet5 = require('./greet5').greet;
greet5();
