// ===============================
// JavaScript Fundamentals – Lesson 12
// Practice Questions
// ===============================

// Question 1
const greet = (name) => {
    return `Hello ${name}`;
}

// Question 2
const print = () => {
    console.log("Welcome to ES6!");
}
print();

// Question 3
const cube = (num) =>{
    return num * num * num;
}
console.log(cube(3));

// Question 4
const Area = (length, width) => {
    return length * width;
}
console.log(Area(5, 3));
console.log(Area(10, 2));
console.log(Area(7, 4));

// Question 5
const isEven = (num) => {
    return num % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));

// Question 6
const isEven2 = (num) => num % 2 === 0;
console.log(isEven2(4));

// Question 7
const numbers = [2, 4, 6, 8];
const double = numbers.map((num) => num * 2);
console.log(double);

// Question 8
const ages = [12, 18, 22, 15, 30];
const adult = ages.filter((age) => age >= 18);
console.log(adult);

// Question 9
const cities = [
    "Lahore",
    "Karachi",
    "Islamabad",
    "Multan"
];
const filtered = cities.find((city) => city === "Islamabad");
console.log(filtered);

// Question 10
const prices = [100, 250, 400, 150];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total);

// Question 11
const returningObject = (brand, model, price) => ({
    brand: brand,
    model: model,
    price: price
});
console.log(returningObject("Toyota", "Corolla", 5000000));

// Question 12
const numbers2 = [5, 12, 20, 7, 15];
const together = numbers2.filter((num) => num >= 10).map((num) => num * 3);
console.log(together);

// Question 13
const employees = [
    { name: "Ali", salary: 50000 },
    { name: "Ammar", salary: 80000 },
    { name: "Bilal", salary: 45000 },
    { name: "Hamza", salary: 90000 }
];

const employeeNames = employees.map(employee => employee.name);
console.log(employeeNames);

const highSalaryEmployees = employees.filter(employee => employee.salary >= 50000);
console.log(highSalaryEmployees);

const hamza = employees.find(employee => employee.name === "Hamza");
console.log(hamza);

const totalSalary = employees.reduce(
    (sum, employee) => sum + employee.salary,
    0
);
console.log(totalSalary);