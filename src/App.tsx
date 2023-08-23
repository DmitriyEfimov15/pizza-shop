import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context/AuthContext';

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

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
