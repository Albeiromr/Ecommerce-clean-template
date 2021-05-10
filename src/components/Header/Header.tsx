import React from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/brand.png";
import basket from "../../assets/icons/basket.svg";
import user from "../../assets/icons/user.svg";
import SearchBar from "../Search bar/SearchBar";

const Header = () => {
  return (
    <header className="header">
      <div className="header__contact-bar">
        <div className="header__contact-data">
          <p className="header__green-text">Contact us</p>
          <p className="header__black-text">+420 336 775 664</p>
          <p className="header__black-text">info@freshnesecom.com</p>
          <div className="header__line"></div>
        </div>

        <div className="header__contact-links">
          <p className="header__green-link">Sign Up</p>
          <p className="header__green-link">My Account</p>
        </div>
      </div>

      <div className="header__logo-bar">
        
        <Link className="Link" to="/">
          <div className="header__logo-container">
            <img className="header__logo-image" src={logo} alt="logo" />
          </div>
        </Link>

        <div className="header__search-container">
          <SearchBar />
        </div>
        <div className="header__icon-container">
          <div className="header__icon-subcontainer">
            <img className="header__icon" src={user} alt="user icon" />
          </div>
          <div className="header__icon-subcontainer">
            <img className="header__icon" src={basket} alt="basket icon" />
          </div>
          <div className="header__basket-counter">
            <p className="header__basket-text">8</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
