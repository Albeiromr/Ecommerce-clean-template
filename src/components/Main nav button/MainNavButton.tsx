import React, { Fragment, useState } from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";

type props = {
    name: string;
}

const MainNavButton = ({name}: props) => {

    const [optionSelected, setOptionSelected] = useState("Home");

    const handleClick = () => {
        if (optionSelected !== name) setOptionSelected(name);
        else return
    };

  return (
    <Fragment>
      <li className={optionSelected === name ? "main-nav__option--selected" : "main-nav__option"} onClick={handleClick}>
        <p className={optionSelected === name ? "main-nav__option-text--selected":"main-nav__option-text" }>{name}</p>
      </li>
      <div className="main-nav__line"></div>
    </Fragment>
  );
};

export default MainNavButton;
