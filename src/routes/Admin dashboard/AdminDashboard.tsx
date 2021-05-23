import React, {useContext} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {AdminDashboardContext} from '../../context/Admin dashboard context/AdminDashboardContext';
import AdminDashboardHeader from '../../components/Admin dashboard header/AdminDashboardHeader';
import AdminDashboardNav from '../../components/Admin dashboard nav/AdminDashboardNav';
import AdminProductsTable from '../../components/Admin products table/AdminProductsTable';


const AdminDashboard = () => {

    const {adminRoute} = useContext(AdminDashboardContext);

    return(
        <div className="admin-dashboard">
            <AdminDashboardHeader />
            <AdminDashboardNav />

            {adminRoute === "products" ? <AdminProductsTable /> : null}
            
        </div>
    )
};

export default AdminDashboard;