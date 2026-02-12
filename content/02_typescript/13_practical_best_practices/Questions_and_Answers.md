# Practical & Best Practices - Questions and Answers

1. **How do you type React components in TypeScript?**
   - **Functional Components**: Use `React.FC<Props>` or define the types for the props directly in the function signature (preferred).
     ```typescript
     const MyComponent = ({ name }: { name: string }) => { ... };
     ```
   - **Hooks**: Hooks like `useState` can be typed using generics: `const [count, setCount] = useState<number>(0);`.

---

2. **How do you type event handlers?**

   React provides built-in types for different event kinds.
   - **Example**: `onChange: (event: React.ChangeEvent<HTMLInputElement>) => void`.

---

3. **Explain typing for async functions and Promises.**

   Async functions always return a `Promise`. You specify the type of value the promise resolves to.
   - **Example**: `async function fetchData(): Promise<UserData> { ... }`.

---

4. **How do you type API responses?**

   Define interfaces or types that match the shape of the JSON returned by the API. Use these types when fetching data to ensure type safety throughout the data flow.

---

5. **What are branded/nominal types?**

   TypeScript's type system is structural (if two types have the same shape, they are the same type). Branded types (or nominal types) use a trick (like adding a `__brand` property) to make types with the same structure distinct.
   - **Example**: `type UserId = number & { __brand: "UserId" };`.

---

6. **How do you make a type immutable?**
   - Use the `readonly` modifier for properties.
   - Use `Readonly<T>` utility type.
   - Use `as const` for literals.
   - Use `ReadonlyArray<T>`.

---

7. **What is the `satisfies` operator?**

   Introduced in TS 4.9, `satisfies` allows you to validate that an expression matches a type without changing the inferred type of that expression. This is useful for keeping the most specific inferred type while ensuring it adheres to a general contract.
