// Lesson 04 - Homework

// Pass / Fail

const marks = 72;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Grade

if (marks >= 90) {
    console.log("A");
} else if (marks >= 80) {
    console.log("B");
} else if (marks >= 70) {
    console.log("C");
} else if (marks >= 60) {
    console.log("D");
} else {
    console.log("F");
}

// Adult or Minor

const age = 21;

console.log(age >= 18 ? "Adult" : "Minor");

// Day using switch

const day = 2;

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

// Truthy / Falsy Challenge

if ([]) {
    console.log("Array is Truthy");
}

if ("") {
    console.log("String is Truthy");
} else {
    console.log("Empty String is Falsy");
}

if (0) {
    console.log("Zero is Truthy");
} else {
    console.log("Zero is Falsy");
}