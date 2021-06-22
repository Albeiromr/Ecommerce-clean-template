import React,{useContext} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {useLocation} from 'react-router-dom';
import {ProductGridContext} from '../../context/Product grid context/ProductGridContext';


const IndividualCategory = () => {

    const {setShowFilters} = useContext(ProductGridContext);

    const {pathname} = useLocation();

    const handleClick = () => {
        if(pathname === '/products') window.scrollTo({top: 0, left: 0, behavior: "smooth"});
        setShowFilters(false);
    };

    return(
        <div onClick={handleClick} className="individual-category">
            <h3 className="individual-category__title">Individual Category</h3>
            <div className="individual-category__product-quantity">
                <p className="individual-category__product-quantity-text">687</p>
            </div>
        </div>
    )
};

export default IndividualCategory;