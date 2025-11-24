counter = 1;
function getData(){
    console.log("Fetching data", counter++);
}

function debounce(fn,delay){
    let timeoutId;

    return function(){
        clearTimeout(timeoutId);
        timeoutId = setTimeout(fn,delay)
    }
}

const betterFunction = debounce(getData, 300);

