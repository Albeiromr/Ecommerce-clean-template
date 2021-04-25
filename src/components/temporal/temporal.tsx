import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import ProductCard from '../Product card/ProductCard';

const Temporal = () => {

    
    

    return(
        <div className="temporal">

            <ProductCard 
            fractionToDivide={3}
            />

        </div>
    )
};

export default Temporal;