import React, {createContext, FC, useState} from 'react';
import {contextValue, contextProps} from './types';

export const ProductGridContext = createContext<contextValue>({
    showFilters: false,
    setShowFilters: () => {},
    range: {min: 0, max: 0},
    setRange: () => {},
    minValue: 0,
    setMinValue: () => {},
    maxValue: 0,
    setMaxValue: () => {},
    
});


const ProductGridContextProvider:FC<contextProps> = (props) => {

    //This state is for showing or hidding the filters in the product grid
    const [showFilters, setShowFilters] = useState(false)

    //The range state is the min and max price value extracted from the products database
    const [range, setRange] = useState({min: 0, max: 100})

    //minValue and maxValue state are the values min and max that you choose with 
    //the multi range input slider
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);

    return(
        <ProductGridContext.Provider
        value={{
            showFilters,
            setShowFilters,
            minValue,
            setMinValue,
            maxValue,
            setMaxValue,
            range,
            setRange,
        }}
        >
            {props.children}
        </ProductGridContext.Provider>
    )
};


export default ProductGridContextProvider
