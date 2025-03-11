import { useNavigate } from 'react-router-dom';
import React, { useEffect, useContext } from 'react';
import { CaptainDataContext } from '../context/captain.context';
import axios from 'axios';
import { useState } from 'react';

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate('/captain-login');
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setCaptain(response.data.captain);
          setIsLoading(false);
        }
      })
      .catch(() => {
        console.log('error');
        localStorage.removeItem('token');
        navigate('/captain-login');
      });
  }, [token, navigate]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
