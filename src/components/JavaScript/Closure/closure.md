Closure

1) A js function that retains access of outer function's variable even when the outer function has finished its exceution.

A closure is when an inner function remembers variables from its outer function even after the outer function completed its exceution. This happens because functions in JavaScript carry their lexical environment with them. For example, if an outer function declares a variable x and returns an inner function, that inner function will still have access to x whenever it is later called. Closures allow data privacy and enable powerful patterns like private variables, and currying.


Currying is a technique of transforming a function that taken multiple arguements ie add(a,b,c) 
to a series of function where each function takes one argument and return another function until all
arguments are provided. Currying is a design pattern that uses closures internally.

Why is currying useful?

1) Reusability — create partially applied functions

2) Cleaner function composition

3) Avoid repeating arguments

4) Helps functional programming patterns

5) Easier to debug ie 
add(1, 2, 3)
can fail if:
    *wrong number of arguments are passed add(1)(2)(3)(4); // TypeError
    *wrong order
    *unexpected types

With currying:
add(1)(2)(3)
Each function receives exactly one argument, making it easier to test and debug.

