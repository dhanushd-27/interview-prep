# Advanced Types - Questions and Answers

1. **What are conditional types?**

   Conditional types allow you to select one of two possible types based on a condition expressed as a type relationship test.
   - **Syntax**: `T extends U ? X : Y`.
   - **Example**: `type IsString<T> = T extends string ? "yes" : "no";`.

---

2. **Explain mapped types.**

   Mapped types allow you to create new types based on the properties of an existing type. They "map" over the keys of an existing type and transform the values.
   - **Example**: `type MyReadonly<T> = { readonly [P in keyof T]: T[P] };`.

---

3. **What are template literal types?**

   Template literal types build on string literal types and have the ability to expand into many strings via unions.
   - **Example**: `type World = "world"; type Hello = `hello ${World}`;`.

---

4. **Explain utility types: `Partial`, `Required`, `Pick`, `Omit`.**
   - **`Partial<T>`**: Constructs a type with all properties of `T` set to optional.
   - **`Required<T>`**: Constructs a type with all properties of `T` set to required.
   - **`Pick<T, K>`**: Constructs a type by picking a set of properties `K` from `T`.
   - **`Omit<T, K>`**: Constructs a type by removing a set of properties `K` from `T`.

---

5. **What is `Record<K, T>`?**

   Constructs an object type whose property keys are `K` and whose property values are `T`.
   - **Example**: `Record<"a" | "b", number>` result in `{ a: number, b: number }`.

---

6. **Explain `Exclude` and `Extract` utility types.**
   - **`Exclude<T, U>`**: Excludes from `T` those types that are assignable to `U`.
   - **`Extract<T, U>`**: Extracts from `T` those types that are assignable to `U`.

---

7. **What is `ReturnType<T>`?**

   Constructs a type consisting of the return type of function `T`.
   - **Example**: `type T = ReturnType<() => string>; // string`.

---

8. **What is `Parameters<T>`?**

   Constructs a tuple type from the types used in the parameters of a function type `T`.

---

9. **Explain `NonNullable<T>`.**

   Constructs a type by excluding `null` and `undefined` from `T`.

---

10. **What is `Awaited<T>`?**

    Used to model operations like `await` in `async` functions, or the `.then()` method on Promises - specifically, the way that they recursively unwrap Promises.
