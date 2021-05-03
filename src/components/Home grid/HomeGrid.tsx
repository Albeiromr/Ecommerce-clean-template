import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import ProductCard from '../Product card/ProductCard';

const HomeGrid = () => {

    return (
        <section className="home-grid">
            <h2 className="home-grid__title"># Run With Style</h2>
            <div className="home-grid__category-container">
                <div className="home-grid__category-subcontainer">
                    <div className="home-grid__individual-category-container">
                        <h3 className="home-grid__category">Product Category One</h3>
                    </div>
                    
                    <div className="home-grid__individual-category-container">
                        <h3 className="home-grid__category">Product Category Two</h3>
                    </div>
                    
                    <div className="home-grid__individual-category-container">
                        <h3 className="home-grid__category">Product Category Three</h3>
                    </div>
                    
                    <div className="home-grid__individual-category-container">
                        <h3 className="home-grid__category">Product Category Four</h3>
                    </div>
                    
                    <div className="home-grid__individual-category-container">
                        <h3 className="home-grid__category">Product Category Five</h3>
                    </div>
                    
                </div>
            </div>

            <div className="home-grid__product-card-container">
                {/* <ProductCard />
                <ProductCard />
                <ProductCard /> 
                <ProductCard />  */}
            </div>

            <div className="home-grid__button"></div>
        </section>
    )
};

export default HomeGrid;