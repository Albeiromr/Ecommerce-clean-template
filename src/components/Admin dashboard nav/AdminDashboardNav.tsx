import React, {useContext} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import ordersWhite from '../../assets/icons/ordersWhite.svg';
import ordersGray from '../../assets/icons/ordersGray.svg';
import productsWhite from '../../assets/icons/productsWhite.svg';
import productsGray from '../../assets/icons/productsGray.svg';
import {AdminDashboardContext} from '../../context/Admin dashboard context/AdminDashboardContext';

const AdminDashboardNav = () => {

    const {menuSelected, setMenuSelected,} = useContext(AdminDashboardContext);

    const handleOrderButtonClick = () => {
      if (menuSelected !== "orders") setMenuSelected("orders");
      else return;
    };

    const handleProductsButtonClick = () => {
      if (menuSelected !== "products") setMenuSelected("products");
      else return;
    };

    return(
        <div className="admin-dashboard-nav">
            <div className="admin-dashboard-nav__left-button-container">

                <div className={menuSelected === "orders" ?
                    "admin-dashboard-nav__selected-button" : 
                    "admin-dashboard-nav__no-selected-button"}
                    onClick={handleOrderButtonClick}>

                        <img className="admin-dashboard-nav__orders-icon" 
                        src={menuSelected === "orders" ? ordersWhite : ordersGray} alt="orders" 
                        />

                        <p className={menuSelected === "orders" ?
                            "admin-dashboard-nav__selected-text" :
                            "admin-dashboard-nav__no-selected-text"}
                        >Orders</p>

                </div>

                <div className={menuSelected === "products" ?
                    "admin-dashboard-nav__selected-button":
                    "admin-dashboard-nav__no-selected-button"}
                    onClick={handleProductsButtonClick}>

                        <img className="admin-dashboard-nav__products-icon" 
                        src={menuSelected === "products" ? productsWhite : productsGray} alt="products" 
                        />

                        <p className={menuSelected === "products" ?
                            "admin-dashboard-nav__selected-text" :
                            "admin-dashboard-nav__no-selected-text"}
                        >Products</p>

                </div>

            </div>
        </div>
    )
};

export default AdminDashboardNav;