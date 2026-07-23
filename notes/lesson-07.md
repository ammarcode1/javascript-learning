# JavaScript Fundamentals – Lesson 7 (Objects)

## What is an Object?

An **object** is a collection of related data stored as **key-value pairs**.

```javascript
const student = {
    name: "Ammar",
    age: 20
};
```

---

## Why Objects?

Instead of storing related data in multiple variables, store it inside a single object.

```javascript
const student = {
    name: "Ammar",
    age: 20,
    university: "UCP"
};
```

---

## Object Syntax

```javascript
const objectName = {
    key: value
};
```

---

## Keys and Values

```javascript
const student = {
    name: "Ammar",
    age: 20
};
```

| Key | Value |
|-----|-------|
| name | "Ammar" |
| age | 20 |

---

## Accessing Properties

### Dot Notation

```javascript
student.name
```

### Bracket Notation

```javascript
student["name"]
```

Use **dot notation** when the property name is known.

Use **bracket notation** when the property name is stored in a variable.

```javascript
const key = "name";

student[key];
```

---

## Reading Properties

```javascript
console.log(student.name);
console.log(student["age"]);
```

---

## Updating Properties

If the property already exists, its value is updated.

```javascript
student.age = 21;
```

---

## Adding New Properties

If the property doesn't exist, JavaScript creates it automatically.

```javascript
student.city = "Lahore";
```

---

## Deleting Properties

```javascript
delete student.age;
```

---

## Missing Properties

Accessing a missing property returns:

```javascript
undefined
```

---

## Objects are Mutable

Object properties can be:

- Updated
- Added
- Deleted

even when the object is declared using `const`.

---

## const with Objects

Allowed ✅

```javascript
student.name = "Ali";
student.city = "Lahore";
```

Not Allowed ❌

```javascript
student = {};
```

`const` protects the **object reference**, not its properties.

---

## Variable vs Property

```javascript
const student = {
    name: "Ammar"
};
```

- `student` → Variable
- `name` → Property

Properties are **not variables**, so `const`, `let`, or `var` cannot be used with them.

---

## Methods

A **method** is a function inside an object.

```javascript
const student = {
    greet() {
        console.log("Hello");
    }
};
```

---

## this Keyword

`this` refers to the current object.

```javascript
const student = {
    name: "Ammar",

    greet() {
        console.log(this.name);
    }
};
```

---

## Nested Objects

```javascript
const student = {
    address: {
        city: "Lahore"
    }
};

console.log(student.address.city);
```

---

## Arrays inside Objects

```javascript
const student = {
    skills: ["Java", "JavaScript"]
};
```

---

## Objects inside Arrays

```javascript
const students = [
    { name: "Ali" },
    { name: "Ahmed" }
];
```

---

## Object References

Objects are assigned by **reference**.

```javascript
const a = { name: "Ali" };

const b = a;

b.name = "Ahmed";

console.log(a.name);
```

Output

```
Ahmed
```

---

## Object.keys()

Returns an array of property names.

```javascript
Object.keys(student);
```

---

## Object.values()

Returns an array of property values.

```javascript
Object.values(student);
```

---

## Object.entries()

Returns an array of key-value pairs.

```javascript
Object.entries(student);
```

---

## Checking Property Existence

Using `in`

```javascript
"name" in student
```

Using `hasOwnProperty()`

```javascript
student.hasOwnProperty("name");
```

---

## typeof Object

```javascript
typeof student;
```

Output

```
object
```

---

## Golden Rules ⭐

1. Objects store related data as key-value pairs.
2. Use dot notation when the property name is known.
3. Use bracket notation when the property name is stored in a variable.
4. Updating an existing property changes its value.
5. Assigning to a missing property creates it automatically.
6. `delete` removes a property.
7. Missing properties return `undefined`.
8. Objects are mutable.
9. `const` protects the object reference, not its properties.
10. Methods are functions inside objects.
11. `this` refers to the current object.
12. Objects are assigned by reference.
13. `Object.keys()`, `Object.values()`, and `Object.entries()` return arrays.
14. Use `in` or `hasOwnProperty()` to check if a property exists.
15. `typeof` an object returns `"object"`.
