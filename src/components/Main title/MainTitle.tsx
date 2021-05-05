import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import filters from '../../assets/icons/filters.svg';
import SmallCategory from '../../components/Small category/SmallCategory';

const MainTitle = () => {

    return(
        <section className="main-title">
            <h1 className="main-title__title">Sneakers &amp; Shoes</h1>
            <div className="main-title__filter-button">
                <img className="main-title__filter-button-icon" src={filters} alt="filters"/>
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