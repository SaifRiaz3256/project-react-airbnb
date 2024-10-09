import React from "react";
import logo from "../../assets/logo/long-logo.png";
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from "./ProfileMenu";
import SimpleBottomNavigation from "./BottomNav";
import MobileSearchBar from "../MobileSearchBar";

function Header() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar-logo" />
      <div className="search-bar">
        <div className="search-bar-text">Where
          <div className="search-bar-text2">Search Destinations</div>
        </div>

        <div className="search-bar-text">Check in
       
          <div className="search-bar-text2">Add dates</div>
        </div>
        <div className="search-bar-text">Check out
       
          <div className="search-bar-text2">Add Dates</div>
        </div>
        <div className="search-bar-text">Who
        
          <div className="search-bar-text2">Add Guests</div>
        </div>
        <div className="search-icon-div">
          <SearchRoundedIcon className="search-icon" />
        </div>
      </div>
      <div className="profile-container">
        <div className="airbnb-your-home">Airbnb your home</div>
        <div className="airbnb-your-home">
          <LanguageIcon sx={{ fontSize: "1.3rem" }} />
        </div>
        <div className="profile-div">
          <BasicMenu />
        </div>
      </div>
      <MobileSearchBar />
      <SimpleBottomNavigation />
    </div>
  );
}

export default Header;
