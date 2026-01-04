const dog = {
  barks: true
};

console.log(dog);  //{ barks: true }
console.log(Object.getPrototypeOf(dog)); //check in console
console.log(dog._proto_); // Object.prototype
console.log(dog._proto_._proto_); //null
//===============================================
const parent = { x: 10 };
const child = Object.create(parent);

console.log(child.x); // 10

// What happens step by step

// child does not have its own x

// JavaScript looks at child → ❌ not found

// It then looks at child’s prototype, which is parent

// parent.x exists (10) → ✅ returned

// Key point to say

// Object.create(parent) sets parent as the prototype of child, so child can access properties from parent through the prototype chain.