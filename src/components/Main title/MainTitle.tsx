import React,{useContext} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {ProductGridContext} from '../../context/Product grid context/ProductGridContext';
import filters from '../../assets/icons/filters.svg';
import chevronLeft from '../../assets/icons/chevronLeft.svg';
import SmallCategory from '../../components/Small category/SmallCategory';


const MainTitle = () => {

    const {showFilters, setShowFilters} = useContext(ProductGridContext);

    const handleButtonClick = () => {
        if(showFilters === false) setShowFilters(true);
        else setShowFilters(false);
    };

    return(
        <section className="main-title">
            <h1 className="main-title__title">Sneakers &amp; Shoes</h1>

            <div onClick={handleButtonClick} 
            className={showFilters === false ? "main-title__filter-button" : "main-title__filter-button--activated"}
            >

                <img className="main-title__filter-button-icon" 
                src={showFilters === false ? filters : chevronLeft} 
                alt="filters"/>

            </div>
            
            <div className="main-title__small-category-container">
                <div className="main-title__small-category-subcontainer">
                    <p className="main-title__small-category-pretext">Applied filters:</p>
                    <SmallCategory />
                    <SmallCategory />
                    <SmallCategory />
                </div>
            </div>

        </section>
    )
};

export default MainTitle;