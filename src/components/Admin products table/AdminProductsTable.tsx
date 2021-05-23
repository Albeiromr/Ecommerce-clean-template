import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import AdminListedProduct from '../Admin listed product/AdminListedProduct';

const AdminProductsTable = () => {

    return (
        <div className="admin-products-table">

            <div className="admin-products-table__table-title-bar">
                <p className="admin-products-table__first-title">Picture</p>
                <p className="admin-products-table__second-title">Sku</p>
                <p className="admin-products-table__third-title">Product Name</p>
                <p className="admin-products-table__fourt-title">Price</p>
                <p className="admin-products-table__fith-title">Profit</p>
                <p className="admin-products-table__sixth-title">Stock</p>
                <p className="admin-products-table__seventh-title">Actions</p>
            </div> 
            <div className="admin-products-table__table-container">
                <AdminListedProduct />
                <AdminListedProduct />
                <AdminListedProduct />
                <AdminListedProduct />
                <AdminListedProduct />
                <AdminListedProduct />
            </div>

        </div>
    )
};

export default AdminProductsTable;  