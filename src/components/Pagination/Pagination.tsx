import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import chevronLeft from '../../assets/icons/chevronLeft.svg';
import chevronRight from '../../assets/icons/chevronRight.svg'; 


const Pagination = () => {

    return (
        <div className="pagination">
            <div className="pagination__subcontainer">
                <div className="pagination__button-left">
                    <img className="pagination__button-left-icon" src={chevronLeft} alt="left" />
                    <p className="pagination__button-left-text">Back</p>
                </div>
                <div className="pagination__button-right">
                    <p className="pagination__button-right-text">Next</p>
                    <img className="pagination__button-right-icon" src={chevronRight} alt="right" />
                </div>
            </div>
        </div>
    )
};

export default Pagination;

