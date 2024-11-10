import React from 'react';
import { FaWifi } from "react-icons/fa";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { FaFontAwesomeAlt } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import { GoHomeFill } from "react-icons/go";
import { IoMapSharp } from "react-icons/io5";
import { MdCarRental } from "react-icons/md";
import { CiShop } from "react-icons/ci";

import { MdEmojiTransportation } from "react-icons/md";


const services = [
  { icon:<FaWifi />,title: 'High Speed Internet', description: 'Optical fiber connections...' },
  { icon:<GiHotMeal />,title: 'Healthy Meals', description: 'A healthy breakfast...' },
  { icon:<GoHomeFill />, title: 'Homely Stay', description: 'Designed for working professionals...' },
  { icon:<MdEmojiTransportation />, title: 'Transportation', description: 'Optical fiber connections...' },
  { icon:<MdOutlineDeliveryDining />,title: 'Food Delivery', description: 'Optical fiber connections...' },
  { icon:<IoMapSharp />,title: 'Tourism', description: 'Optical fiber connections...' },
  { icon:<FaFontAwesomeAlt />,title: 'Job', description: 'Optical fiber connections...' },
  { icon:<MdCarRental />,title: 'Rental Service', description: 'Optical fiber connections...' },
  { icon:<CiShop />, title: 'Online Shop', description: 'Optical fiber connections...' },
];

const Services = () => (
  <section id="services" className="services-section">
    <h2>Services</h2>
    
    <div className="services-grid">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <p classname="services-icons">{service.icon}</p>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;



// import React from 'react';

// const services = [
//   { name: 'High-Speed Internet', description: 'Stay connected with high-speed internet in the mountains.' },
//   { name: 'Healthy Meals', description: 'Enjoy nutritious meals prepared daily.' },
//   { name: 'Room Service', description: 'Comfortable rooms with daily room service.' },
//   // Add more services as needed
// ];

// const Services = () => {
//   return (
//     <section className="services-section container">
//       <h2>Services</h2>
//       <div className="services-grid">
//         {services.map((service, index) => (
//           <div className="card" key={index}>
//             <h3>{service.name}</h3>
//             <p>{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;
