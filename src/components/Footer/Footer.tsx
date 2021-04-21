import React from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import personFooter from '../../assets/images/personFooter.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__subcontainer">
        <article className="footer__article">
          <div className="footer__article-subcontainer">
            <div className="footer__article-text-box">
              <p className="footer__article-title">All UPS FOR GRABS</p>
              <h2 className="footer__article-subtitle">Enjoy up to 70% off</h2>
              <p className="footer__article-paragraph">Lorem ipsum dolor amet lorem ipsum dolor amet aler products </p>
              <div className="footer__article-button">
                <p className="footer__article-button-text">View Products</p>
              </div>
            </div>
            
          </div>
          <div className="footer__image-container">
            <img className="footer__image" src={personFooter} alt="happy person"/>
          </div>
          
        </article>
        <div className="footer__social"></div>
        <div className="footer__copyright"></div>
      </div>
    </footer>
  );
};

export default Footer;
