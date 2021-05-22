import React, { createContext, FC, useState } from "react";
import { contextProps, contextValue } from "./types";

export const AdminDashboardContext = createContext<contextValue>({
  menuSelected: "",
  setMenuSelected: () => {},
  adminRoute: "",
  setAdminRoute: () => {}
});

const AdminDashboardContextProvider: FC<contextProps> = (props) => {
  
  //this state is for highlighting the orders and products button in the admin panel
  const [menuSelected, setMenuSelected] = useState<string>("orders");

  //this state tells the admindashboard what child and buttons to show, like orders, order-details
  const [adminRoute, setAdminRoute] = useState<string>("order-details");

  return (
    <AdminDashboardContext.Provider
      value={{
        menuSelected,
        setMenuSelected,
        adminRoute,
        setAdminRoute
      }}
    >
      {props.children}
    </AdminDashboardContext.Provider>
  );
};

export default AdminDashboardContextProvider;
