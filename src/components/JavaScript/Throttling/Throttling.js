counter = 1;
function getData(){
    console.log("Fetching data", counter++);
}

function throttle(fn, delay) {
  let lastCall = 0;

  return function () {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn();
    }
  };
}


const betterFunction = throttle(getData, 3000);

// lastCall becomes 0 only once when the throttle function is created.

// Then it keeps the updated value using closure.

// Again and again when you call better function, it return inner function which keeps updating the 
// last call