import React from "react";

export type contextValue = {
    showFilters: boolean;
    setShowFilters: (value: boolean) => void;
    priceRange: {min:number, max: number};
    setPriceRange: (value:priceRange) => void;
    minValue: number;
    setMinValue: (value: number) => void;
    maxValue: number;
    setMaxValue: (value:number) => void;
    fetchedDesktopProducts: fetcheProduct[];
    setFetchedDesktopProducts: (value: fetcheProduct[]) => void;
    fetchedMobileProducts: fetcheProduct[];
    setFetchedMobileProducts: (value: fetcheProduct[]) => void;
};

export type contextProps = {
    children: React.ReactNode
};

export type fetchedProduct = {
    sku: string;
    productType: string;
    productName: string;
    productDescription: string;
    productPrice: number;
    productOldPrice: number;
    productStock: number;
    productRate: number;
    reviewQuantity: number;
    soldQuantity: number;
    productViews: number;
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
    productProfit: number;
};