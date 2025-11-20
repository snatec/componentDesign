let reachedA = new Promise((resolve,reject) => {
        let reached = true;

        reached ? setTimeout(resolve,3000,"A has reached") : reject("A has not reached");
    })

let reachedB = new Promise((resolve,reject) => {
        let reached = true;

        reached ? setTimeout(resolve,2000,"B has reached") : reject("B has not reached");
    })

let reachedC = new Promise((resolve,reject) => {
        let reached = false;

        reached ? setTimeout(resolve,1000,"C has reached") : reject("C has not reached");
    })

Promise.race([reachedA,reachedB,reachedC]) //fulfill when any of the promises settles (it can be reject or resolve)
.then((message)=> console.log(message))
.catch((message)=> console.log(message))

//resolved(fulfilled) or reject means promise is settled, pending means promise not settled
// output: C has not reached because 1ms, ie first gets resolved