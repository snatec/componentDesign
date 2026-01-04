There are 8 data types, grouped into Primitive and Non-Primitive (Reference) types.

1. Primitive Data Types (7)

Primitives are immutable and stored by value.
When you assign a primitive, the actual value is copied, not a reference.

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20 because b is re assigned. check next example to understand.

Changing b does NOT affect a
========================================================================================

let name = "Sheetal";
name[0] = "A";

console.log(name); // "Sheetal"
❌ The string did NOT change
✔ A new string must be created ie name = "Aheetal";
========================================================================================
let x = 5;
x + 1;

console.log(x); // 5
========================================================================================

1️⃣ Number
let age = 25;
let price = 99.99;
let infinity = Infinity;
let notANumber = NaN;

2️⃣ String
let name = "Sheetal";
let message = 'Hello';
let template = `Hi ${name}`;

3️⃣ Boolean
let isLoggedIn = true;

4️⃣ Undefined
let x;
console.log(x); // undefined


✔ Variable declared but not assigned

5️⃣ Null
let data = null;


✔ Explicitly assigned “no value”
❗ typeof null === "object" (JS bug – interview favorite)

6️⃣ Symbol (ES6)
const id = Symbol("id");


✔ Unique and immutable
✔ Used as object keys

7️⃣ BigInt
const big = 123456789012345678901234567890n;


✔ Handles numbers larger than Number.MAX_SAFE_INTEGER
==================================================================================================
🔹 2. Non-Primitive (Reference) Data Types

Stored by reference, mutable.

let obj1 = { count: 1 };
let obj2 = obj1;

obj2.count = 2;

console.log(obj1.count); // 2 😲
Why?

Both variables point to the same object

Objects are stored by reference

Objects are mutable

obj1 ─┐
      ├─→ { count: 2 }
obj2 ─┘

==================================================================================================

8️⃣ Object
const user = { name: "Sheetal", age: 25 };


Includes:

Object

Array

Function

Date

Map / Set

const arr = [1, 2, 3];
const fn = function () {};
==================================================================================================

🧠 typeof operator (important)
Value	typeof
Number	"number"
String	"string"
Boolean	"boolean"
Undefined	"undefined"
Null	"object" ❗
Symbol	"symbol"
BigInt	"bigint"
Object	"object"
Function	"function"
==================================================================================================

Q: Is array a data type?
👉 No, it’s an object

Q: Difference between null and undefined?
👉 undefined = not assigned
👉 null = intentionally empty

Q: Is JavaScript dynamically typed?
👉 Yes, variable types are determined at runtime

immutable => unchanged
==================================================================================================

If primitives are immutable, how does x = 5 become x = 6?

✔ Answer:

The variable is reassigned to a new value; the original value itself is never modified.