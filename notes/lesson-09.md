# JavaScript Fundamentals – Lesson 9 (Strings)

# 1. String

A string is a sequence of characters used to store text.

```javascript
const name = "Ammar";
const city = "Lahore";
const university = `UCP`;
```

---

# 2. Why Strings?

Strings are used to store textual data like names, emails, passwords, and messages.

```javascript
const email = "ammar@gmail.com";
const country = "Pakistan";
```

---

# 3. String Indexing

Each character has an index starting from `0`.

```javascript
const language = "JavaScript";

console.log(language[0]);                  // J
console.log(language[4]);                  // S
console.log(language[language.length - 1]); // t
```

---

# 4. `length`

Returns the total number of characters in a string. Spaces are also counted.

```javascript
const city = "Lahore";

console.log(city.length); // 6
```

---

# 5. Strings are Immutable

Strings cannot be modified after creation. String methods always return a new string.

```javascript
let name = "Ammar";

name[0] = "B";

console.log(name); // Ammar

name = "Bilal";

console.log(name); // Bilal
```

---

# 6. Template Literals

Use backticks and `${}` to insert variables inside a string.

```javascript
const name = "Ammar";

console.log(`Hello ${name}`); // Hello Ammar
```

---

# 7. `toUpperCase()`

Converts all characters of a string to uppercase.

```javascript
const text = "javascript";

console.log(text.toUpperCase()); // JAVASCRIPT
console.log(text); // javascript
```

---

# 8. `toLowerCase()`

Converts all characters of a string to lowercase.

```javascript
const text = "HELLO";

console.log(text.toLowerCase()); // hello
```

---

# 9. `trim()`

Removes spaces from the beginning and end of a string.

```javascript
const username = "   Ammar   ";

console.log(username.trim()); // Ammar
```

---

# 10. `slice()`

Extracts part of a string. Supports negative indexes.

```javascript
const language = "JavaScript";

console.log(language.slice(0, 4)); // Java
console.log(language.slice(4));    // Script
console.log(language.slice(-6));   // Script
```

---

# 11. `substring()`

Extracts part of a string but does not support negative indexes.

```javascript
const language = "JavaScript";

console.log(language.substring(0, 4)); // Java
console.log(language.substring(4));    // Script
```

---

# 12. `replace()`

Replaces only the first matching occurrence in a string.

```javascript
const text = "cat cat cat";

console.log(text.replace("cat", "dog")); // dog cat cat
```

---

# 13. `replaceAll()`

Replaces every matching occurrence in a string.

```javascript
const text = "cat cat cat";

console.log(text.replaceAll("cat", "dog")); // dog dog dog
```

---

# 14. `includes()`

Checks whether a string contains specific text and returns `true` or `false`.

```javascript
const language = "JavaScript";

console.log(language.includes("Script")); // true
console.log(language.includes("Python")); // false
```

---

# 15. `startsWith()`

Checks whether a string starts with specific characters.

```javascript
const language = "JavaScript";

console.log(language.startsWith("Java"));   // true
console.log(language.startsWith("Script")); // false
```

---

# 16. `endsWith()`

Checks whether a string ends with specific characters.

```javascript
const language = "JavaScript";

console.log(language.endsWith("Script")); // true
console.log(language.endsWith("Java"));   // false
```

---

# 17. `split()`

Converts a string into an array using a separator.

```javascript
const text = "HTML,CSS,JavaScript";

console.log(text.split(",")); // ["HTML", "CSS", "JavaScript"]
```

---

# 18. `join()`

Converts an array into a string using a separator.

```javascript
const skills = ["HTML", "CSS", "JavaScript"];

console.log(skills.join(", ")); // HTML, CSS, JavaScript
```

---

# 19. `indexOf()`

Returns the index of the first matching occurrence.

```javascript
const text = "JavaScript";

console.log(text.indexOf("a")); // 1
```

---

# 20. `lastIndexOf()`

Returns the index of the last matching occurrence.

```javascript
const text = "JavaScript";

console.log(text.lastIndexOf("a")); // 3
```

---

# 21. `repeat()`

Repeats a string the specified number of times.

```javascript
console.log("Hi ".repeat(3)); // Hi Hi Hi
```

---

# 22. Method Chaining

Multiple string methods can be called together because each method returns a new string.

```javascript
const text = "   javascript   ";

console.log(text.trim().toUpperCase()); // JAVASCRIPT

console.log(text.trim().toUpperCase().slice(0, 4)); // JAVA
```

---

# ⭐ Golden Rules

- String indexing starts from `0`.
- `length` returns the total number of characters.
- Strings are immutable.
- String methods return a new string.
- `slice()` supports negative indexes.
- `substring()` does not support negative indexes.
- `replace()` replaces only the first match.
- `replaceAll()` replaces all matches.
- `split()` converts **String → Array**.
- `join()` converts **Array → String**.
- `indexOf()` returns the first matching index.
- `lastIndexOf()` returns the last matching index.
- Method chaining is possible because methods return a new string.