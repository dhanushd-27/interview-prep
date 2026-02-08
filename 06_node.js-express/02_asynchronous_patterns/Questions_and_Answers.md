# Asynchronous Patterns - Questions and Answers

1. **How do you handle asynchronous code in Node.js?**

   Node.js provides several ways to handle asynchronous operations:
   - **Callbacks**: The traditional way (often using the error-first pattern).
   - **Promises**: Introduced in ES6, providing a cleaner way to chain async operations.
   - **Async/Await**: Syntactic sugar over Promises that makes async code look and behave more like synchronous code.
   - **Events (EventEmitter)**: For handling repetitive or continuous events.

---

2. **What is "Callback Hell" and how do you avoid it?**

   Callback Hell refers to heavily nested callbacks that make code unreadable and hard to maintain. You avoid it by:
   - Using Promises.
   - Using async/await.
   - Modularizing your code into smaller functions.

---

3. **Explain the difference between Promises and async/await.**
   - **Promises**: Objects representing the eventual completion (or failure) of an asynchronous operation and its resulting value. They use `.then()` and `.catch()`.
   - **Async/Await**: A way to write asynchronous code that reads like synchronous code. `async` functions always return a Promise, and `await` pauses the execution of the function until the Promise resolves.

---

4. **How do you handle errors in async/await?**

   Errors in async/await are handled using standard `try/catch` blocks. If an `await`ed Promise rejects, the error is caught by the `catch` block.

---

5. **What is the `EventEmitter` class and how is it used?**

   The `EventEmitter` is a core Node.js class that facilitates communication between objects. When an event is emitted, all functions attached to that specific event are called synchronously. It's the basis for many core Node.js modules like `http` (for server requests) and `fs` (for streams).
