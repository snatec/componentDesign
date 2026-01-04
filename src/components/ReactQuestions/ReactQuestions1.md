1️⃣ What is React?

Answer:
React is a JavaScript library for building user interfaces using reusable components and a virtual DOM for efficient updates. Developed by Facebook.

2️⃣ What is JSX?

Answer:
JSX is a syntax extension that allows writing HTML-like code in JavaScript. It gets compiled to React.createElement.

virtual DOM

virtual DOM is a lightweight copy of the actual DOM in memory. React uses it to improve performance by updating only the changed parts of the actual DOM.

Q 3. What keys in react

Keys are used to uniquely identify and differentiate between components in React. They help React
identify which items have changed, added, or removed.

q 4 state and props
State is an internal data store that belongs to a
specific component, and it can be changed over
time. Props are properties passed to a component
from its parent, and they are immutable.

Q 5. Local Storage vs session storage which is best for authitication

Neither Local Storage nor Session Storage is best for authentication.
👉 HttpOnly Secure cookies are the recommended and safest option.

1. Local Storage

Persists even after browser is closed

Shared across all tabs

Size ~5–10 MB

Accessible via JavaScript

Pros

Easy to use

Token persists across refresh & browser restart

Cons (⚠️ Important for auth)

❌ Vulnerable to XSS attacks (JS can read tokens)

❌ No automatic expiry

❌ Manual cleanup needed on logout

Use case

UI preferences (theme, language)

Non-sensitive cached data and ❌ Not recommended for auth tokens

2. Session Storage

Key points

Cleared when tab/browser closes

Isolated per tab

Accessible via JavaScript

Pros

Short-lived (better than localStorage)

Less persistence if tab is closed

Cons

❌ Still vulnerable to XSS

❌ User gets logged out on tab close

❌ Not ideal for multi-tab apps

Use case

Temporary form data

Wizard steps

One-time flows

3. Best Practice for Authentication ✅ (Recommended Answer)
HttpOnly + Secure Cookies

Why?

✔ Not accessible via JavaScript → protects against XSS

✔ Automatically sent with requests

✔ Supports expiration

✔ Works well with refresh tokens

Typical setup

Access Token → short-lived (memory)

Refresh Token → HttpOnly Secure cookie

Storing auth tokens in localStorage or sessionStorage is insecure due to XSS risks. The best practice is to use HttpOnly Secure cookies for authentication.

q.6 if there are 5 tabs opened and uer logged out from 1 tab, how to automatically log them out from other 4 tabs without page refresh?

How it works

localStorage is shared across tabs

When one tab updates localStorage → all other tabs get notified

No page refresh needed

const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('logout'); // 🧹 cleanup
    window.location.href = '/login';
    localStorage.setItem('logout', Date.now()); // 🔔 notify other tabs
};
window.addEventListener('storage', (event) => {
  if (event.key === 'logout') {
        localStorage.removeItem('authToken');
        localStorage.removeItem('logout'); // 🧹 cleanup
        window.location.href = '/login';
  }
});

=================

useEffect(() => {
  const handleStorageChange = (event) => {
    if (event.key === "auth") {
      const authState = JSON.parse(event.newValue);
      updateAuth(authState);
    }
  };

  window.addEventListener("storage", handleStorageChange);

  return () => {
    window.removeEventListener("storage", handleStorageChange);
  };
}, []);
====================

storage: local (more storage, permamnnet), 
session(temporary) ie window.localStorage, (like axis bank which is secure app)
document: cookies ie document.cookie (secure) ()

doucment.cookie = "viewpopup:true; expires=" +new Date(2050,11,22); (small date with expiry time)
================

useRef vs useState

===============

SSR vs SSG

===========

how to do async await vs promise

================

Why React batches state updates
React batches state updates to reduce unnecessary re-renders and improve performance by updating the UI in a single render instead of multiple renders.

setCount(count + 1);
setCount(count + 1);
Without batching → 2 renders ❌
With batching → 1 render ✅ ie Batching means: “React delays rendering until all updates are collected”

===========================================================================================================

Why useEffect runs twice in development mode

In React 18 development mode, useEffect runs twice because of StrictMode. React intentionally re-runs effects to detect unsafe side effects and ensure cleanup logic is correct.

in development only:

Component mounts, useEffect runs, Cleanup runs, useEffect runs again ie verify cleanup logic.

This does NOT happen in production.

<React.StrictMode>
  <App />
</React.StrictMode>

===========================================================================================================

Why using array index as key causes UI bugs

React uses key to identify items between renders.
Using index makes React think items didn’t change when they actually did.

always use item.id instead of index if you have any edit operations. 
if its static then you can use index.

index   item
0       react
1       html
2       css

key 0 → react
key 1 → html
key 2 → css

You delete html (index = 1), Your new array becomes:

key 0 → react
key 1 → css

React compares old keys vs new keys: (this is the important part)

| Old key | New key | React’s conclusion            |
| ------- | ------- | ----------------------------- |
| 0       | 0       | Same element → reuse DOM      |
| 1       | 1       | Same element → reuse DOM      |
| 2       | ❌       | No longer exists → remove DOM |

| Problem                   | Why                 |
| ------------------------- | ------------------- |
| Items shift               | Index changes       |
| DOM reused incorrectly    | Keys identify DOM   |

===========================================================================================================

Difference between Babel, Webpack, Vite

| Feature            | Babel          | Webpack           | Vite                    |
| ------------------ | -------------- | ----------------- | ----------------------- |
| Purpose            | Transpile code | Bundle assets     | Dev server + build tool |
| Bundling           | ❌ No           | ✅ Yes             | ❌ (dev), ✅ (prod)       |
| Dev speed          | Fast           | Slow (large apps) | ⚡ Very fast             |
| Uses ES modules    | ❌              | ❌ (bundles)       | ✅                       |
| Production bundler | ❌              | ✅                 | Rollup                  |
| Configuration      | Low            | High              | Minimal                 |
