import React, {createContext, FC, useState} from 'react';
import {contextValue, contextProps} from './types';

export const ProductGridContext = createContext<contextValue>({
    showFilters: false,
    setShowFilters: () => {}
});


const ProductGridContextProvider:FC<contextProps> = (props) => {

    //This state is for showing or hidding the filters in the product grid
    const [showFilters, setShowFilters] = useState(false)

    return(
        <ProductGridContext.Provider
        value={{
            showFilters,
            setShowFilters
        }}
        >
            {props.children}
        </ProductGridContext.Provider>
    )
};


export default ProductGridContextProvider
