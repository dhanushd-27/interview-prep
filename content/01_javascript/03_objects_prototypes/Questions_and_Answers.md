# Javascript Objects & Prototypes

## Beginner

### 1. Object Creation & Layout

**Question:**
How do you create an object in JavaScript?
Why is using `new Object()` generally discouraged compared to object literals?

**Answer:**
**Ways to create:**

1. **Object Literal:** `const obj = { key: "value" };` (Preferred)
2. **`Object.create()`:** `const obj = Object.create(null);`
3. **Constructor:** `function Person() {}; const p = new Person();`
4. **`new Object()`:** `const obj = new Object();`

**Why Literal is better:**

- More concise and readable.
- Potentially faster (engine optimizations).
- Avoids scope lookup overhead for `Object` constructor.

### 2. Accessing Properties

**Question:**
What is the difference between `obj.key` and `obj['key']`? When _must_ you use the bracket notation?

**Answer:**

- **Dot notation (`obj.key`)**: Cleaner, easier to read.
- **Bracket notation (`obj['key']`)**: Allows dynamic access.

**Must use brackets when:**

1. The key is stored in a variable: `obj[myKeyVar]`.
2. The key contains special characters or spaces: `obj["user name"]`.
3. The key starts with a number.

## Intermediate

### 1. Prototype Chain

**Question:**
Explain how property lookup works in JavaScript. If I access `obj.toString()`, where does the engine find it?

**Answer:**

1. The engine checks if `obj` has its own property named `toString`.
2. If not, it looks at `obj.__proto__` (the prototype).
3. If not found there, it looks at `obj.__proto__.__proto__`.
4. This continues until it finds the property or reaches `null` (end of chain).

`toString` is usually found on `Object.prototype`.

### 2. Deep Equality

**Question:**
Why does `{ a: 1 } === { a: 1 }` return `false`? How would you check if they are equal?

**Answer:**
**Reason:**
Objects are reference types. The `===` operator compares memory references, not content. Two different objects in memory are never equal, even if their contents are identical.

**How to Check:**

1. **JSON.stringify:** `JSON.stringify(a) === JSON.stringify(b)` (Quick, but fails on order/undefined).
2. **Recursive Check:** Iterate keys and recursively compare values.
3. **Libraries:** `lodash.isEqual`.

### 3. Object.freeze vs Object.seal

**Question:**
You are building a configuration module that should not be modified at runtime. Should you use `Object.freeze` or `Object.seal`?

**Answer:**
Use `Object.freeze()`.

- **`Object.freeze()`**: Makes the object immutable. No adding/removing/changing properties.
- **`Object.seal()`**: Prevents adding/removing properties, but allows modifying existing values.

## Advanced

### 1. Prototypal Inheritance Mechanics

**Question:**
How would you implement inheritance without `class` or `extends`?
Specifically, create a `Dog` constructor that inherits from `Animal`.

**Answer:**

```javascript
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
};

function Dog(name) {
  Animal.call(this, name); // Call parent constructor
}

// Inherit prototype
Dog.prototype = Object.create(Animal.prototype);
// Reset constructor
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function () {
  console.log(`${this.name} barks.`);
};
```

### 2. Optimizing Object Lookup

**Question:**
Why is `delete obj.key` slower than `obj.key = undefined` in V8 (Chrome/Node.js)?

**Answer:**
**Hidden Classes (Shapes):**
V8 optimizes object property access by creating "Hidden Classes" based on the object's structure.

- Adding properties in the same order reuses hidden classes.
- **Deleting** a property changes the object's shape, forcing V8 to abandon the optimized hidden class and fall back to slower dictionary-mode lookup.
- Setting to `undefined` keeps the shape intact, maintaining fast property access.

### 3. Mixins

**Question:**
How do you implement multiple inheritance in JavaScript (Mixins)?

**Answer:**
JavaScript does not support multiple inheritance directly. You use **Mixins**—functions that copy properties from one object to another.

```javascript
const CanFly = {
  fly() {
    console.log("Flying");
  },
};

const CanSwim = {
  swim() {
    console.log("Swimming");
  },
};

function Duck() {}
Object.assign(Duck.prototype, CanFly, CanSwim);
```
