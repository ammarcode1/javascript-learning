// ===============================
// JavaScript Fundamentals - Lesson 11
// Homework Solution
// ===============================

// Task 1
// Create a global variable "studentName".
// Print it inside a function and outside the function.

let studentName = "Ammar";

console.log(studentName); // Output: Ammar

function showStudent() {
    console.log(studentName); // Output: Ammar
}

showStudent();

console.log("--------------------------------------");

// Task 2
// Create a function named "calculate".
// Declare a variable inside it.
// Print it inside the function.
// Try printing it outside the function.

function calculate() {
    let result = 100;

    console.log(result); // Output: 100
}

calculate();

// console.log(result); // ReferenceError

console.log("--------------------------------------");

// Task 3
// Create an if block.
// Declare a variable using let.
// Print it inside the block.
// Try printing it outside the block.

if (true) {
    let city = "Lahore";

    console.log(city); // Output: Lahore
}

// console.log(city); // ReferenceError

console.log("--------------------------------------");

// Task 4
// Create a parent function.
// Declare a variable.
// Create a child function.
// Print the parent's variable inside the child function.

function parent() {
    let language = "JavaScript";

    function child() {
        console.log(language); // Output: JavaScript
    }

    child();
}

parent();

console.log("--------------------------------------");

// Task 5
// Create an example of var hoisting.
// Print the variable before and after declaration.

console.log(score); // Output: undefined

var score = 95;

console.log(score); // Output: 95

console.log("--------------------------------------");

// Task 6
// Create an example of let hoisting.
// Observe the error.
// Comment the line after testing.

// console.log(age); // ReferenceError

let age = 21;

console.log(age); // Output: 21

console.log("--------------------------------------");

// Task 7
// Create a function declaration.
// Call it before its declaration.

greet();

function greet() {
    console.log("Hello"); // Output: Hello
}

console.log("--------------------------------------");

// Task 8
// Create a function expression.
// Try calling it before declaration.
// Observe the error and comment the line.

// sayHi(); // ReferenceError

const sayHi = function () {
    console.log("Hi");
};

sayHi(); // Output: Hi

console.log("--------------------------------------");

// Task 9
// Create an example of Variable Shadowing.
// Use the same variable name in global scope and block scope.
// Print both values.

let name = "Ammar";

{
    let name = "Ali";

    console.log(name); // Output: Ali
}

console.log(name); // Output: Ammar

console.log("--------------------------------------");

// 🌟 Bonus Challenge
// Create:
// - One global variable
// - One function variable
// - One block variable
//
// Print all variables where possible.
// Comment the lines that produce ReferenceError.

let university = "UCP"; // Global

function demo() {
    let semester = 4; // Function Scope

    if (true) {
        let subject = "JavaScript"; // Block Scope

        console.log(university); // Output: UCP
        console.log(semester);   // Output: 4
        console.log(subject);    // Output: JavaScript
    }

    // console.log(subject); // ReferenceError
}

demo();

// console.log(semester); // ReferenceError

console.log(university); // Output: UCP