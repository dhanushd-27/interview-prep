# Rendering Strategies - Questions and Answers

1. **Explain Static Site Generation (SSG) in Next.js.**

   SSG generates the HTML for a page at **build time**. The pre-rendered HTML is then reused on each request. It's the most performant strategy as pages can be cached by a CDN. In the App Router, any segment that doesn't use dynamic functions or uncached data is automatically static.

---

2. **What is Server-Side Rendering (SSR) and when is it preferred?**

   SSR generates the HTML for a page on **each request**. It's preferred for pages that show frequently updated data or information that is unique to the logged-in user. In the App Router, using `fetch` with `cache: 'no-store'` or dynamic functions like `cookies()` or `headers()` triggers SSR.

---

3. **How does Incremental Static Regeneration (ISR) work?**

   ISR allows you to update static pages after you've built your site. You can re-render a single page without needing to rebuild the entire site. It provides the benefits of static (fast speed) with the flexibility of dynamic (fresh data).

---

4. **What are Client Components and Server Components?**
   - **Server Components (Default)**: Rendered on the server. They don't send their code to the client, reducing bundle size. They can't use state, effects, or browser APIs.
   - **Client Components**: Opt-in using the `'use client'` directive. They are pre-rendered on the server and hydrated on the client. They can use Hooks and browser APIs.

---

5. **When should you use `'use client'`?**

   Use it only when necessary:
   - When using Hooks (`useState`, `useEffect`, etc.).
   - When using browser APIs (like `window` or `document`).
   - When adding event listeners (`onClick`, etc.).
   - When using certain third-party libraries that rely on client-side state or context.
