1. **What is the Event Loop in JavaScript?**  
    Answer: The Event Loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading operations to the system kernel whenever possible. JavaScript is single-threaded, meaning it can do one thing at a time. The Event Loop checks the call stack and if it's empty, it takes the first task from the callback queue and pushes it onto the call stack, thus ensuring asynchronous callbacks are executed.

2. **Explain closures and provide an example.**
    Answer: A closure is a function that remembers its lexical scope even when the function is executed outside that lexical scope. This allows the function to access variables from its enclosing scope even after that scope has finished executing.

3. **What are Promises and why are they used?**
    Answer: Promises are used to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never. Promises provide a more readable and cleaner way to handle asynchronous code compared to traditional callback methods.

