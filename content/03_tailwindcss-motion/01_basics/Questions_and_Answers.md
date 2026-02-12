# Basics - Questions and Answers

1. **What are the core transition utilities in Tailwind CSS?**

   Tailwind provides several transition utilities like `transition-all`, `transition-colors`, `transition-opacity`, `transition-shadow`, and `transition-transform`. These use the `transition-property` CSS property.

---

2. **How do you handle hover, focus, and active states for animations in Tailwind?**

   You use state modifiers like `hover:`, `focus:`, and `active:`. For example, `hover:scale-110` combined with `transition` and `duration-300` creates a smooth scale effect on hover.

---

3. **What is the difference between `transition`, `transform`, and `animate` in Tailwind?**
   - **`transition`**: Specifies which properties should animate and how.
   - **`transform`**: Applies 2D/3D transformations (scale, rotate, translate). In Tailwind v3+, transforms are enabled by default with specific utilities like `scale-110`.
   - **`animate`**: Applies pre-defined keyframe animations (like `animate-spin`, `animate-bounce`).

---

4. **How do you customize keyframe animations in `tailwind.config.js`?**

   In the `extend` section of your config, you define `keyframes` and then reference them in the `animation` section.

   ```javascript
   theme: {
     extend: {
       keyframes: {
         wiggle: {
           '0%, 100%': { transform: 'rotate(-3deg)' },
           '50%': { transform: 'rotate(3deg)' },
         }
       },
       animation: {
         wiggle: 'wiggle 1s ease-in-out infinite',
       }
     }
   }
   ```

---

5. **How does the `duration`, `delay`, and `ease` utility work?**
   - **`duration-{ms}`**: Sets the `transition-duration`.
   - **`delay-{ms}`**: Sets the `transition-delay`.
   - **`ease-{type}`**: Sets the `transition-timing-function` (e.g., `ease-in`, `ease-out`, `ease-in-out`, `ease-linear`).
