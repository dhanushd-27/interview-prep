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

**Answer:**
**Why Impure:**

1. It modifies an external variable (`total`). This is a **side effect**.
2. It depends on external state. calling `addToTotal(5)` twice yields different results (`5`, then `10`).

**Refactored (Pure):**
A pure function depends only on its inputs and returns a new value without side effects.

```javascript
function add(currentTotal, amount) {
  return currentTotal + amount;
}
```

### 2. Higher-Order Functions

**Question:**
Write a function `createMultiplier(n)` that returns a new function. The returned function should take a number `x` and return `x * n`.

```javascript
const double = createMultiplier(2);
console.log(double(5)); // Should log 10
```

**Answer:**
This demonstrates a **Closure** and a **Higher-Order Function**.

```javascript
function createMultiplier(n) {
  return function (x) {
    return x * n;
  };
}
// Arrow function version:
// const createMultiplier = (n) => (x) => x * n;
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

**Answer:**
**Fix 1 (Bind in Constructor):**
`this.handleClick = this.handleClick.bind(this);`

**Fix 2 (Class Fields / Arrow Function):**

```javascript
handleClick = () => {
  this.clicked = true;
};
```

**Reason:**
Standard functions have their own `this` context determined by _how_ they are called. When passed as a callback, the browser calls it with `this` set to the element (or undefined).
**Arrow functions** do not have their own `this`; they inherit it lexically from the scope they were defined in (the class instance).

### 2. Function Currying

**Question:**
Write a practical `logger` function that uses currying. It should accept a log level (e.g., "INFO", "ERROR") first, and then the message.

**Goal:**

```javascript
const infoLog = logger("INFO");
infoLog("System started"); // Output: [INFO] System started
```

**Answer:**

```javascript
const logger = (level) => (message) => {
  console.log(`[${level}] ${message}`);
};
```

This pattern allows partial application—configuring a generic function once to create specialized versions.

## Advanced

### 1. Memoization Implementation

**Question:**
Implement a generic `memoize` function that caches the results of expensive function calls.
Use `JSON.stringify` for the key. Why is this usually bad for production?

**Answer:**

```javascript
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
```

**Why Bad for Production:**

1. **Memory Leak:** The cache grows indefinitely. We need an eviction strategy (LRU) or `WeakMap`.
2. **Speed:** `JSON.stringify` is slow (O(n)).
3. **Values:** It fails on non-serializable arguments (functions, circular refs).

### 2. Debounce Implementation

**Question:**
Implement a `debounce` function. Explain how it works and where it is used.

**Answer:**
Debouncing ensures a function is only executed after a certain amount of time has passed since it was last invoked. Useful for search inputs to prevent API spam.

```javascript
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId); // Cancel previous timer
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
```
