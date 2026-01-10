let car1 = {
    color: 'red',
    company: 'ford'
}

function purchaseCar(currency, price) {
    console.log(`I purchased ${this.color} - ${this.company} car for ${currency}${price} `)
}

// const funcCall = purchaseCar.bind(car, '$', 16); 
// funcCall();

Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error(this + ' can be bound as its not callable');
    }

    context.fn = this;

    return function(...newArgs) {
        return  context.fn(...args, ...newArgs);
    };
};


const newFunc = purchaseCar.myBind(car1,'₹',1500000);

newFunc();


//bind Returns a new function