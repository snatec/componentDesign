const obj = {
    A: "12",
    B: 23,
    C: {
        P: 23,
        O: {
            L: 56
        },
        Q: [1,2]
    }
}

console.log(flattenObj(obj,""))

function flattenObj(obj, parent){
   const output = {};
        const generateFlatObjs = (obj, parent) => {
             for(let key in obj){
                const newParent = parent + key; //ie c.p //A //B //C //C.P //C.O //C.0.L //C.Q.0 //C.Q.1
                const value = obj[key]; //12 //23 //OBJ //23 //OBJ //56 //1 //2
                if(value !== null && typeof value === 'object'){
                    generateFlatObjs(value, newParent + ".") //,C. //,C.0. //,C.Q.
                }
                else{
                     output[newParent] = value;
                    }
            }
        }
   generateFlatObjs(obj,parent);
   return output; //{ A: '12', B: 23, 'C.P': 23, 'C.O.L': 56, 'C.Q.0': 1, 'C.Q.1': 2 }
}

//output:

// {
//     a: 12,
//     b: 23,
//     c.P: 23,
//    c.O.l : 56,
//    c.Q.0: 1,
//    c.Q.2: 2
// }