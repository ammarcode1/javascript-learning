// https://www.w3schools.com/js/js_arrow_function.asp

// ===============================
// JavaScript Fundamentals - Lesson 12
// Examples (Arrow Functions)
// ===============================

// Arrow Function:
// A shorter and cleaner way to write functions introduced in ES6.

// Function Declaration
function greet1(name) {
    return `Hello ${name}`;
}

console.log(greet1("Ammar"));

// Function Expression
const greet2 = function (name) {
    return `Hello ${name}`;
};

console.log(greet2("Ali"));

// Arrow Function
const greet3 = (name) => {
    return `Hello ${name}`;
};

console.log(greet3("Bilal"));

console.log("--------------------------------------");

// No Parameters
// Use () when there are no parameters.

const welcome = () => {
    console.log("Welcome to JavaScript!");
};

welcome();

console.log("--------------------------------------");

// One Parameter
// Parentheses are optional for one parameter.

const square = num => {
    return num * num;
};

console.log(square(5));

console.log("--------------------------------------");

// Multiple Parameters
// Parentheses are required for two or more parameters.

const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(4, 6));

console.log("--------------------------------------");

// Explicit Return
// If {} are used, return keyword is required.

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 5));

console.log("--------------------------------------");

// Implicit Return
// If there is only one expression, remove {} and return.

const subtract = (a, b) => a - b;

console.log(subtract(15, 8));

console.log("--------------------------------------");

// Arrow Function with map()
// map() creates a new array after performing an operation.

const numbers = [1, 2, 3, 4];

const squares = numbers.map(num => num * num);

console.log(squares);

console.log("--------------------------------------");

// Arrow Function with filter()
// filter() returns elements that satisfy the condition.

const marks = [45, 90, 80, 35, 70];

const passed = marks.filter(mark => mark >= 50);

console.log(passed);

console.log("--------------------------------------");

// Arrow Function with find()
// find() returns only the first matching element.

const students = ["Ali", "Ammar", "Bilal"];

const student = students.find(name => name === "Ammar");

console.log(student);

console.log("--------------------------------------");

// Arrow Function with reduce()
// reduce() converts an array into a single value.

const nums = [10, 20, 30];

const total = nums.reduce((sum, num) => sum + num, 0);

console.log(total);

console.log("--------------------------------------");

// Returning an Object
// Wrap the object inside () for implicit return.

const createUser = (name, age) => ({
    name,
    age
});

console.log(createUser("Ammar", 21));

console.log("--------------------------------------");

// Returning an Object (Explicit Return)

const createStudent = (name, cgpa) => {
    return {
        name,
        cgpa
    };
};

console.log(createStudent("Ali", 3.8));

console.log("--------------------------------------");

// Arrow Functions are commonly used with array methods.

const fruits = ["Apple", "Banana", "Orange"];

const upperFruits = fruits.map(fruit => fruit.toUpperCase());

console.log(upperFruits);

console.log("--------------------------------------");

// Basic Preview of 'this'
// Arrow functions do not have their own 'this'.
// We'll study this deeply in Lesson 24.

const person = {
    name: "Ammar",

    greet: function () {
        console.log(this.name);
    }
};

person.greet();

console.log("--------------------------------------");

// Method Chaining with Arrow Functions

const values = [5, 10, 15, 20];

const result = values
    .filter(num => num >= 10)
    .map(num => num * 2);

console.log(result);

console.log("--------------------------------------");