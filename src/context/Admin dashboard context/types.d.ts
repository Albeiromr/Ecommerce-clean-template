import React from "react";

export interface contextValue {
  menuSelected: string;
  setMenuSelected: (value: string) => void;
  adminRoute: string;
  setAdminRoute: (value: string) => void;
  productFamily: string;
  setProductFamily: (value:string) => void;
}

export interface contextProps {
  children: React.ReactNode;
}


