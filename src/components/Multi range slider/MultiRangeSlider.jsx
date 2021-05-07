import React, {useRef} from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";

const MultiRangeSlider = () => {

    const inputLeft = useRef()
    const inputRight = useRef()
    const thumbLeft = useRef()
    const range = useRef()


    const setLeftValue = () => {
      let rangeLeft = inputLeft.current;
      let rangeRight = inputRight.current;

      let min = parseInt(rangeLeft.min);
      let max = parseInt(rangeLeft.max);
      let value = Math.min(parseInt(rangeLeft.value), parseInt(rangeRight.value) - 1);

      let percent = ((rangeLeft.value - min) / (max - min)) * 100;
    
      thumbLeft.current.style.left = `${percent}%`;
      range.current.style.left = `${percent}%`;
      

      console.log(value);
    };


  return (

    <div className="middle">

        <div className="multi-range-slider">

            <input ref={inputLeft} onInput={setLeftValue} className="input-left" type="range" min="0" max="100"  />
            <input ref={inputRight} className="input-right" type="range" min="0" max="100" value="75" />

            <div className="slider">
                <div className="track"></div>
                <div ref={range} className="range"></div>
                <div ref={thumbLeft} className="thumb left"></div>
                <div className="thumb right"></div>
            </div>
            
        </div>
      
    </div>
  )
};

export default MultiRangeSlider;
