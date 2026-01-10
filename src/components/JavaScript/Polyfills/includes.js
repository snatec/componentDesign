const fruits = ['apple', 'mango', 'orange'];

// console.log(fruits.myIncludes('apple')); // worked in modern browsers

if(!Array.prototype.myIncludes){
    Array.prototype.myIncludes = function(searchElement) {
        return this.indexOf(searchElement) !== -1; //return -1 if NOT found
    }
}

console.log(fruits.myIncludes('apple')); // worked in modern browsers
