# JavaScript Fundamentals – Lesson 8 (Short Notes)

# 1. Loop

## Definition

A **loop** repeatedly executes a block of code until a condition becomes false.

**Simple Words:**

A loop repeats code and avoids repetition.

---

# 2. Why Loops?

Without a loop, the same code must be written multiple times.

```javascript
for (let i = 1; i <= 3; i++) {
    console.log("Hello");
}
```

---

# 3. Types of Loops

- `for`
- `while`
- `do...while`
- `for...of`
- `for...in`

---

# 4. `for` Loop

Used when the number of iterations is known.

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

---

# 5. Parts of a `for` Loop

```javascript
for (let i = 1; i <= 5; i++)
```

- Initialization
- Condition
- Update

---

# 6. Counting Up

Prints numbers in ascending order.

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

---

# 7. Counting Down

Prints numbers in descending order.

```javascript
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
```

---

# 8. Custom Step Size

Increase or decrease the loop variable by any value.

```javascript
for (let i = 2; i <= 10; i += 2)
```

```javascript
for (let i = 50; i >= 0; i -= 5)
```

---

# 9. Infinite Loop

A loop never ends because its condition never becomes `false`.

```javascript
for (;;) {
    console.log("Running...");
}
```

---

# 10. Common Mistakes

Missing update

```javascript
for (let i = 1; i <= 5;) {}
```

Wrong condition

```javascript
for (let i = 1; i >= 5; i++) {}
```

Wrong update direction

```javascript
for (let i = 1; i <= 5; i--) {}
```

---

# 11. `while` Loop

Repeats code while the condition is `true`. Best when the number of iterations is unknown.

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

---

# 12. `for` vs `while`

- **`for`** → Known number of iterations.
- **`while`** → Unknown number of iterations.

---

# 13. `do...while` Loop

Always executes at least once because the condition is checked after execution.

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

---

# 14. `while` vs `do...while`

- `while` checks the condition first.
- `do...while` executes once before checking the condition.

---

# 15. `break`

Immediately terminates the loop.

```javascript
for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}
```

---

# 16. `continue`

Skips the current iteration and moves to the next one.

```javascript
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

---

# 17. `break` vs `continue`

| `break` | `continue` |
| --- | --- |
| Stops the loop | Skips the current iteration |

---

# 18. `for...of`

Iterates over **values** of arrays and strings. Similar to Java's enhanced **for-each** loop.

```javascript
const names = ["Ali", "Ahmed", "Ammar"];

for (const name of names) {
    console.log(name);
}
```

---

# 19. `for...in`

Iterates over **keys** (property names) of an object.

```javascript
const student = {
    name: "Ammar",
    age: 20
};

for (const key in student) {
    console.log(key, student[key]);
}
```

---

# 20. `for...of` vs `for...in`

| `for...of` | `for...in` |
| --- | --- |
| Values | Keys |
| Arrays & Strings | Objects |

---

# 21. Why `const` in `for...of` / `for...in`?

A new loop variable is created in each iteration, so `const` is valid. Use `let` only if you need to reassign the loop variable.

---

# 22. Java vs JavaScript Loops

| Java | JavaScript | Purpose |
| --- | --- | --- |
| `for` | `for` | Known iterations |
| `while` | `while` | Unknown iterations |
| `do...while` | `do...while` | Runs at least once |
| Enhanced `for` (for-each) | `for...of` | Iterate over values |
| `Map.Entry` loop | `for...in` | Iterate over object keys |

---

# ⭐ Golden Rules

1. Use `for` when the number of iterations is known.
2. Use `while` when the number of iterations is unknown.
3. `do...while` always executes at least once.
4. `break` ends the loop.
5. `continue` skips the current iteration.
6. Use `for...of` for arrays and strings.
7. Use `for...in` for objects.
8. Use `const` in `for...of` and `for...in` unless reassignment is needed.