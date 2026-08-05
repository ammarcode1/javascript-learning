// https://www.w3schools.com/js/js_arrays.asp

// Lesson 06 - Homework

const numbers = [10, 20, 30];

// Print First and Last Element

console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

// Add Elements

numbers.push(40);
numbers.unshift(5);

console.log(numbers);

// Remove Elements

numbers.pop();
numbers.shift();

console.log(numbers);

// Update an Element

numbers[1] = 25;

console.log(numbers);

// Search

console.log(numbers.includes(30));
console.log(numbers.indexOf(25));

// const with Arrays

const colors = ["Red", "Blue"];

colors.push("Green");

console.log(colors);

// colors = ["Black"];
// TypeError: Assignment to constant variable.