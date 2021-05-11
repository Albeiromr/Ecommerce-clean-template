import React, { useContext } from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {Link} from 'react-router-dom';
import { MainNavContext } from "../../context/Main nav context/MainNavContext";
import MainNavButton from "../Main nav button/MainNavButton";

const MainNav = () => {
  const { productOptions } = useContext(MainNavContext);

  return (
    <nav className="main-nav">
      <ul className=" main-nav__subcontainer">
        <Link className="Link" to={"/"}>
          <MainNavButton name={"Home"} />
        </Link>

        {productOptions.map((option) => (
          <Link className="Link" to={"/products"}>
            <MainNavButton name={option.name} />
          </Link>
        ))}

      </ul>
    </nav>
  );
};

export default MainNav;
