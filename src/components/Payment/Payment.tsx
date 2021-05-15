import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import cardCircle from '../../assets/images/cardCircle.png';

const Payment = () => {

    return (
        <div className="payment">
            <h2 className="payment__title">Payment Method</h2>
            <p className="payment__text">Please enter your payment method</p>
            <div className="payment__card-info-container">
                <img className="payment__card-circle" src={cardCircle} alt="circle" />
            </div>
        </div>
    )
};

export default Payment;