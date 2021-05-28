import React from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import basket from "../../assets/icons/basket.svg";

const FixedMenu = () => {
  return (
    <div className="fixed-menu">
      <div className="fixed-menu__icon-container-basket">
        <img
          className="fixed-menu__icon-basket"
          src={basket}
          alt="filter icon"
        />

        <div className="fixed-menu__basket-counter">
          <p className="fixed-menu__basket-text">0</p>
        </div>
      </div>
    </div>
  );
};

export default FixedMenu;
