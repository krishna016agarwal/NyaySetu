import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AIBot from './pages/AIBot';
import FindLawyer from './pages/FindLawyer.jsx';
import DocumentAnalysis from './pages/DocumentAnalysis';
import CasePrediction from './pages/CasePrediction';
import About from './pages/About';
import Contact from './pages/Contact';
import {Signup }from './pages/signup.jsx'
import { Login } from "./pages/login"
import {Lawyerdetails} from "./pages/lawyerdetails"
import LawyerAppointments from "./pages/lawyerhome.jsx"
import Footer from './components/Footer';
import LawyerNavbar from "./pages/lawyernavbar.jsx"
import LawyerProfile from "./pages/lawyerprofile.jsx"
import Appointment from "./pages/allappointments.jsx"
import Dashboard from "./pages/dashboard.jsx"

function App() {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };
const user = JSON.parse(localStorage.getItem("user"));
  return (



    <Router>
    <div className="min-h-screen bg-gray-50">
      {/* Conditionally render different Navbars */}
      {user?.lawFirm ? <LawyerNavbar /> : <Navbar />}

      <motion.main className="pt-16">
        <AnimatePresence mode="wait">
          <AnimatedRoutes />
        </AnimatePresence>
      </motion.main>

      {/* Footer should always be visible */}
      <Footer />
    </div>
  </Router>
);





   function AnimatedRoutes() {
 

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Routes>
        {user?.lawFirm ? (
          // Lawyer-specific route
          
          <>
           <Route path="/" element={<LawyerProfile />} />
          <Route path="/lawyerhomepage" element={<LawyerAppointments />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
           </>
            
        ) : (
          // User-specific routes
          <>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/ai-bot" element={<AIBot />} />
            <Route path="/find-lawyer" element={<FindLawyer />} />
            <Route path="/document-analysis" element={<DocumentAnalysis />} />
            <Route path="/case-prediction" element={<CasePrediction />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/allapointments" element={<Appointment />} />
            <Route path="/lawyerdetails" element={<Lawyerdetails />} />
          </>
        )}
      </Routes>
    </motion.div>
  );
}
        {/* <Routes>
        <Route path="/lawyerhomepage" element={<LawyerAppointments/>}></Route>
        </Routes> */}
     

}

export default App;