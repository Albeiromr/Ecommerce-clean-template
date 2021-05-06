import React, {useContext, useEffect, useState} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {cssVariables} from './types';
import {ProductGridContext} from '../../context/Product grid context/ProductGridContext';
import ProductCard from '../Product card/ProductCard';
import Filters from '../Filters/Filters';

const DesktopProductGrid = () => {

    const {showFilters} = useContext(ProductGridContext);

    //This state is for hidding or not the filters in smartphone and tablets screens
    const [translate, setTranslate] = useState("-32.631%");


    useEffect(() => {
      if (showFilters === false) setTranslate("-32.631%");
      else setTranslate("-0%");
    }, [showFilters]);

    return (
        <main style={{"--translate": translate} as cssVariables} className="desktop-product-grid">
            
            <div className="desktop-product-grid__filter-container">
                <Filters />
            </div>
            
            <div className="desktop-product-grid__subcontainer">
                <ProductCard />
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

export default DesktopProductGrid;