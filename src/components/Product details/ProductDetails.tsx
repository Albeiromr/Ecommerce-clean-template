import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import fourStars from '../../assets/images/fourStars.png';
import grayCheck from '../../assets/icons/grayCheck.svg';
import eye from '../../assets/icons/eye.svg';
import SizeSquare from '../Size square/SizeSquare';



const ProductDetails = () => {
    
    //temporal sizes array ------------------------------------------------------------
    type size = {
        name: string
    };

    const sizes:size[] = [
        {name: "XS"},
        {name: "S"},
        {name: "M"},
        {name: "L"},
        {name: "XL"}
    ];
    //----------------------------------------------------------------------------------

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
                        <div className="product-details__viewed-container">
                            <img className="product-details__viewed-container-icon" src={eye} alt="eye" />
                            <p className="product-details__viewed-container-number">1.4K</p>
                            <p className="product-details__viewed-container-text">iewed</p>
                        </div>
                        
                    </div>
                    
                    <div className="product-details__flex-container">
                        <p className="product-details__description">
                        New Design Hoodied Long tyuvr Sleeve Linen Shirt Men Solid Color 100%
                        Cotton Quality Pullover Shirt for Men Streetwear Men's Shirts
                        </p>
                        <div className="product-details__price-container">
                            <p className="product-details__price">$976.33</p>
                            <p className="product-details__crossed-line-price">$1.020.99</p>
                            <div className="product-details__discount-container">
                                <p className="product-details__discount">20%</p>
                            </div>
                        </div>
                        <div className="product-details__size-container">
                            <p className="product-details__size-text">Sizes</p>
                            <div className="product-details__size-square-container">
                                {sizes.map((size) => <SizeSquare name={size.name}/>)}
                            </div>
                        </div>
                        <div className="product-details__buttons-container"></div>
                        <div className="product-details__social-container"></div>
                        
                    </div>
                
                </div>
            </div>
        </section>
    )
};

export default ProductDetails;