//sorted ARRAY

const arr = [1,2,2,3,4];

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

const result = removeDuplicates(arr);
console.log(result);

const uniqueArray = arr.slice(0, result);
console.log(uniqueArray);
