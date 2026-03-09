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

import React, { useState } from "react";

function Item({ label }) {
  const [checked, setChecked] = useState(false);

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        {label}
      </label>
    </li>
  );
}

export default function App() {
  const [items, setItems] = useState(["Apple", "Banana", "Orange"]);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <Item
            key={index} // ❌ WRONG: index used as key
            label={item}
          />
        ))}
      </ul>

      <button onClick={() => setItems(items.slice(1))}>
        Delete first
      </button>
    </div>
  );
}
How to see the bug (step-by-step)

Check Banana

Click Delete first

❗ Orange is now checked

index 0 → Apple
index 1 → Banana (checked)
index 2 → Orange

index 0 → Banana
index 1 → Orange (checked)

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


| Feature             | Babel                                               | Webpack                                  |
| ------------------- | --------------------------------------------------- | ---------------------------------------- |
| **Purpose**         | Transpile modern JS/JSX/TS to browser-compatible JS | Bundle JS, CSS, images, and other assets |
| **Input**           | JS/JSX/TS                                           | JS, CSS, images, other assets            |
| **Output**          | Transpiled JS                                       | Bundled files for browser                |
| **Role**            | Compiler / transpiler                               | Module bundler / build tool              |
| **Browser Support** | Yes, backward-compatible JS                         | Depends on Babel for transpiling         |
| **Plugins/Loaders** | Babel plugins/presets                               | Loaders (e.g., babel-loader, css-loader) |
| **Focus**           | Code transformation                                 | Asset bundling & optimization            |

===========================================================================================================

CSR VS SSR VS SSG(Static Site Generation)

| Feature     | CSR  | SSR  | SSG             |
| ----------- | ---- | ---- | --------------- |
| First load  | Slow | Fast | Fastest         |
| SEO         | ❌    | ✅    | ✅               |
| Server cost | Low  | High | None            |
| Fresh data  | Yes  | Yes  | No (build-time) |

CSR → Render in browser
SSR → Render on server per request
SSG → Render at build time (Next.js)
===========================================================================================================

How Browser Rendering Works (Critical Rendering Path)

The browser turns your code into pixels in steps (5):
HTML → DOM => (Browser parses HTML) -> Builds the DOM tree (structure of the page)
CSS  → CSSOM => (Browser parses CSS) -> Builds the CSSOM (style rules)
DOM + CSSOM → Render Tree => (Combines structure + styles) -> Removes invisible elements (display: none)
Render Tree → Layout => (Calculates size and position of each element) -> Depends on viewport size
Layout → Paint => Pixels are drawn on screen -> Colors, text, images, borders

HTML ──▶ DOM
CSS  ──▶ CSSOM
           ↓
      Render Tree
           ↓
        Layout
           ↓
         Paint

The browser parses HTML and CSS, builds the DOM and CSSOM, combines them into a render tree, calculates layout, and finally paints pixels to the screen.

===========================================================================================================

Controlled vs UnControlled

1️⃣ Controlled Components

👉 Form data is controlled by React state

Input value comes from React state, Every change updates state via onChange.

import { useState } from "react";

function ControlledInput() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

User types → onChange → setState → re-render → input updated
-----------------------------------------

Uncontrolled Components

👉 Form data is handled by the DOM itself

React does NOT control the value, Uses ref to read value when needed.

import { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

User types → DOM stores value → React reads value via ref

| Feature       | Controlled                        | Uncontrolled |
| ------------- | --------------------------------- | ------------ |
| Data source   | React state                       | DOM          |
| Value prop    | Required                          | Not used     |
| onChange      | Required                          | Optional     |
| Validation    | Easy                              | Hard         |
| Re-render     | On each changeon each key stroke  | No           |
| Debugging     | Easy                              | Hard         |
| React control | Full                              | Limited      |
===========================================================================================================

Hooks

1) useState: Manage local component state. 

const [count, setCount] = useState(0);

Triggers re-render on update, State is preserved between renders.
-------------------------

2) useEffect: Side effects (API calls, subscriptions, DOM changes). Runs after render.

useEffect(() => {
  fetchData();
}, []);

[] → run once

