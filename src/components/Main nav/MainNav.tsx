import React from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";

const MainNav = () => {

    return (

        <nav className="main-nav">
            <ul className=" main-nav__subcontainer">
                <li className="main-nav__option">
                    <p className="main-nav__option-text">Home</p>
                </li>
                <div className="main-nav__line"></div>

                <li className="main-nav__option">
                    <p className="main-nav__option-text">Fruits</p>
                </li>
                <div className="main-nav__line"></div>
                <li className="main-nav__option">
                    <p className="main-nav__option-text">Vegetables</p>
                </li>
                <div className="main-nav__line"></div>
                <li className="main-nav__option">
                    <p className="main-nav__option-text">Meat & Porc</p>
                </li>
                <div className="main-nav__line"></div>
                <li className="main-nav__option">
                    <p className="main-nav__option-text">Fish & Seafood</p>
                </li>
                <div className="main-nav__line"></div>
                <li className="main-nav__option">
                    <p className="main-nav__option-text">Bakery</p>
                </li>
                <div className="main-nav__line"></div>
                <li className="main-nav__option">
                    <p className="main-nav__option-text">Our Blog</p>
                </li>
                
            </ul>
        </nav>
    )
};

export default MainNav;