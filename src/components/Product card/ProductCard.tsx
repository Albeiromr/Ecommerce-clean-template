import React, { FC } from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import { cssVariables, productCardProps } from "./types";
import useScrollbarSize from "react-scrollbar-size";
import fiveStars from '../../assets/images/fiveStars.png';

const ProductCard:FC<productCardProps> = (props) => {

  //this useScrollBarSize is a costum hook to get the browswer scroll bar width
  // this is necessary due to give the individual product cart the right width to fit in its parent container
  const {width} = useScrollbarSize();
  const scrollBarWidth:number = width / props.fractionToDivide

  return (
    <article style={{ "--proportion": `${scrollBarWidth.toString()}px` } as cssVariables} className="product-card">
      <div className="product-card__subcontainer">
        <div className="product-card__image-container"></div>
        <h2 className="product-card__title">Product Title</h2>
        <img className="product-card__stars" src={fiveStars} alt="rate"/>
      </div>
    </article>
  );
};

export default ProductCard;
