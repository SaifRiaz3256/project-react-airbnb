import React, { useState, useEffect } from "react";
import logo from "../../assets/logo/long-logo.png";
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from "./ProfileMenu";


function Header() {
  const [isExperience, setIsExperience] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleExperienceClick = () => setIsExperience(true);
  const handleStaysClick = () => setIsExperience(false);

  return (
    <div className="navbar">
      <div className="Logo-Navbar">
        <img src={logo} alt="logo" className="navbar-logo" />
        {!isScrolled && (
          <>
            <p className="NavBar-option" onClick={handleStaysClick}>
              Stays
            </p>
            <p className="NavBar-option" onClick={handleExperienceClick}>
              Experiences
            </p>
          </>
        )}

        <div className="profile-container">
          <div className="airbnb-your-home">Airbnb your home</div>
          <div className="airbnb-your-home">
            <LanguageIcon sx={{ fontSize: "1.3rem" }} />
          </div>
          <div className="profile-div">
            <BasicMenu />
          </div>
        </div>
      </div>

      <div className={`search-bar ${isScrolled ? 'small' : ''}`}>
        <div className="search-bar-text">
          {isScrolled ? "Anywhere" : "Where"}
          <div className="search-bar-text2">
            {isScrolled ? "" : "Search Destinations"}
          </div>
        </div>

        <div className="search-bar-text">
          {isScrolled ? "Any week" : !isExperience ? "Check in" : "Date"}
          <div className="search-bar-text2">
            {isScrolled ? "Add Dates" : isExperience ? "Add Dates" : "Add dates"}
          </div>
        </div>

        {!isScrolled && !isExperience && (
          <div className="search-bar-text">
            Check out
            <div className="search-bar-text2">Add Dates</div>
          </div>
        )}

        <div className="search-bar-text">
          {isScrolled ? "Add guests" : "Who"}
          <div className="search-bar-text2">Add Guests</div>
        </div>

        <div className="search-icon-div">
          <SearchRoundedIcon className="search-icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
