/*
    This file demonstrates Javascript First Class Functions
*/

// Function Statement 
function greet() {
    console.log('hi');
}
greet();

// Functions are first-class
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

var greetMe = function() {
    console.log('Hello');
}
greetMe();

// it's first class
logGreeting(greetMe);

// use function expresion on the fly
logGreeting(function() {
    console.log('Hello There');
});
