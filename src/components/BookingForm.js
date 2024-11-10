import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitOrderForm, updateForm } from '../features/orderFormSlice';


const BookingForm = () => {
  const dispatch = useDispatch();
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      checkIn: '',
      checkOut: '',
      rooms: 1,
    });
  const { status, error } = useSelector((state) => state.orderForm);
  const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitOrderForm(formData));
        dispatch(updateForm(formData)); // Simulate API call
      };
  return (
    
    <div className="booking-form">
    <form onSubmit={handleSubmit}>
    <div className="form-field">
        <label>Name:</label>
        <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        {/* <input type="text" name="name" value={formData.name} onChange={handleChange} required /> */}
      </div>
      <div className="form-field">
        <label>Email:</label>
         <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="form-field">
        <label>CHECK-IN</label>
        <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
      
      </div>
      <div className="form-field">
        <label>CHECK-OUT</label>
        <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
   
      </div>
      <div className="form-field">
        <label>ROOMS</label>
        <input type="number" name="rooms" value={formData.rooms} onChange={handleChange} min="1" required />
      </div>
      <section className="home">
      <button className="book-button" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Submitting...' : 'Book Now'}
      </button>
      {status === 'failed' && <p className="error">{error}</p>}
      {status === 'succeeded' && <p className="success">Booking Successful!</p>}

        </section>
        </form>
    </div>
   
  );
};

export default BookingForm;




// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setBookingDetails, confirmBooking } from '../features/bookingSlice';

// const BookingForm = () => {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     checkIn: '',
//     checkOut: '',
//     rooms: 1,
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(setBookingDetails(formData));
//     dispatch(confirmBooking(formData)); // Simulate API call
//   };

//   return (
//     <form onSubmit={handleSubmit} className="booking-form">
//   <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
//   <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//   <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
//   <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
//   <input type="number" name="rooms" value={formData.rooms} onChange={handleChange} min="1" required />
//   <button type="submit">Book Now</button>
// </form>

//   );
// };

// export default BookingForm;
