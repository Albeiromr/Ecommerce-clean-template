import React, { createContext, useState, FC, useEffect } from "react";
import {productOptions} from '../../utils/Product options/productOptions';
import {contextValue, contextProps} from './types';
import {useLocation, useHistory} from 'react-router-dom';

export const MainNavContext = createContext<contextValue>({
  productOptions: [],
  optionSelected: "",
  setOptionSelected: () => {},
  lastFamilySelected: "",
  setLastFamilySelected: () => {}
});

const MainNavContextProvider:FC<contextProps> = (props) => {

  const location = useLocation();
  const history = useHistory();
  
  //the following code reads the browser local storage to find the las product fámily selected
  let initialFamilySelected = localStorage.getItem("lastFamilySelected");
  if(!initialFamilySelected || initialFamilySelected === "") initialFamilySelected = ""
  else initialFamilySelected = localStorage.getItem("lastFamilySelected");

  //this state is the last product family selected befor changing the page route
  const [lastFamilySelected, setLastFamilySelected] = useState<string | null>(initialFamilySelected);


  //this state is for highlighting the type of products selected on the main nav
  const [optionSelected, setOptionSelected] = useState<string | null>("");

  //the following code will reset the main nav chosen  menu if the actual route is not equal to a valid main nav menu
  useEffect(() => {
    switch(location.pathname){
      case "/shopping-cart":
        setOptionSelected("");
        break;
      case "/products/item":
        setOptionSelected("");
        break;
      case "/":
        setOptionSelected("Home");
        break;
      case "/products":
        setOptionSelected(lastFamilySelected);
        break;
      default:
    }
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname, lastFamilySelected, history]);

  // this code saves the lastFamilySelected state in local storage every time it changes
  useEffect(() => {
    localStorage.setItem("lastFamilySelected", lastFamilySelected!.toString());
  }, [lastFamilySelected])

  return (
    <MainNavContext.Provider
      value={{
        productOptions,
        optionSelected,
        setOptionSelected,
        lastFamilySelected,
        setLastFamilySelected
      }}
    >
      {props.children}
    </MainNavContext.Provider>
  );
};

export default MainNavContextProvider;
