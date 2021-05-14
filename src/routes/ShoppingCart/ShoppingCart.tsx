import React from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import ActualPath from '../../components/Actual path/ActualPath';
import Cart from '../../components/Cart/Cart'
import DiscoverSection from '../../components/Discover section/DiscoverSection';
import InterestProducts from '../../components/Interest products/InterestProducts';


const ShoppingCart = () => {
  return <div className="shopping-cart">
    <ActualPath />
    <Cart />
    <DiscoverSection />
    <InterestProducts />
  </div>;
};

export default ShoppingCart;
