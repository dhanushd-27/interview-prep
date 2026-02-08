# Interfaces - Questions and Answers

1. **How do you define an interface?**

   You use the `interface` keyword followed by the name and the shape of the object.

   ```typescript
   interface User {
     name: string;
     age: number;
   }
   ```

---

2. **Explain optional properties in interfaces.**

   You can make a property optional by adding a `?` after the property name. This means the object may or may not include that property.

   ```typescript
   interface User {
     name: string;
     email?: string; // Optional
   }
   ```

---

3. **What are readonly properties?**

   The `readonly` modifier prevents a property from being reassigned after it's initialized.

   ```typescript
   interface Point {
     readonly x: number;
     readonly y: number;
   }
   ```

---

4. **How do interfaces support function types?**

   Interfaces can describe function types by defining a call signature.

   ```typescript
   interface SearchFunc {
     (source: string, subString: string): boolean;
   }
   ```

---

5. **Explain interface inheritance/extension.**

   Interfaces can extend one or more other interfaces using the `extends` keyword, allowing you to compose complex shapes from simpler ones.

   ```typescript
   interface Shape {
     color: string;
   }
   interface Square extends Shape {
     sideLength: number;
   }
   ```

---

6. **What is declaration merging?**

   TypeScript automatically merges multiple interface declarations with the same name in the same scope into a single interface. This is unique to interfaces and doesn't work for type aliases.

---

7. **How do you define an interface for a class?**

   Use an interface to describe the public shape of a class. The class then uses the `implements` keyword to ensure it adheres to that shape.

   ```typescript
   interface Pingable {
     ping(): void;
   }
   class Sonar implements Pingable {
     ping() {
       console.log("ping!");
     }
   }
   ```
