# Javascript Fundamentals

## Beginner

### 1. Data Types & Type Mixing

**Question:**
Review the following code snippet. What will be logged to the console and why? How would you fix the error if one occurs?

```javascript
const bigIntVal = 10n;
const numVal = 20;

console.log(bigIntVal + numVal);
```

### 2. Truthy & Falsy Values

**Question:**
You are reviewing a pull request with this configuration logic:

```javascript
// userSettings.timeout is 0 (intentional 0ms timeout)
const timeout = userSettings.timeout || 5000;
```

What is the potential bug here? How would you fix it to respect the user's intent?

### 3. Variables: var vs let/const

**Question:**
What is the output of the following code? Refactor it using modern JavaScript (`let` or `const`) to log `0, 1, 2` sequentially.

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

## Intermediate

### 1. Scope & Variable Tracing

**Question:**
Consider the following code. What will be logged to the console at line A and line B? Explain your reasoning.

```javascript
let x = 10;

function outer() {
  let x = 20;

  function inner() {
    x++;
    let x = 30; // Line A (Assume executed)
    console.log(x);
  }

  inner();
  console.log(x); // Line B
}
```

### 2. Type Coercion in APIs

**Question:**
You are consuming a third-party API that returns numerical IDs as strings (e.g., `"123"`). You need to use these IDs for calculations.
Which method would you use to convert them: `Number()`, `parseInt()`, or the unary plus `+`? What are the edge cases for each?

### 3. The "Temporal Dead Zone"

**Question:**
Review this snippet. Why does function `b` work, but `a` fails?

```javascript
b(); // Works
a(); // ReferenceError

const a = () => console.log("a");
function b() {
  console.log("b");
}
```
