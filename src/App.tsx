import React from 'react';
import './App.scss';
import MainContainer from './routes/MainContainer/MainContainer';
import MainNavContextProvider from './context/Main nav context/MainNavContext';
import ProductGridContextProvider from './context/Product grid context/ProductGridContext';
import ProductDetailsContextProvider from './context/Product details context/ProductDetailsContext';

function App() {
  return (
    <div className="App">
      <ProductDetailsContextProvider>
      <ProductGridContextProvider>
      <MainNavContextProvider>
      <MainContainer />
      </MainNavContextProvider>
      </ProductGridContextProvider>
      </ProductDetailsContextProvider>
      
    </div>
  )
};

export default App;
