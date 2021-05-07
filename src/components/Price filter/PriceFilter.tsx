import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import MultiRangeSlider from '../Multi range slider/MultiRangeSlider.jsx';

const PriceFilter = () => {

    return (
        <div className="price-filter">
            <MultiRangeSlider min={1} max={100}/>
        </div>
    )
};

export default PriceFilter;