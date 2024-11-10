import React from 'react';
import Footer from './Footer';
const OrderComplete = () => (
  <section className="order-complete">
    <div className="user-details">
      <h2>Amit Jha</h2>
      <p>+91 - 7764997022</p>
      <p>amit.jha6700@gmail.com</p>
      <p>1 Adult and 2 Children</p>
    </div>
    <div className="confirmation">
      <span className="check-icon">✔️</span>
      <h3>Order Complete</h3>
      <p>Have questions? <a href="#contact">Contact us</a></p>
    </div>
    <div className="summary">
      <div>
        <label>Check-In</label>
        <p>01 Feb 2022</p>
      </div>
      <div>
        <label>Check-Out</label>
        <p>07 Feb 2022</p>
      </div>
      <div>
        <label>Rooms</label>
        <p>1</p>
      </div>
      <button className="total-amount">₹12,430</button>
    </div>
   
   <Footer/>
   
   
  </section>
);

export default OrderComplete;


// import React from 'react';


// const OrderComplete = ({user,booking}) => (
//   <section className="order-complete">
//     <div className="user-details">
//         <h3>{user.name}</h3>
//         <p>{user.phone}</p>
//         <p>{user.email}</p>
//         <p>{user.adults} Adults and {user.children} Children</p>
//     </div>
//     <div className="confirmation">
//       <span className="check-icon">✔️</span>
//       <h3>Order Complete</h3>
//       <p>Have questions? <a href="#contact">Contact us</a></p>
//     </div>
//     <div className="summary">
//       <div>
//           <p>Check-In</p>
//           <p>{booking.checkin}</p>
//         </div>
     
//       <div>
//           <p>Check-out</p>
//           <p>{booking.checkout}</p>
//         </div>
    
//       <div className="detail">
//           <p>Rooms</p>
//           <p>{booking.rooms}</p>
//         </div>
//         <p>Total</p>
//       <button className="total-amount">₹ {booking.totalPrice}</button>
//     </div>
//   </section>
// );
 

// export default OrderComplete;

// import React from 'react';


// const OrderComplete = () => (
//   <section className="order-complete">
//     <div className="user-details">
//       <h2>Amit Jha</h2>
//       <p>+91 - 7764997022</p>
//       <p>amit.jha6700@gmail.com</p>
//       <p>1 Adult and 2 Children</p>
//     </div>
//     <div className="confirmation">
//       <span className="check-icon">✔️</span>
//       <h3>Order Complete</h3>
//       <p>Have questions? <a href="#contact">Contact us</a></p>
//     </div>
//     <div className="summary">
//       <div>
//         <label>Check-In</label>
//         <p>01 Feb 2022</p>
//       </div>
//       <div>
//         <label>Check-Out</label>
//         <p>07 Feb 2022</p>
//       </div>
//       <div>
//         <label>Rooms</label>
//         <p>1</p>
//       </div>
//       <button className="total-amount">₹12,430</button>
//     </div>
//   </section>
// );

// export default OrderComplete;

// import React from 'react';

// const OrderComplete = () => {
//   return (
//     <section className="order-complete-section container">
//       <div className="card">
//         <h2>Order Complete</h2>
//         <p>Thank you for booking with Brisphere. Your confirmation number is #12345.</p>
//       </div>
//     </section>
//   );
// };

// export default OrderComplete;
// // 