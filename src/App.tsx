import React from 'react';
import './App.scss';
import MainContainer from './routes/MainContainer/MainContainer';
import MainNavContextProvider from './context/MainNav';

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
