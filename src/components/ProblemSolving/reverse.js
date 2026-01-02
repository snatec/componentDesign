// function reverseString(str) {

//     let result = '';

//     for(i = str.length -1 ; i>=0; i--){
//         result += str[i];
//     }
//   return result;
// }

// console.log(reverseString("hello")); //olleh


function reverseString(str) {

let arr = str.split('');

   let left =0;
   let right=str.length-1;

   while(left<right){
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
   }
  return arr.join('');
}

console.log(reverseString("hello")); //olleh