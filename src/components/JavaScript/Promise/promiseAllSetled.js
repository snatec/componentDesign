let reachedA = new Promise((resolve,reject) => {
        let reached = true;

        reached ? setTimeout(resolve,3000,"A has reached") : reject("A has not reached");
    })

let reachedB = new Promise((resolve,reject) => {
        let reached = true;

        reached ? setTimeout(resolve,2000,"B has reached") : reject("B has not reached");
    })

let reachedC = new Promise((resolve,reject) => {
        let reached = false;

        reached ? setTimeout(resolve,1000,"C has reached") : reject("C has not reached");
    })

Promise.allSettled([reachedA,reachedB,reachedC]) //fulfill when all promises are settled
.then((message)=> console.log(message))
.catch((message)=> console.log(message))

//resolved(fulfilled) or reject means promise is settled, pending means promise not settled
// output:
// [
//   { status: 'fulfilled', value: 'A has reached' },
//   { status: 'fulfilled', value: 'B has reached' },
//   { status: 'rejected', reason: 'C has not reached' }
// ]

// I use Promise.allSettled when the UI should render partial data and the loader should stop 
// only after all requests complete, regardless of failures."

// import { useEffect, useState } from "react";

// function Dashboard() {
//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState(null);
//   const [orders, setOrders] = useState(null);
//   const [notifications, setNotifications] = useState(null);
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     setLoading(true);

//     Promise.allSettled([
//       fetch("/api/user").then(res => res.json()),
//       fetch("/api/orders").then(res => res.json()),
//       fetch("/api/notifications").then(res => res.json())
//     ]).then(results => {
//       results.forEach((result, index) => {
//         if (result.status === "fulfilled") {
//           if (index === 0) setUser(result.value);
//           if (index === 1) setOrders(result.value);
//           if (index === 2) setNotifications(result.value);
//         } else {
//           setErrors(prev => ({
//             ...prev,
//             [index]: result.reason
//           }));
//         }
//       });

//       setLoading(false); // 👈 stop loader only after all are settled
//     });
//   }, []);

//   if (loading) return <h3>Loading dashboard...</h3>;

//   return (
//     <div>
//       <h2>Dashboard</h2>

//       <section>
//         <h3>User</h3>
//         {user ? <pre>{JSON.stringify(user)}</pre> : <p>Failed to load user</p>}
//       </section>

//       <section>
//         <h3>Orders</h3>
//         {orders ? <pre>{JSON.stringify(orders)}</pre> : <p>Failed to load orders</p>}
//       </section>

//       <section>
//         <h3>Notifications</h3>
//         {notifications ? (
//           <pre>{JSON.stringify(notifications)}</pre>
//         ) : (
//           <p>Failed to load notifications</p>
//         )}
//       </section>
//     </div>
//   );
// }

// export default Dashboard;
