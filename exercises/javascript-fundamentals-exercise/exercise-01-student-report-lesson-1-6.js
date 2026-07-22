// Coding Exercise JavaScripit Fundamentals Lesson 01 to Lesson 06

// Lesson 01 - Variables (var, let, const)
// Lesson 02 - Data Types (String, Number, Boolean, Null, Undefined, Object, Array)
// Lesson 03 - Operators (Arithmetic, Assignment, Comparison, Logical, Ternary)
// Lesson 04 - Control Flow (if-else, switch, ternary operator)
// Lesson 05 - Functions (function declaration, function expression, arrow function, default parameters)
// Lesson 06 - Arrays (Creating, Accessing, Updating, push(), pop(), unshift(), shift(), includes(), indexOf())

console.log("--------------------------------------------------");
console.log("Coding Exercise JavaScript Fundamentals");
console.log("--------------------------------------------------");
console.log("Student Report Card");
console.log("--------------------------------------------------");

// Variables
const studentName = "Muhammad Ammar";
let age = 21;
const university = "University of Central Punjab";
let semester = 4;

// Array
const marks = [78, 90, 66, 81, 95];

// Array Operations
marks.push(55);
marks.shift();
marks[1] = 87;

console.log(marks[0]);
console.log(marks[marks.length - 1]);
console.log(marks.length);

// Creating Functions

// Function to calculate average marks without using loop.
const calculateAvg = function (marks) {
    let average =(marks[0] + marks[1] + marks[2] + marks[3] + marks[4]) / marks.length;
    return average;
}

// Calling the function to calculate average marks and storing the result in a variable.

const averageMarks = calculateAvg(marks);
console.log(`Average Marks: ${averageMarks}`);

// Arrow function to find grade based on average marks.
const findGrade = (averageMarks) => {
    if (averageMarks >= 90) {
        return "A";
    } else if (averageMarks >= 80) {
        return "B";
    } else if (averageMarks >= 70) {
        return "C";
    } else if (averageMarks >= 60) {
        return "D";
    } else {
        return "F";
    }
};

const grade = findGrade(averageMarks);
console.log(`Grade: ${grade}`);

// Using Ternary Operator to check if the student has passed or failed based on average marks.
averageMarks >= 60 ? console.log("Congratulations! You have passed the semester.") : console.log("Sorry! You have failed the semester. Better luck next time.");

// Function to greet the student with a default parameter and calling the function with and without passing an argument.
const greet = function (name = "Guest"){
    console.log(`Welcome ${name}.`);
}
greet();
greet("Ammar");

// Function to check if the student is an adult or not using a ternary operator.
const isAdult = (age) => {
    return age >= 18
}

console.log(isAdult(age));

// Using includes() and indexOf() methods to check if a specific mark is present in the marks array and to find the index of a specific mark in the marks array.
console.log(marks.includes(90));
console.log(marks.indexOf(81));

// Using ternary operator to check if the student is an adult or a minor based on age.
age >= 18 ? console.log("Adult.") : console.log("Minor.");

// Using typeof operator to check the data type of variables and functions.
console.log(typeof studentName);
console.log(typeof age);
console.log(typeof university);
console.log(typeof greet);


// Bonus Challenge
const bonusChallenge = (marks) => {
    let higestMark = marks[0];
    if(marks[1] > higestMark) {
        higestMark = marks[1];
    }
    if(marks[2] > higestMark) {
        higestMark = marks[2];
    }
    if(marks[3] > higestMark) {
        higestMark = marks[3];
    }
    if (marks[4] > higestMark) {
        higestMark = marks[4];
    }
    return higestMark;
}

const higestMarks = bonusChallenge(marks);
console.log(`Higest Marks: ${higestMarks}`);