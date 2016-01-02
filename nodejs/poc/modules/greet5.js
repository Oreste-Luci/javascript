// Revealing module pattern
// Expose only the methods and properties you want

var greeting = 'Hello World!!!!!';

function greet() {
    console.log(greeting);
}

module.exports = {
    greet: greet
};