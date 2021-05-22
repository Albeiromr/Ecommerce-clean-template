import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import AdminDashboardHeader from '../../components/Admin dashboard header/AdminDashboardHeader';
import AdminDashboardNav from '../../components/Admin dashboard nav/AdminDashboardNav';


const AdminDashboard = () => {

    return(
        <div className="admin-dashboard">
            <AdminDashboardHeader />
            <AdminDashboardNav />
        </div>
    )
};

export default AdminDashboard;