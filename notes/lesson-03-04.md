# JavaScript Fundamentals — Lesson 3 (Operators & Type Conversion)

## Operator

An **operator** is a symbol that performs an operation on one or more operands.

```js
5 + 3;
```

- `+` → Operator
- `5`, `3` → Operands

---

## Arithmetic Operators

| Operator | Description | Example |
| -------- | ----------- | ------- |
| `+` | Addition | `10 + 5` |
| `-` | Subtraction | `10 - 5` |
| `*` | Multiplication | `10 * 5` |
| `/` | Division | `10 / 5` |
| `%` | Remainder (Modulus) | `10 % 3` |
| `**` | Power | `2 ** 3` |

---

## Assignment Operators

Used to assign or update values.

| Operator | Equivalent |
| -------- | ---------- |
| `=` | Assign value |
| `+=` | `x = x + value` |
| `-=` | `x = x - value` |
| `*=` | `x = x * value` |
| `/=` | `x = x / value` |
| `%=` | `x = x % value` |

Example

```js
let x = 10;

x += 5; // 15
x *= 2; // 30
```

---

## Increment & Decrement

Increase or decrease a value by **1**.

```js
x++;
++x;

x--;
--x;
```

### Prefix vs Postfix

| Operator | Behavior |
| -------- | -------- |
| `x++` | Use first, increment later |
| `++x` | Increment first, then use |

```js
let x = 10;

console.log(x++); // 10
console.log(x);   // 11
```

---

## Comparison Operators

Return either `true` or `false`.

| Operator | Meaning |
| -------- | ------- |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal |
| `<=` | Less than or equal |
| `==` | Loose equality |
| `===` | Strict equality |
| `!=` | Loose not equal |
| `!==` | Strict not equal |

---

## `==` vs `===`

### Loose Equality (`==`)

- Compares values only.
- Performs automatic type conversion.

```js
5 == "5"; // true
```

### Strict Equality (`===`)

- Compares value and type.
- No automatic type conversion.

```js
5 === "5"; // false
```

> Prefer `===` in modern JavaScript.

---

## `!=` vs `!==`

```js
5 != "5";   // false
5 !== "5";  // true
```

- `!=` → Loose not equal
- `!==` → Strict not equal

---

## Logical Operators

| Operator | Meaning |
| -------- | ------- |
| `&&` | AND |
| `||` | OR |
| `!` | NOT |

```js
true && false; // false
true || false; // true
!true;          // false
```

---

## Type Conversion

### Implicit Conversion

JavaScript converts types automatically.

```js
"10" + 5; // "105"
```

```js
"10" - 5; // 5
```

---

### Explicit Conversion

Programmer converts the type manually.

```js
Number("25");

String(100);

Boolean(1);
```

---

## Golden Rules

- Prefer `===` over `==`.
- Prefer `!==` over `!=`.
- `+` with a string performs concatenation.
- `-`, `*`, `/`, `%` convert numeric strings into numbers.
- `x++` → Use first, increment later.
- `++x` → Increment first, then use.

---

# JavaScript Fundamentals — Lesson 4 (Control Flow)

## Control Flow

Control flow determines the order in which statements execute.

---

## `if`

Runs code only when the condition is `true`.

```js
if (age >= 18) {
  console.log("Adult");
}
```

---

## `if...else`

Executes one block if the condition is true, otherwise another block.

```js
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

---

## `else if`

Used to check multiple conditions.

```js
if (marks >= 90) {
  console.log("A");
} else if (marks >= 80) {
  console.log("B");
} else {
  console.log("Fail");
}
```

JavaScript checks conditions from **top to bottom** and executes the **first true condition**.

---

## Nested `if`

An `if` inside another `if`.

```js
if (age >= 18) {
  if (hasCNIC) {
    console.log("Eligible");
  }
}
```

---

## `switch`

Useful when checking one variable against multiple fixed values.

```js
switch (day) {
  case 1:
    console.log("Monday");
    break;

  default:
    console.log("Invalid");
}
```

---

## `break`

Stops the execution of a `switch`.

Without `break`, JavaScript continues to the next case (**fall-through**).

---

## Ternary Operator

Short form of `if...else`.

```js
condition ? valueIfTrue : valueIfFalse;
```

Example

```js
console.log(age >= 18 ? "Adult" : "Minor");
```

---

## Truthy & Falsy

### Falsy Values (Only 8)

| Value |
| ----- |
| `false` |
| `0` |
| `-0` |
| `0n` |
| `""` |
| `null` |
| `undefined` |
| `NaN` |

Everything else is **truthy**.

### Common Truthy Values

| Value |
| ----- |
| `"Hello"` |
| `"0"` |
| `"false"` |
| `" "` |
| `1` |
| `-5` |
| `[]` |
| `{}` |
| `function(){}` |

---

## Interview Traps

```js
if ("false") {
  // Runs
}
```

Because `"false"` is a non-empty string.

```js
if ([]) {
  // Runs
}
```

Arrays are truthy.

```js
if ({}) {
  // Runs
}
```

Objects are truthy.

```js
if (" ") {
  // Runs
}
```

A string containing a space is not empty.

---

## Golden Rules

- Use `if` for one condition.
- Use `if...else` for two outcomes.
- Use `else if` for multiple conditions.
- Use `switch` for multiple fixed values.
- Use `break` unless fall-through is intentional.
- Memorize the **8 falsy values**.
- Everything else is truthy.
- `[]`, `{}`, `"false"` and `" "` are truthy.