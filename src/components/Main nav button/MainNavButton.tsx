import React, { Fragment, useContext} from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {props} from './MainNavButtonTypes';
import {MainNavContext} from "../../context/MainNavContext";


const MainNavButton = ({name}: props) => {

    const {setOptionSelected, optionSelected, productOptions} = useContext(MainNavContext);

    const handleClick = () => {
        if (optionSelected !== name) setOptionSelected(name);
        else return
    };

    const productsLength:number = productOptions.length - 1

  return (
    <Fragment>
      <li className={optionSelected === name ? "main-nav__option--selected" : "main-nav__option"} onClick={handleClick}>
        <p className={optionSelected === name ? "main-nav__option-text--selected":"main-nav__option-text" }>{name}</p>
      </li>
      <div className={name !== productOptions[productsLength].name ? "main-nav__line" : "main-nav__line--hidden" }></div>
    </Fragment>
  );
};

export default MainNavButton;
