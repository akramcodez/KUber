import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate('/user-login');
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200 && response.data) {
          setIsLoading(false);
        } else {
          throw new Error('Invalid user data');
        }
      })
      .catch(() => {
        console.log('error');
        localStorage.removeItem('token');
        navigate('/user-login');
      });
  }, [token, navigate]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return <>{children}</>;
};

export default UserProtectedWrapper;
