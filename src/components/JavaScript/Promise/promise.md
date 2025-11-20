https://www.youtube.com/watch?v=_aQp_daNR3I

A Promise in JavaScript is an object that represents the eventual result of an asynchronous operation.

It’s like saying:
👉 “I don’t have the value right now, but I promise I’ll give it to you later.”

It has 3 states—pending, fulfilled, rejected.

Promises solve callback hell by allowing chaining through .then(), centralized error handling via .catch(), and cleanup using .finally().

Promise callbacks run in the microtask queue, which has higher priority than the normal callback queue, so they execute before timers.”