import React from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import { cssVariables } from "./types";
import useScrollbarSize from "react-scrollbar-size";

const ProductCard = () => {

  const {width} = useScrollbarSize();

  return (
    <article style={{ "--proportion": `${width.toString()}px` } as cssVariables} className="product-card">
      
    </article>
  );
};

export default ProductCard;
