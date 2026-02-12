# Modules & Namespaces - Questions and Answers

1. **What are ES modules in TypeScript?**

   TypeScript follows the ES2015 module specification. Files containing an `import` or `export` at the top level are considered modules. Otherwise, they are globally scoped.

---

2. **Explain `import` and `export` syntax.**
   - **`export`**: Used to make variables, functions, or classes available to other modules.
   - **`export default`**: Each module can have one default export.
   - **`import`**: Used to pull in exports from other modules.

---

3. **What are namespaces and when to use them?**

   Namespaces are a TypeScript-specific way to organize code and avoid name collisions in the global scope. They are largely superseded by ES modules but are still useful for defining types in legacy applications or grouping related types logically in declaration files.

---

4. **What is declaration merging with modules?**

   You can extend existing modules by declaring a module with the same name and adding new declarations (like adding properties to an external library's interface).

---

5. **Explain ambient modules.**

   Ambient modules are used to describe the shape of libraries not written in TypeScript. They are defined using the `declare module "module-name"` syntax in `.d.ts` files.
