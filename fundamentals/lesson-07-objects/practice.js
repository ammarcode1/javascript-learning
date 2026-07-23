// Lesson 7 - Objects (Practice)

// Create an object
const employee = {
    name: "Ali",
    age: 25,
    department: "Software"
};

// Access properties
console.log(employee.name);
console.log(employee["department"]);

// Update property
employee.age = 26;

// Add property
employee.salary = 80000;

// Delete property
delete employee.department;

// Missing property
console.log(employee.city);

// Method
employee.introduce = function () {
    console.log(`Hi, I'm ${this.name}.`);
};

employee.introduce();

// Nested Object
employee.address = {
    city: "Lahore",
    country: "Pakistan"
};

console.log(employee.address.country);

// Array inside Object
employee.skills = ["Java", "Git"];

console.log(employee.skills[0]);

// Object.keys()
console.log(Object.keys(employee));

// Object.values()
console.log(Object.values(employee));

// Object.entries()
console.log(Object.entries(employee));

// Property Exists
console.log("salary" in employee);
console.log(employee.hasOwnProperty("address"));