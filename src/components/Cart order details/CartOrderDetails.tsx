import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";

const CartOrderDetails  = () => {
    
    return(
        <div className="cart-order-details">

            <div className="cart-order-details__title-container">
                <h1 className="cart-order-details__title">Cart Summary</h1>
                <p className="cart-order-details__paragraph">
                Price can change depending on shipping method and taxes
                </p>
            </div>

            <div className="cart-order-details__products-container"></div>
        </div>
    )
};

export default CartOrderDetails;