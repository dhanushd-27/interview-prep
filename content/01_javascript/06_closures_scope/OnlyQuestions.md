# Javascript Closures & Scope

## Beginner

### 1. Scope Types

**Question:**
What are the three main types of scope in JavaScript? Give a brief example of each.

### 2. Closure Definition

**Question:**
In your own words, what is a closure?

## Intermediate

### 1. Data Privacy

**Question:**
Using a closure, create a function `createSecret(secret)` that returns an object with two methods: `getSecret()` and `setSecret(newSecret)`. The secret variable itself should not be directly accessible.

### 2. Closure in Loops

**Question:**
Explain why the following code logs `3, 3, 3` instead of `0, 1, 2`. How does changing `var` to `let` fix it in terms of scope/closure?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

## Advanced

### 1. Memory Leaks with Closures

**Question:**
How can closures cause memory leaks in JavaScript? What is the role of the Garbage Collector in this context?

### 2. Practical Hooks

**Question:**
Implement a custom hook `useCounter` (in plain JS or React-like syntax) using closures that exposes `count`, `increment`, and `decrement`, but does not allow direct modification of `count`.
