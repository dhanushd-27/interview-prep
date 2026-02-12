# Routing - Questions and Answers

1. **What is the difference between the Pages Router and the App Router in Next.js?**
   - **Pages Router**: The original router where each file in `pages/` becomes a route. It uses Page-level data fetching (like `getStaticProps`).
   - **App Router**: Introduced in Next.js 13, it uses React Server Components and is located in the `app/` directory. It supports more granular layouts, loading states, and error handling at the folder level.

---

2. **How do you define dynamic routes in the App Router?**

   Dynamic segments are created by wrapping a folder's name in square brackets: `[id]`. For example, `app/blog/[id]/page.js` matches `/blog/1`, `/blog/abc`, etc.

---

3. **Explain the purpose of `layout.js`, `page.js`, and `loading.js`.**
   - **`page.js`**: The UI unique to a route.
   - **`layout.js`**: Shared UI for a segment and its children. Layouts preserve state and don't re-render on navigation.
   - **`loading.js`**: Automatically wraps the page or child layout in a React Suspense boundary, showing the provided UI while the segment finishes loading.

---

4. **How does the `Link` component optimize navigation?**

   The `Link` component performs **prefetching** in the background as they appear in the user's viewport. It also enables client-side navigation, meaning only the necessary data is fetched rather than a full page reload, resulting in a faster, "app-like" experience.

---

5. **What are Parallel Routes and Intercepting Routes?**
   - **Parallel Routes**: Allow you to simultaneously or conditionally render one or more pages in the same layout (e.g., a dashboard with separate slots for analytics and team).
   - **Intercepting Routes**: Allow you to load a route from another part of your application within the current layout (e.g., opening a photo in a modal while keeping the feed visible behind it).
