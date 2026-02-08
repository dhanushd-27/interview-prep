# Classes - Questions and Answers

1. **How do you define a class in TypeScript?**

   Similar to ES6 classes, but with additional type features for properties and methods.

   ```typescript
   class User {
     name: string;
     constructor(name: string) {
       this.name = name;
     }
     greet() {
       console.log(`Hello ${this.name}`);
     }
   }
   ```

---

2. **Explain access modifiers: `public`, `private`, `protected`.**
   - **`public`**: Default. Accessible from anywhere.
   - **`private`**: Only accessible within the class itself.
   - **`protected`**: Accessible within the class and its subclasses.

---

3. **What is the difference between `private` and `#` private fields?**
   - **`private`**: A TypeScript compile-time feature. It prevents access during development but doesn't offer true runtime privacy once transpiled to JS (unless using specific decorators or TS 3.8+ features).
   - **`#` (Hard Private)**: A JavaScript runtime feature (private class fields). It provides true privacy at runtime and cannot be accessed outside the class even in JS.

---

4. **Explain abstract classes and methods.**

   An `abstract` class cannot be instantiated directly. It serves as a base for other classes. `abstract` methods within an abstract class do not have an implementation and must be implemented in derived classes.

---

5. **What are static members?**

   Static properties and methods belong to the class itself, not to instances of the class. They are accessed using the class name.

---

6. **Explain parameter properties.**

   A shorthand syntax for declaring and initializing member variables in the constructor.

   ```typescript
   class User {
     constructor(
       public name: string,
       private age: number,
     ) {}
   }
   ```

   This is equivalent to declaring the properties and assigning them in the constructor body.

---

7. **How do classes implement interfaces?**

   A class can use the `implements` keyword to ensure it adheres to a specific interface's contract.

   ```typescript
   interface Greetable { greet(): void; }
   class User implements Greetable { greet() { ... } }
   ```
