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

Promise.any([reachedA,reachedB,reachedC]) //fulfill if any 1 promises are resolved, reject if all rejected
.then((message)=> console.log(message))
.catch((message)=> console.log(message))

//resolved(fulfilled) or reject means promise is settled, pending means promise not settled
// output: B has reached ie 2ms comes fast than 3ms