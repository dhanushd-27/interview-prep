# Enums - Questions and Answers

1. **What are enums in TypeScript?**

   Enums allow you to define a set of named constants. They can make it easier to document intent or create a set of distinct cases.

   ```typescript
   enum Direction {
     Up,
     Down,
     Left,
     Right,
   }
   ```

---

2. **Explain numeric vs string enums.**
   - **Numeric Enums**: The default. Values are auto-incremented from 0 (if not initialized). They support reverse mapping (you can get the name from the value).
   - **String Enums**: Each member must be initialized with a string literal. They provide better readability but do not support reverse mapping.

---

3. **What are const enums?**

   Const enums are completely removed during compilation and replaced by their literal values wherever they are used. This can improve performance and reduce the size of the generated JavaScript.

---

4. **When should you avoid using enums?**

   Enums in TypeScript add runtime overhead (except for const enums) and have some quirks with type safety (especially numeric enums). In many cases, **literal union types** (`type Direction = "Up" | "Down" | "Left" | "Right";`) are preferred as they are simpler, purely build-time, and offer better type safety.
