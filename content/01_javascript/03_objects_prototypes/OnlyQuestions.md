# Javascript Objects & Prototypes

## Beginner

### 1. Object Creation & Layout

**Question:**
How do you create an object in JavaScript?
Why is using `new Object()` generally discouraged compared to object literals?

### 2. Accessing Properties

**Question:**
What is the difference between `obj.key` and `obj['key']`? When _must_ you use the bracket notation?

## Intermediate

### 1. Prototype Chain

**Question:**
Explain how property lookup works in JavaScript. If I access `obj.toString()`, where does the engine find it?

### 2. Deep Equality

**Question:**
Why does `{ a: 1 } === { a: 1 }` return `false`? How would you check if they are equal?

### 3. Object.freeze vs Object.seal

**Question:**
You are building a configuration module that should not be modified at runtime. Should you use `Object.freeze` or `Object.seal`?

## Advanced

### 1. Prototypal Inheritance Mechanics

**Question:**
How would you implement inheritance without `class` or `extends`?
Specifically, create a `Dog` constructor that inherits from `Animal`.

### 2. Optimizing Object Lookup

**Question:**
Why is `delete obj.key` slower than `obj.key = undefined` in V8 (Chrome/Node.js)?

### 3. Mixins

**Question:**
How do you implement multiple inheritance in JavaScript (Mixins)?
