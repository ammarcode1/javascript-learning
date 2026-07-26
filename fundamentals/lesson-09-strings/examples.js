// ===============================
// JavaScript Fundamentals - Lesson 9
// Examples
// ===============================

// Creating Strings
const firstName = "Muhammad";
const city = 'Lahore';
const university = `UCP`;

console.log(firstName);
console.log(city);
console.log(university);

// String Indexing
const language = "JavaScript";

console.log(language[0]);
console.log(language[4]);
console.log(language[language.length - 1]);

// Length
console.log(language.length);

// Strings are Immutable
let name = "Ammar";

name[0] = "B";
console.log(name);

name = "Bilal";
console.log(name);

// Template Literals
console.log(`Hello ${name}`);

// toUpperCase()
const text1 = "javascript";
console.log(text1.toUpperCase());

// toLowerCase()
const text2 = "HELLO";
console.log(text2.toLowerCase());

// trim()
const username = "   Ammar   ";
console.log(username.trim());

// slice()
console.log(language.slice(0, 4));
console.log(language.slice(4));
console.log(language.slice(-6));

// substring()
console.log(language.substring(0, 4));
console.log(language.substring(4));

// replace()
const animals = "cat cat cat";
console.log(animals.replace("cat", "dog"));

// replaceAll()
console.log(animals.replaceAll("cat", "dog"));

// includes()
console.log(language.includes("Script"));
console.log(language.includes("Python"));

// startsWith()
console.log(language.startsWith("Java"));

// endsWith()
console.log(language.endsWith("Script"));

// split()
const skills = "HTML,CSS,JavaScript";
console.log(skills.split(","));

// join()
const tech = ["HTML", "CSS", "JavaScript"];
console.log(tech.join(", "));

// indexOf()
console.log(language.indexOf("a"));

// lastIndexOf()
console.log(language.lastIndexOf("a"));

// repeat()
console.log("Hi ".repeat(3));

// Method Chaining
const message = "   javascript   ";

console.log(message.trim().toUpperCase());
console.log(message.trim().toUpperCase().slice(0, 4));