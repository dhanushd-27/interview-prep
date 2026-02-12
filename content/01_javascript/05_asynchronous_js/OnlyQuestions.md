# Javascript Asynchronous

## Beginner

### 1. The Event Loop (High Level)

**Question:**
In simple terms, how does JavaScript handle asynchronous operations (like fetching data) if it is single-threaded?

### 2. Promises vs Callbacks

**Question:**
Why do we prefer Promises (and async/await) over callbacks?

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

### 2. Promise Combinators

**Question:**
You need to fetch data from 3 different APIs. You want to proceed as soon as **any one** of them returns a successful result. Which Promise method should you use?
What if you need **all** of them to succeed?

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

### 2. Implementing Promise.all()

**Question:**
Implement `Promise.all` from scratch. It should take an array of promises and return a single promise that resolves with an array of results, or rejects immediately if any promise fails.

### 3. Async Generators

**Question:**
How would you iterate over an async data stream (like paginated API responses) using `for await...of`?
