// ===============================
// JavaScript Fundamentals - Lesson 10
// Practice
// ===============================

// push()
const fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log(fruits);

// pop()
const colors = ["Red", "Blue", "Green"];
colors.pop();
console.log(colors);

// shift()
const cities = ["Lahore", "Karachi", "Islamabad"];
cities.shift();
console.log(cities);

// unshift()
const languages = ["JavaScript", "Python"];
languages.unshift("Java");
console.log(languages);

// indexOf()
const numbers = [10, 20, 30, 40, 20];
console.log(numbers.indexOf(20));

// lastIndexOf()
console.log(numbers.lastIndexOf(20));

// includes()
console.log(numbers.includes(50));

// slice()
console.log(numbers.slice(1, 4));
console.log(numbers.slice(-2));

// splice()
numbers.splice(2, 1, 35);
console.log(numbers);

// concat()
const frontend = ["HTML", "CSS"];
const backend = ["Node.js"];
const skills = frontend.concat(backend);
console.log(skills);

// Spread Operator (...)
const allSkills = [...frontend, ...backend];
console.log(allSkills);

// join()
console.log(allSkills.join(" | "));

// reverse()
const arr1 = [1, 2, 3, 4, 5];
arr1.reverse();
console.log(arr1);

// sort()
const arr2 = [30, 5, 100, 20];
arr2.sort((a, b) => a - b);
console.log(arr2);

// forEach()
arr2.forEach((num) => {
    console.log(num);
});

// map()
const doubled = arr2.map((num) => num * 2);
console.log(doubled);

// filter()
const even = arr2.filter((num) => num % 2 === 0);
console.log(even);

// find()
const firstGreater = arr2.find((num) => num > 25);
console.log(firstGreater);

// reduce()
const total = arr2.reduce((sum, num) => sum + num, 0);
console.log(total);

// Method Chaining
const result = arr2
    .filter((num) => num >= 20)
    .map((num) => num + 10);

console.log(result);