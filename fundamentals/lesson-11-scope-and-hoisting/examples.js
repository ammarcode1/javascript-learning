// ===============================
// JavaScript Fundamentals - Lesson 11
// Examples
// ===============================

// Global Scope
let university = "UCP";

console.log(university);

function showUniversity() {
    console.log(university);
}

showUniversity();

{
    console.log(university);
}

console.log("--------------------------------------");

// Function Scope
function greet() {
    let message = "Hello";

    console.log(message);
}

greet();

// console.log(message); // ReferenceError

console.log("--------------------------------------");

// Block Scope
{
    let city = "Lahore";
    const country = "Pakistan";

    console.log(city);
    console.log(country);
}

// console.log(city); // ReferenceError

console.log("--------------------------------------");

// Lexical Scope
function outer() {
    let language = "JavaScript";

    function inner() {
        console.log(language);
    }

    inner();
}

outer();

console.log("--------------------------------------");

// Hoisting with var
console.log(score);

var score = 90;

console.log(score);

console.log("--------------------------------------");

// Hoisting with let
// console.log(age); // ReferenceError

let age = 21;

console.log(age);

console.log("--------------------------------------");

// Hoisting with const
// console.log(PI); // ReferenceError

const PI = 3.14;

console.log(PI);

console.log("--------------------------------------");

// Function Hoisting
sayHello();

function sayHello() {
    console.log("Hello JavaScript");
}

console.log("--------------------------------------");

// Function Expression
// greetUser(); // ReferenceError

const greetUser = function () {
    console.log("Hi User");
};

greetUser();

console.log("--------------------------------------");

// Variable Shadowing
let name = "Ammar";

{
    let name = "Ali";

    console.log(name);
}

console.log(name);