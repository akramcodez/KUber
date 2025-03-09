import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useState } from 'react';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData((prevData) => ({
      ...prevData,
      email,
      password,
    }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className="relative h-screen flex flex-col justify-between">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('https://tse2.mm.bing.net/th?id=OIP.WzJULDeDGvTsOAp3alY49QHaE7&pid=Api&P=0&h=180')]">
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
              Don't have an account?{' '}
              <Link to="/user/signup" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </p>

            <Link
              to="/captain/login"
              className="bg-green-600 text-white font-semibold rounded px-4 py-2 w-full text-md text-center hover:bg-green-700 transition duration-200 ease-in-out mt-3"
            >
              Login as Captain
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

export default UserLogin;
