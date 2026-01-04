let car1 = {
    color: 'red',
    company: 'ford'
}

function purchaseCar(currency, price) {
    console.log(`I purchased ${this.color} - ${this.company} car for ${currency}${price} `)
}

// purchaseCar.call(car1,'₹',1500000);

Function.prototype.myCall = function(context = {}, ...args){
    if(typeof this !== 'function') {
        throw Error(this + 'is not callable');
    }
    // insert this into context

    context.fn = this; //create a new function fn and this is purchaseCar
    context.fn(...args);
}

purchaseCar.myCall(car1,'₹',1500000);
