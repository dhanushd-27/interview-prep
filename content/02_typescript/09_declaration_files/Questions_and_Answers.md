# Declaration Files - Questions and Answers

1. **What are `.d.ts` files?**

   These are declaration files that contain only type information (no actual implementation code). They describe the shape of existing JavaScript code to the TypeScript compiler.

---

2. **How do you create type declarations for a JavaScript library?**

   You create a `.d.ts` file and use `declare` statements to describe the library's functions, classes, and variables. For larger libraries, it's common to use modules and namespaces within the declaration file.

---

3. **What is `@types` and DefinitelyTyped?**

   DefinitelyTyped is a massive repository of high-quality TypeScript type definitions for thousands of JavaScript libraries. These definitions are published to npm under the `@types` scope (e.g., `@types/node`, `@types/react`).

---

4. **Explain `declare` keyword.**

   The `declare` keyword is used to tell TypeScript that a variable, function, or class exists in the environment (e.g., provided by a external script or the browser), even if it's not defined in the current TypeScript file. It's essential for ambient type declarations.

---

5. **What is triple-slash directive?**

   Triple-slash directives are single-line comments containing an XML tag. They are used as compiler directives, most commonly for including other declaration files (`/// <reference path="..." />`) or specifying types for a library (`/// <reference types="..." />`).
