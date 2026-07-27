//====================================
// Exercise - 02 Covering Lesson 1-10
//====================================

// Part A — Variables & Data Types
const name = "Muhammad Ammar";
let age = 21;
let cgpa = 3.35;
let isEnrolled = true;

console.log(
    `Name is: ${name}
    \nAge is: ${age}
    \n"CGPA: ${cgpa}
    \n"Enrolled: ${isEnrolled}`
);
console.log(typeof name, typeof age, typeof cgpa, typeof isEnrolled);
console.log("--------------------------------------");

// Part B — Operators & Conditions

let marks = 72;
if(marks < 0 || marks > 100){
    console.log("Invalid Marks");

}
else if(marks >= 90){
    console.log("Grade: A");

}
else if(marks >= 80){
    console.log("Grade: B");
}
else if(marks >= 70){
    console.log("Grade: C");
}
else if(marks >= 60){
    console.log("Grade: D");
}
else{
    console.log("Fail");
}
console.log("--------------------------------------");

// Part C — Loops
// For loop to print counting.
for(let i = 1; i <= 20; i++){
    console.log(i);
}
console.log("--------------------------------------");

for(let i = 1; i <= 25; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}
console.log("--------------------------------------");

// For loop to print the star pattern.
const n = 5;
for(let i = 0; i < 5; i++){
    let pattern = "";
    for(let j = 0; j <= i; j++){
        pattern += "*";
    }
    console.log(pattern);
}
console.log("--------------------------------------");

// Part D — Functions

// Function to calculate Area.
const calculateArea = (length, width) => {
    return length * width;
}
const area1 = calculateArea(2, 2);
const area2 = calculateArea(3,5);
const area3 = calculateArea(10, 10);
console.log(`"First Area is: ${area1}`);
console.log(`"Second Area is: ${area2}`);
console.log(`"Third Area is: ${area3}`);
console.log("--------------------------------------");

// Function to check if number is Even.
const isEven = (num) =>{
    if(num % 2 === 0){
        return true;
    }
    return false;
}

const number1 = isEven(22);
const number2 = isEven(27);
console.log("Is Even: " + number1);
console.log("Is Even: " + number2);
console.log("--------------------------------------");

// Part E — Arrays
const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango"
];

// Using push(), pop(), unshift(), shift(), indexOf(), includes(), slice(), splice(), Spread Operator [...FirstArray, ...SecondArray], join()
fruits.push("Grapes");
fruits.pop();
fruits.unshift("Kiwi");
fruits.shift();
console.log("Index of Orange is: " + fruits.indexOf("Orange"));
const checkExist = fruits.includes("Banana");
console.log("Is Banana Exist: " + checkExist);
const twoElements = fruits.slice(0,2);
console.log(twoElements);
fruits.splice(2, 1 , "Peach");
console.log(fruits);

const dryFruits = ["Almond", "Cashew"];
const newFruits = [...fruits, ...dryFruits];
console.log(newFruits);

const convertingIntoString = newFruits.join(" | ");
console.log(convertingIntoString);
console.log("--------------------------------------");

// Part F — Strings
const message = "   JavaScript is Awesome   ";
console.log(message.trim());
console.log(message.toUpperCase().trim());
console.log(message.toLowerCase().trim());
console.log(message.includes("Awesome"));
console.log(message.trim().startsWith("Java"));
console.log(message.replace("Awesome", "Powerful").trim());
const convertingIntoArray = message.trim().split(" ");
console.log(convertingIntoArray);
console.log("--------------------------------------");

// Part G — Array Methods

const marks2 = [45, 90, 78, 35, 88, 67];
marks2.forEach((element) => {
    console.log(element);
});

const addition = marks2.map((number) => number + 5);
console.log(addition);

const usingFilter = marks2.filter((num) => num >= 50);
console.log(usingFilter);

const usingFind = marks2.find((num) => num >= 80);
console.log(usingFind);

const usingReduce = marks2.reduce((total, num) => total + num, 0);
console.log(usingReduce);

const result = marks2
    .filter((num) => num >= 50)
    .map((num) => num * 2);

console.log(result);
console.log("--------------------------------------");

// 🌟 Bonus Challenge

const students = [
    {
        name: "Ali",
        marks: 82
    },
    {
        name: "Ammar",
        marks: 91
    },
    {
        name: "Bilal",
        marks: 45
    },
    {
        name: "Hamza",
        marks: 76
    }
];

students.forEach((number3) => {
    console.log(number3.name);
});

const newMarks = students.map((student) => student.marks);
console.log(newMarks);

const passed = students.filter((student) => student.marks >= 50);
console.log(passed);

const topper = students.find((student) => student.marks > 90);
console.log(topper);

const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
console.log(totalMarks);