function debounce(fn,delay){
    let timeoutId;

    return function(){
        clearTimeout(timeoutId);
        timeoutId = setTimeout(fn,delay)
    }
}

function greet(){
    console.log("Hello all");
}

const debounceGreet = debounce(greet,3000); //optimsied way

debounceGreet(); //calling inner function

// If you call it again within 3 seconds
// debounceGreet();
// debounceGreet();
// debounceGreet();

// c -> timeoutid = 1sec
// h -> timeoutid become empty and reset again to temeoutid = 1sec
// e -> timeoutid become empty and  reset again to temeoutid = 1sec
// n -> timeoutid become empty and  reset again to temeoutid = 1sec
//  stopped typing: timeoutid 1sec, 2sec, 3sec => trigger 
// What happens?

// Each call:

// Cancels previous timer

// Starts a new timer

// Only the LAST call survives

// ⏱️ greet() runs once, 3 seconds after the last call