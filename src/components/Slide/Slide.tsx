import React, {useEffect, useState} from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {backgroundImgType, slideImgType} from './types';
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';

const Slide = () => {

    //This state set the background image for the slide__article element, is required for a smooth img transition
    const [backgroundImg, setBackgroundIMG] = useState<backgroundImgType>(slide1);
    //this state set the image inside the slide__article element, is required for an smooth transition
    const [slideImg, setSlideImg] = useState<slideImgType>(slide1);


    useEffect(() => {
      setTimeout(() => {
        switch (backgroundImg) {
          case slide1:
            setBackgroundIMG(slide2);
            break;
          case slide2:
            setBackgroundIMG(slide3);
            break;
          case slide3:
            setBackgroundIMG(slide1);
            break;
          default:
        }
      }, 9000);
    }, [backgroundImg]);

    useEffect(() => {
      setTimeout(() => {
        switch (slideImg) {
          case slide1:
            setSlideImg(slide2);
            break;
          case slide2:
            setSlideImg(slide3);
            break;
          case slide3:
            setSlideImg(slide1);
            break;
          default:
        }
      }, 8000);
    }, [slideImg]);


  return (
    <section className="slide">
      <div className="slide__column-left"></div>
      <div className="slide__subcontainer">
          <article className="slide__article" style={{backgroundImage: `url(${backgroundImg})`}}>

              <div className="slide__articul-images-preload">
                  <img className="slide__image-preloaded" src={slide1} alt="slide"/>
                  <img className="slide__image-preloaded" src={slide2} alt="slide"/>
                  <img className="slide__image-preloaded" src={slide3} alt="slide"/>
              </div>

               <img className="slide__article-image" src={slideImg} alt="slide"/> 

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
