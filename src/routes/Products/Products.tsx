import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import DiscoverSection from '../../components/Discover section/DiscoverSection';
import InterestProducts from '../../components/Interest products/InterestProducts';

const Products = () => {

    return(
        <div className="products">
            <DiscoverSection />
            <InterestProducts />
        </div>
    )
};

export default Products;