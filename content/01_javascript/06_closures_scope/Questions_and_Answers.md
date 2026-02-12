# Javascript Closures & Scope

## Beginner

### 1. Scope Types

**Question:**
What are the three main types of scope in JavaScript? Give a brief example of each.

**Answer:**

1. **Global Scope:** Variables declared outside any function/block.
2. **Function Scope:** Variables declared inside a function (var, let, const).
3. **Block Scope:** Variables declared inside a `{}` block (let, const only).

```javascript
const globalVar = "Global";

function myFunc() {
  const funcVar = "Function Inte";
  if (true) {
    const blockVar = "Block";
  }
  // blockVar is not accessible here
}
```

### 2. Closure Definition

**Question:**
In your own words, what is a closure?

**Answer:**
A closure is a function that "remembers" the variables from the scope where it was created, even after that scope has finished executing.
It allows data encapsulation and private state.

## Intermediate

### 1. Data Privacy

**Question:**
Using a closure, create a function `createSecret(secret)` that returns an object with two methods: `getSecret()` and `setSecret(newSecret)`. The secret variable itself should not be directly accessible.

**Answer:**

```javascript
function createSecret(initialSecret) {
  let secret = initialSecret; // Private variable

  return {
    getSecret() {
      return secret;
    },
    setSecret(newSecret) {
      secret = newSecret;
    },
  };
}

const mySecret = createSecret("password123");
console.log(mySecret.secret); // undefined
console.log(mySecret.getSecret()); // "password123"
```

### 2. Closure in Loops

**Question:**
Explain why the following code logs `3, 3, 3` instead of `0, 1, 2`. How does changing `var` to `let` fix it in terms of scope/closure?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

**Answer:**

- **Var:** Has function scope. There is only **one** `i` variable shared across all iterations. By the time the timeouts run, the loop has finished and `i` is 3.
- **Let:** Has block scope. Each iteration creates a **new** binding (a new variable `i`) for that specific block. The closure captures this unique `i` for each timeout callback.

## Advanced

### 1. Memory Leaks with Closures

**Question:**
How can closures cause memory leaks in JavaScript? What is the role of the Garbage Collector in this context?

**Answer:**
Closures retain references to their outer scope variables. If a closure is stored globally or attached to a DOM node (that isn't cleaned up), the entire scope it closes over (and potentially large objects within it) cannot be garbage collected.

**Example:**

```javascript
function heavyClosure() {
  const hugeData = new Array(1000000).fill("X"); // Big memory

  return function logShort() {
    console.log("Short");
    // Even though we don't use 'hugeData' here,
    // older JS engines might keep it alive because it's in the scope chain.
    // Modern V8 is smarter, but referencing it accidentally would keep it.
  };
}
const leaky = heavyClosure();
```

### 2. Practical Hooks

**Question:**
Implement a custom hook `useCounter` (in plain JS or React-like syntax) using closures that exposes `count`, `increment`, and `decrement`, but does not allow direct modification of `count`.

**Answer:**

```javascript
const useCounter = (initial = 0) => {
  let count = initial; // Private state

  return {
    getCount: () => count,
    increment: () => {
      count++;
    },
    decrement: () => {
      count--;
    },
  };
};

const counter = useCounter(10);
counter.increment();
console.log(counter.getCount()); // 11
counter.count = 100; // Does nothing to internal state
```
