Accessbilty


1) No scroll, no interactions
- modal should be sibling of body only then this can happen

| Feature                                    | `keydown`     | `keyup`         |
| ------------------------------------------ | ------------- | --------------- |
| Close immediately on ESC                   | ✔ Faster      | Slight delay    |
| Prevent unwanted double tab behavior       | ✔ Yes         | ❌ No            |
| Preferred for accessibility focus trapping | ✔ Recommended | ❌ Not preferred |
| Natural browser behavior (forms, dialogs)  | ✔             | ✔               |


If user presses Shift + Tab

AND they are currently focused on the first element

→ Prevent the default behavior (which would move focus OUT of the modal),
Instead, move the focus to the last element — wrapping backward.

tabIndex="-1" focus not required


aria labelled for accessbilty screen reader, aria-hidden