import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";



const ProductDetails = () => {

    return (
        <section className="product-details">
            <div className="product-details__subcontainer">
                <h1 className="product-details__mobile-title">Kamura Orange</h1>
                <p className="product-details__mobile-sku">SKU 3457SNE9088</p>
                <div className="product-details__description-container">
                    <h1 className="product-details__desktop-title">Kamura Orange</h1>
                    <p className="product-details__desktop-sku">SKU 3457SNE9088</p>
                </div>
            </div>
        </section>
    )
};

export default ProductDetails;