[dep] → run on change

No deps → run every render

-------------------------

3) useContext: Consume global data without prop drilling.

const theme = useContext(ThemeContext);

-------------------------

4) useRef: Persist mutable value without re-render.

const inputRef = useRef(null);

-------------------------

5) useMemo: Memoize computed values

const total = useMemo(() => expensiveCalc(items), [items]);

---------------------------

6) useCallback: Memoize functions

const handleClick = useCallback(() => {
  setCount(c => c + 1);
}, []);

----------------------------

7) useReducer: Complex state logic
const [state, dispatch] = useReducer(reducer, initialState);

----------------------------
8) useLayoutEffect: Sync DOM reads/writes before paint.
useLayoutEffect(() => {
  // measure DOM
}, []);

===========================================================================================================

Difference between useState and useRef

| Feature            | useState              | useRef |
| ------------------ | --------------------- | ------ |
| Triggers re-render | ✅ Yes                 | ❌ No   |
| Value persists     | ✅ Yes                 | ✅ Yes  |
| Mutable            | ❌ (immutable updates) | ✅      |
| Used for UI        | ✅                     | ❌      |

const [count, setCount] = useState(0);
const countRef = useRef(0);

setCount(count + 1);      // re-render
countRef.current += 1;   // no re-render
===========================================================================================================

Difference between useCallback and useMemo

| Hook        | Memoizes |
| ----------- | -------- |
| useCallback | Function |
| useMemo     | Value    |

===========================================================================================================
Difference between useLayoutEffect and useEffect

useEffect => Render → DOM updates → Paint → useEffect 
useLayoutEffect => Render → DOM updates → useLayoutEffect → Paint ie useLayoutEffect blocks painting

useEffect(() => {
  fetch("/api/data").then(setData);
}, []);

useLayoutEffect(() => {
  tooltipRef.current.style.top = "100px"; ie Prevent UI flicker
}, []);

===========================================================================================================

Difference between useeffect and usememo and usecallback

| Feature  | useEffect                        | useMemo                | useCallback                             |
| -------- | -------------------------------- | ---------------------- | --------------------------------------- |
| Memoizes | Side effects                     | Values                 | Functions                               |
| Runs     | After render                     | During render          | During render                           |
| Returns  | Nothing / cleanup                | Value                  | Function                                |
| Use case | API calls, timers, subscriptions | Expensive calculations | Memoized callbacks / prevent re-renders |
| Re-run   | On deps change                   | On deps change         | On deps change                          |

if a value is needed during render, useEffect is too late.

🔹 Problem

Initial render: sum = 0 → UI shows wrong value briefly

useEffect runs after render → updates sum → triggers another render

This causes extra render and flicker
===========================================================================================================

How useref mutable without re render: 

import React, { useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0); // persists across renders

  renderCount.current += 1; // mutable, doesn't trigger render

  return (
    <div>
      <p>Rendered: {renderCount.current} times</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

===========================================================================================================

What is Babel?

Babel is a JavaScript compiler / transpiler that converts modern JavaScript (ES6+) or JSX into backward-compatible JavaScript that can run in older browsers or environments.

In simple words:

Babel lets you write modern JS/React code, and it converts it into code that all browsers can understand.

1) Polyfill new JS features

Adds support for features like Promise, Array.includes, Object.assign using core-js / regenerator-runtime

Ensures older browsers can run modern features

2) Enable experimental features: Supports proposals like optional chaining.

3) Optimizations for production: Minification / tree-shaking (with plugins).

4) Transpile modern JS syntax (ES6+): Converts let/const, arrow functions, template literals, classes, etc. to ES5.
Example: 
// ES6
const add = (a, b) => a + b;

// Transpiled by Babel
var add = function(a, b) {
  return a + b;
};

===========================================================================================================

Techniques to prevent unnecessary re-renders in large apps:

1) UseMemo, UseCallBack

2) Stable key props

3) Split Components

4) Avoid Inline Objects & Functions: <Component style={{ color: 'red' }} /> They create new references every render.

===========================================================================================================
Core web vitals:

LCP (Largest Contentful Paint): Time taken to show the main content

