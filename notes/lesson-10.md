# JavaScript Fundamentals – Lesson 10 (Array Methods)

# 1. Array Methods

Array methods are built-in functions used to add, remove, search, copy, modify, and process array elements.

```javascript
const fruits = ["Apple", "Banana"];
```

---

# 2. Why Array Methods?

Array methods make working with arrays easier and reduce the amount of code you need to write.

```javascript
const numbers = [10, 20, 30];
```

---

# 3. `push()`

Adds one or more elements to the end of an array.

```javascript
const fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits); // ["Apple", "Banana", "Mango"]
```

---

# 4. `pop()`

Removes the last element from an array.

```javascript
const fruits = ["Apple", "Banana", "Mango"];

fruits.pop();

console.log(fruits); // ["Apple", "Banana"]
```

---

# 5. `push()` vs `pop()`

| `push()` | `pop()` |
|-----------|---------|
| Adds at the end | Removes from the end |
| Returns new length | Returns removed element |
| Modifies original array | Modifies original array |

---

# 6. `shift()`

Removes the first element from an array.

```javascript
const fruits = ["Apple", "Banana", "Mango"];

fruits.shift();

console.log(fruits); // ["Banana", "Mango"]
```

---

# 7. `unshift()`

Adds one or more elements to the beginning of an array.

```javascript
const fruits = ["Banana", "Mango"];

fruits.unshift("Apple");

console.log(fruits); // ["Apple", "Banana", "Mango"]
```

---

# 8. `shift()` vs `unshift()`

| `shift()` | `unshift()` |
|------------|-------------|
| Removes first element | Adds at the beginning |
| Returns removed element | Returns new length |
| Modifies original array | Modifies original array |

---

# 9. `indexOf()`

Returns the first index of the specified element. Returns `-1` if the element is not found.

```javascript
const fruits = ["Apple", "Banana", "Mango", "Banana"];

console.log(fruits.indexOf("Banana")); // 1
```

---

# 10. `lastIndexOf()`

Returns the last index of the specified element.

```javascript
const fruits = ["Apple", "Banana", "Mango", "Banana"];

console.log(fruits.lastIndexOf("Banana")); // 3
```

---

# 11. `indexOf()` vs `lastIndexOf()`

| `indexOf()` | `lastIndexOf()` |
|--------------|-----------------|
| First occurrence | Last occurrence |
| Searches from start | Searches from end |
| Returns index | Returns index |

---

# 12. `includes()`

Checks whether an element exists in the array and returns `true` or `false`.

```javascript
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.includes("Banana")); // true
console.log(fruits.includes("Orange")); // false
```

---

# 13. `indexOf()` vs `includes()`

| `indexOf()` | `includes()` |
|--------------|--------------|
| Returns index | Returns boolean |
| Returns `-1` if not found | Returns `false` if not found |
| Used when index is needed | Used when checking existence |

---

# 14. `slice()`

Returns a copy of part of an array without changing the original array.

```javascript
const numbers = [10, 20, 30, 40, 50];

console.log(numbers.slice(1, 4)); // [20, 30, 40]
console.log(numbers.slice(-2));   // [40, 50]
```

---

# 15. `splice()`

Adds, removes, or replaces elements by modifying the original array.

```javascript
const numbers = [10, 20, 30];

numbers.splice(1, 1, 25);

console.log(numbers); // [10, 25, 30]
```

---

# 16. `slice()` vs `splice()`

| `slice()` | `splice()` |
|------------|------------|
| Returns a new array | Modifies original array |
| Original remains unchanged | Original changes |
| Used for copying | Used for editing |

---

# 17. `concat()`

Combines two or more arrays into a new array.

```javascript
const frontend = ["HTML", "CSS"];
const backend = ["Node.js"];

console.log(frontend.concat(backend)); // ["HTML", "CSS", "Node.js"]
```

---

# 18. Spread Operator (`...`)

