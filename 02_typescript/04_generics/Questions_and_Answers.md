# Generics - Questions and Answers

1. **What are generics and why are they useful?**

   Generics allow you to create reusable components that can work with a variety of types rather than a single one. This provides type safety without sacrificing flexibility. They are useful for collections, API responses, and utility functions.

---

2. **How do you create a generic function?**

   You add a type parameter (usually `<T>`) between the function name and the parameter list.

   ```typescript
   function identity<T>(arg: T): T {
     return arg;
   }
   ```

---

3. **Explain generic constraints using `extends`.**

   Constraints allow you to restrict the types that can be passed as a generic parameter.

   ```typescript
   interface Lengthwise {
     length: number;
   }
   function logLength<T extends Lengthwise>(arg: T) {
     console.log(arg.length);
   }
   ```

---

4. **What are generic interfaces?**

   Like functions, interfaces can have type parameters.

   ```typescript
   interface Box<T> {
     contents: T;
   }
   ```

---

5. **Explain generic classes.**

   Classes can also have type parameters.

   ```typescript
   class GenericNumber<T> {
     zeroValue: T;
     add: (x: T, y: T) => T;
   }
   ```

---

6. **What is the difference between `T extends U` and `T = U`?**
   - **`T extends U`**: A constraint. `T` must be assignable to `U`.
   - **`T = U`**: A default type. If `T` is not provided, it defaults to `U`.

---

7. **What are default generic types?**

   Specifies a type to be used if the user doesn't provide one.

   ```typescript
   interface MyInterface<T = string> {
     data: T;
   }
   ```

---

8. **Explain the `infer` keyword.**

   Used within conditional types to extract types from other types. It allows you to declare a type variable that is "inferred" by TypeScript.
   - **Example**: `type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;`.
