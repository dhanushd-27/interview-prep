# REST APIs with Express - Questions and Answers

1. **What is Express.js and what are its key features?**

   Express is a minimal and flexible Node.js web application framework.
   - **Key Features**: Robust routing, middleware support, easy integration with template engines, and simplified request/response handling.

---

2. **How do you define routes in Express?**

   Routes are defined using methods on the `app` instance that correspond to HTTP verbs.

   ```javascript
   app.get('/users', (req, res) => { ... });
   app.post('/users', (req, res) => { ... });
   ```

---

3. **What is middleware in the context of Express?**

   Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. They can execute code, modify the request/response, end the cycle, or call the next middleware.

---

4. **Explain the difference between `app.use()` and specific route methods like `app.get()`.**
   - **`app.use()`**: Registers middleware that runs for **every** request that matches the path (or all requests if no path is provided), regardless of the HTTP method.
   - **`app.get()`**: Only runs for GET requests to the specific path.

---

5. **How do you handle request parameters (query, params, body)?**
   - **`req.query`**: For URL query strings (e.g., `?id=1`).
   - **`req.params`**: For dynamic route segments (e.g., `/:id`).
   - **`req.body`**: For data sent in the request body (requires middleware like `express.json()`).
