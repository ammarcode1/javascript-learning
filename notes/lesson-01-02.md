# JavaScript Fundamentals - Lesson 01 & 02

These notes cover the fundamental concepts of JavaScript Variables and Data Types.

---

# Lesson 01 - Variables

## 1. Variable

### Definition

A **variable** is a named container used to store data in memory.

### Example

```javascript
let age = 24;
```

`age` is the variable and `24` is its value.

---

## 2. Types of Variables

### `let`

- Block scoped.
- Value can be reassigned.

```javascript
let age = 24;

age = 25;
```

---

### `const`

- Block scoped.
- Value cannot be reassigned.
- Use **const by default** unless the value needs to change.

```javascript
const university = "UCP";
```

---

### `var`

- Function scoped.
- Old way of declaring variables.
- Avoid using it in modern JavaScript.

```javascript
var city = "Lahore";
```

---

## 3. When to Use `let` and `const`

Use **const** when the value **will not change**.

```javascript
const pi = 3.14;
```

Use **let** when the value **needs to change**.

```javascript
let score = 0;

score++;
```

---

## 4. `const` with Objects and Arrays

`const` **does not make objects or arrays immutable**.

It only prevents **reassigning the reference**.

### Allowed

```javascript
const user = {
    name: "Ammar"
};

user.name = "Ali";
```

The object is modified, but its reference remains the same.

### Not Allowed

```javascript
const user = {
    name: "Ammar"
};

user = {
    name: "Ali"
};
```

This causes an error because the object reference is being reassigned.

---

# Lesson 02 - Data Types

## 5. Data Type

### Definition

A **data type** defines the kind of value a variable stores.

---

## 6. JavaScript Data Types

### Primitive Types

- Number
- String
- Boolean
- Undefined
- Null
- BigInt
- Symbol

Primitive types store the **actual value**.

### Reference Types

- Object
- Array
- Function

Reference types store a **reference (memory address)** instead of the actual value.

---

## 7. Number

Stores integers and decimal values.

```javascript
const age = 24;
const price = 99.99;
```

```javascript
typeof age;
```

**Output**

```javascript
number
```

---

## 8. String

Stores text.

```javascript
const name = "Ammar";
```

```javascript
typeof name;
```

**Output**

```javascript
string
```

---

## 9. Boolean

Stores only two values.

- `true`
- `false`

Example

```javascript
const isPassed = true;
```

```javascript
typeof isPassed;
```

**Output**

```javascript
boolean
```

---

## 10. Undefined

A variable is declared but **no value is assigned**.

```javascript
let age;

console.log(age);
```

**Output**

```javascript
undefined
```

---

## 11. Null

Represents an **intentional empty value** assigned by the programmer.

```javascript
let user = null;
```

---

## 12. BigInt

Used to store very large integers.

```javascript
const big = 12345678901234567890n;
```

---

## 13. Symbol

Used to create **unique identifiers**.

```javascript
const id = Symbol();
```

---

## 14. Object

Stores data in key-value pairs.

```javascript
const student = {
    name: "Ammar",
    age: 24
};
```

```javascript
typeof student;
```

**Output**

```javascript
object
```

---

## 15. Array

Stores multiple values in a single variable.

```javascript
const marks = [90, 95, 100];
```

Although arrays have their own syntax,

```javascript
typeof marks;
```

returns

```javascript
object
```

because arrays are objects in JavaScript.

---

## 16. Function

A reusable block of code.

```javascript
function greet() {}
```

```javascript
typeof greet;
```

**Output**

```javascript
function
```

---

## 17. `typeof` Operator

Used to determine the data type of a value.

```javascript
typeof 10;
```

**Output**

```javascript
number
```