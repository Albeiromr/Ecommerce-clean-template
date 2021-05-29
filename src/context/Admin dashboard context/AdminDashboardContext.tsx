import React, { createContext, FC, useState } from "react";
import { contextProps, contextValue, menuSelectedType, adminRouteType, productFamilyType } from "./types";

export const AdminDashboardContext = createContext<contextValue>({
  menuSelected: "",
  setMenuSelected: () => {},
  adminRoute: "",
  setAdminRoute: () => {},
  productFamily: "",
  setProductFamily: () => {},
  pageNumberSelected: 1,
  setPageNumberSelected: () => {}
});

const AdminDashboardContextProvider: FC<contextProps> = (props) => {
  
  //this state is for highlighting the orders and products button in the admin panel
  const [menuSelected, setMenuSelected] = useState<menuSelectedType>("orders");

  //this state tells the admindashboard what child and buttons to show
  const [adminRoute, setAdminRoute] = useState<adminRouteType>("product-form");

  // this state is for selecting what product family is selected in the admin-panel products menu
  const [productFamily, setProductFamily] = useState<productFamilyType>("sneakers");

  //this state has the page number selected from the admin-pagination component
  const [pageNumberSelected, setPageNumberSelected] = useState<number>(1);

  return (
    <AdminDashboardContext.Provider
      value={{
        menuSelected,
        setMenuSelected,
        adminRoute,
        setAdminRoute,
        productFamily,
        setProductFamily,
        pageNumberSelected,
        setPageNumberSelected
      }}
    >
      {props.children}
    </AdminDashboardContext.Provider>
  );
};

export default AdminDashboardContextProvider;
