import React from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {productOptions} from '../../utils/productOptions';
import MainNavButton from '../Main nav button/MainNavButton';

const MainNav = () => {


    return (

        <nav className="main-nav">
            <ul className=" main-nav__subcontainer">

                <MainNavButton name={productOptions[0]}/>
                <MainNavButton name={productOptions[1]}/>
                <MainNavButton name={productOptions[2]}/>
                <MainNavButton name={productOptions[3]}/>
                <MainNavButton name={productOptions[4]}/>
                <MainNavButton name={productOptions[5]}/>
                <MainNavButton name={productOptions[6]}/>
                
            </ul>
        </nav>
    )
};

export default MainNav;