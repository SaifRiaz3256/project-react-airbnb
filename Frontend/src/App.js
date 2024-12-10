

import NavLogo from "./components/NavBar_Logos/NavLogo.js";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./Pages/ProductDetail";
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
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/book/:id" element={<BookingPage />} />
        </Routes>
   
        <Footer />
      </Router>
    </div>
  );
};

export default App;
