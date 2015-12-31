/*
    This file shows Function Constructors and Prototypal Inheritance.
    The protorype object is inherited by all objects of the same type.
*/

function Person(firstname, lastname) {
    
    this.firstname = firstname;
    this.lastname = lastname;
    
}

// This is the protoype for any objects created from Person
Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);  
};

// Creating Person John
var john = new Person('John','Doe');
console.log(john.firstname);
john.greet();

// Creating Person Jane
var jane = new Person('Jane','Doe');
jane.greet();

// To check the prototype
console.log(john.__proto__);
console.log(jane.__proto__);

// They have the same prototype
console.log(john.__proto__ === jane.__proto__);