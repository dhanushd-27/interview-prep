# Decorators - Questions and Answers

1. **What are decorators in TypeScript?**

   Decorators are a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. They use the form `@expression`, where `expression` must evaluate to a function that will be called at runtime with information about the decorated declaration. Note: They require `experimentalDecorators` to be enabled in `tsconfig.json`.

---

2. **Explain class decorators.**

   A class decorator is declared just before a class declaration. It is applied to the constructor of the class and can be used to observe, modify, or replace a class definition.

---

3. **What are method decorators?**

   A method decorator is declared just before a method declaration. It is applied to the property descriptor for the method and can be used to observe, modify, or replace a method definition.

---

4. **Explain property and parameter decorators.**
   - **Property Decorators**: Declared before a property. They are useful for observing that a property of a specific name has been declared for a class.
   - **Parameter Decorators**: Declared before a parameter declaration. They are used to observe that a parameter has been declared on a method.

---

5. **What is decorator composition?**

   Multiple decorators can be applied to a single declaration. When composed, their expressions are evaluated top-to-bottom, but their results are called as functions bottom-to-top.
