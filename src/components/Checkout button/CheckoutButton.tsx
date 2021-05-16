import React, {useContext} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {ShoppingCartContext} from '../../context/Shopping cart context/ShoppingCartContext';

const CheckoutButton = () => {

    const {setShowPayment} = useContext(ShoppingCartContext);

    const handleCheckoutClick = () => {
        setShowPayment(true);
    };

    return(
        <div onClick={handleCheckoutClick} className="checkout-button">
            <p className="checkout-button__text">Checkout</p>
        </div>
    )
};

export default CheckoutButton;