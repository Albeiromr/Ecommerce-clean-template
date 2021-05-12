import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import fourStars from '../../assets/images/fourStars.png';
import grayCheck from '../../assets/icons/grayCheck.svg';



const ProductDetails = () => {

    return (
        <section className="product-details">
            <div className="product-details__subcontainer">
                <h1 className="product-details__mobile-title">Kamura Orange</h1>
                <p className="product-details__mobile-sku">SKU 3457SNE9088</p>
                <div className="product-details__description-container">
                    <h1 className="product-details__desktop-title">Kamura Orange</h1>
                    <p className="product-details__desktop-sku">SKU 3457SNE9088</p>
                    <div className="product-details__popularity-container">
                        <div className="product-details__rate-container">
                            <p className="product-details__rate-container-number">4.0</p>
                            <img className="product-details__rate-container-stars" src={fourStars} alt="rate" />
                            <p className="product-details__rate-container-amount">&#40;223&#41;</p>
                        </div>
                        <div className="product-details__popularity-container-line" />
                        <div className="product-details__sold-container">
                            <img className="product-details__sold-container-icon" src={grayCheck} alt="check" />
                            <p className="product-details__sold-container-number">4.320</p>
                            <p className="product-details__sold-container-text">Sold</p>
                        </div>
                        <div className="product-details__popularity-container-line product-details__popularity-container-line-last" />
                        <div className="product-details__viewed-container"></div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ProductDetails;