Copies or merges arrays by expanding their elements.

```javascript
const frontend = ["HTML", "CSS"];
const backend = ["Node.js"];

const skills = [...frontend, ...backend];

console.log(skills); // ["HTML", "CSS", "Node.js"]
```

---

# 19. `concat()` vs Spread Operator

| `concat()` | Spread (`...`) |
|------------|----------------|
| Merges arrays | Copies or merges arrays |
| Older approach | Modern approach |
| Returns new array | Returns new array |

---

# 20. `join()`

Converts an array into a string using a separator.

```javascript
const skills = ["HTML", "CSS", "JavaScript"];

console.log(skills.join(", ")); // HTML, CSS, JavaScript
```

---

# 21. `reverse()`

Reverses the order of elements in the original array.

```javascript
const numbers = [1, 2, 3, 4];

numbers.reverse();

console.log(numbers); // [4, 3, 2, 1]
```

---

# 22. `sort()`

Sorts the elements of an array. Numbers require a compare function.

```javascript
const numbers = [100, 5, 25, 8];

numbers.sort((a, b) => a - b);

console.log(numbers); // [5, 8, 25, 100]
```

---

# 23. `reverse()` vs `sort()`

| `reverse()` | `sort()` |
|--------------|----------|
| Reverses order | Sorts elements |
| No comparison | Uses comparison |
| Modifies original array | Modifies original array |

---

# 24. `forEach()`

Executes a function once for every array element.

```javascript
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit) => {
    console.log(fruit);
});
```

---

# 25. `map()`

Creates a new array by transforming every element.

```javascript
const numbers = [1, 2, 3];

const squares = numbers.map((num) => num * num);

console.log(squares); // [1, 4, 9]
```

---

# 26. `forEach()` vs `map()`

| `forEach()` | `map()` |
|--------------|---------|
| Performs an action | Transforms data |
| Returns nothing useful | Returns a new array |
| Used for processing | Used for modification |

---

# 27. `filter()`

Creates a new array containing only the elements that satisfy a condition.

```javascript
const numbers = [10, 15, 20, 25];

const result = numbers.filter((num) => num >= 20);

console.log(result); // [20, 25]
```

---

# 28. `find()`

Returns the first element that satisfies a condition.

```javascript
const numbers = [10, 15, 20, 25];

const result = numbers.find((num) => num > 18);

console.log(result); // 20
```

---

# 29. `filter()` vs `find()`

| `filter()` | `find()` |
|-------------|----------|
| Returns all matching elements | Returns first matching element |
| Returns an array | Returns a single value |
| Returns empty array if no match | Returns `undefined` if no match |

---

# 30. `reduce()`

Reduces all array elements into a single value.

```javascript
const numbers = [10, 20, 30];

const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // 60
```

---

# 31. Method Chaining

Multiple array methods can be combined together because methods like `map()` and `filter()` return new arrays.

```javascript
const numbers = [5, 10, 15, 20, 25];

const result = numbers
    .filter((num) => num >= 15)
    .map((num) => num * 2);

console.log(result); // [30, 40, 50]
```

---

# ⭐ Golden Rules

- `push()` → Add at the end.
- `pop()` → Remove from the end.
- `shift()` → Remove from the beginning.
- `unshift()` → Add at the beginning.
- `indexOf()` returns the first index.
- `lastIndexOf()` returns the last index.
- `includes()` returns `true` or `false`.
- `slice()` copies without modifying.
- `splice()` modifies the original array.
- `concat()` merges arrays.
- Spread (`...`) copies or merges arrays.
- `join()` converts **Array → String**.
- `reverse()` reverses the original array.
- `sort()` sorts the original array.
- `forEach()` performs an action.
- `map()` transforms data.
- `filter()` returns all matching elements.
- `find()` returns the first matching element.
- `reduce()` converts an array into a single value.
- Method chaining combines multiple methods into one statement.