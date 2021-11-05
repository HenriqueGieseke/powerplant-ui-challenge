import React from 'react';
import Navbar from './components/Navbar';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
