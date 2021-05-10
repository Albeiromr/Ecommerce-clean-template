import React from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import { Link } from "react-router-dom";

const ActualPAth = () => {
  return (
    <div className="actual-path">
      <div className="actual-path__subcontainer">
        <Link className="Link" to="/">
          <p className="actual-path__text">Home</p>
        </Link>
        <p className="actual-path__bar">/</p>
        <p className="actual-path__text--strong">Sneakers and Shoes</p>
        <p className="actual-path__bar--hidden">/</p>
      </div>
    </div>
  );
};

export default ActualPAth;
