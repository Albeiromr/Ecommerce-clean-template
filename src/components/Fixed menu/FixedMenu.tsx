import React from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import basket from "../../assets/icons/basket.svg";
import {useHistory} from 'react-router-dom';

const FixedMenu = () => {

  const history = useHistory();

  const handleClick = () => {
    history.push('/shopping-cart');
  }

  return (
      <div onClick={handleClick} className="fixed-menu">
        <img  className="fixed-menu__icon" src={basket} alt="basket" />
        <div className="fixed-menu__point"/>
      </div>
  )
};

export default FixedMenu;
