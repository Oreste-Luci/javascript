class Person {

  constructor(name){
    this.name = name;
  }

  greet(){
    return `Hello I am ${this.name}`;
  }
}

let person = new Person("Tyler");
console.log(person.greet());
