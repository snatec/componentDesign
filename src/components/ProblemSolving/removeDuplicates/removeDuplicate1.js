//Unsorted ARRAY

const arr = [11,3,4,11,5,9];

const UniqueSet = new Set(arr);

const UniqueArray = [...UniqueSet]

console.log(UniqueArray);

// The spread operator extracts all values from the Set

// And puts them into a new array to perform filter,map etc

// ⏱ Time: O(n)

// 📦 Space: O(n)

// ✅ Best for unsorted arrays

// ❌ Doesn’t work for deep object comparison