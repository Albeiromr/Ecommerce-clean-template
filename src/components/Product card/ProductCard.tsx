import React, {useState} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {proportionType, cssVariables} from './types';

const ProductCard = () => {

    const [proportion, setProportion] = useState<proportionType>(0)

    //these two functions let us know the scroll width every time the page loads or resize
    //and update the state PROPORTION to know what proportion discount in the peoductCard component width
    // due to the space that the scroll use in the user screen
    window.addEventListener("load", (): void => {
      const windowWidth: number = window.innerWidth;
      const windowLessScroll: number = document.body.clientWidth;
      const scrollWidth: number = windowWidth - windowLessScroll;
      if (scrollWidth > 0) {
        setProportion(scrollWidth / 3);
      } else {
        setProportion(0);
      };
      
    });

    window.addEventListener("resize", (): void => {
        const windowWidth: number = window.innerWidth;
        const windowLessScroll: number = document.body.clientWidth;
        const scrollWidth: number = windowWidth - windowLessScroll;
        if (scrollWidth > 0) {
          setProportion(scrollWidth / 3);
        } else {
          setProportion(0);
        };
        
      });

   

    
    
    

    return (
        <article style={{proportion: `${proportion.toString()}px`} as cssVariables} className="product-card">
            
        </article>
    )
};

export default ProductCard;