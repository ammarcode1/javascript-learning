// https://www.w3schools.com/js/js_arrays.asp

// Lesson 06 - Practice

const marks = [78, 90, 66];

// First Element

console.log(marks[0]);

// Last Element

console.log(marks[marks.length - 1]);

// Update Value

marks[1] = 87;

console.log(marks);

// Add Element

marks.push(95);

console.log(marks);

// Remove Last Element

marks.pop();

console.log(marks);

// Remove First Element

marks.shift();

console.log(marks);

// Add First Element

marks.unshift(100);

console.log(marks);

// Search

console.log(marks.includes(66));
console.log(marks.indexOf(87));

// Arrays are Objects

console.log(typeof marks);