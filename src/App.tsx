import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context/AuthContext';

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
