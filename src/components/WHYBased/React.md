Why does React use a virtual DOM instead of real DOM?
Answer: React uses a virtual DOM to minimize direct DOM manipulations, which are slow. It compares the virtual DOM with the previous version (diffing) and updates only the parts of the real DOM that changed, improving performance.

Why should state not be mutated directly?
Answer: Mutating state directly bypasses React’s reactivity, so components may not re-render, and future state changes may behave unpredictably. Always use setState or state updater functions.

Why is useEffect not called during server-side rendering?
Answer: SSR doesn’t run browser APIs, and useEffect runs after render on the client. This ensures server-side HTML can be rendered without relying on client-only effects.

Why do we need useRef when we already have state?
Answer: useRef stores mutable values that don’t trigger re-renders, useful for DOM references or caching values between renders without causing UI updates.

Why is lifting state up preferred over prop drilling hacks?
Answer: Lifting state up creates a single source of truth, making data flow predictable, instead of passing props through many components (prop drilling), which is hard to maintain.

Why is Redux useful even though React has Context?
Answer: Redux provides predictable state updates, devtools, middleware support, and better performance for large apps. Context works but can trigger unnecessary re-renders for global state.

Why do SPAs show 404 on refresh without server config?
Answer: Browser requests the current URL from the server, but the server doesn’t know about client-side routes. Configuring a fallback (serving index.html) ensures SPA routing works.

Why does React batch state updates?
Answer: Batching combines multiple state updates in a single render, reducing re-renders and improving performance.

Why should API calls be inside useEffect?
Answer: API calls are side effects, not part of rendering. Placing them inside useEffect ensures they run after the component mounts and not on every render.

Why is memoization sometimes harmful?
Answer: Memoization adds memory and CPU overhead. For cheap calculations, memoizing can decrease performance instead of improving it. It should only be used when necessary.