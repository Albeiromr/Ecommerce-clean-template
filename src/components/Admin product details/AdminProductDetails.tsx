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
                <p className="admin-product-details__description-title">Description:</p>
                <p className="admin-product-details__description-text">
                    2020 new fashion snapback baseball cap flat-brimmed 
                    hat visor hat wild personality hip hop hats for men 
                    women caps
                </p>
                <p className="admin-product-details__product-type-title">Product Type:</p>
                <p className="admin-product-details__product-type-text">Snaekers &amp; Shoes</p>
                <p className="admin-product-details__sku-title">Sku:</p>
                <p className="admin-product-details__sku-text">4567SNE89076</p>
                <p className="admin-product-details__price-title">Price:</p>
                <p className="admin-product-details__price-text">$120.45</p>
                <p className="admin-product-details__stock-title">Stock:</p>
                <p className="admin-product-details__stock-text">143</p>
                <p className="admin-product-details__reviews-title">Reviews:</p>
                <p className="admin-product-details__reviews-text">2345</p>
                <p className="admin-product-details__sizes-title">Sizes:</p>
                <p className="admin-product-details__sizes-text">XS, S, M, XL</p>
                <p className="admin-product-details__old-price-title">Old price:</p>
                <p className="admin-product-details__old-price-text">$145.99</p>
                <p className="admin-product-details__rate-title">Rate:</p>
                <p className="admin-product-details__rate-text">5 Stars</p>
                <p className="admin-product-details__sold-title">Sold:</p>
                <p className="admin-product-details__sold-text">876</p>
                <p className="admin-product-details__profit-title">Profit:</p>
                <p className="admin-product-details__profit-text">$123.45</p>

            </div>

        </div>
    )
};

export default AdminProductDetails;