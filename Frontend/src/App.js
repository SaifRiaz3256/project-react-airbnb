

import NavLogo from "./components/NavBar_Logos/NavLogo.js";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Homepage.jsx";
import BookingPage from "./Pages/BookingPage";

const App = () => {
  return (
    <div>
      <Router>
        
        <Header />
        <NavLogo />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/book/:id" element={<BookingPage />} />
        </Routes>
   
        <Footer />
      </Router>
    </div>
  );
};

export default App;
