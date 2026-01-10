
const fruits = ['apple', 'mango', 'orange'];

//In general:

// fruits.map((item,index) => (
//     console.log("fruits", item)
// ))
// ===================================================
// What is a polyfill for Array.prototype.map?

// Older browsers (like IE8) don’t support Array.prototype.map, so we write our own implementation.

// ===================================================

// What does map() do?

// map():

// Iterates over an array

// Applies a callback to each element

// Returns a new array

// Does not mutate the original array

// A map polyfill is used to make Array.prototype.map work in environments where it is not supported and to understand how map works internally.
//ie TypeError: map is not a function

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    const result = []; //map must return a new array without mutating the original one.
    const arr = this; // this = fruits

    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr)); //do callback for each element
    }

    return result;
  };
}
fruits.myMap((item,index) => (
    console.log("fruits", item)
))
//This polyfill checks if map exists, attaches it to Array.prototype, 
// iterates over the array using this, 
// applies the callback to each element,
//  stores the result in a new array, and returns it.