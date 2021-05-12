import React from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";

const ActualPAth = () => {
  return (
    <div className="actual-path">
      <div className="actual-path__subcontainer">
        <p className="actual-path__text">Home</p>
        <p className="actual-path__bar">/</p>
        <p className="actual-path__text--strong">Sneakers and Shoes</p>
        <p className="actual-path__bar--hidden">/</p>
      </div>
    </div>
  );
};

export default ActualPAth;
