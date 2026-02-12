# Core Concepts - Questions and Answers

1. **What is Node.js and why is it single-threaded but still performant?**

   Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser. It's single-threaded but uses a non-blocking, event-driven I/O model (powered by libuv) that allows it to handle thousands of concurrent connections efficiently by offloading I/O tasks to the operating system or worker threads.

---

2. **Explain the Node.js Event Loop.**

   The Event Loop is what allows Node.js to perform non-blocking I/O operations despite being single-threaded. It consists of multiple phases (timers, pending callbacks, idle/prepare, poll, check, close callbacks). It execution cycle continues as long as there are pending tasks.

---

3. **What is the difference between `process.nextTick()` and `setImmediate()`?**
   - **`process.nextTick()`**: Fires immediately after the current operation completes, before the next phase of the event loop begins.
   - **`setImmediate()`**: Fires in the "check" phase of the event loop, after the poll phase.

---

4. **Explain CommonJS (require) vs ES Modules (import).**
   - **CommonJS**: The original Node.js module system. Uses `require()` and `module.exports`. Modules are loaded synchronously.
   - **ES Modules**: The standard JavaScript module system. Uses `import` and `export`. Modules are loaded asynchronously (statically analyzed).

---

5. **What are Streams and what are their advantages?**

   Streams are objects that let you read data from a source or write data to a destination in a continuous fashion.
   - **Advantages**: Memory efficiency (you don't need to load the whole file into RAM) and time efficiency (you can start processing data as soon as you have some).

---

6. **What is the purpose of the `Buffer` class?**

   The `Buffer` class is used to handle binary data in Node.js. It represents a fixed-size chunk of memory outside the V8 heap and is commonly used when dealing with files, network streams, or other low-level I/O.
