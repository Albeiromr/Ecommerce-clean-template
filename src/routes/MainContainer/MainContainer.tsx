import React from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import Header from "../../components/Header/Header";
import MainNav from "../../components/Main nav/MainNav";
import FixedMenu from "../../components/Fixed menu/FixedMenu";
import Footer from "../../components/Footer/Footer";

const MainContainer = () => {
  return (
    <div className="main-container">
      <Header />
      <MainNav />

      <Footer />
      <FixedMenu />
    </div>
  );
};

export default MainContainer;
