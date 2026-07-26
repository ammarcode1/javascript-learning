// ===============================
// JavaScript Fundamentals - Lesson 9
// Practice
// ===============================

// Question 1
const course = "Programming";

console.log(course[0]);
console.log(course[course.length - 1]);

// Question 2
const city = "Islamabad";

console.log(city.length);

// Question 3
const text = "   JavaScript   ";

console.log(text.trim());

// Question 4
const language = "JavaScript";

console.log(language.slice(4));
console.log(language.substring(0, 4));

// Question 5
const sentence = "I Love JavaScript";

console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

// Question 6
const pets = "cat cat cat";

console.log(pets.replace("cat", "dog"));
console.log(pets.replaceAll("cat", "dog"));

// Question 7
console.log(language.includes("Java"));
console.log(language.startsWith("Java"));
console.log(language.endsWith("Script"));

// Question 8
const fruits = "Apple,Mango,Banana";

console.log(fruits.split(","));

// Question 9
const letters = ["J", "S"];

console.log(letters.join(""));

// Question 10
console.log(language.indexOf("a"));
console.log(language.lastIndexOf("a"));

// Question 11
console.log("*".repeat(10));

// Question 12
const word = "   hello world   ";

console.log(word.trim().toUpperCase());