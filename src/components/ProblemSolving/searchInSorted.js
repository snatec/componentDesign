// search element in sorted array. 
// approach: binary search
// tc: O(log n)
// sc: O(1)

const data = [3,4,5,6,7];
const target = 6;

function binarySearch(arr, target){
let l= 0;
let r= arr.length;

  while(l<=r){
    let mid = Math.floor((l+r)/2);

    if(arr[mid] == target) return mid;

    if(arr[mid]< target){
        l = mid+1;
    }
    else {
        r = mid-1;
    }
  }
  return -1; //element not found
}

console.log(binarySearch(data,target));
