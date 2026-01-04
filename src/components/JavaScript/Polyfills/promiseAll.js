const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {resolve("promise 1 is resolved")},400); //1sec
})

const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {reject("promise 2 is rejected")},500); //0.5sec
})

// Promise.all([promise1,promise2]).then((result) => console.log(result))
// .catch((err) => console.log(err)) //promise 2 is rejected because even if one reject in output rejected only will come

Promise.allPolyFill = (promises) => {
    return new Promise((resolve,reject)=> {
        const results = [];

        if(!promises.length) {
            resolve(results);
            return;
        }

        let promiseLength = promises.length; //ie [promise1,promise2]

        promises.forEach((item,idx) => {
            Promise.resolve(item)
            .then((res => {
                results[idx] = res;
                promiseLength--;

                if(promiseLength == 0){
                    resolve(results);
                }
            }))
            .catch(err => {
                    reject(err); // reject immediately on first failure
                });
        });
    })
}

Promise.allPolyFill([promise1,promise2]).then((result) => console.log(result))
.catch((err) => console.log(err)) //promise 2 is rejected because even if one reject in output rejected only will come