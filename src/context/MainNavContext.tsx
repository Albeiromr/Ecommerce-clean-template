import React, { createContext, useState } from "react";
import {productOptions} from '../utils/productOptions';
import {defaultValue, Props} from './MainNavContextTypes';

export const MainNavContext = createContext<defaultValue>({
  productOptions: [],
  optionSelected: "",
  setOptionSelected: () => {},
});

const MainNavContextProvider = ({ children }: Props) => {
  //this state is for highlighting the type of products selected on the main nav
  const [optionSelected, setOptionSelected] = useState("Home");

  return (
    <MainNavContext.Provider
      value={{
        productOptions,
        optionSelected,
        setOptionSelected,
      }}
    >
      {children}
    </MainNavContext.Provider>
  );
};

export default MainNavContextProvider;
