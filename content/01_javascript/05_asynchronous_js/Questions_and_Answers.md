# Javascript Asynchronous

## Beginner

### 1. The Event Loop (High Level)

**Question:**
In simple terms, how does JavaScript handle asynchronous operations (like fetching data) if it is single-threaded?

**Answer:**
JavaScript delegates these operations (networking, timers) to the browser/environment (Web APIs). When the operation completes, a callback is placed in a **Queue**. The **Event Loop** constantly checks if the main Call Stack is empty; if so, it moves the callback from the Queue to the Stack for execution.

### 2. Promises vs Callbacks

**Question:**
Why do we prefer Promises (and async/await) over callbacks?

**Answer:**

1. **Avoids Callback Hell:** deeply nested callbacks are hard to read and debug.
2. **Standardized Error Handling:** `.catch()` or `try/catch` vs checking `err` in every callback.
3. **Composability:** `Promise.all`, `Promise.race` make coordinating multiple tasks easier.

## Intermediate

### 1. Async/Await & Error Handling

**Question:**
Refactor the following code to use `async/await`. Ensure you properly handle errors.

```javascript
function getUserData(id) {
  return fetch(`/api/user/${id}`)
    .then((res) => {
      if (!res.ok) throw new Error("Fetch failed");
      return res.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
}
```

**Answer:**

```javascript
async function getUserData(id) {
  try {
    const res = await fetch(`/api/user/${id}`);
    if (!res.ok) throw new Error("Fetch failed");

    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
```

**Key Points:**

- Use `try/catch` block for error handling.
- `await` pauses execution until the promise settles.
- Still need to check `res.ok` for fetch (as 404s don't throw).

### 2. Promise Combinators

**Question:**
You need to fetch data from 3 different APIs. You want to proceed as soon as **any one** of them returns a successful result. Which Promise method should you use?
What if you need **all** of them to succeed?

**Answer:**

- **Any one succeeds (First success):** use `Promise.any([p1, p2, p3])`. It ignores rejections unless _all_ fail.
- **First one settles (Success or Fail):** use `Promise.race([p1, p2, p3])`.
- **All must succeed:** use `Promise.all([p1, p2, p3])`. It fails fast if _any_ promise rejects.

## Advanced

### 1. Event Loop Internals (Microtasks vs Macrotasks)

**Question:**
What is the order of execution for the following code? explain why.

```javascript
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

**Answer:**
**Order:** `Start`, `End`, `Promise`, `Timeout`

**Why:**

1. `Start` and `End` are synchronous (Call Stack).
2. `Promise.then()` callbacks go to the **Microtask Queue**.
3. `setTimeout` callbacks go to the **Macrotask Queue** (Task Queue).
4. Examples of Microtasks: `Promise.then`, `queueMicrotask`, `MutationObserver`.
5. The Event Loop processes **all** microtasks before moving to the next macrotask. Thus, "Promise" logs before "Timeout".

### 2. Implementing Promise.all()

**Question:**
Implement `Promise.all` from scratch. It should take an array of promises and return a single promise that resolves with an array of results, or rejects immediately if any promise fails.

**Answer:**

```javascript
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    if (promises.length === 0) resolve(results);

    promises.forEach((p, index) => {
      // Ensure p is a promise
      Promise.resolve(p)
        .then((val) => {
          results[index] = val; // Store result at correct index
          completed++;
          if (completed === promises.length) resolve(results);
        })
        .catch((err) => reject(err)); // Fail fast
    });
  });
}
```

### 3. Async Generators

**Question:**
How would you iterate over an async data stream (like paginated API responses) using `for await...of`?

**Answer:**
You utilize Async Iterators/Generators.

```javascript
async function* fetchPages(url) {
  let nextPage = url;
  while (nextPage) {
    const response = await fetch(nextPage);
    const data = await response.json();
    nextPage = data.next;
    yield data.results;
  }
}

// Usage
// for await (const pageItems of fetchPages('/api/items')) { ... }
```
