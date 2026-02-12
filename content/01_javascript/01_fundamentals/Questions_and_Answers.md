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

**Answer:**
This will throw a `TypeError: Cannot mix BigInt and other types, use explicit conversions`.

JavaScript does not automatically coerce `BigInt` to `Number` (or vice versa) in arithmetic operations to avoid precision loss.

**Fix:**
You must explicitly convert one of the operands:

```javascript
console.log(Number(bigIntVal) + numVal); // 30 (Loss of precision possible for huge BigInts)
// OR
console.log(bigIntVal + BigInt(numVal)); // 30n (Result is BigInt)
```

### 2. Truthy & Falsy Values

**Question:**
You are reviewing a pull request with this configuration logic:

```javascript
// userSettings.timeout is 0 (intentional 0ms timeout)
const timeout = userSettings.timeout || 5000;
```

What is the potential bug here? How would you fix it to respect the user's intent?

**Answer:**
The bug is that `0` is a **falsy** value in JavaScript.
If `userSettings.timeout` is `0`, the `||` (OR) operator will see it as false and return the default `5000`, ignoring the user's setting.

**Fix:**
Use the Nullish Coalescing Operator (`??`), which only falls back on `null` or `undefined`, allowing `0`, `false`, or `""` to pass through.

```javascript
const timeout = userSettings.timeout ?? 5000;
```

### 3. Variables: var vs let/const

**Question:**
What is the output of the following code? Refactor it using modern JavaScript (`let` or `const`) to log `0, 1, 2` sequentially.

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

**Answer:**
**Output:** `3, 3, 3`

**Reason:**
`var` is function-scoped (or global-scoped here), not block-scoped. By the time the `setTimeout` callbacks run (after 100ms), the loop has finished, and the single variable `i` has been incremented to `3`. All callbacks reference this same `i`.

**Fix:**
Use `let`, which is block-scoped. Each iteration of the loop creates a fresh binding for `i`.

```javascript
for (let i = 0; i < 3; i++) {
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

**Answer:**
**Output:** This code throws a `ReferenceError` before reaching Line A.

**Reason:**
Inside `inner()`, we declare `let x = 30`. This shadows the outer `x`. However, due to the **Temporal Dead Zone (TDZ)**, the variable `x` is hoisted to the top of the block but remains uninitialized until the declaration line is reached. Accessing `x` (in `x++`) _before_ the declaration throws an error.

**Follow-up:**
If we remove `let x = 30` from `inner`, then `x++` modifies the `x` from `outer` scope (closure). Line B would log `21`.

### 2. Type Coercion in APIs

**Question:**
You are consuming a third-party API that returns numerical IDs as strings (e.g., `"123"`). You need to use these IDs for calculations.
Which method would you use to convert them: `Number()`, `parseInt()`, or the unary plus `+`? What are the edge cases for each?

**Answer:**

- **`Number("123")`**: Strict. Returns `NaN` if the string contains non-numeric characters (except whitespace). `Number("")` is `0`.
- **`unary +`**: Same behavior as `Number()`.
- **`parseInt("123px")`**: Parses until it hits a non-digit. Can handle "123px" -> 123. `parseInt("")` is `NaN`.

**Recommendation:**
Use `Number()` (or `+`) if you expect strictly valid numbers and want to fail fast on garbage data. Use `parseInt()` (with radix 10) if you need to extract numbers from mixed strings, but be wary of leading whitespace or hex strings (historically).

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

**Answer:**

- **Function Declarations (`b`)** are fully hoisted. The entire function body is moved to the top of the scope, so it can be called before definition.
- **Variables declared with `const` (`a`)** are hoisted but stay in the **TDZ** until the line of code is executed. Calling `a` before initialization fails.
