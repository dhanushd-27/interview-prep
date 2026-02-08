# Concurrency - Questions and Answers

1. **What is a goroutine?**

   A goroutine is a lightweight thread managed by the Go runtime. You start one by using the `go` keyword before a function call. They use very little memory compared to OS threads.

---

2. **How do channels work in Go?**

   Channels are the pipes that connect concurrent goroutines. You can send values into channels from one goroutine and receive those values into another goroutine.

   ```go
   ch := make(chan int)
   ch <- 1 // send
   val := <-ch // receive
   ```

---

3. **What is the difference between buffered and unbuffered channels?**
   - **Unbuffered**: Sends and receives block until the other side is ready. This provides a guarantee of synchronization.
   - **Buffered**: Have a capacity. Sends only block when the buffer is full; receives only block when the buffer is empty.

---

4. **Explain the `select` statement.**

   The `select` statement lets a goroutine wait on multiple communication operations. It blocks until one of its cases can run, then it executes that case. It's like a `switch` but for channels.

---

5. **How do you handle synchronization without channels (WaitGroups, Mutexes)?**
   - **`sync.WaitGroup`**: Used to wait for a collection of goroutines to finish.
   - **`sync.Mutex`**: Used to provide mutual exclusion (locking) to protect shared data from concurrent access (data races).
