import React, { createContext, useState } from "react";

type defaultValue = {
  optionSelected: string;
  setOptionSelected: (value: string) => void;
};

type Props = {
  children: React.ReactNode;
};

export const MainNavContext = createContext<defaultValue>({
  optionSelected: "",
  setOptionSelected: () => {},
});

const MainNavContextProvider = ({ children }: Props) => {

    //this state is for highlighting the type of products selected on the main nav
  const [optionSelected, setOptionSelected] = useState("Home");

  return (
    <MainNavContext.Provider
      value={{
        optionSelected,
        setOptionSelected,
      }}
    >
      {children}
    </MainNavContext.Provider>
  );
};

export default MainNavContextProvider;
