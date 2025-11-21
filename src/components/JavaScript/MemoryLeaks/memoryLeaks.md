https://www.youtube.com/watch?v=IkoGmbNJolo

A memory leak happens when your program keeps using memory that is no longer needed, and the garbage collector cannot free it.
In JavaScript, the garbage collector removes objects that are not reachable anymore.
A memory leak happens when we accidentally keep references to objects that should be collected.

Why Memory Leaks Happen

Because JavaScript has automatic garbage collection, but it can only free memory if nothing references the object.

If something still references it → it stays in memory → memory leak.
================================================================================================
1️⃣ Accidentally Growing Global Variables

Any variable on the global scope stays until the page is closed.

var data = [];


If you keep pushing large data → memory grows → leak.

Reason: Global variables never go out of scope.
----------------------------------------------------------------------------------------------------
2️⃣ Uncleared Timers / Intervals

setInterval() is a very common source of leaks.

setInterval(() => {
  // doing something
}, 1000);


If you don’t call clearInterval() → the callback stays in memory forever.
----------------------------------------------------------------------------------------------------
3️⃣ Event Listeners Not Removed

If you add listeners but don’t remove them, the listener keeps the reference alive.

element.addEventListener("click", handler);


If element is removed but the listener isn’t → memory leak.

Solution: removeEventListener() or use once: true.
----------------------------------------------------------------------------------------------------
4️⃣ Closures Holding Unnecessary Data

Closures keep variables alive even after the function finishes.

function create() {
  const bigData = new Array(100000).fill("x");
  return function () {
    console.log(bigData.length);
  };
}
----------------------------------------------------------------------------------------------------
5️⃣ Detached DOM Nodes

If you remove a DOM element but still hold a reference to it → memory leak.

Example:

let node = document.getElementById("box");
document.body.removeChild(node);
// but 'node' variable still references it → leak
----------------------------------------------------------------------------------------------------
🧹 How to Prevent Memory Leaks

Avoid unnecessary global variables

Always clear intervals and timeouts

Remove event listeners when elements are removed

Set variables to null when no longer needed

Avoid unnecessarily long-lived closures

Use weak references (WeakMap, WeakSet) for cached data

Use browser DevTools → Memory tab → Performance profiling
================================================================================================

🔸 Normal Case (No Leak)
let a = { name: "Sheetal" }

a ---> { name: "Sheetal" }

a = null

GC: no references → object removed ✔

🔸 Memory Leak Case
let a = { name: "Sheetal" }
let b = a   // second reference

a = null

b ---> { name: "Sheetal" }  // still referenced → NOT garbage collected ❌
👉 As long as something references an object, JavaScript will NOT free it.

================================================================================================

Uncleared setInterval() or setTimeout()

let myTimeoutId;

function MysetTimeout(){
    myTimeoutId = setTimeout(()=> {let node = document.getElementById('node'),1000})
}

node.remove(); //still timeout not cleared // but the timeout still keeps the callback alive → leak

//Avoid Memory leak:

clearTimeout(myTimeoutId); or 
let node = document.getElementById('node');
function MysetTimeout(){
    myTimeoutId = setTimeout(()=> {if(node{//do work}),1000})
}

================================================================================================

let nodes = {btn : document.getElementById('btn')}

document.getElementById('btn').remove() //memeory leak

//Avoid Memory leak:

delete nodes.btn;