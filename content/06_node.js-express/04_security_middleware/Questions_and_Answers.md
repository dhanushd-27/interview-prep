# Security & Middleware - Questions and Answers

1. **What is JWT and how do you use it for authentication in Express?**

   JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.
   - **Authentication Flow**: User logs in -> Server creates a JWT signed with a secret -> Client stores the token -> Client sends the token in the `Authorization` header for subsequent requests -> Server verifies the token.

---

2. **What are the common security vulnerabilities in Node.js applications?**
   - **Injection**: NoSQL injection, Command injection.
   - **Broken Authentication**: Weak token management.
   - **Sensitive Data Exposure**: Storing passwords in plain text.
   - **Cross-Site Scripting (XSS)**.
   - **Insecure Dependencies**: Using vulnerable npm packages.

---

3. **What is CORS and how do you handle it in Express?**

   Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin access to selected resources from a different origin. In Express, it's typically handled using the `cors` middleware.

---

4. **How does the `helmet` middleware improve security?**

   `helmet` is a collection of smaller middleware functions that set various HTTP headers to secure your app (e.g., `X-Content-Type-Options`, `X-Frame-Options`, `Content-Security-Policy`). It helps protect against common web attacks.

---

5. **How do you implement robust error-handling middleware?**

   In Express, error-handling middleware is defined with four arguments instead of three: `(err, req, res, next)`.

   ```javascript
   app.use((err, req, res, next) => {
     console.error(err.stack);
     res.status(500).send("Something broke!");
   });
   ```

   It should be the last middleware defined in the `app.js` or `main.js` file.
