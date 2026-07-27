// ===============================
// JavaScript Fundamentals - Lesson 10
// Homework (Solution)
// ===============================

// ===============================
// Student Skills Management System
// ===============================

const students = ["Ali", "Ammar", "Ahmed", "Bilal", "Usman"];

// Task 1 - Add "Hamza" at the end
students.push("Hamza");
console.log(students);

// Task 2 - Remove the last student
students.pop();
console.log(students);

// Task 3 - Add "Hassan" at the beginning
students.unshift("Hassan");
console.log(students);

// Task 4 - Remove the first student
students.shift();
console.log(students);

// Task 5 - Print the index of "Ahmed"
console.log(students.indexOf("Ahmed"));

// Task 6 - Check whether "Bilal" exists
console.log(students.includes("Bilal"));

// Task 7 - First three students
const firstThree = students.slice(0, 3);
console.log(firstThree);

// Task 8 - Replace "Ahmed" with "Huzaifa"
const index = students.indexOf("Ahmed");
students.splice(index, 1, "Huzaifa");
console.log(students);

// Task 9 - Merge using concat()
const programmingLanguages = ["Java", "Python"];
const merged1 = students.concat(programmingLanguages);
console.log(merged1);

// Task 10 - Merge using Spread Operator
const merged2 = [...students, ...programmingLanguages];
console.log(merged2);

// Task 11 - Convert into String
console.log(merged2.join(" | "));


// ===============================
// Marks
// ===============================

const marks = [90, 55, 80, 45, 70];

// Task 12 - Passing Marks
const passingMarks = marks.filter((mark) => mark >= 60);
console.log(passingMarks);

// Task 13 - Increase every mark by 5
const updatedMarks = marks.map((mark) => mark + 5);
console.log(updatedMarks);

// Task 14 - First mark greater than 85
const firstHighMark = marks.find((mark) => mark > 85);
console.log(firstHighMark);

// Task 15 - Total Marks
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
console.log(totalMarks);


// ===============================
// Products
// ===============================

const products = [
    { name: "Keyboard", price: 2500 },
    { name: "Mouse", price: 1500 },
    { name: "Monitor", price: 30000 },
    { name: "Headphones", price: 5000 }
];

// Task 16 - Print Product Names
products.forEach((product) => {
    console.log(product.name);
});

// Task 17 - Product Prices
const prices = products.map((product) => product.price);
console.log(prices);

// Task 18 - Products Greater Than 4000
const expensiveProducts = products.filter((product) => product.price > 4000);
console.log(expensiveProducts);

// Task 19 - First Product Greater Than 10000
const firstExpensiveProduct = products.find((product) => product.price > 10000);
console.log(firstExpensiveProduct);

// Task 20 - Total Price
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log(totalPrice);