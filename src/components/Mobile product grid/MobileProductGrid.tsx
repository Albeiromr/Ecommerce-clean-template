import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import ProductCard from '../Product card/ProductCard';

const MobileProductGrid = () => {

    return (
        <main className="mobile-product-grid">
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