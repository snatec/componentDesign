
// const tatkalTicketBooking = new Promise((resolve,reject) => { //defining promise
//     let bookingSuccess = true;

//     if(bookingSuccess)
//         resolve();
//     else reject();
// })

// tatkalTicketBooking.then(success) //invoking promise
// .catch(failed)

// function success(){
//     console.log("Thanks friend, I will transfer the amt");
// }

// function failed(){
//     console.log("Thanks for trying, I will book bus");
// }

// const tatkalTicketBooking = new Promise((resolve,reject) => { //defining promise
//     let bookingSuccess = true;

//     if(bookingSuccess)
//         resolve(850);
//     else reject();
// })

// tatkalTicketBooking.then(success) //invoking promise 
// //here success(850) wrong because Promises expect functions, not function calls. then(success(amt))
// //This immediately calls success(amt) before the promise resolves, and passes the returned value to .then(), which is wrong.
// .catch(failed)

// function success(amt){
//     console.log(`Thanks friend, I will transfer the amt ${amt}`);
// }

// function failed(){
//     console.log("Thanks for trying, I will book bus");
// }

function tatkalTicketBooking() { 
  return new Promise((resolve, reject) => {
  const bookingSuccess = true;

  bookingSuccess ? resolve(850) : reject();
});
}

tatkalTicketBooking()
  .then((amt) => { // inside then is always resolve method
    console.log(`Thanks friend, I will transfer the amt ${amt}`);
    return amt; //.then() only receives a value if the previous .then() RETURNS a value.
  })
  .then((amt) => { //solves callback hell
    console.log(`Thanks friend, I will transfer the amt ${amt} to you soon`); //now amt will not be undefined here since prev then returns value
  })
  .catch(() => {
    console.log("Thanks for trying, I will book bus");
  });
