// Deep vs shallow copy

// Shallow Copy

// A shallow copy copies only the first level.
const user = {
  name: 'Lydia',
  address: {
    city: 'Bangalore'
  }
};

const copy = { ...user };

copy.name = 'John';
copy.address.city = 'Delhi';

console.log(user.name);        // Lydia
console.log(user.address.city); // Delhi 

// Deep Copy

// A deep copy duplicates all levels, so no shared references.

// 1️⃣ Using structuredClone() (BEST – modern JS)
// const deepCopy = structuredClone(user);


// ✅ Handles nested objects
// ✅ Handles arrays, dates, maps
// ❌ Not supported in very old browsers

// 2️⃣ Using JSON.parse(JSON.stringify())
// const deepCopy = JSON.parse(JSON.stringify(user));


// ⚠️ Limitations:

// ❌ Loses undefined

// ❌ Loses functions

// ❌ Loses Date, Map, Set

// Use only for simple data

// console.log(1 === []);     // false
console.log('1' === '[]'); // false