Event Delegation 

is a technique in JavaScript where instead of attaching event listeners to multiple child elements, we attach one event listener to a parent element, and let events bubble up to the parent.

The parent decides which child triggered the event using event.target.

✔️ Better performance

Avoids adding hundreds of listeners. You add one listener instead of many.

✔️ Works for dynamically added elements

Even if new child elements are added later, the parent listener still catches the events.

✔️ Cleaner, maintainable code

No need to attach/remove listeners repeatedly.

It improves performance, reduces memory usage, and works for dynamically added elements.