
const reachedA = new Promise((resolve,reject)=> {
    let reached = true;
    reached ? resolve("success, I have reached") : reject("not reached");
})

async function statusUpdate() {

    try{
    console.log("Hello");

    const result = await reachedA; // if reached = false, the Promise rejects immediately.

    console.log("result here",result);
    console.log("over");
    }

    catch(err){
        console.log(err); // err is "not reached"
    }
}

statusUpdate();

//->Since reached = false, the Promise rejects immediately.
//->output: 
// Hello
//not reached

//->Since reached = true.
//->output: 
// Hello
// result here success, I have reached
// over