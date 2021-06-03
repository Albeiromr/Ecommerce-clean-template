import React, { createContext, FC, useEffect, useState } from "react";
import {productPostInitial, productGetInitial} from './initialValues';
import {
  contextProps,
  contextValue,
  menuSelectedType,
  adminRouteType,
  productFamilyType,
  productPostInterface,
  productGetInterface,
 } from "./types";

export const AdminDashboardContext = createContext<contextValue>({
  menuSelected: "",
  setMenuSelected: () => {},
  adminRoute: "",
  setAdminRoute: () => {},
  productFamily: "",
  setProductFamily: () => {},
  pageNumberSelected: 1,
  setPageNumberSelected: () => {},
  productPost: productPostInitial,
  setProductPost: () => {},
  productGet: productGetInitial,
  setProductGet: () => {}
});

const AdminDashboardContextProvider: FC<contextProps> = (props) => {
  
  //this state is for highlighting the orders and products button in the admin panel
  const [menuSelected, setMenuSelected] = useState<menuSelectedType>("orders");

  //this state tells the admindashboard what child and buttons to show
  const [adminRoute, setAdminRoute] = useState<adminRouteType>("products");

  // this state is for selecting what product family is selected in the admin-panel products menu
  const [productFamily, setProductFamily] = useState<productFamilyType>("pants");

  //this state has the page number selected from the admin-pagination component
  const [pageNumberSelected, setPageNumberSelected] = useState<number>(1);

  //this state collects all values from Admin-product-form component
  const [productPost, setProductPost] = useState<productPostInterface>(productPostInitial);

  //this state is the list of products we see in the admin dashboard
  const [productGet, setProductGet] = useState<productGetInterface>(productGetInitial);

  //this useEffect updates the productGet state every time the productFamily state change;
  useEffect(() => {
    
  }, [productFamily])

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
        setPageNumberSelected,
        productPost,
        setProductPost,
        productGet,
        setProductGet
      }}
    >
      {props.children}
    </AdminDashboardContext.Provider>
  );
};

export default AdminDashboardContextProvider;
