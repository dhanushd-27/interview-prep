# Type System - Questions and Answers

1. **What are primitive types in TypeScript?**

   TypeScript supports the same primitives as JavaScript: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`.

---

2. **Explain union types and intersection types.**
   - **Union Types (`|`)**: Allows a variable to be one of several types. E.g., `string | number` means the value can be either a string or a number.
   - **Intersection Types (`&`)**: Combines multiple types into one. The resulting type has all the members of all the combined types. Often used with interfaces or objects.

---

3. **What are literal types?**

   Literal types allow you to specify exact values that a variable can hold.
   - **Example**: `let color: "red" | "blue";`. Here, `color` can only be exactly the string `"red"` or `"blue"`.

---

4. **Explain type aliases vs interfaces.**
   - **Interface**: Primarily for defining the shape of an object or class. They support declaration merging and extension via `extends`.
   - **Type Alias**: Can define any type, including primitives, unions, tuples, etc. They use `&` for intersection but do not support declaration merging.

---

5. **When should you use `type` vs `interface`?**
   - Use **Interface** when defining objects, classes, or when you need declaration merging (e.g., extending a library's global object).
   - Use **Type Alias** for simpler types, unions, intersections, tuples, or aliases for primitives.

---

6. **What are tuple types?**

   A tuple is an array with a fixed number of elements whose types are known but need not be the same.
   - **Example**: `let x: [string, number] = ["hello", 10];`.

---

7. **Explain `readonly` modifier.**

   `readonly` is used to make properties of an object immutable after initialization. It can be used in interfaces, types, and classes.

---

8. **What are index signatures?**

   Index signatures allow you to define the types for dynamic property keys in an object.
   - **Example**: `interface Dictionary { [key: string]: number; }`. This means any string key will have a number value.

---

9. **Explain `keyof` operator.**

   The `keyof` operator takes an object type and produces a string or numeric literal union of its keys.
   - **Example**: `type Point = { x: number, y: number }; type K = keyof Point; // "x" | "y"`.

---

10. **What is `typeof` operator in TypeScript?**

    In a type context, `typeof` allows you to refer to the type of a variable or property.
    - **Example**: `const f = () => ({ x: 1 }); type FType = typeof f;`.
