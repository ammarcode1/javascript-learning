# JavaScript Fundamentals – Lesson 11 (Scope and Hoisting)

# 1. What is Scope?

A scope determines **where a variable can be accessed** in a program.

```javascript
let name = "Ammar";

console.log(name); // Output: Ammar
```

```javascript
{
    let age = 21;
}

console.log(age); // Output: ReferenceError
```

---

# 2. Global Scope

A variable declared outside all functions and blocks has **Global Scope**.

```javascript
let university = "UCP";

console.log(university); // Output: UCP

function showUniversity() {
    console.log(university); // Output: UCP
}

showUniversity();

{
    console.log(university); // Output: UCP
}
```

```javascript
let score = 50;

console.log(score); // Output: 50

score = 90;

console.log(score); // Output: 90
```

---

# 3. Function Scope

A variable declared inside a function is only accessible within that function.

```javascript
function greet() {
    let message = "Hello";

    console.log(message); // Output: Hello
}

greet();

console.log(message); // Output: ReferenceError
```

```javascript
function calculate() {
    const pi = 3.14;

    console.log(pi); // Output: 3.14
}

calculate();

console.log(pi); // Output: ReferenceError
```

---

# 4. Block Scope

Variables declared with `let` and `const` are only accessible inside the block `{}`.

```javascript
{
    let city = "Lahore";
    const country = "Pakistan";

    console.log(city); // Output: Lahore
    console.log(country); // Output: Pakistan
}

console.log(city); // Output: ReferenceError
console.log(country); // Output: ReferenceError
```

```javascript
if (true) {
    let age = 21;

    console.log(age); // Output: 21
}

console.log(age); // Output: ReferenceError
```

---

# 5. Lexical Scope

An inner function can access variables of its outer function.

```javascript
function outer() {
    let name = "Ammar";

    function inner() {
        console.log(name); // Output: Ammar
    }

    inner();
}

outer();
```

```javascript
function outer() {
    let language = "JavaScript";

    function inner() {
        let version = "ES6";

        console.log(language); // Output: JavaScript
        console.log(version);  // Output: ES6
    }

    inner();

    console.log(version); // Output: ReferenceError
}

outer();
```

---

# 6. What is Hoisting?

Hoisting is JavaScript's behavior of moving **declarations** to the top of their scope before execution.

```javascript
console.log(a); // Output: undefined

var a = 10;

console.log(a); // Output: 10
```

Equivalent behavior:

```javascript
var a;

console.log(a); // Output: undefined

a = 10;

console.log(a); // Output: 10
```

---

# 7. Hoisting with `var`

`var` is hoisted and initialized with `undefined`.

```javascript
console.log(score); // Output: undefined
// JS internally do this:
// var a;
// console.log(score); Output: undefined.

var score = 90;
```

```javascript
var city = "Lahore";

console.log(city); // Output: Lahore
```

---

# 8. Hoisting with `let`

`let` is hoisted but cannot be accessed before declaration.

```javascript
console.log(age); // Output: ReferenceError

let age = 21;
```

```javascript
let age = 21;

console.log(age); // Output: 21
```

---

# 9. Hoisting with `const`

`const` is also hoisted but cannot be accessed before declaration.

```javascript
console.log(PI); // Output: ReferenceError

const PI = 3.14;
```

```javascript
const PI = 3.14;

console.log(PI); // Output: 3.14
```

---

# 10. Function Hoisting

Function declarations are fully hoisted.

```javascript
greet(); // Output: Hello

function greet() {
    console.log("Hello");
}
```

Function expressions are not hoisted.

```javascript
sayHi(); // Output: ReferenceError

const sayHi = function () {
    console.log("Hi");
};
```

---

# 11. Temporal Dead Zone (TDZ)

The TDZ is the period before a `let` or `const` variable is declared.

```javascript
console.log(name); // Output: ReferenceError

let name = "Ammar";
```

```javascript
// TDZ Starts

console.log(name); // Output: ReferenceError

let name = "Ammar";

// TDZ Ends
```

---

# 12. Variable Shadowing

Variable Shadowing occurs when an inner scope declares a variable with the same name as an outer scope variable.

```javascript
let name = "Ammar";

{
    let name = "Ali";

    console.log(name); // Output: Ali
}

console.log(name); // Output: Ammar
```

The inner variable temporarily hides the outer variable without changing it.

---

# Scope Comparison

| Scope          | Declared Where                     | Accessible Where                          |
| :---           | :---                               | :---                                      |
| Global Scope   | Outside all functions/blocks       | Entire program                            |
| Function Scope | Inside a function                  | Only inside that function                 |
| Block Scope    | Inside `{}` using `let` or `const` | Only inside that block                    |
| Lexical Scope  | Nested functions                   | Inner function can access outer variables |

---

# Hoisting Comparison

| Keyword              | Hoisted | Accessible Before Declaration | Initial Value     |
| :---                 | :---    | :---                          | :---              |
| `var`                | ✅      | ✅                           | `undefined`       |
| `let`                | ✅      | ❌                           | Not initialized   |
| `const`              | ✅      | ❌                           | Not initialized   |
| Function Declaration | ✅      | ✅                           | Complete Function |

---

# Best Practices

- Prefer `const` by default.
- Use `let` only when reassignment is required.
- Avoid using `var` in modern JavaScript.
- Declare variables before using them.
- Do not rely on hoisting.

---

# ⭐ Golden Rules

- Scope decides where a variable can be accessed.
- Global variables are accessible throughout the program.
- Function variables are only accessible inside their function.
- `let` and `const` follow Block Scope.
- Inner functions can access outer variables (Lexical Scope).
- Parent functions cannot access child variables.
- Hoisting moves declarations, not values.
- `var` returns `undefined` before declaration.
- `let` and `const` throw `ReferenceError` before declaration (TDZ).
- Function declarations are hoisted.
- Function expressions are not hoisted.
- Variable Shadowing creates a new variable in an inner scope without modifying the outer variable.