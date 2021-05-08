import React, {useContext} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import MultiRangeSlider from '../Multi range slider/MultiRangeSlider';
import { ProductGridContext } from "../../context/Product grid context/ProductGridContext";


const PriceFilter = () => {

    const {range, minValue, maxValue, setMinValue, setMaxValue, setRange,} = useContext(ProductGridContext);

    return (
        <div className="price-filter">
            <h2 className="price-filter__title">price range</h2>
            <MultiRangeSlider min={range.min} max={range.max}/>

            <form className="price-filter__form">

                <div className="price-filter__form-min-container">
                    <label className="price-filter__form-label" htmlFor="minAmount">Min</label>
                    <input
                     className="price-filter__form-input"
                     placeholder={minValue.toString()}
                     type="text" 
                     name="min"
                     id="minAmount"
                    />
                </div>

                <div className="price-filter__form-dash"/>

                <div className="price-filter__form-max-container">
                    <label className="price-filter__form-label" htmlFor="maxAmount">Max</label>
                    <input
                     className="price-filter__form-input"
                     placeholder={maxValue.toString()}
                     type="text" 
                     name="max"
                     id="maxAmount"
                    />
                </div>


            </form>

            <input className="price-filter__submit" type="submit" value="Apply" />

            <p className="price-filter__reset">Reset</p>

        </div>
    )
};

export default PriceFilter;