# Basics - Questions and Answers

1. **What are the key features of the Go programming language?**
   - **Simplicity**: Minimalistic syntax and small language core.
   - **Strong Static Typing**: Catches errors at compile-time.
   - **Concurrency**: Built-in support via goroutines and channels.
   - **Fast Compilation**: Compiles directly to machine code.
   - **Garbage Collection**: Automatic memory management.

---

2. **How do you declare variables and constants in Go?**
   - **Variables**: `var name string = "Go"` or short declaration `name := "Go"`.
   - **Constants**: `const Pi = 3.14`. Constants cannot be declared using the `:=` syntax.

---

3. **What is the difference between an array and a slice?**
   - **Array**: Fixed length. Its size is part of its type (e.g., `[5]int`).
   - **Slice**: A flexible, dynamic view into an underlying array. Its length can change. Slices are much more common in Go.

---

4. **Explain structs and how they are used in Go.**

   Structs are collections of fields. They are used to group data together to create custom types. Go doesn't have classes; structs (with methods) are the way to implement object-oriented patterns.

   ```go
   type User struct { Name string; Age int }
   ```

---

5. **What are interfaces in Go and how are they implemented?**

   An interface is a set of method signatures. In Go, interfaces are implemented **implicitly**. If a type provides definitions for all the methods in an interface, it implements that interface. There is no `implements` keyword.

---

6. **Explain the purpose of `defer`, `panic`, and `recover`.**
   - **`defer`**: Schedules a function call to be run immediately before the surrounding function returns.
   - **`panic`**: Stops the ordinary flow of control and begins panicking.
   - **`recover`**: Regains control of a panicking goroutine. Only useful inside deferred functions.
