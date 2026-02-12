# Basics - Questions and Answers

1. **What is TypeScript and why use it over JavaScript?**

   TypeScript is a strongly typed, object-oriented, compiled language developed by Microsoft. It is a superset of JavaScript, meaning all JS code is valid TS code.
   - **Why use it**: It adds static typing to JavaScript, which helps catch errors at compile-time rather than runtime, improves code maintainability, and provides better IDE tooling (autocompletion, refactoring).

---

2. **What are the benefits of using TypeScript?**
   - **Static Typing**: Detects type errors early.
   - **Better Tooling**: Improved IDE support (IntelliSense).
   - **Readability & Maintainability**: Clearer code structure and self-documenting types.
   - **Future JS Features**: Allows using ES Next features and transpiles them for older browsers.
   - **Easy Refactoring**: Safer to change large codebases.

---

3. **How does TypeScript compile to JavaScript?**

   TypeScript code is transpiled into JavaScript using the TypeScript Compiler (`tsc`). The compiler reads the `.ts` files, checks for type errors, and generates corresponding `.js` files based on the configuration in `tsconfig.json`.

---

4. **Explain `tsconfig.json` and its important options.**

   `tsconfig.json` is the configuration file for the TypeScript compiler.
   - **`target`**: Specifies the ECMAScript version (e.g., ES5, ES6, ESNEXT).
   - **`module`**: The module system (e.g., CommonJS, ESNext).
   - **`strict`**: Enables all strict type-checking options.
   - **`outDir`**: Redirect output structure to the directory.
   - **`rootDir`**: Specifies the root directory of input files.
   - **`lib`**: Library files to be included in the compilation.

---

5. **What is type inference in TypeScript?**

   Type inference is the ability of the TypeScript compiler to automatically determine the type of a variable based on its value if no explicit type is provided. For example, `let x = 10;` will infer `x` as a `number`.

---

6. **What is the `any` type and why should you avoid it?**

   The `any` type tells TypeScript to opt-out of type checking for that variable. It can hold any value.
   - **Avoid it because**: It defeats the purpose of using TypeScript. It bypasses compile-time checks, leading to potential runtime errors and making the codebase harder to maintain.

---

7. **Explain `unknown` vs `any`.**
   - **`any`**: Allows everything. You can call any method or access any property on it.
   - **`unknown`**: A "safe" version of `any`. You can't perform operations on an `unknown` value until you narrow its type (using type guards or assertions).

---

8. **What is `never` type and when is it used?**

   The `never` type represents values that will never occur.
   - **Usage**: Typically used for functions that always throw an exception or functions that have an infinite loop. It's also used in exhaustive type checking in switch/if-else blocks.

---

9. **What is `void` type?**

   `void` is used to indicate that a function does not return a value. In JavaScript, such a function actually returns `undefined`.
