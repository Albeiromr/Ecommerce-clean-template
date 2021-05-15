import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import cardCircle from '../../assets/images/cardCircle.png';
import colorCards from '../../assets/images/colorCards.png';

const Payment = () => {

    return (
        <div className="payment">
            <h2 className="payment__title">Payment Method</h2>
            <p className="payment__text">Please enter your payment method</p>
            <div className="payment__card-info-container">

                <img className="payment__card-circle" src={cardCircle} alt="circle" />
                <div className="payment__card-text">Credit Card</div>
                <img  className="payment__card-color-cards" src={colorCards} alt="cards" />

                <div className="payment__card-number-input-container">
                    <label className="payment__label" htmlFor="number">Card Number</label>
                    <input
                    className="payment__input"
                    type="text" 
                    id="number"
                    placeholder="Card number"
                    />
                </div>

                <div className="payment__card-holder-input-container">
                    <label className="payment__label" htmlFor="holder">Card Holder</label>
                    <input
                    className="payment__input"
                    type="text" 
                    id="holder"
                    placeholder="Card holder"
                    />
                </div>

                <div className="payment__card-expiration-input-container">
                    <label className="payment__label" htmlFor="expiration">Expiration Date</label>
                    <input
                    className="payment__input"
                    type="text" 
                    id="expiration"
                    placeholder="MM/YY"
                    />
                </div>

                <div className="payment__card-cvc-input-container">
                    <label className="payment__label" htmlFor="cvc">CVC</label>
                    <input
                    className="payment__input"
                    type="text" 
                    id="cvc"
                    placeholder="CVC"
                    />
                </div>

            </div>
        </div>
    )
};

export default Payment;