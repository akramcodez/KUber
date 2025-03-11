import React, { createContext, useState, useContext } from 'react';

export const CaptainDataContext = createContext();

export const useCaptain = () => {
  return useContext(CaptainDataContext);
};

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };

  const value = {
    captain,
    setCaptain,
    updateCaptain,
    isLoading,
    setIsLoading,
    error,
    setError,
  };

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;
