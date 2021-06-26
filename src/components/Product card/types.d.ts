import React from 'react';



export interface cssVariables extends React.CSSProperties{
    "--big": string;
    "--medium": string;
    "--small": string;
    "--bigImage":string;
    "--mediumImage":string;
    "--smallImage":string;

};

export interface ProductCardProps {
    sku: string;
    productName: string;
    productThumbnail: string;
    productRate: number;
    productPrice: number;
    productOldPrice: number;  
}

