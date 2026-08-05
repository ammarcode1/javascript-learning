// https://www.w3schools.com/JS/js_control_flow.asp

// Lesson 04 - Practice

// Check Voting Eligibility

const age = 17;

if (age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible");
}

// Username Check

const username = "";

if (username) {
    console.log("Welcome " + username);
} else {
    console.log("Please enter username");
}

// Number Check

const number = 20;

if (number > 20) {
    console.log("Greater than 20");
} else if (number === 20) {
    console.log("Exactly 20");
} else {
    console.log("Less than 20");
}

// Truthy & Falsy

const arr = [];

if (arr) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// Ternary

const isStudent = true;

console.log(isStudent ? "Student" : "Guest");