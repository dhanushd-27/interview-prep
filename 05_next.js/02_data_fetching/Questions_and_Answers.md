# Data Fetching - Questions and Answers

1. **How do you fetch data in Server Components?**

   In the App Router, you can use `async`/`await` directly inside your Server Components. Next.js extends the native `fetch` API to provide automatic request memoization and caching.

   ```javascript
   async function MyComponent() {
     const res = await fetch("https://api.example.com/data");
     const data = await res.json();
     return <div>...</div>;
   }
   ```

---

2. **Explain the difference between `fetch` with `{ cache: 'force-cache' }` and `{ cache: 'no-store' }`.**
   - **`force-cache` (Default)**: Next.js looks for a matching request in its Data Cache. If there is a match and it is fresh, it will be returned. This is equivalent to Static Site Generation (SSG).
   - **`no-store`**: Next.js fetches the resource from the remote server on every request without looking in the cache. This is equivalent to Server-Side Rendering (SSR).

---

3. **What is "Revalidation" (ISR) and how do you implement it in the App Router?**

   Revalidation is the process of purging the Data Cache and re-fetching the latest data.
   - **Background Revalidation**: Use `next: { revalidate: 60 }` in the fetch options to revalidate every 60 seconds.
   - **On-demand Revalidation**: Use `revalidatePath` or `revalidateTag` inside a Server Action or Route Handler to trigger a revalidation based on an event (like a CMS update).

---

4. **How do you fetch data on the Client in Next.js?**

   For client-side data fetching, it's recommended to use a library like **SWR** or **TanStack Query**. These libraries handle caching, revalidation, and loading states more effectively than `useEffect`.

---

5. **What are Server Actions and when should you use them?**

   Server Actions are asynchronous functions that are executed on the server. They can be invoked from both Client and Server Components to handle form submissions and data mutations. They reduce the amount of client-side JavaScript and simplify the code by eliminating the need to create manual API endpoints for every action.
