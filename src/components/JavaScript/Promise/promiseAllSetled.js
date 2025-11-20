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

Promise.allSettled([reachedA,reachedB,reachedC]) //fulfill when all promises are settled
.then((message)=> console.log(message))
.catch((message)=> console.log(message))

//resolved(fulfilled) or reject means promise is settled, pending means promise not settled
// output:
// [
//   { status: 'fulfilled', value: 'A has reached' },
//   { status: 'fulfilled', value: 'B has reached' },
//   { status: 'rejected', reason: 'C has not reached' }
// ]