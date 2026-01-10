promise1 = new Promise((resolve,reject)=> {
    setTimeout(()=> {resolve('Promise1 is resolved')}, 500);
})

promise2 = new Promise((resolve,reject)=> {
    setTimeout(()=> {reject('Promise2 is rejected')}, 1000);
})

// Promise.all([promise1,promise2]).then((msg)=> console.log(msg)).catch((err) => console.log(err));

Promise.AllPolyfill = (promises) => {
return new Promise((resolve,reject) => {
    let result = [];
    let promiseslength = promises.length;

    if(!promiseslength) {
        resolve(result);
        return;
    }

    promises.forEach((item,index)=> {
        Promise.resolve(item).then((msg)=> {
            result[index] = msg;
            promiseslength--;
            if(!promiseslength) {
                resolve(result);
            }
        } ).catch((err)=> reject(err));
    })
})
}

Promise.AllPolyfill([promise1,promise2]).then((msg)=> console.log(msg)).catch((err) => console.log(err));