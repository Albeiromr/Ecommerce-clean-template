import React, { FC } from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import { cssVariables, productCardProps } from "./types";
import useScrollbarSize from "react-scrollbar-size";

const ProductCard:FC<productCardProps> = (props) => {

  const {width} = useScrollbarSize();
  const proportion:number = width / props.fractionToDivide

  return (
    <article style={{ "--proportion": `${proportion.toString()}px` } as cssVariables} className="product-card">
      
    </article>
  );
};

export default ProductCard;
