// https://www.w3schools.com/js/js_loops.asp
// https://www.w3schools.com/js/js_loop_for.asp
// https://www.w3schools.com/js/js_loop_for.asp
// https://www.w3schools.com/js/js_break.asp
// https://www.w3schools.com/js/js_continue.asp
// https://www.w3schools.com/js/js_control_flow.asp

// ================================
// JavaScript Fundamentals - Lesson 8
// Practice
// ================================

// 1.
console.log("Numbers 10 to 15");

for (let i = 10; i <= 15; i++) {
    console.log(i);
}

// 2.
console.log("\nMultiples of 3");

for (let i = 3; i <= 30; i += 3) {
    console.log(i);
}

// 3.
console.log("\nwhile Loop");

let i = 5;

while (i >= 1) {
    console.log(i);
    i--;
}

// 4.
console.log("\ndo...while");

let x = 1;

do {
    console.log(x);
    x++;
} while (x <= 3);

// 5.
console.log("\ncontinue Example");

for (let i = 1; i <= 6; i++) {

    if (i === 4) {
        continue;
    }

    console.log(i);
}

// 6.
console.log("\nfor...of");

const skills = ["HTML", "CSS", "JavaScript"];

for (const skill of skills) {
    console.log(skill);
}

// 7.
console.log("\nfor...in");

const laptop = {
    brand: "Dell",
    ram: "16GB",
    storage: "512GB SSD"
};

for (const key in laptop) {
    console.log(key, ":", laptop[key]);
}