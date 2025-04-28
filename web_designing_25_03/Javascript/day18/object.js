/*Object are collection of methods and properties.*/
// 1. Object literal
var emp = {
    fname: "sam",
    sal: 10000_00
};
// console.log(emp);
// document.write(emp);
// document.writeln(`<br>`);
// JSON stand for Javascript Object Notation
// document.write(JSON.stringify(emp));

// 1. Type 1 Object Literal
var person = {
    name: 'Ankit',
    age: 30,
    greet: function(){
        console.log(`Hello, ${person.name}`);
    },
    updatedAge: function(){
        console.log(`Hello ${person.age}`);
    }
};
//Calling Method
// person.greet();
// person.updatedAge();

// Calling property
// console.log(person.age);
// console.log(person.name);


// 2. Type 2 Using Instance of Object (new keyword)
var emp1 = new Object();
emp1.name = "sam";
emp1.age = 26;
emp1.salary = 30000;
emp1.greet = function (){
    console.log(`Hello ${emp1.name}`);
}
// document.write(JSON.stringify(emp1));
// console.log(emp1);
// emp1.greet();

/* 3. Object Constructor (this keyword) 
"this" keyword refers to the current object in a method.
constructor function with parameters.
*/
// es5 with parameters
function book(fname, number){
    this.name = fname;
    this.age = number;
};
// Creating Object
var fetch_data = new book("stan lee", 80);
// console.log(fetch_data);

//es5 without parameters
function Book(fname, number){
this.name = "";
this.age = "";
};

var data = new Book();
data.name = "marvel";
data.number = 90;
// console.log(data);


// ES6
/*Class is blueprint for creating object.
It's cleaner and modern way to write constructor.
Constructor :-
1. Constructor is special method.
2. It is executed automatically when a new object is created. 
3  It used to initialize object properties.
*/
class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
let car = new Car("Ford", 2014);
document.write(car.name + "  ");
document.write(car.year);

