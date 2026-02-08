# Type Guards & Narrowing - Questions and Answers

1. **What are type guards?**

   Type guards are expressions that perform a runtime check and guarantee the type of a variable within a specific scope. They allow TypeScript to "narrow" a more general type (like a union) to a more specific one.

---

2. **Explain `typeof` type guards.**

   Using the JavaScript `typeof` operator within an `if` or `switch` block. TypeScript understands that if `typeof x === "string"`, then `x` is a string within that block.

---

3. **Explain `instanceof` type guards.**

   The `instanceof` operator checks if an object is an instance of a specific class. TypeScript uses this to narrow types to specific class instances.

---

4. **What are custom type guards (type predicates)?**

   Functions that return a type predicate (e.g., `arg is T`). If the function returns `true`, TypeScript narrows the argument to type `T` in the following scope.

   ```typescript
   function isString(s: any): s is string {
     return typeof s === "string";
   }
   ```

---

5. **Explain discriminated unions.**

   A pattern where multiple types in a union have a common literal property (the "discriminant"). By checking that property, you can narrow the union to one specific member.

   ```typescript
   interface Circle {
     kind: "circle";
     radius: number;
   }
   interface Square {
     kind: "square";
     side: number;
   }
   type Shape = Circle | Square;
   // Checking shape.kind narrows the type.
   ```

---

6. **What is the `in` operator for type narrowing?**

   The `in` operator checks if a property exists on an object. TypeScript uses this to narrow a union of objects to those that possess the specified property.

---

7. **How does `as const` work?**

   `as const` (const assertion) tells TypeScript to treat a value as a literal type and make all its properties `readonly`. It prevents widening of types (e.g., from `"red"` to `string`).
