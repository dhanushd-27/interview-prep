# Javascript Coding Challenges

## 1. Debounce (Intermediate)

**Goal:** Implement a debounce function that delays invoking a function until after `wait` milliseconds have elapsed since the last time it was invoked.

```javascript
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
```

## 2. Throttle (Intermediate)

**Goal:** Implement a throttle function that ensures a function is called at most once in a specified time period.

```javascript
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
```

## 3. Deep Clone (Advanced)

**Goal:** deeply clone an object, handling nested objects and arrays. _Bonus: Handle circular references._

```javascript
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;
  if (hash.has(obj)) return hash.get(obj); // Cyclic reference

  const result = Array.isArray(obj) ? [] : {};
  hash.set(obj, result);

  for (const key of Object.keys(obj)) {
    result[key] = deepClone(obj[key], hash);
  }
  return result;
}
```

## 4. Flatten Array (Intermediate)

**Goal:** Flatten a nested array to a specific depth.

```javascript
function flat(arr, depth = 1) {
  if (depth < 0) return arr.slice();
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) && depth > 0
        ? acc.concat(flat(val, depth - 1))
        : acc.concat(val),
    [],
  );
}
```

## 5. Promise.all (Advanced)

**Goal:** Polyfill `Promise.all`.

```javascript
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;
    if (promises.length === 0) resolve(results);

    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then((val) => {
          results[i] = val;
          completed++;
          if (completed === promises.length) resolve(results);
        })
        .catch(reject);
    });
  });
}
```
