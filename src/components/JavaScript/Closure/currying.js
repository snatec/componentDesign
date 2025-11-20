
// function add(a,b,c){
//     return a+b+c;
// }

function add(a){
    return function b(b){
        return function c(c){
            return a+b+c;
        }
    }
}

console.log(add(1)(2)(3));