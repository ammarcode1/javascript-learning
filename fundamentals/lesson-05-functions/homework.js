// Lesson 05 - Homework

// Calculate Average

function calculateAverage(a, b, c) {
    return (a + b + c) / 3;
}

console.log(calculateAverage(78, 90, 66));


// Check Even

const isEven = function (number) {
    return number % 2 === 0;
};

console.log(isEven(10));
console.log(isEven(7));


// Find Maximum

const findMaximum = (a, b) => {
    return a > b ? a : b;
};

console.log(findMaximum(20, 35));


// Greeting

function greetStudent(name = "Guest") {
    console.log(`Hello ${name}`);
}

greetStudent();
greetStudent("Ammar");


// Function Without Return

function displayMessage() {
    console.log("JavaScript Functions");
}

const result = displayMessage();

console.log(result); // undefined