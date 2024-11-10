import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Discover from './Discover';
import Services from './Services';
import Footer from './Footer';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Home = () => {
   
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    rooms: 1,
  });

  const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

return(
    <section className="booking-section">
      <div className='hero-section'>
        <div className="booking-text">
          <h2>Work from <br/> Ladakh</h2>
          <p>India's first true digital tourism ecosystem</p>
          <i className="fab fa-facebook"><FaFacebook  className="social-icons"/></i>
          <i className="fab fa-instagram"><RiInstagramFill className="social-icons" /></i>
          </div>
        <div className="booking-grid">
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
      <Link to="/order-form">
        <button className="button">Book Now</button>
      </Link>
        
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS02EYXMBSt7D0En4q4-s6_l4ypJqUIPjbuAg&s" alt="Ladakh landscape" className="hero-image" />

    </div>
    <Discover/>
    <Services />
    <Footer />
  </section>
  );
};

export default Home;
