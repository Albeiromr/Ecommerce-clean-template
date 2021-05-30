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
  productPost: productPostInterface;
  setProductPost: (value: productPost) => void;
};

export interface contextProps {
  children: React.ReactNode;
};

export type menuSelectedType = "orders" | "products";

export type adminRouteType = "orders" | "order-details" | "products" | "product-details" | "product-form";

export type productFamilyType = "sneakers" | "pants" | "caps" | "jackets" | "shorts" | "shirts";

export interface productPostInterface {
  sku: string;
  productType: string;
  productName: string;
  productDescription: string;
  productPrice:string;
  productOldPrice: string;
  productStock:string;
  ProductRate: string;
  reviewQuantity: string;
  soldQuantity: string;
  productViews: string;
  sizeOne: string;
  sizeTwo: string;
  sizeThree: string;
  sizeFour: string;
  sizeFive: string;
  productImage: string;
  productThumbnail: string;
  categoryOne: string;
  categoryTwo: string;
  categoryThree: string;
  categoryFour: string;
  categoryFive: string;
  interestForYou: string;
  productProfit: string;
}





