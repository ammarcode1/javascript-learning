// https://www.w3schools.com/js/js_strings.asp
// https://www.w3schools.com/js/js_string_methods.asp
// https://www.w3schools.com/js/js_string_templates.asp
// https://www.w3schools.com/js/js_string_search.asp
// https://www.w3schools.com/js/js_string_reference.asp

// ===============================
// JavaScript Fundamentals - Lesson 9
// Homework
// ===============================

// Student Information
const studentName = "Muhammad Ammar";
const university = "University of Central Punjab";
const semester = 5;

console.log(`Student: ${studentName}`);
console.log(`University: ${university}`);
console.log(`Semester: ${semester}`);

// String Indexing
const language = "JavaScript";

console.log(language[0]);
console.log(language[language.length - 1]);

// Length
console.log(language.length);

// String Methods
const username = "   Muhammad Ammar   ";

console.log(username.trim());
console.log(username.trim().toUpperCase());
console.log(username.trim().toLowerCase());

// slice() & substring()
console.log(language.slice(4));
console.log(language.substring(0, 4));

// replace()
const sentence = "I like Java";

console.log(sentence.replace("Java", "JavaScript"));

// replaceAll()
const message = "JS JS JS";

console.log(message.replaceAll("JS", "JavaScript"));

// Search Methods
console.log(language.includes("Script"));
console.log(language.startsWith("Java"));
console.log(language.endsWith("Script"));

console.log(language.indexOf("a"));
console.log(language.lastIndexOf("a"));

// split()
const skills = "HTML,CSS,JavaScript,Git";

const skillsArray = skills.split(",");

console.log(skillsArray);

// join()
console.log(skillsArray.join(" | "));

// repeat()
console.log("-".repeat(30));

// Method Chaining
const title = "   javascript fundamentals   ";

console.log(title.trim().toUpperCase());
console.log(title.trim().toUpperCase().slice(0, 10));

// Mini Challenge
const email = "   ammar@gmail.com   ";

const cleanedEmail = email.trim().toLowerCase();

console.log(cleanedEmail);

const words = "Learn JavaScript Today";

const wordsArray = words.split(" ");

console.log(wordsArray);

console.log(wordsArray.join("-"));