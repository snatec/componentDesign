Debouncing

- A programming technique that limit the no. of function calls for optimization.
- Ex: Search box, Window resize, Button double-clicks.
- This reduce loading.
- It ensures that a function is only called after a specific delay has passed since the last time it was triggered.
- Debouncing helps optimize performance by waiting until the user stops triggering the event.

====================================================================================================
Real-world example

Search input suggestions:

When a user types a query, instead of calling API after every keystroke →
debounce will call API only when the user stops typing for say 500ms.

Result:
✔ Reduced network/API calls
✔ Smooth UI
✔ Better performance
====================================================================================================

When user type school last stroke is l after that 3ms delay-> call api-> fetch result-> clear timeout.
Again user type bag

if difference betwenn 2 stroke is greater than eg 3ms, then only call the api.
====================================================================================================

Short Rule

| If typing continues… | Timer keeps delaying |
| If typing stops… | After 300ms silence → run function |

ie

✔ Every keypress keeps resetting the 300ms delay
✔ Timer only completes when user stops typing for 300ms straight
====================================================================================================
