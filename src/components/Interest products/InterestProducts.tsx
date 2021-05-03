import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import ProductCard from '../../components/Product card/ProductCard';
import arrowRight from '../../assets/icons/arrowRight.svg';


const InterestProducts = () => {

    return (
        <section className="interest-products">
            <h2 className="interest-products__title">This might interest you!!</h2>
            <div className="interest-products__product-card-container"></div>

            <div className="interest-products__button">
                <p className="interest-products__button-text">Show More</p>
                <img className="interest-products__button-arrow" src={arrowRight} alt="arrow"/>
            </div>
        </section>
    )
}

export default InterestProducts;