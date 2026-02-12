# Error Handling & Strict Mode - Questions and Answers

1. **What are strict mode options in TypeScript?**

   TypeScript provides several "strict" checks that help catch more errors.
   - `strictNullChecks`: Disallows assigning `null` or `undefined` to types that don't explicitly include them.
   - `noImplicitAny`: Raises an error on expressions and declarations with an implied `any` type.
   - `strictFunctionTypes`: Ensures more correct checking of function parameters.
   - `strictPropertyInitialization`: Ensures class properties are initialized in the constructor.

---

2. **Explain `strictNullChecks`.**

   When enabled, it forces you to handle `null` and `undefined` explicitly. A variable of type `string` cannot hold `null`. You must change its type to `string | null` and check for nullability before accessing its properties.

---

3. **What is `noImplicitAny`?**

   It prevents the compiler from defaulting to `any` when it cannot infer a type. This forces developers to provide explicit types or refactor the code so types can be inferred, improving type safety.

---

4. **How do you handle nullable types?**
   - Use union types: `string | null`.
   - Use type guards: `if (val !== null) { ... }`.
   - Use optional chaining: `val?.property`.
   - Use nullish coalescing: `const x = val ?? defaultVal`.

---

5. **What is the non-null assertion operator (`!`)?**

   A way to tell the compiler "I know this value isn't null or undefined even though the type suggest it could be". It should be used sparingly as it bypasses safety checks.

---

6. **Explain optional chaining (`?.`) and nullish coalescing (`??`).**
   - **Optional Chaining (`?.`)**: Allows you to access nested properties without manually checking if each level exists. If a part of the chain is `null` or `undefined`, the whole expression returns `undefined`.
   - **Nullish Coalescing (`??`)**: A logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand. Unlike `||`, it doesn't return the right-hand side for other falsy values like `0` or `""`.
