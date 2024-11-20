// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './Components/Home';
// import RefundCancellationPolicy from './Components/RefundCancellationPolicy';
// import TermsOfUse from './Components/TermsOfUse';
// import Subscription from './Components/Subscription';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
//         {/* Navbar */}
//         <nav className="bg-white bg-opacity-10 backdrop-blur-lg p-4 shadow-md">
//           <div className="container mx-auto flex justify-between items-center">
//             <div className="text-3xl font-extrabold">Bharat Posters App</div>
//             <ul className="flex space-x-6 text-lg font-semibold">
//               <li>
//                 <Link to="/" className="hover:text-yellow-400 transition duration-300">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/refund-cancellation-policy" className="hover:text-yellow-400 transition duration-300">
//                   Refund and Cancellation Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/terms-of-use" className="hover:text-yellow-400 transition duration-300">
//                   Terms of Use
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/subscription" className="hover:text-yellow-400 transition duration-300">
//                   Subscription
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </nav>

//         {/* Main Content */}
//         <div className="py-12">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/refund-cancellation-policy" element={<RefundCancellationPolicy />} />
//             <Route path="/terms-of-use" element={<TermsOfUse />} />
//             <Route path="/subscription" element={<Subscription />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import RefundCancellationPolicy from './Components/RefundCancellationPolicy';
import TermsOfUse from './Components/TermsOfUse';
import Subscription from './Components/Subscription';
import ContactUs from './Components/contactUs'; // Import the new component
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
        {/* Navbar */}
        <nav className="bg-white bg-opacity-10 backdrop-blur-lg p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-3xl font-extrabold">Bharat Posters App</div>
            <ul className="flex space-x-6 text-lg font-semibold">
              <li>
                <Link to="/" className="hover:text-yellow-400 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/refund-cancellation-policy" className="hover:text-yellow-400 transition duration-300">
                  Refund and Cancellation Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="hover:text-yellow-400 transition duration-300">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/subscription" className="hover:text-yellow-400 transition duration-300">
                  Subscription
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-yellow-400 transition duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <div className="py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/refund-cancellation-policy" element={<RefundCancellationPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/contact-us" element={<ContactUs />} /> {/* Add this route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
