# Advanced Animations - Questions and Answers

1. **How do you integrate Framer Motion with Tailwind CSS?**

   You use the `motion` component from `framer-motion` and apply Tailwind classes for styling (layouts, colors, spacing). The animation logic (variants, transitions) is handled via motion props like `initial`, `animate`, and `whileHover`.

---

2. **What are layout animations in Framer Motion?**

   By adding the `layout` prop to a `motion` component, Framer Motion will automatically animate any changes to its layout (position or size) that occur when the component rerenders. This works even if the change is triggered by a parent's flexbox or grid adjustment.

---

3. **How do you handle orchestrations (staggerChildren, delayChildren)?**

   Orchestration is handled via the `transition` prop within variants. `staggerChildren` allows child components with variants to animate sequentially with a delay between them. `delayChildren` specifies a delay before child animations start.

---

4. **What is `AnimatePresence` and when do you use it?**

   `AnimatePresence` allows components to animate out when they're removed from the React tree. It's essential for exit animations. Any child `motion` component with an `exit` prop will triggered when it leaves.

---

5. **How do you create reusable animated components using Tailwind and Motion?**

   By creating a wrapper component that accepts `children` and `className`, and uses a `motion.div` (or other element) internally. You can pass motion-specific props or define standard animation variants inside the component to keep the UI consistent.
