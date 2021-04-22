import React from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";

const Slide = () => {
  return (
    <section className="slide">
      <div className="slide__column-left"></div>
      <div className="slide__subcontainer">
          <article className="slide__article">
              <div className="slide__article-text-container">
                  <p className="slide__article-title">HOT PRODUCTS</p>
                  <h2 className="slide__article-subtitle">Fill your desk full of technology</h2>
                  <div className="slide__article-button">
                      <p className="slide__article-button-text">View More</p>
                  </div>
              </div>
          </article>

          <div className="slide__circle-container">
              <div className="slide__circle"></div>
              <div className="slide__circle--selected"></div>
              <div className="slide__circle"></div>
          </div>
      </div>
      <div className="slide__column-right"></div>
    </section>
  );
};

export default Slide;
