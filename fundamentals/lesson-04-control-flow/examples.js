// https://www.w3schools.com/JS/js_control_flow.asp

// Lesson 04 - Control Flow

// if statement

let age = 20;

if (age >= 18) {
    console.log("Adult");
}

// if...else

let marks = 45;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// if...else if...else

let grade = 85;

if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else {
    console.log("Fail");
}

// Ternary Operator

const isLoggedIn = true;

console.log(isLoggedIn ? "Welcome!" : "Please Login");

// switch statement

const day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid Day");
}