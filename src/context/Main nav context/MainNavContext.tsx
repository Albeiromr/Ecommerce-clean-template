import React, { createContext, useState, FC, useEffect } from "react";
import {productOptions} from '../../utils/Product options/productOptions';
import {contextValue, contextProps, optionSelectedType, lastFamilySelectedType} from './types';
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

  //this state is for highlighting the type of products selected on the main nav
  const [optionSelected, setOptionSelected] = useState<optionSelectedType>("Home");

  //this state is the last product family selected befor changing the page route
  const [lastFamilySelected, setLastFamilySelected] = useState<lastFamilySelectedType>("");

  //the following code will reset the main nav chosen  menu if the actual route is not equal to a valid main nave menu
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
  }, [location.pathname]);

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
