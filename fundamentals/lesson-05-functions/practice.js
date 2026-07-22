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