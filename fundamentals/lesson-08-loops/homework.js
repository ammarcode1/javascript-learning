// https://www.w3schools.com/js/js_loops.asp
// https://www.w3schools.com/js/js_loop_for.asp
// https://www.w3schools.com/js/js_loop_for.asp
// https://www.w3schools.com/js/js_break.asp
// https://www.w3schools.com/js/js_continue.asp
// https://www.w3schools.com/js/js_control_flow.asp

// ================================
// JavaScript Fundamentals - Lesson 8
// Homework
// ================================

// Question 1
// Print numbers from 20 to 30.

for (let i = 20; i <= 30; i++) {
    console.log(i);
}

// ---------------------------------

// Question 2
// Print odd numbers from 1 to 15.

for (let i = 1; i <= 15; i += 2) {
    console.log(i);
}

// ---------------------------------

// Question 3
// Print numbers from 10 to 1 using while loop.

let number = 10;

while (number >= 1) {
    console.log(number);
    number--;
}

// ---------------------------------

// Question 4
// Print "Hello" three times using do...while.

let count = 1;

do {
    console.log("Hello");
    count++;
} while (count <= 3);

// ---------------------------------

// Question 5
// Print numbers from 1 to 10 but skip 6.

for (let i = 1; i <= 10; i++) {

    if (i === 6) {
        continue;
    }

    console.log(i);
}

// ---------------------------------

// Question 6
// Stop printing when the number becomes 8.

for (let i = 1; i <= 10; i++) {

    if (i === 8) {
        break;
    }

    console.log(i);
}

// ---------------------------------

// Question 7
// Print all names using for...of.

const names = ["Ali", "Ahmed", "Ammar", "Usman"];

for (const name of names) {
    console.log(name);
}

// ---------------------------------

// Question 8
// Print all keys and values using for...in.

const student = {
    name: "Muhammad Ammar",
    age: 20,
    semester: 4,
    university: "UCP"
};

for (const key in student) {
    console.log(key, ":", student[key]);
}