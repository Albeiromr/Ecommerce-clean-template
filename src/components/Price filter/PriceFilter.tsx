import React, {useContext} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import MultiRangeSlider from '../Multi range slider/MultiRangeSlider';
import { ProductGridContext } from "../../context/Product grid context/ProductGridContext";


const PriceFilter = () => {

    const {minValue, maxValue} = useContext(ProductGridContext);

    

    return (
        <div className="price-filter">
            <h2 className="price-filter__title">price range</h2>
            <MultiRangeSlider min={1} max={100}/>

            <div className="price-filter__subcontainer">

                <div className="price-filter__subcontainer-min-container">

                    <p className="price-filter__subcontainer-label">Min</p>
                    <div className="price-filter__subcontainer-text-container">
                        <p className="price-filter__subcontainer-text">{minValue}</p>
                    </div>

                </div>

                <div className="price-filter__subcontainer-dash"/>

                <div className="price-filter__subcontainer-max-container">

                    <p className="price-filter__subcontainer-label" >Max</p>
                    <div className="price-filter__subcontainer-text-container">
                        <p className="price-filter__subcontainer-text">{maxValue}</p>
                    </div>

                </div>


            </div>

            <input className="price-filter__submit" type="submit" value="Apply" />

            <p className="price-filter__reset">Reset</p>

        </div>
    )
};

export default PriceFilter;