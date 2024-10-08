import React from "react";
import logo from "../assets/logo1.png";
import { BiWorld, BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        {/* Left */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        {/* Middle */}
        <div className="navbar-search">
          <input type="search" placeholder="" />
          <div className="navbar-search-options">
            <button>Place</button>
            <button>Time</button>
            <button className="navbar-search-group-size">Group Size</button>
          </div>
          <div className="navbar-search-icon">
            <FiSearch />
          </div>
        </div>
        {/* Right */}
        <div className="navbar-right">
          <p>Rent House</p>
          <div className="navbar-right-language">
            <BiWorld />
            <div>EN</div>
          </div>
          <div className="navbar-right-signin">
            <p>Sign in</p>
            <BiUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
