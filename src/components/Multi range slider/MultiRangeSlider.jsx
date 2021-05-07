import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";



const MultiRangeSlider = ({ min, max }) => {
  const [minVal, setMinVal] = useState(min + 20);
  const [maxVal, setMaxVal] = useState(max - 20);
  const minValRef = useRef(min + 20);
  const maxValRef = useRef(max - 20);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    value => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  return (
    <div className="multi-range-slider">

      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="multi-range-slider__thumb multi-range-slider__thumb--left"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />

      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="multi-range-slider__thumb multi-range-slider__thumb--right"
      />

      <div className="multi-range-slider__slider">
        <div className="multi-range-slider__slider-track" />
        <div ref={range} className="multi-range-slider__slider-range" />
        <div className="multi-range-slider__slider-left-value">{minVal}</div>
        <div className="multi-range-slider__slider-right-value">{maxVal}</div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
};

export default MultiRangeSlider;