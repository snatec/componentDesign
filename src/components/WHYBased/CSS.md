🔵 CSS — WHY Questions

1. Why is position: relative often used with absolute?

Answer: An absolutely positioned element is positioned relative to its nearest ancestor that has a position other than static. Using position: relative on the parent sets a reference point for the absolutely positioned child.
Example: A tooltip inside a div stays aligned to that div.
------------------------------------------------------------------------------------------------------------------------------
2. Why does z-index sometimes not work?

Answer: z-index only works on positioned elements (relative, absolute, fixed, or sticky). If the element is static or the stacking context is not what you expect, z-index may fail.
------------------------------------------------------------------------------------------------------------------------------
Why is Flexbox one-dimensional and Grid two-dimensional?
Answer: Flexbox handles layout in either row or column (1D at a time), making it ideal for linear layouts. Grid handles rows and columns simultaneously, so it’s 2D and better for complex page layouts.
------------------------------------------------------------------------------------------------------------------------------
Why is display: none different from visibility: hidden?
Answer:

display: none removes the element from the layout, so it takes no space.

visibility: hidden hides the element but keeps its space reserved.
Use case: Hiding a menu temporarily without shifting other content → visibility: hidden.
------------------------------------------------------------------------------------------------------------------------------
Why is mobile-first design preferred?
Answer: Mobile-first ensures smaller devices get optimized layouts first, then larger screens get enhancements.
------------------------------------------------------------------------------------------------------------------------------

Why should fixed heights be avoided in responsive design?
Answer: Fixed heights can cause content overflow or cutoff on smaller screens. Using flexible units (like min-height, %, vh) makes the layout adaptive.
------------------------------------------------------------------------------------------------------------------------------

Why are CSS variables better than hardcoded values?
Answer: CSS variables:

Allow centralized control (change once, affect everywhere).

Support dynamic updates via JS.

Avoid duplication and make theming easier.
------------------------------------------------------------------------------------------------------------------------------

Why should we avoid !important?
Answer:

It breaks normal cascade, making debugging hard.

Reduces reusability of CSS and increases specificity conflicts.
Better alternative: Use proper selectors or CSS variables.
------------------------------------------------------------------------------------------------------------------------------

Why do we prefer rem/em over px?
Answer: Relative units make layouts scalable and accessible.

rem scales relative to the root font size.

em scales relative to parent font size.

px is fixed and doesn’t adjust for accessibility or zoom.
------------------------------------------------------------------------------------------------------------------------------

Why is box-sizing: border-box recommended?
Answer: It includes padding and border in the element’s width/height, making sizing predictable and easier to manage responsive layouts.
------------------------------------------------------------------------------------------------------------------------------
Why does sticky positioning sometimes fail?
Answer: position: sticky works only when:

The parent has enough height to allow scrolling.

overflow of parent is not hidden, scroll, or auto in a way that clips the sticky element.
Otherwise, it behaves like relative.
------------------------------------------------------------------------------------------------------------------------------
