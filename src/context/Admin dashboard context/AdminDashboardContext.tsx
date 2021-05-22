import React, { createContext, FC, useState } from "react";
import { contextProps, contextValue } from "./types";

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
  const [menuSelected, setMenuSelected] = useState<string>("orders");

  //this state tells the admindashboard what child and buttons to show, like orders, order-details, products, product-form
  const [adminRoute, setAdminRoute] = useState<string>("products");

  // this state is for selecting what product family is selected in the admin-panel products menu, like sneakers, pants, caps, jackets, shorts, shirts
  const [productFamily, setProductFamily] = useState<string>("sneakers");

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
