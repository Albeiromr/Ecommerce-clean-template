import React, { Fragment, useContext, FC } from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import { Link } from "react-router-dom";
import { componentProps } from "./types";
import { MainNavContext } from "../../context/Main nav context/MainNavContext";

const MainNavButton: FC<componentProps> = (props) => {
  const { setOptionSelected, optionSelected, productOptions } = useContext(
    MainNavContext
  );

  const handleClick = () => {
    if (optionSelected !== props.name) setOptionSelected(props.name);
    else return;
  };

  const productsLength: number = productOptions.length - 1;

  return (
    <Fragment>
      <Link className="Link" to={props.name === "Home" ? "/" : "/products"}>
        <li
          className={
            optionSelected === props.name
              ? "main-nav__option--selected"
              : "main-nav__option"
          }
          onClick={handleClick}
        >
          <p
            className={
              optionSelected === props.name
                ? "main-nav__option-text--selected"
                : "main-nav__option-text"
            }
          >
            {props.name}
          </p>
        </li>
      </Link>
      <div
        className={
          props.name !== productOptions[productsLength].name
            ? "main-nav__line"
            : "main-nav__line--hidden"
        }
      ></div>
    </Fragment>
  );
};

export default MainNavButton;
