
Event Loop

https://www.youtube.com/watch?v=JHP-G2npIac (Important)

JavaScript is single-threaded, meaning it can run one line at a time.

Javascript is basically follows synchronours but But JS also handles async operations (like setTimeout, fetch, DOM events) smoothly.This is possible because of the Event Loop.

Think of the Event Loop as the traffic controller that decides what piece of code runs next.

1) Callback stack (If the Call Stack is busy → nothing else can run.)
2) Browser
3) Callback queue

Call stack      

global -> 

Browswer(Web APIs ie setTimeout,setInterval,fetch,Dom event(click),localStorage): 4ms, 3ms, 1ms

CallbackQueue (Macrotask Queue): 4ms, 3ms, 1ms // these can go to call stack only if call stack is free.

Microtask Queue (Super Priority — Promises): Microtasks have higher priority than macrotasks.
Microtasks include: Promise callbacks (.then, .catch, .finally)
Empty the entire Microtask Queue
Then take the next Macrotask

This is how JavaScript remains asynchronous and non-blocking.”