https://www.youtube.com/watch?v=UAtGCxVGv1o

Async always returns a promise
If we put async in front of function, it return a promise

Alternate of .then and .catch

await pauses the execution of the function until a Promise settles (fulfilled or rejected).

Without async/await (using Promise chaining):

fetchUser()
  .then(user => fetchOrders(user))
  .then(orders => fetchPayments(orders))
  .catch(err => console.log(err));

With async/await:

async function getData() {
  try {
    const user = await fetchUser();
    const orders = await fetchOrders(user);
    const payments = await fetchPayments(orders);
  } catch (err) {
    console.log(err);
  }
}

👉 Looks sequential
👉 Easy to read
👉 Easy to maintain
Error Handling