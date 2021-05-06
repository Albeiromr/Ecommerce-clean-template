import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";


const Filters = () => {

    return(
        <aside className="filters">
            <h2 className="filters__title-one">Categories</h2>
            <div className="filters__categories-container"></div>
            <h2 className="filters__title-two">Filter By Size</h2>
            <div className="filters__sizes-container"></div>
            <div className="filters__range-filter-container"></div>
            
            
        </aside>
    )
};

/* const individualCategorie = () => {

    return (
        <div className="individual-categorie">

        </div>
    )
}; */



export default Filters;