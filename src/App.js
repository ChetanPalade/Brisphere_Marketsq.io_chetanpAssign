import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import OrderForm from './components/OrderForm';
import OrderComplete from './components/OrderComplete';
import './App.css';

function App() {
  return (
   
    <Router>
      <Header/>
      <div className="App">
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order-form" element={<OrderForm />} />
          <Route path="/order-complete" element={<OrderComplete />} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;



// import React from 'react';
// import Navbar from './components/Navbar';
// import BookingForm from './components/BookingForm';
// import Discover from './components/Discover';
// import Services from './components/Services';
// import Footer from './components/Footer';
// import OrderForm from './components/OrderForm';
// import OrderComplete from './components/OrderComplete';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <BookingForm />
//       <Discover/>
//       <Services />
//       <OrderForm />
//       <OrderComplete />
//       <Footer />
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { useSelector } from 'react-redux';
// import BookingForm from './components/BookingForm';
// import Confirmation from './components/Confirmation';
// import "./App.css"
// import Footer from './components/Footer';
// import Discover from './components/Discover';
// import Services from './components/Services';

// const App = () => {
//   const bookingConfirmed = useSelector((state) => state.booking.bookingConfirmed);

//   return (
//     <div className="container">
//       <header className="header">
//         <h1>Brisphere Booking</h1>
//         <nav>
//           <a href="#Discover" id='Discover'>Discover</a>
         
//           <a href="#Services" id='Services'>Services</a>
//           <a href="#Footer" id='Footer'>About Us</a>
//         </nav>
//       </header>
//       {bookingConfirmed ? <Confirmation /> : <BookingForm />}
//       <Discover/>
//       <Services />
//       <Footer/>
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import HomePage from './pages/HomePage';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <HomePage />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import Navbar from './components/Navbar';
// import BookingForm from './components/BookingForm';
// import Discover from './components/Discover';
// import Services from './components/Services';
// import Footer from './components/Footer';

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <main>
//         <section className="hero">
//           <h1>Work from Ladakh</h1>
//           <p>Inside India's first digital tourism ecosystem</p>
//           <BookingForm />
//         </section>
//         <Discover />
//         <Services />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;


// // import React, { useState } from 'react';
// // import Header from './components/Header';
// // import BookingForm from './components/BookingForm';
// // import Discover from './components/Discover';
// // import Services from './components/Services';
// // import OrderSummary from './components/OrderSummary';
// // import Footer from './components/Footer';
// // import './App.css';


// // function App() {
// //   const [bookingComplete, setBookingComplete] = useState(false);

// //   const user = {
// //     name: 'Amit Jha',
// //     phone: '+91 - 7764997022',
// //     email: 'amit.jha6700@gmail.com',
// //     adults: 1,
// //     children: 2,
// //   };

// //   const booking = {
// //     checkin: '01 Feb 2022',
// //     checkout: '07 Feb 2022',
// //     rooms: 1,
// //     totalPrice: 12430,
// //   };

// //   return (
// //     <div className="App">
// //       <Header />
// //       <main>
// //         {!bookingComplete ? (
// //           <>
// //             <section className="hero">
// //               <h1>Work from Ladakh</h1>
// //               <p>Inside India's first digital tourism ecosystem</p>
// //               <BookingForm onBookingComplete={() => setBookingComplete(true)} />
// //             </section>
// //             <Discover />
// //             <Services />
// //           </>
// //         ) : (
// //           <OrderSummary user={user} booking={booking} />
// //         )}
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default App;
