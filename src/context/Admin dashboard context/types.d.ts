import React from "react";

export interface contextValue {
  menuSelected: string;
  setMenuSelected: (value: menuSelected) => void;
  adminRoute: string;
  setAdminRoute: (value: adminRoute) => void;
  productFamily: string;
  setProductFamily: (value: productFamily) => void;
  pageNumberSelected: number;
  setPageNumberSelected: (value: pageNumberSelected) => void;
};

export interface contextProps {
  children: React.ReactNode;
};

export type menuSelectedType = "orders" | "products";

export type adminRouteType = "orders" | "order-details" | "products" | "product-details" | "product-form";

export type productFamilyType = "sneakers" | "pants" | "caps" | "jackets" | "shorts" | "shirts";



