// Lesson 7 - Objects (Examples)

// Creating an Object
const student = {
    name: "Muhammad Ammar",
    age: 20,
    university: "UCP"
};

console.log(student);

// Accessing Properties
console.log(student.name);
console.log(student["age"]);

// Updating a Property
student.age = 21;
console.log(student.age);

// Adding a New Property
student.city = "Lahore";
console.log(student);

// Deleting a Property
delete student.city;
console.log(student);

// Missing Property
console.log(student.phone);

// Using Variable as Property Name
const key = "name";
console.log(student[key]);

// Method
student.greet = function () {
    console.log(`Hello ${this.name}`);
};

student.greet();

// Nested Object
student.address = {
    city: "Lahore",
    country: "Pakistan"
};

console.log(student.address.city);

// Array inside Object
student.skills = ["Java", "JavaScript", "Git"];

console.log(student.skills[1]);

// Objects inside Array
const students = [
    { name: "Ali" },
    { name: "Ahmed" }
];

console.log(students[0].name);

// Object Reference
const anotherStudent = student;

anotherStudent.name = "Ali";

console.log(student.name);

// Object Methods
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

// Checking Property Existence
console.log("name" in student);
console.log(student.hasOwnProperty("skills"));

// typeof
console.log(typeof student);