import React from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import searchIcon from '../../assets/icons/search.svg'

const SearchBar = () => {
  
    return (
      <form className="search-bar">
        <input
          className="search-bar__input"
          type="text"
          name="search"
          placeholder="Seach Products..."
        />
        <div className="search-bar__icon-container">
          <img
            className="search-bar__icon"
            src={searchIcon}
            alt="search icon"
          />
        </div>
      </form>
    );

};

export default SearchBar;
