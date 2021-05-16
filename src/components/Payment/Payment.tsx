import React, {useState, useContext} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import cardCircle from '../../assets/images/cardCircle.png';
import colorCards from '../../assets/images/colorCards.png';
import checked from '../../assets/icons/checked.svg';
import shield from '../../assets/icons/shield.svg';
import chevronHideCategories from '../../assets/icons/chevronHideCategories.svg';
import {ShoppingCartContext} from '../../context/Shopping cart context/ShoppingCartContext';

const Payment = () => {

    const {setShowPayment} = useContext(ShoppingCartContext);

    // checkOne and checkTwo state are needed for changing the check class when it is clicked
    const [checkOne, setCheckOne] = useState(false);
    const [checkTwo, setCheckTwo] = useState(false);

    const handleCheckOneClick = () => {
        if(!checkOne) setCheckOne(true);
        else setCheckOne(false);
    };

    const handleCheckTwoClick = () => {
        if(!checkTwo) setCheckTwo(true);
        else setCheckTwo(false);
    };

    const handleRetunClick = () => {
        setShowPayment(false);
    };

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

            <div className="payment__demo-card-button">
                <p className="payment__demo-card-button-text">Use Demo Card</p>
            </div>

            <h2 className="payment__confirmation-title">Confirmation</h2>
            <p className="payment__confirmation-text">We are getting to the end. Just a few clicks and your order si ready!</p>

            <div className="payment__check-container-above">
                <div className={!checkOne ? "payment__check" : "payment__check--selected"} onClick={handleCheckOneClick}>
                    {checkOne ? <img className="payment__check-icon" src={checked} alt="check" />: null}
                </div>
                <p className="payment__check-container-text">I agree with sending me Marketing emails</p>
            </div>

            <div className="payment__check-container-below">
                <div className={!checkTwo ? "payment__check" : "payment__check--selected"} onClick={handleCheckTwoClick}>
                    {checkTwo ? <img className="payment__check-icon" src={checked} alt="check" />: null}
                </div>
                <p className="payment__check-container-text">I agree with  the <u>terms and conditions</u></p>
            </div>

            <div className="payment__complete-order-button">
                <p className="payment__demo-card-button-text"> Complete Order</p>
            </div>

            <img className="payment__shield-icon" src={shield} alt="shield" />
            <p className="payment__shield-title">All your data is safe</p>
            <p className="payment__shield-paragraph">
                We are using the most advanced security to provide you the best experience ever.
            </p>

            <div className="payment__return-button">
                <img onClick={handleRetunClick} className="payment__return-button-icon" src={chevronHideCategories} alt="arrow" />
            </div>
        </div>
    )
};

export default Payment;