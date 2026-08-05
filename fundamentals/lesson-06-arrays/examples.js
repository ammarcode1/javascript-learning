// https://www.w3schools.com/js/js_arrays.asp

// Lesson 06 - Arrays

// Creating an Array

const students = ["Ali", "Ahmed", "Ammar"];

console.log(students);


// Accessing Elements

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);


// Accessing the Last Element

console.log(students[students.length - 1]);


// Array Length

console.log(students.length);


// Updating an Element

students[1] = "Hamza";

console.log(students);


// push() - Adds an element at the end

students.push("Usman");

console.log(students);


// push() returns the new length of the array

const newLength = students.push("Bilal");

console.log(students);
console.log(newLength);


// pop() - Removes the last element

students.pop();

console.log(students);


// unshift() - Adds an element at the beginning

students.unshift("Zain");

console.log(students);


// shift() - Removes the first element

students.shift();

console.log(students);


// includes() - Checks if an element exists

console.log(students.includes("Ammar"));


// indexOf() - Returns the index of an element

console.log(students.indexOf("Hamza"));


// Arrays are Objects

console.log(typeof students);


// const Arrays

const teachers = ["Sir Ali", "Sir Ahmed"];

// Allowed: modifying the array

teachers.push("Sir Hamza");

console.log(teachers);

// Not Allowed: reassigning the array

// teachers = ["Sir Bilal"];
// TypeError: Assignment to constant variable.