import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";

const CartIndividualProduct = () => {

    return(
        <article className="cart-individual-product">
            <div className="cart-individual-product__subcontainer">

                <div className="cart-individual-product__image-container">
                    {/* <img className="cart-individual-product__image" src={test} alt="product" /> */}
                </div>

                <h2 className="cart-individual-product__title">Product Title</h2>
                <p className="cart-individual-product__big-price">36.99 USD</p>
                <p className="cart-individual-product__crossed-line-price">48.56 USD</p>
                <p className="cart-individual-product__size-text">Size</p>
                <div className="cart-individual-product__size-container">
                    <p className="cart-individual-product__size">M</p>
                </div>
            </div>
        </article>
    )
};

export default CartIndividualProduct;