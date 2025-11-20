console.log("Hello"); //f1

function sync(){
    console.log("step 1"); //f3
     console.log("step 2"); //f4
      console.log("step 3"); //f5
}

sync(); //f2

setTimeout(()=> {console.log("Step 1"),4000}); //f8
setTimeout(()=> {console.log("Step 2"),3000}); //f7
setTimeout(()=> {console.log("Step 3"),1000}); //f6

Promise.resolve().then(()=> console.log("hello promise"));

console.log("bye"); //f9

//output

// Hello
// step 1
// step 2
// step 3
//->Message to Browswer
// bye
//->callStack is free
//->asyc will get invoked
//->miscrotask more priority
//hello promise
// Step 1
// Step 2
// Step 3