import React from 'react';



export interface cssVariables extends React.CSSProperties{
    "--proportion": string;
};

export interface productCardProps {
    fractionToDivide: number;
}