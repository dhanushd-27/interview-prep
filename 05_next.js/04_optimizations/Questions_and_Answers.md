# Optimizations - Questions and Answers

1. **How does the `next/image` component optimize images?**
   - **Resizing**: Automatically serves correctly sized images for each device.
   - **Format**: Converts images to modern formats like WebP or AVIF if supported.
   - **Lazy Loading**: Images are only loaded when they enter the viewport.
   - **Stability**: Prevents layout shift by requiring width and height (or `fill`).

---

2. **What are the benefits of using `next/font`?**

   It automatically optimizes fonts (including Google Fonts) and removes external network requests for better privacy and performance. It self-hosts the font files at build time and uses the `size-adjust` property to prevent layout shifts.

---

3. **How do you manage scripts using `next/script`?**

   The `next/script` component allows you to set the loading priority of third-party scripts.
   - `beforeInteractive`: Load before any Next.js code.
   - `afterInteractive` (Default): Load after some hydration.
   - `lazyOnload`: Load during idle time.
   - `worker`: (Experimental) Load in a web worker.

---

4. **What is dynamic import and how does it help performance?**

   Dynamic import (`next/dynamic`) is a way to load components only when they are needed. This reduces the initial bundle size and improves the Initial Page Load time. It's often used for large components like maps or charts that are not visible on the initial screen.

---

5. **How does Next.js handle middleware and what are its common use cases?**

   Middleware allows you to run code before a request is completed. It runs on the Edge.
   - **Use Cases**: Authentication checks, redirects, rewrites, bot detection, and A/B testing.
