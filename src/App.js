import './styles/App.css';
import ReactDOM from "react-dom/client";
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';


import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context/context';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
      setIsLogin(false);
    }
  }, [])
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth: setIsAuth,
      isLogin
    }}>
      <BrowserRouter >
        <Navbar />
        <AppRouter />

      </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;
