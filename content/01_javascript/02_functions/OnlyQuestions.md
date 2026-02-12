# Javascript Functions

## Beginner

### 1. Pure Functions

**Question:**
Refactor the following function to be a **Pure Function**. Why is it currently impure?

```javascript
let total = 0;

function addToTotal(amount) {
  total += amount;
  return total;
}
```

### 2. Higher-Order Functions

**Question:**
Write a function `createMultiplier(n)` that returns a new function. The returned function should take a number `x` and return `x * n`.

```javascript
const double = createMultiplier(2);
console.log(double(5)); // Should log 10
```

## Intermediate

### 1. Arrow Functions & `this` Context

**Question:**
You have a class component (or object) where a method loses its `this` context when passed as a callback.

```javascript
class ButtonHandler {
  constructor() {
    this.clicked = false;
  }

  handleClick() {
    this.clicked = true;
    console.log("Clicked:", this.clicked);
  }
}

const handler = new ButtonHandler();
const btn = document.querySelector("button");

// Problem: 'this' is undefined or the button element inside handleClick
btn.addEventListener("click", handler.handleClick);
```

How do you fix this? Explain why the arrow function solution works.

### 2. Function Currying

**Question:**
Write a practical `logger` function that uses currying. It should accept a log level (e.g., "INFO", "ERROR") first, and then the message.

**Goal:**

```javascript
const infoLog = logger("INFO");
infoLog("System started"); // Output: [INFO] System started
```

## Advanced

### 1. Memoization Implementation

**Question:**
Implement a generic `memoize` function that caches the results of expensive function calls.
Use `JSON.stringify` for the key. Why is this usually bad for production?

### 2. Debounce Implementation

**Question:**
Implement a `debounce` function. Explain how it works and where it is used.
