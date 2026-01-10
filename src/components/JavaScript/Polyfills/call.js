let car1 = {
    color: 'red',
    company: 'ford'
}

function purchaseCar(currency, price) {
    console.log(`I purchased ${this.color} - ${this.company} car for ${currency}${price} `)
}

// purchaseCar.call(car1,'₹',1500000);

Function.prototype.myCall = function(context = {}, ...args){
    if(typeof this !== 'function') { //this refers to the function on which myCall is called ie purchaseCar
        throw Error(this + 'is not callable');
    }
    // insert this into context

    context.fn = this; //create a new function fn and this is purchaseCar
    context.fn(...args); //calling
    delete context.func; // optional
}

purchaseCar.myCall(car1,'₹',1500000);

//call, apply, and bind are function methods in JavaScript used to control
//  what this refers to when a function runs.

//Syntax: functionName.call(thisArg, arg1, arg2, ...)


//context.func = this , means;
// car = {
//   name: 'ford',
//   color: 'red',
//   func: purchaseCar
// }
