import React, { createContext, FC, useState } from "react";
import { contextProps, contextValue } from "./types";

export const AdminDashboardContext = createContext<contextValue>({
  menuSelected: "",
  setMenuSelected: () => {},
});

const AdminDashboardContextProvider: FC<contextProps> = (props) => {
    
  const [menuSelected, setMenuSelected] = useState<string>("orders");

  return (
    <AdminDashboardContext.Provider
      value={{
        menuSelected,
        setMenuSelected,
      }}
    >
      {props.children}
    </AdminDashboardContext.Provider>
  );
};

export default AdminDashboardContextProvider;
