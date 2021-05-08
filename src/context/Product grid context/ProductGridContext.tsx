import React, {createContext, FC, useState} from 'react';
import {contextValue, contextProps} from './types';

export const ProductGridContext = createContext<contextValue>({
    showFilters: false,
    setShowFilters: () => {},
    minValue: 0,
    setMinValue: () => {},
    maxValue: 0,
    setMaxValue: () => {},
});


const ProductGridContextProvider:FC<contextProps> = (props) => {

    //This state is for showing or hidding the filters in the product grid
    const [showFilters, setShowFilters] = useState(false)

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
        }}
        >
            {props.children}
        </ProductGridContext.Provider>
    )
};


export default ProductGridContextProvider
