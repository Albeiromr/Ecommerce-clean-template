import React, { createContext, FC, useState } from "react";
import { contextProps, contextValue, menuSelectedType, adminRouteType, productFamilyType } from "./types";

export const AdminDashboardContext = createContext<contextValue>({
  menuSelected: "",
  setMenuSelected: () => {},
  adminRoute: "",
  setAdminRoute: () => {},
  productFamily: "",
  setProductFamily: () => {}
});

const AdminDashboardContextProvider: FC<contextProps> = (props) => {
  
  //this state is for highlighting the orders and products button in the admin panel
  const [menuSelected, setMenuSelected] = useState<menuSelectedType>("orders");

  //this state tells the admindashboard what child and buttons to show
  const [adminRoute, setAdminRoute] = useState<adminRouteType>("products");

  // this state is for selecting what product family is selected in the admin-panel products menu
  const [productFamily, setProductFamily] = useState<productFamilyType>("sneakers");

  return (
    <AdminDashboardContext.Provider
      value={{
        menuSelected,
        setMenuSelected,
        adminRoute,
        setAdminRoute,
        productFamily,
        setProductFamily
      }}
    >
      {props.children}
    </AdminDashboardContext.Provider>
  );
};

export default AdminDashboardContextProvider;
