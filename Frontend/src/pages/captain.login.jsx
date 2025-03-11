import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import axios from 'axios';
import { CaptainDataContext } from '../context/captain.context';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      email,
      password,
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captain/login`,
        captainData,
      );

      if (res.status === 200) {
        const data = res.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className="relative h-screen flex flex-col justify-between">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('https://tse2.mm.bing.net/th?id=OIP.26Ss1oXwqGpUbvJvjnHIvwHaEK&pid=Api&P=0&h=180')]">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-md"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center flex-grow px-4">
        <div className="bg-white/30 backdrop-blur-lg shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-sm sm:max-w-md">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6 text-gray-800">
            Login to KUber
          </h2>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => submitHandler(e)}
          >
            <div>
              <label className="text-md font-medium">What's your email</label>
              <input
                className="bg-gray-200 rounded px-4 py-2 border w-full text-md placeholder-gray-500 focus:ring focus:ring-gray-300 outline-none"
                type="email"
                required
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-md font-medium">Password</label>
              <input
                className="bg-gray-200 rounded px-4 py-2 border w-full text-md placeholder-gray-500 focus:ring focus:ring-gray-300 outline-none"
                type="password"
                required
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white font-semibold rounded px-4 py-2 w-full text-md hover:bg-gray-900 transition duration-200 ease-in-out"
            >
              Login
            </button>

            <p className="text-center text-gray-600">
              Interested in becoming a Captain?{' '}
              <Link
                to="/captain-signup"
                className="text-blue-600 hover:underline"
              >
                Sign Up
              </Link>
            </p>

            <Link
              to="/user-login"
              className="bg-blue-600 text-white font-semibold rounded px-4 py-2 w-full text-md text-center hover:blue-green-700 transition duration-200 ease-in-out mt-3"
            >
              Login as User
            </Link>
          </form>
        </div>
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default CaptainLogin;
