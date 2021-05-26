import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import whitePencil from '../../assets/icons/whitePencil.svg';
import whiteDelete from '../../assets/icons/whiteDelete.svg';


const AdminProductDetails = () => {

    return(
        <div className="admin-product-details">

            <div className="admin-product-details__table-title-bar">
                <p className="admin-product-details__table-title">Product Details</p>
                <div className="admin-product-details__table-icon-container">
                    <img className="admin-product-details__table-icon" src={whiteDelete} alt="delete" />
                    <img className="admin-product-details__table-icon" src={whitePencil} alt="update" />
                </div>
            </div>

            <div className="admin-product-details__table-container">
                <div className="admin-product-details__table-image-container">
                    {/* <img className="admin-product-details__table-image" src={test} alt="product" /> */}
                </div>

                <h1 className="admin-product-details__title">Adidas Aurora</h1>
            </div>

        </div>
    )
};

export default AdminProductDetails;