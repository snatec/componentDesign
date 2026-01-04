const nums = [1, 2, 3, 4];

//In general:

// nums.filter(n => n % 2 === 0);
// console.log("nums here", nums);

// map return each value if call back but 
// filter doesnt return all intead as per condition of callback it return those values only

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback) {
    const result = []; //map must return a new array without mutating the original one.
    const arr = this; // this = fruits

    for (let i = 0; i < arr.length; i++) {
      if(callback(arr[i], i, arr)) //because callback here is item !== 2
      result.push(arr[i]);
    }

    return result;
  };
}

console.log(nums.myFilter( item => item !== 2 ))