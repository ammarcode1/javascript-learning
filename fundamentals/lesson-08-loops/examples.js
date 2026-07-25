// ================================
// JavaScript Fundamentals - Lesson 8
// Examples
// ================================

// -------------------------------
// for Loop
// -------------------------------

console.log("For Loop");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// -------------------------------
// Counting Down
// -------------------------------

console.log("\nCounting Down");

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// -------------------------------
// Custom Step Size
// -------------------------------

console.log("\nEven Numbers");

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// -------------------------------
// while Loop
// -------------------------------

console.log("\nWhile Loop");

let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}

// -------------------------------
// do...while Loop
// -------------------------------

console.log("\ndo...while Loop");

let number = 1;

do {
    console.log(number);
    number++;
} while (number <= 5);

// -------------------------------
// break
// -------------------------------

console.log("\nbreak");

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}

// -------------------------------
// continue
// -------------------------------

console.log("\ncontinue");

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}

// -------------------------------
// for...of
// -------------------------------

console.log("\nfor...of");

const names = ["Ali", "Ahmed", "Ammar"];

for (const name of names) {
    console.log(name);
}

// -------------------------------
// for...in
// -------------------------------

console.log("\nfor...in");

const student = {
    name: "Muhammad Ammar",
    age: 20,
    city: "Lahore"
};

for (const key in student) {
    console.log(key, ":", student[key]);
}