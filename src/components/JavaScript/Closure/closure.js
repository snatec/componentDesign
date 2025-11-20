
function outerFunction(x){
    return function innerFunction(y){
         return x + y;
    }
}

call1 = outerFunction(5); // returns inner function, therefore call1 now holds a reference to that inner function.
call2 = call1(10); // calling inner function.
//  Even though outerFunction finished executing, the variable x (value 5) is still remembered.
// That memory is what we call a closure.
console.log("call1, call2", call1,call2); //output: call1, call2 [Function: innerFunction] 15