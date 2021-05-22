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

    return(
        <div className="admin-dashboard-nav">
            <div className="admin-dashboard-nav__left-button-container">
                <div className="admin-dashboard-nav__orders-button"></div>
                <div className="admin-dashboard-nav__products-button"></div>
            </div>
        </div>
    )
};

export default AdminDashboardNav;