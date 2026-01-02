
// var
"use strict"; // to code in proper way

nameOfCharacterVar = 'sheetal';
console.log(nameOfCharacterVar);

var nameOfCharacterVar;

//let

// TDZ starts
//   console.log(x); // ❌ ReferenceError

  let x;      // TDZ ends
  console.log(x); // ✅ 5

//const

 const y = 9;      // TDZ ends
  console.log(y); // ✅ 5

// Function hoisting

sayHello();

function sayHello() { // function decalration are also hoisted, by default it will go up.
   console.log("hello");
}

// Function expression

const sayHelloCall = () => {  // function expression are not hoisted so always put it up and call after that.
   console.log("hello expression");
}

sayHelloCall();
