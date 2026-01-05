🔹 map vs forEach (Core Difference)
| Feature                | `map()`           | `forEach()`                 |
| ---------------------- | ----------------- | --------------------------- |
| Returns a value        | ✅ Yes (new array) | ❌ No (`undefined`)          |
| Purpose                | Transform data    | Perform side effects        |
| Chainable              | ✅ Yes             | ❌ No                        |
| Mutates original array | ❌ No              | ❌ No (unless done manually) |

🔹 map()
✔ What it does

Iterates over array

Transforms each element

Returns a new array of same length

Example
const nums = [1, 2, 3];

const doubled = nums.map(item => item * 2);

console.log(doubled); // [2, 4, 6]

===========

const num = [1,2,3];

const doubled = num.forEach(item => item * 2);

console.log(doubled); //undefined

✔ Original array remains unchanged
✔ Best when you need a new array

🔹 forEach()
✔ What it does

Iterates over array

Executes logic for each item

Does not return anything

Example
const nums = [1, 2, 3];

nums.forEach(n => {
    console.log(n * 2);
});


✔ Used for logging, API calls, DOM updates
❌ Cannot be chained

🔹 Key Interview Example
const result = nums.forEach(n => n * 2);
console.log(result); // undefined ❌

const result = nums.map(n => n * 2);
console.log(result); // [2, 4, 6] ✅

🔹 When to use what?
Use map() when:

You need a new array

You want to transform data

You want chaining

nums.map(n => n * 2).filter(n => n > 3);

Use forEach() when:

You need side effects

You are not returning data

items.forEach(item => {
    sendAnalytics(item);
});

🧠 One-liner for interviewer

map is used to transform an array and returns a new array, whereas forEach is used for side effects and does not return anything.

⭐ Common Trap (Interview Favorite)

❓ Can forEach replace map?
❌ No — because forEach does not return a new array.

SideEffect means

A side effect is any operation that affects something outside the function, instead of just returning a value. like API calls, logging, updating variables, DOM manipulation
=========================================
For each uses:

1️⃣ Logging
num.forEach(item => console.log(item * 2));

2️⃣ Mutating array intentionally
const num = [1,2,3];

num.forEach((item, index, arr)=> {
    arr[index] = item * 2;
});

console.log(num);
=============================================================================
Example
const nums = [1, 2, 3];

const doubled = nums.map(item => item * 2);

console.log(doubled); // [2, 4, 6]

===========

const num = [1,2,3];

const doubled = num.forEach(item => item * 2);

console.log(doubled); //undefined
==========================================================

• Difference between call stack overflow and memory leaks

| Feature         | Call Stack Overflow     | Memory Leak                     |
| --------------- | ----------------------- | ------------------------------- |
| What it is      | Stack runs out of space | Heap memory is not released     |
| Happens due to  | Too many function calls | Unused objects still referenced |
| Error type      | Runtime error           | Performance degradation         |
| Immediate crash | ✅ Yes                   | ❌ Usually slow                  |
| Memory involved | Call Stack              | Heap                            |

function foo() {
    foo(); // infinite recursion
}

foo(); // ❌ RangeError: Maximum call stack size exceeded
Missing base condition
Throws error like: RangeError: Maximum call stack size exceeded

🔸 Memory Leak Case
let a = { name: "Sheetal" }
let b = a   // second reference

a = null

Call stack overflow happens due to excessive function calls filling the stack, while memory leaks occur when heap memory is not released due to lingering references.

Call Stack Overflow → Too many plates stacked at once → they fall immediately
Memory Leak → Garbage piling up slowly → house becomes unusable over time
========================================================================================

Explaining the prototype chain without textbook definitions

- The prototype chain is how JavaScript enables objects to share properties by looking up missing properties in their parent objects.

- JavaScript looks for a property in the object first.
If it’s not there, it asks the object it was created from.
It keeps asking up the chain until it finds it or reaches null.

That “asking up” is the prototype chain.
========================================================================================

• Why NaN !== NaN
NaN means “result is not a valid number”
So JS treats every NaN as unique
NaN is defined to be unequal to itself because it represents an invalid numeric result, and invalid values can’t be meaningfully compared.

========================================================================================
