import React from 'react';
import './App.scss';
import MainContainer from './routes/MainContainer/MainContainer';
import MainNavContextProvider from './context/Main nav context/MainNavContext';

function App() {
  return (
    <div className="App">

      <MainNavContextProvider>
      <MainContainer />
      </MainNavContextProvider>
      
    </div>
  )
};

export default App;
