// https://www.w3schools.com/js/js_datatypes.asp

// =======================================
// Lesson 02 - Homework
// =======================================

// Guess the output before running the code.

console.log(typeof 50);
console.log(typeof "Hello");
console.log(typeof {});
console.log(typeof []);
console.log(typeof undefined);
console.log(typeof true);
console.log(typeof null);

// Create one variable of each data type.

const studentName = "Ammar";       // String
const age = 21;                    // Number
const isStudent = true;            // Boolean

let city;                          // Undefined

const address = null;              // Null

const subjects = ["PF", "OOP"];    // Array

const student = {
    name: "Ammar",
    semester: 4
};                                  // Object

function greet() {
    console.log("Welcome!");
}                                   // Function

// Print data types

console.log(typeof studentName);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof city);
console.log(typeof address);
console.log(typeof subjects);
console.log(typeof student);
console.log(typeof greet);