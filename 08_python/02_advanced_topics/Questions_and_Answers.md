# Advanced Topics - Questions and Answers

1. **What are decorators and how do you create one?**

   A decorator is a function that takes another function and extends its behavior without explicitly modifying it. They use the `@decorator_name` syntax.

   ```python
   def my_decorator(func):
       def wrapper():
           print("Before function")
           func()
           print("After function")
       return wrapper

   @my_decorator
   def say_hello(): print("Hello!")
   ```

---

2. **Explain generators and the `yield` keyword.**

   Generators are functions that return an iterator. They use the `yield` keyword to return values one at a time, pausing the function's execution and saving its state. They are memory-efficient as they generate values on the fly.

---

3. **What are context managers and the `with` statement?**

   Context managers allow you to allocate and release resources precisely when you want to. The most common use is the `with` statement, which ensures that resources like file streams or database connections are properly closed even if an exception occurs.

---

4. **How do you handle multiple inheritance and what is MRO?**

   Python supports multiple inheritance, allowing a class to inherit from multiple parent classes. **Method Resolution Order (MRO)** is the order in which Python looks for a method in a hierarchy of classes. It uses the C3 linearization algorithm.

---

5. **What are `*args` and `**kwargs`?\*\*
   - **`*args`**: Allows a function to accept any number of positional arguments (passed as a tuple).
   - **`**kwargs`\*\*: Allows a function to accept any number of keyword arguments (passed as a dictionary).

---

6. **Explain the difference between `@staticmethod` and `@classmethod`.**
   - **`@staticmethod`**: A method that doesn't receive an implicit first argument (neither `self` nor `cls`). It behaves like a regular function but lives within the class's namespace.
   - **`@classmethod`**: Receives the class as the first argument (`cls`) instead of an instance. It's often used for factory methods.
