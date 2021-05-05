import React from 'react';
import './App.scss';
import MainContainer from './routes/MainContainer/MainContainer';
import MainNavContextProvider from './context/Main nav context/MainNavContext';
import ProductGridContextProvider from './context/Product grid context/ProductGridContext';

function App() {
  return (
    <div className="App">
      <ProductGridContextProvider>
      <MainNavContextProvider>
      <MainContainer />
      </MainNavContextProvider>
      </ProductGridContextProvider>
      
    </div>
  )
};

export default App;
