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

Promise.all([reachedA,reachedB,reachedC]) //fulfill if all promises are fulfilled, reject even if one rejects
.then((message)=> console.log(message))
.catch((message)=> console.log(message))

//output: C has not reached