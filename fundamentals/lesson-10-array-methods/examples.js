// http://w3schools.com/js/js_array_methods.asp
// https://www.w3schools.com/js/js_array_search.asp
// https://www.w3schools.com/js/js_array_sort.asp
// https://www.w3schools.com/js/js_array_iteration.asp
// https://www.w3schools.com/js/js_array_reference.asp
// https://www.w3schools.com/js/js_array_const.asp

// ===============================
// JavaScript Fundamentals - Lesson 10
// Examples
// ===============================

// push()
const fruits = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits);

// pop()
const colors = ["Red", "Green", "Blue"];
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
const numbers = [10, 20, 30, 20];
console.log(numbers.indexOf(20));

// lastIndexOf()
console.log(numbers.lastIndexOf(20));

// includes()
console.log(numbers.includes(30));

// slice()
const marks = [60, 70, 80, 90, 100];
console.log(marks.slice(1, 4));
console.log(marks.slice(-2));

// splice()
const values = [10, 20, 30, 40];
values.splice(2, 1, 35);
console.log(values);

// concat()
const frontend = ["HTML", "CSS"];
const backend = ["Node.js", "Express"];
console.log(frontend.concat(backend));

// Spread Operator (...)
const skills = [...frontend, ...backend];
console.log(skills);

// join()
console.log(frontend.join(" - "));

// reverse()
const arr1 = [1, 2, 3, 4];
arr1.reverse();
console.log(arr1);

// sort()
const arr2 = [100, 5, 25, 8];
arr2.sort((a, b) => a - b);
console.log(arr2);

// forEach()
const fruitsList = ["Apple", "Banana", "Mango"];
fruitsList.forEach((fruit) => {
    console.log(fruit);
});

// map()
const nums = [1, 2, 3];
const squares = nums.map((num) => num * num);
console.log(squares);

// filter()
const ages = [12, 18, 20, 15];
const adults = ages.filter((age) => age >= 18);
console.log(adults);

// find()
const prices = [100, 250, 500, 800];
const price = prices.find((p) => p > 300);
console.log(price);

// reduce()
const total = [10, 20, 30];
const sum = total.reduce((acc, value) => acc + value, 0);
console.log(sum);

// Method Chaining
const result = [5, 10, 15, 20, 25]
    .filter((num) => num >= 15)
    .map((num) => num * 2);

console.log(result);