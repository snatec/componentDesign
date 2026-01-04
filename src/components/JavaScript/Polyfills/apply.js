// call and apply only difference is apply takes array as arguement

let car1 = {
    color: 'red',
    company: 'ford'
}

function purchaseCar(currency, price) {
    console.log(`I purchased ${this.color} - ${this.company} car for ${currency}${price} `)
}

// purchaseCar.apply(car1,['₹',1500000]);

Function.prototype.myApply = function(context = {}, args){
    if(typeof this !== 'function') {
        throw Error(this + 'is not callable');
    }
    if(!Array.isArray(args)) {
        throw TypeError('CreateListFromArrayLike called on non-object');
    }
    // insert this into context

    context.fn = this; //create a new function fn and this is purchaseCar
    context.fn(...args);
}

purchaseCar.myApply(car1,['₹',1500000]);
