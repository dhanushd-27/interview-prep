# Basics - Questions and Answers

1. **What are the key features of Python?**
   - **Easy to learn and read**: Clear, simple syntax that resembles English.
   - **Interpreted**: Code is executed line-by-line.
   - **Dynamically Typed**: No need to declare variable types.
   - **Object-Oriented**: Supports classes and objects.
   - **Large Standard Library**: Provides modules for various tasks.
   - **High-level Language**: Manages memory and other low-level details.

---

2. **Explain the difference between lists and tuples.**
   - **Lists**: Mutable (can be changed). Defined with `[]`.
   - **Tuples**: Immutable (cannot be changed after creation). Defined with `()`. Tuples are generally faster and safer for data that shouldn't change.

---

3. **What are list comprehensions and how do you use them?**

   List comprehensions provide a concise way to create lists based on existing lists or iterables.
   - **Example**: `[x**2 for x in range(10) if x % 2 == 0]` creates a list of squares for even numbers from 0 to 9.

---

4. **How does Python handle memory management?**

   Python uses an automatic memory management system that includes:
   - **Reference Counting**: Keeps track of the number of references to an object. When the count reaches zero, the object is deallocated.
   - **Garbage Collector**: A cyclic garbage collector that identifies and cleans up objects with circular references that reference counting would miss.

---

5. **What is the difference between `deep copy` and `shallow copy`?**
   - **Shallow Copy**: Creates a new object but fills it with references to the original nested objects.
   - **Deep Copy**: Creates a new object and recursively creates copies of all nested objects. Changes to nested objects in the copy won't affect the original.

---

6. **Explain the purpose of `self` in Python classes.**

   `self` is a reference to the current instance of the class. It is used to access variables and methods associated with that specific object. It must be the first parameter of any instance method in a class.
