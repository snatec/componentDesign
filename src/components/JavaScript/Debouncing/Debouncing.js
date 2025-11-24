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