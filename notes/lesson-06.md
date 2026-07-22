# JavaScript Fundamentals — Lesson 6 (Arrays)

## 1. Array

### Definition

An **array** is an ordered collection of multiple values stored in a single variable. Each value is called an **element** and is accessed using its **index**.

**Simple Words**

An array stores multiple values inside one variable.

---

## 2. Why Arrays?

### Without Array

```javascript
let student1 = "Ali";
let student2 = "Ammar";
let student3 = "Ahmed";
```

### With Array

```javascript
const students = ["Ali", "Ammar", "Ahmed"];
```

### Benefits

- Store multiple values
- Less code
- Easy to manage
- Faster access using an index

---

## 3. Creating an Array

```javascript
const fruits = ["Apple", "Banana", "Mango"];
```

Each value inside an array is called an **element**.

---

## 4. Array Index

JavaScript uses **0-based indexing**.

| Index | Value    |
| -----: | -------- |
| 0      | Apple    |
| 1      | Banana   |
| 2      | Mango    |

Example

```javascript
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);
```

Output

```text
Apple
```

---

## 5. Accessing Elements

### First Element

```javascript
fruits[0];
```

### Second Element

```javascript
fruits[1];
```

### Last Element (Best Practice)

```javascript
fruits[fruits.length - 1];
```

**Reason**

Works even if the array size changes.

---

## 6. Updating an Element

```javascript
const fruits = ["Apple", "Banana", "Mango"];

fruits[1] = "Orange";
```

Result

```javascript
["Apple", "Orange", "Mango"];
```

---

## 7. Array Length

Returns the total number of elements.

```javascript
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length);
```

Output

```text
3
```

---

## 8. `push()`

Adds an element at the **end** of the array.

```javascript
const arr = [1, 2];

arr.push(3);
```

Result

```javascript
[1, 2, 3]
```

### Important

`push()` returns the **new length** of the array.

```javascript
const arr = [1, 2, 3];

console.log(arr.push(4));
```

Output

```text
4
```

Array becomes

```javascript
[1, 2, 3, 4]
```

---

## 9. `pop()`

Removes the **last** element.

```javascript
const arr = [1, 2, 3];

arr.pop();
```

Result

```javascript
[1, 2]
```

---

## 10. `unshift()`

Adds an element at the **beginning** of the array.

```javascript
const arr = [2, 3];

arr.unshift(1);
```

Result

```javascript
[1, 2, 3]
```

---

## 11. `shift()`

Removes the **first** element.

```javascript
const arr = [1, 2, 3];

arr.shift();
```

Result

```javascript
[2, 3]
```

---

## 12. `includes()`

Checks whether a value exists in the array.

```javascript
const fruits = ["Apple", "Banana"];

console.log(fruits.includes("Banana"));
```

Output

```text
true
```

If the value is not found

```javascript
console.log(fruits.includes("Orange"));
```

Output

```text
false
```

---

## 13. `indexOf()`

Returns the index of a value.

```javascript
const fruits = ["Apple", "Banana"];

console.log(fruits.indexOf("Banana"));
```

Output

```text
1
```

If the value is not found

```javascript
console.log(fruits.indexOf("Orange"));
```

Output

```text
-1
```

---

## 14. Arrays are Objects

```javascript
const arr = [1, 2, 3];

console.log(typeof arr);
```

Output

```text
object
```

Although arrays behave differently from normal objects, they are technically **objects** in JavaScript.

---

## 15. `const` with Arrays

### ✅ Allowed

```javascript
const arr = [1, 2];

arr.push(3);
```

**Reason**

The **array reference** does not change.

### ❌ Not Allowed

```javascript
const arr = [1, 2];

arr = [5, 6];
```

Output

```text
TypeError
```

**Reason**

The array reference is being reassigned.

---

## 16. Common Beginner Confusions

### Missing Index

```javascript
const arr = [10, 20];

console.log(arr[5]);
```

Output

```text
undefined
```

**Reason**

Index `5` does not exist.

---

### Empty Array

```javascript
const arr = [];

console.log(arr.length);
```

Output

```text
0
```

An empty array exists, but it contains no elements.

---

### `push()` Updates Length Automatically

```javascript
const arr = [1, 2];

arr.push(3);

console.log(arr.length);
```

Output

```text
3
```

---

## 17. Interview Trap

### `arr[index]` vs `indexOf()`

| Situation                   | Output      |
| --------------------------- | ----------- |
| `arr[10]`                   | `undefined` |
| `arr.indexOf(valueNotFound)` | `-1`        |

Example

```javascript
const fruits = ["Apple", "Banana"];

console.log(fruits[5]);
console.log(fruits.indexOf("Orange"));
```

Output

```text
undefined
-1
```

### Easy Rule

- Missing **index** → `undefined`
- Missing **value** → `-1`

---

## 18. JavaScript vs Java

| JavaScript                                      | Java                                     |
| ----------------------------------------------- | ---------------------------------------- |
| Arrays are dynamic and provide built-in methods.| Arrays have a fixed size after creation. |
| `push()` adds an element at the end.            | Use `ArrayList.add()`.                   |
| `pop()` removes the last element.               | Use `ArrayList.remove()`.                |
| `shift()` removes the first element.            | No direct support in arrays.             |
| `unshift()` adds an element at the beginning.   | No direct support in arrays.             |
| `includes()` checks whether a value exists.     | Use `ArrayList.contains()` or a loop.    |
| `indexOf()` returns the index or `-1`.          | Use `ArrayList.indexOf()` or a loop.     |
| Arrays can store mixed data types.              | Arrays store only one data type.         |
| `typeof array` returns `"object"`.              | No `typeof` operator.                    |
| `const` prevents reassignment, not modification.| `final` prevents reference reassignment. |

---

## 19. Interview Tips

- Arrays use **0-based indexing**.
- `length` returns the total number of elements.
- Use `arr[arr.length - 1]` to access the last element.
- `push()` adds an element at the end.
- `pop()` removes the last element.
- `unshift()` adds an element at the beginning.
- `shift()` removes the first element.
- `includes()` returns `true` or `false`.
- `indexOf()` returns the index or `-1`.
- Arrays are technically **objects**.
- `push()` returns the **new length**, not the updated array.

---

## 20. Golden Rules

1. Arrays store multiple values inside one variable.
2. Arrays always start from **index 0**.
3. Use `arr[arr.length - 1]` to access the last element.
4. `push()` and `unshift()` **add** elements.
5. `pop()` and `shift()` **remove** elements.
6. `includes()` checks whether a value exists.
7. `indexOf()` returns the index of a value or `-1` if not found.
8. `arr[index]` returns `undefined` when the index does not exist.
9. Arrays are objects, so `typeof array` returns `"object"`.
10. `const` arrays can be modified but **cannot be reassigned**.