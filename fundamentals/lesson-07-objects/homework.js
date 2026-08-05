// https://www.w3schools.com/js/js_objects.asp
// https://www.w3schools.com/js/js_object_intro.asp
// https://www.w3schools.com/js/js_object_properties.asp
// https://www.w3schools.com/js/js_object_methods.asp
// https://www.w3schools.com/js/js_object_this.asp
// https://www.w3schools.com/js/js_object_display.asp

// Lesson 7 - Objects (Homework)

const student = {
    name: "Muhammad Ammar",
    age: 20,
    university: "UCP",
    semester: 4,
    skills: ["Java", "JavaScript"],
    address: {
        city: "Lahore",
        country: "Pakistan"
    },

    introduce() {
        console.log(`Hi, I'm ${this.name} from ${this.address.city}.`);
    }
};

// Calling Method
student.introduce();

// Accessing Properties
console.log(student.name);
console.log(student.university);
console.log(student.address.city);
console.log(student.skills[0]);

// Updating Property
student.semester = 5;
console.log(student.semester);

// Adding Property
student.cgpa = 3.40;
console.log(student.cgpa);

// Deleting Property
delete student.age;
console.log(student.age); // undefined because the property was deleted.

// Object Methods
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

// Property Existence
console.log("skills" in student);
console.log("phone" in student);

console.log(student.hasOwnProperty("address"));

// Array inside Object
student.skills.push("Git");
console.log(student.skills);

// Object Reference
const anotherStudent = student;

anotherStudent.name = "Ali";

console.log(student.name);

// Restore Name
student.name = "Muhammad Ammar";

// Bonus Challenge
console.log(`${student.name} studies at ${student.university}.`);

console.log(
    `He knows ${student.skills[0]}, ${student.skills[1]} and ${student.skills[2]}.`
);

console.log(
    `He lives in ${student.address.city}, ${student.address.country}.`
);
