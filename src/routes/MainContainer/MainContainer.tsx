import React from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import Header from "../../components/Header/Header";
import SearchMobile from '../../components/Search mobile/SearchMobile';
import MainNav from "../../components/Main nav/MainNav";
import FixedMenu from "../../components/Fixed menu/FixedMenu";
import Footer from "../../components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from '../Home/Home';
import Products from '../Products/Products';
import Item from '../Item/item';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

const MainContainer = () => {
  return (
    <Router >
    <div className="main-container">
      
      <Header />
      <SearchMobile />
      <MainNav />
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/item" exact component={Item} />
        <Route path="/shopping-cart" exact component={ShoppingCart} />

      </Switch>
      <Footer />
      <FixedMenu />
      
    </div>
    </Router>
  );
};

export default MainContainer;
