
function counter(){
    let count = 0;
    return function innerCount() {
        count ++;
        return count;
    }
}

const c = counter();

console.log("c", c()); //calling counter function // 1
console.log("c", c()); // 2
console.log("c", c()); // 3

// count is private — cannot be accessed directly from outside.

// The inner function “remembers” count due to closure.

// Each call updates the same preserved variable.

// 👉 Interview Tip: Mention "data privacy" — very impressive.