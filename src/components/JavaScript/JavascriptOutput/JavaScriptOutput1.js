// 1

console.log( 5 == '5');
console.log( 5 === '5');

//2 objects

//1) 
const user = {
    name: 'akash',
    age: 25,
    hobbie: 'drawing',
    "like this video": true //if there is space in key put in ''
}

delete user.hobbie; //delete
user.name = 'sheetal' //modify
console.log("user details", user, user.name) //access
console.log("user", user["like this video"]) //access

//2)
const func = (function (a){
    delete a; // only used to delete key from obj so it will not affect(delete) a value ie 5 here
    return a;
})(5);

//3)iteration in object

for( key in user){
    console.log("keys are",key);
    console.log("values are",user[key]);
}

//4)
const obj = {
    a: "one",
    b: "two",
    a: "three"
}

console.log("obj",obj)

//5) create a function that multiplies numeric property by 2

const objkey = {
    a: 100,
    b: 200,
    c: "My nums"
}
multiplyObjByTwo(objkey);

function multiplyObjByTwo(objkey){
    for( key in objkey){
        if(typeof objkey[key] === 'number'){
            objkey[key] = objkey[key]*2; //or objkey[key] *= 2;
        }
    }
}
console.log("objkey",objkey);

//6) find the output

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); //456 
// here when a[b] = 123 ie a[] //object cannot be converted into key until its a string
// therefore a["[object, Object]"] = 123; , a["[object, Object]"] = 456; 

//7) what is json.stringify and json.parse ?

const userData = {
    name : 'sheetal',
    age: 25
}

console.log("userData",userData); //userData { name: 'sheetal', age: 25 }
console.log("userData",JSON.stringify(userData)); //userData {"name":"sheetal","age":25}
const stringify = JSON.stringify(userData); 
// convert back to object from string, because we cant access the obj.name now
// console.log("userData",stringify.name); // will throw error

//therefore 
console.log("userData",JSON.parse(stringify)); //userData { name: 'sheetal', age: 25 }

//use of stringify : localStorage
// localStorage.setItem(userData); // will give [object Object]
// localStorage.setItem(stringify); // will give userData {"name":"sheetal","age":25}, therefore stringify

// console.log("userData",JSON.parse(localStorage.setItem(stringify)));


//8) spread operator

console.log([..."lydia"]); //[ 'l', 'y', 'd', 'i', 'a' ]

const data = {name : 'lydia', age: 21};
const admin = {admin: true, ...data}; //add the data to it

console.log(admin);

//9) stringify

const settings = {username: 'piyush', level: 19, health: 90};
const dataValue = JSON.stringify(settings, ["level", "health"]); //if give these 2 in [], it will stringify only these

console.log(dataValue); //{"level":19,"health":90}

//10) functions

const shape = {
    radius: 10,
    diameter(){ //function
        return this.radius * 2; //r reference to shape object
    },
    perimeter: () => { //arrowFunction
       2 * Math.PI * this.radius //r reference to window object
    }
}

console.log(shape.diameter()); //20
console.log(shape.perimeter()); //Nan or undefined

//11) destructuring in objects, desturcture in nested way

let userDataValue = {
    name: 'sheetal',
    age: 10,
    fullName: {
        firstName: 'sheetal',
        lastName: 'nair'
    }
}

// const {name} = userDataValue;
const {name: myName} = userDataValue; // to avoid error: Cannot redeclare block-scoped variable 'name'.
const name  = 'roadSide';

console.log("destructure", myName, name );
// const {fullName} = userDataValue; or
const {fullName, fullName: {firstName}} = userDataValue; // first destructure fullName, then its first

console.log("destructure fullName", fullName, firstName );

//12) output

function getItems(fruitList, favouriteFruit, ...args){ // here ...args are rest operator therfore should be always in last
    return[...fruitList, ...args, favouriteFruit];
}

console.log(getItems(['banana', 'grapes'], 'pear', 'orange')); //[ 'banana', 'grapes', 'orange', 'pear' ]

//13) object referencing

let ctype = { greeting: 'hello'};
let d;

d = ctype; //not hello because we are not giving value, instead we are giving the reference

ctype.greeting = 'Hi ho';
console.log(d.greeting); //Hi ho

//14) output

//This condition will always return 'false' since JavaScript compares objects by reference, not value.
console.log({a:1} == {a:1}); //false 
// console.log({a:1} === {a:1}); //false 
//also each object have different memory allocation

//15) output

let person = {name: 'lydia'}
const members = [person];
person = null;
console.log(members); // [ { name: 'lydia' } ] because members = [person]; ie members[0] = [person] ; will not affect

let personData = {name: 'lydia'}
const membersData = [personData];
// person = null;
personData.name = null;
console.log(membersData);

// person = null;
// This only changes the variable person

// It does not affect the object itself

// members[0] is still pointing to that object

// Visual explanation

// Before person = null:

// person  ──► { name: 'lydia' }
// members ──► [ ──► { name: 'lydia' } ]


// After person = null:

// person  ──► null
// members ──► [ ──► { name: 'lydia' } ]

// 16)

// Spread operator creates a shallow copy

// b is a new object
let adata = { x: 1 };
let bdata = { ...adata };

adata.x = 2;

console.log(bdata.x); // 1

// ⚠️ But for nested objects:

let aValue = { x: { y: 1 } };
let bValue = { ...aValue };

aValue.x.y = 2;

console.log(bValue.x.y); //2
