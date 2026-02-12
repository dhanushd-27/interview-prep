# Coding Challenges - Questions and Answers

1. **Create a generic function that returns the first element of an array.**

   ```typescript
   function firstElement<T>(arr: T[]): T | undefined {
     return arr[0];
   }
   ```

---

2. **Write a type that makes all properties of an object optional recursively (DeepPartial).**

   ```typescript
   type DeepPartial<T> = {
     [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
   };
   ```

---

3. **Create a type that extracts all keys of an object that have string values.**

   ```typescript
   type StringKeys<T> = {
     [K in keyof T]: T[K] extends string ? K : never;
   }[keyof T];
   ```

---

4. **Write a type-safe function that merges two objects.**

   ```typescript
   function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
     return { ...obj1, ...obj2 };
   }
   ```

---

5. **Implement a type that converts a union to an intersection.**

   ```typescript
   type UnionToIntersection<U> = (
     U extends any ? (k: U) => void : never
   ) extends (k: infer I) => void
     ? I
     : never;
   // This is an advanced trick using function parameter contra-variance.
   ```

---

6. **Create a type that removes `readonly` from all properties.**

   ```typescript
   type CreateMutable<T> = {
     -readonly [P in keyof T]: T[P];
   };
   ```

---

7. **Write a generic type that gets the return type of an async function.**

   ```typescript
   type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
     ...args: any
   ) => Promise<infer R>
     ? R
     : never;
   ```

---

8. **Create a type-safe event emitter.**

   ```typescript
   class TypedEventEmitter<Events extends Record<string, any[]>> {
     private listeners: {
       [K in keyof Events]?: Array<(...args: Events[K]) => void>;
     } = {};

     on<K extends keyof Events>(
       event: K,
       listener: (...args: Events[K]) => void,
     ) {
       (this.listeners[event] ||= []).push(listener);
     }

     emit<K extends keyof Events>(event: K, ...args: Events[K]) {
       this.listeners[event]?.forEach((l) => l(...args));
     }
   }
   ```

---

9. **Implement a `Flatten` type for nested arrays.**

   ```typescript
   type Flatten<T> = T extends any[] ? Flatten<T[number]> : T;
   // Note: Simple recursive version. Real flat types are more complex in TS.
   ```

---

10. **Write a type that validates an object has at least one property.**

    ```typescript
    type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
      U[keyof U];
    ```
