
function PromisePolyfill(executor) {
    let onResolve, onReject, isFulFilled = false, isRejected= false, isCalled = false, value;

    function resolve(val) {
       isFulFilled = true;
       value = val
       if(typeof onResolve === 'function'){
         onResolve(val);
         isCalled= true;
       }
    }
    function reject(val) {
       isRejected = true;
       value = val;
       if(typeof onReject === 'function'){
         onReject(val);
         isCalled= true;
       }
    }

    this.then = function(callback){
        onResolve = callback;
        if(isFulFilled && !isCalled)
        {
            isCalled = true;
            onResolve(value);
        }
        return this;
    }

    this.catch = function(callback){
        onReject = callback;
        if(isRejected && !isCalled)
        {
            isCalled = true;
            onReject(value);
        }
        return this;
    }

    try {
        executor(resolve,reject);
    }
    catch(err) {
        reject(err)
    }
}

// const examplePromise = new Promise((resolve,reject) => {
//     setTimeout(()=> {resolve(2)}, 1000);
// })

const examplePromise = new PromisePolyfill((resolve,reject) => {
    // setTimeout(()=> {resolve(2)}, 1000); //async
    // resolve(2); // if its only statement and not callback function //sync
    reject(2);
})


examplePromise.then((res)=> {console.log(res)}).catch((err) => {console.log(err)});

// const examplePromise = new Promise((resolve,reject) => {
//     resolve(2);
//     setTimeout(()=> {console.log("wait for 2 sec")}, 2000); //async
// })

// examplePromise.then((msg)=> console.log(msg)).catch((msg)=> console.log(msg));

// function PromisePolyfill(executor){
//     let onResolve, 
//     onReject, 
//     isFulFilled = false, 
//     isRejected = false, 
//     isCalled = false, 
//     value;
    
//     function resolve(val){
//         isFulFilled = true;
//         value = val;
//         if(typeof onResolve == 'function'){
//             onResolve(val);
//             isCalled = true;
//         }
//     }
    
//     function reject(val){
//         isRejected = true;
//         value = val;
//         if(typeof onReject == 'function'){
//             onReject(val);
//             isCalled = true;
//         }
//     }
    
//     this.then = function(callback){
//         onResolve = callback;
//         if(isFulFilled && !isCalled){
//             isCalled = true;
//             onResolve(value);
//         }
//         return this;
//     }
    
//     this.catch = function(callback){
//         onReject = callback;
//         if(isRejected && !isCalled){
//             isCalled = true;
//             onReject(value);
//         }
//         return this;
//     }
    
//     try{
//         executor(resolve, reject);
//     }
//     catch(err){
//         reject(err);
//     }
// }

// const examplePromise = new PromisePolyfill((resolve,reject) => {
//     resolve(2);
//     setTimeout(()=> {console.log("wait for 2 sec")}, 2000); //async
// })

// examplePromise.then((msg)=> console.log(msg)).catch((msg)=> console.log(msg));