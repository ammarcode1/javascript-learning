// https://www.w3schools.com/js/js_functions.asp
// https://www.w3schools.com/js/js_function_intro.asp
// https://www.w3schools.com/js/js_function_invocation.asp
// https://www.w3schools.com/js/js_function_parameters.asp
// https://www.w3schools.com/js/js_function_return.asp
// https://www.w3schools.com/js/js_function_arguments.asp
// https://www.w3schools.com/js/js_function_expressions.asp
// https://www.w3schools.com/js/js_arrow_function.asp

// Lesson 05 - Functions

// --------------------------------------------------
// 1. Function Declaration
// --------------------------------------------------

function greet() {
    console.log("Hello!");
}

greet();

// Function declarations can be reassigned because
// the identifier is not declared with const.

greet = 5;

// Note:
// Reassigning a function like this is possible but considered bad practice.
// In modern JavaScript, prefer Function Expressions or Arrow Functions
// stored in const variables to prevent accidental reassignment.

console.log(greet); // 5

// greet(); // TypeError: greet is not a function


// --------------------------------------------------
// 2. Function Declaration with Parameters
// --------------------------------------------------

function introduce(name, age) {
    console.log(`My name is ${name} and I am ${age} years old.`);
}

introduce("Ammar", 21);


// --------------------------------------------------
// 3. Function Declaration with Return
// --------------------------------------------------

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));


// --------------------------------------------------
// 4. Function Expression
// --------------------------------------------------

const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(4, 5));

// multiply = 10;
// TypeError: Assignment to constant variable.


// --------------------------------------------------
// 5. Arrow Function
// --------------------------------------------------

const square = (number) => {
    return number * number;
};

console.log(square(6));

// square = 100;
// TypeError: Assignment to constant variable.


// --------------------------------------------------
// 6. Arrow Function (Implicit Return)
// --------------------------------------------------

const cube = number => number ** 3;

console.log(cube(3));