- Use correct size images (Width/height prevents layout shift)
- Lazy-load non-critical images
- Code splitting
- Reduce JS blocking
- Use SSR (HTML ready on first load)
- Preload critical resources (<link rel="preload" as="image" href="hero.webp" />)


CLS (Cumulative Layout Shift): Visual stability (no jumping UI)

- Reserve space for ads / banners
- Use correct size images (Width/height prevents layout shift)
- Use placeholders
- Use font-display: swap ie @font-face {
   font-display: swap;
}

LCP → Speed of main content
CLS → Page stability

INP (Interaction to Next Paint) measures how responsive your page feels to user interactions

- Captures all clicks, taps, key presses
- Measures time from user interaction → next visual update
- Low INP → page feels fast & snappy
- High INP → page feels laggy, slow to respond

Improve:
- Reduce JavaScript execution
- Debounce expensive events
- Optimize React renders React.memo, useCallback, useMemo ; Avoid unnecessary re-renders
- Avoid long tasks -> Keep tasks < 50ms

===========================================================================================================

Reasons of unnecessarily re render

- 1️⃣ State changes: Any state update triggers a re-render.


- 2️⃣ Parent re-renders: When a parent component re-renders,all its children re-render by default.Fix: React.memo for child components

const Child = React.memo(({name}) => {
  console.log('Child rendered');
  return <div>{name}</div>;
});

function Parent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Child name="React" />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

- Objects / arrays / functions are recreated on each render. fix: Memoize values
- Inline functions in JSX. 

<button onClick={() => doSomething()}>Click</button>
Fix: Use useCallback ie 
const handleClick = useCallback(() => doSomething(), []);
<button onClick={handleClick}>Click</button>

- Calling setState in useEffect without dependency array

===========================================================================================================

UseMemo:

Without UseMemo:

import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  // Expensive calculation
  const expensiveCalc = () => {
    console.log("Running expensive calculation...");
    let sum = 0;
    for (let i = 0; i < 100; i++) {
      sum += i;
    }
    return sum;
  };

  const result = expensiveCalc(); // ❌ runs on every render

  return (
    <div>
      <p>Expensive result: {result}</p>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
    </div>
  );
}

With UseMemo:

import React, { useState, useMemo } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const expensiveCalc = () => {
    console.log("Running expensive calculation...");
    let sum = 0;
    for (let i = 0; i < 100; i++) {
      sum += i;
    }
    return sum;
  };

  // Memoize the result
  const result = useMemo(() => expensiveCalc(), []); // ✅ only runs once

  return (
    <div>
      <p>Expensive result: {result}</p>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
    </div>
  );
}

===========================================================================================================

 1️⃣ How would you optimize a React application rendering 100k+ items in a list?

 
 2️⃣ What strategies would you use to improve page load time for a global audience?
 3️⃣ You notice a memory leak in a production SPA—how do you identify and fix it?
 4️⃣ A component breaks when upgrading a library version—how do you manage dependencies?
 5️⃣ How would you debug a performance bottleneck in a React app using DevTools?
 6️⃣ You need to migrate a legacy frontend codebase to a modern framework—what’s your plan?
 7️⃣ How do you ensure secure handling of sensitive user data on the client side?
 8️⃣ Users report intermittent UI glitches in different browsers—how would you troubleshoot?
 9️⃣ A critical UI feature is failing during peak traffic—how do you mitigate the issue?
 🔟 How do you manage state in a complex app to avoid unnecessary re-renders?
 1️⃣1️⃣ How would you implement a robust frontend monitoring and logging system?
 1️⃣2️⃣ You need to render a large dataset without blocking the main thread—how do you approach it?
 1️⃣3️⃣ How would you implement A/B testing without affecting current users?
 1️⃣4️⃣ A CSS animation is janky on mobile devices—how do you identify and fix the issue?
 1️⃣5️⃣ How do you handle real-time updates in a React application efficiently?

===========================================================================================================

 How do you make a web app responsive (media queries, relative units)?

 1. Use the Viewport Meta Tag: Without this, mobile browsers scale the page incorrectly.
 <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
 This tells the browser to match the screen width.

 