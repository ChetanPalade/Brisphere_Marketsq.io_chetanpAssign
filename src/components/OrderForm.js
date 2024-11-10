import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { FaArrowRight } from "react-icons/fa";
import "../App.css"

const OrderForm = () => {
  const navigate = useNavigate();


  const handlePayment = () => {
    // Perform any payment logic here (e.g., validation, API call)
    // Then navigate to the OrderComplete page
    navigate('/order-complete');
  };

  return (
    <div>
  
    <section className="order-form">
     
      <div className="order-info">
      <input type="text" placeholder= "Name" />
      <input type="email" placeholder="Email" />
      <input type="tel" placeholder="Contact Num" />
      <input type="number" placeholder="1 Adult" />
      <input type="number" placeholder="2 Children" />
    </div>
  
    <div className="booking-details">
      <div>
        <label>Check-In</label>
        <input type="date" defaultValue="2024-02-07" />
      </div>
      <div>
        <label>Check-Out</label>
        <input type="date" defaultValue="2024-02-07" />
      </div>
      <div>
        <label>Rooms</label>
        <input type="number" defaultValue="1" min="1" />
      </div>
      </div>
      <button className="pay-button" onClick={handlePayment}>
        ₹12,430    <span><FaArrowRight className='pay-button'/></span>
      </button>
      
     
      <p>Click to pay token amount</p>
      
    </section>
      <Footer className="footer"/>
    </div>
  );
};

export default OrderForm;


// import React from 'react';


// const OrderForm = () => (
//   <section className="order-form">
    // <div className="order-info">
    //   <input type="text" placeholder= "Name" />
    //   <input type="email" placeholder="Email" />
    //   <input type="tel" placeholder="Contact Num" />
    //   <input type="number" placeholder="1 Adult" />
    //   <input type="number" placeholder="2 Children" />
    // </div>
    // <div className="booking-details">
    //   <div>
    //     <label>Check-In</label>
    //     <input type="date" defaultValue="///" />
    //   </div>
    //   <div>
    //     <label>Check-Out</label>
    //     <input type="date" defaultValue="2022-02-07" />
    //   </div>
    //   <div>
    //     <label>Rooms</label>
    //     <input type="number" defaultValue="1" min="1" />
    //   </div>
//     </div>
//     <button className="pay-button">₹12,430 - Click to pay token amount</button>
//   </section>
// );

// export default OrderForm;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { resetBooking } from '../features/bookingSlice';
// import "../App.css"

// const Confirmation = () => {
//   const dispatch = useDispatch();
//   const bookingDetails = useSelector((state) => state.booking.bookingDetails);

//   return (
//     <div className="confirmation">
//   <h3><span className="order-complete-check">✔</span> Order Complete</h3>
//   <p>Thank you for booking with us!</p>
//   <p><strong>Name:</strong> {bookingDetails?.name}</p>
//   <p><strong>Email:</strong> {bookingDetails?.email}</p>
//   <p><strong>Check-In:</strong> {bookingDetails?.checkIn}</p>
//   <p><strong>Check-Out:</strong> {bookingDetails?.checkOut}</p>
//   <p><strong>Rooms:</strong> {bookingDetails?.rooms}</p>
//   <button onClick={() => dispatch(resetBooking())}>Go Back to Booking</button>
// </div>

//   );
// };

// export default Confirmation;
