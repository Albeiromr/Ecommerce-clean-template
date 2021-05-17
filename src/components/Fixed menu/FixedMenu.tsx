import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import filters from '../../assets/icons/filters.svg';
import search from '../../assets/icons/search.svg';
import home from '../../assets/icons/home.svg'
import basket from '../../assets/icons/basket.svg'
import arrowUp from '../../assets/icons/arrowUp.svg'


const FixedMenu = () => {

    return (
      <div className="fixed-menu">
        <div className="fixed-menu__subcontainer">
          <div className="fixed-menu__left-block">
            <div className="fixed-menu__icon-container">
              <img
                className="fixed-menu__icon"
                src={filters}
                alt="filter icon"
              />
            </div>

            <div className="fixed-menu__line"></div>

            <div className="fixed-menu__icon-container">
              <img
                className="fixed-menu__icon"
                src={search}
                alt="filter icon"
              />
            </div>
          </div>
          <div className="fixed-menu__middle-block">
            <div className="fixed-menu__icon-middle-container">
              <img
                className="fixed-menu__icon"
                src={arrowUp}
                alt="filter icon"
              />
            </div>
          </div>
          <div className="fixed-menu__right-block">
            <div className="fixed-menu__icon-container">
              <img className="fixed-menu__icon" src={home} alt="filter icon" />
            </div>

            <div className="fixed-menu__line"></div>

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
        </div>
      </div>
    );
};

export default FixedMenu;