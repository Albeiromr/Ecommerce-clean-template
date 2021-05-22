import React, {useContext} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import ordersWhite from '../../assets/icons/ordersWhite.svg';
import ordersGray from '../../assets/icons/ordersGray.svg';
import productsWhite from '../../assets/icons/productsWhite.svg';
import productsGray from '../../assets/icons/productsGray.svg';
import sortBy from '../../assets/icons/sortBy.svg';
import chevronLeftGray from '../../assets/icons/chevronLeftGray.svg';
import addGray from '../../assets/icons/addGray.svg';
import {AdminDashboardContext} from '../../context/Admin dashboard context/AdminDashboardContext';

const AdminDashboardNav = () => {

    const {menuSelected, setMenuSelected, adminRoute, setAdminRoute} = useContext(AdminDashboardContext);

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

            <div className="admin-dashboard-nav__right-button-container">

                {adminRoute === "orders" ?
                <div className="admin-dashboard-nav__status-filter-button">
                    <p className="admin-dashboard-nav__status-filter-button-text">Status</p>
                    <img className="admin-dashboard-nav__status-filter-button-icon" src={sortBy} alt="sort by" />
                </div>
                : null}

                {adminRoute === "order-details" ?
                <div className="admin-dashboard-nav__all-orders-button">
                    <img className="admin-dashboard-nav__all-orders-button-icon" src={chevronLeftGray} alt="back" />
                    <p className="admin-dashboard-nav__all-orders-button-text">All Orders</p>
                </div>
                : null}

                {adminRoute === "order-details" ?
                <div className="admin-dashboard-nav__on-delivery-button">
                    <p className="admin-dashboard-nav__on-delivery-button-text">On Delivery</p>
                </div>
                : null}

                {adminRoute === "products" ?
                <div className="admin-dashboard-nav__add-new-button">
                    <img className="admin-dashboard-nav__add-new-button-icon" src={addGray} alt="add" />
                    <p className="admin-dashboard-nav__add-new-button-text">Add New</p>
                </div>
                : null}

                {adminRoute === "product-form" ?
                <div className="admin-dashboard-nav__all-products-button">
                    <img className="admin-dashboard-nav__all-products-button-icon" src={chevronLeftGray} alt="back" />
                    <p className="admin-dashboard-nav__all-products-button-text">All Products</p>
                </div>
                : null}

                {adminRoute === "product-form" ?
                <div className="admin-dashboard-nav__save-product-button">
                    <p className="admin-dashboard-nav__save-product-button-text">Save Product</p>
                </div>
                : null}

            </div>
            

       </div>
    )
};

export default AdminDashboardNav;