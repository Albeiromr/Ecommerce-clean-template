import React, {useState, useContext, useEffect} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {cssVariables} from './types';
import {ProductGridContext} from '../../context/Product grid context/ProductGridContext';
import ProductCard from '../Product card/ProductCard';

const MobileProductGrid = () => {

    const {showFilters} = useContext(ProductGridContext);

    //This state is for hidding or not the filters in smartphone and tablets screens
    const [translate, setTranslate] = useState("-0%");

    useEffect(() => {
        if (showFilters === false) setTranslate("-44.726%");
        else setTranslate("-0%");
      }, [showFilters]);

    return (
        <main style={{"--translate": translate} as cssVariables} className="mobile-product-grid">

            <div className="mobile-product-grid__filter-container"></div>

            <div className="mobile-product-grid__subcontainer">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

        </main>
    )
};

export default MobileProductGrid;