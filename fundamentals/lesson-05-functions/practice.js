// https://www.w3schools.com/js/js_functions.asp
// https://www.w3schools.com/js/js_function_intro.asp
// https://www.w3schools.com/js/js_function_invocation.asp
// https://www.w3schools.com/js/js_function_parameters.asp
// https://www.w3schools.com/js/js_function_return.asp
// https://www.w3schools.com/js/js_function_arguments.asp
// https://www.w3schools.com/js/js_function_expressions.asp
// https://www.w3schools.com/js/js_arrow_function.asp

// Lesson 05 - Practice

// Default Parameters

function greetUser(name = "Guest") {
    console.log(`Welcome ${name}`);
}

greetUser();
greetUser("Ammar");


// Parameters and Arguments

function findArea(length, width) {
    return length * width;
}

console.log(findArea(10, 5));


// Function Expression

const subtract = function (a, b) {
    return a - b;
};

console.log(subtract(20, 8));


// Arrow Function

const isAdult = age => age >= 18;

console.log(isAdult(21));
console.log(isAdult(15));


// Global Scope

const university = "UCP";

function showUniversity() {
    console.log(university);
}

showUniversity();


// Local Scope

function test() {
    let x = 10;
    console.log(x);
}

test();

// console.log(x); // Error