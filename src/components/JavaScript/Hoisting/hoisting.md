- Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their scope during the compilation phase, before the code is executed.

- Only declarations are hoisted, not initializations.

// if no data type used ie nameOfChar = 'sheetal', js by default treat it as var.

1) Variable Declaration Hoisting: 3 things (var, let, const)

- var : follow hoisting

nameOfCharacter = 'sheetal';
console.log(nameOfCharacter);

var nameOfCharacter; //defination

* here in js by default variable defination/decalration is moved to top while compilation which is called hoisting.

- let, const (hoisted but they are placed in the Temporal Dead Zone (TDZ) and cannot be accessed before declaration.)

TDZ: A zone where variables are hoisted but cannot access it until they are intialized with some values.

TDZ helps:

Catch bugs early

Prevent accessing variables before they are properly declared

Encourage safer, predictable code

============================

const always you should assign value to it, for let its not necessary , it will just give undefined as output but not throw any error.
============================================================================================

1) Function Declaration Hoisting: 2 things

// Function hoisting

sayHello();

function sayHello() { // function decalration are also hoisted, by default it will go up.
   console.log("hello");
}

-------------------------------------------------
// Function expression (behave like a variable)

wrong: 

sayHelloCall();

const sayHelloCall = () => {  // function expression are not hoisted so always put it up and call after that.
   console.log("hello expression");
}

correct:

const sayHelloCall = () => {  // function expression are not hoisted so always put it up and call after that.
   console.log("hello expression");
}

sayHelloCall();

==================================

"use strict"; // to code in proper way , by default it will not take var as data type

nameOfCharacter = 'sheetal';
console.log(nameOfCharacterVar); // instead of undefined it will throw a error hence it avoids hoisting here

// will throw error now saying not defined

==========================

// always variable decaration should be first

wrong:

channel = 'redpro'
let channel = 'cyber redpro'

console.log(channel);

correct:

let channel = 'cyber redpro'
channel = 'redpro'

console.log(channel); // redpro

=================================================================