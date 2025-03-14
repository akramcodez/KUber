import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import axios from 'axios';
import { UserDataContext } from '../context/user.context';

const UserSignup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/register`,
        newUser,
      );

      if (res.status === 201) {
        const data = res.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Signup failed');
    }

    setFirstname('');
    setLastname('');
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
            Create a KUber Account
          </h2>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form className="flex flex-col gap-4" onSubmit={submitHandler}>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="text-md font-medium">First Name</label>
                <input
                  className="bg-gray-200 rounded px-4 py-2 border w-full text-md placeholder-gray-500 focus:ring focus:ring-gray-300 outline-none"
                  type="text"
                  required
                  minLength={1}
                  placeholder="First name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>

              <div className="w-1/2">
                <label className="text-md font-medium">Last Name</label>
                <input
                  className="bg-gray-200 rounded px-4 py-2 border w-full text-md placeholder-gray-500 focus:ring focus:ring-gray-300 outline-none"
                  type="text"
                  minLength={1}
                  placeholder="Last name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-md font-medium">Email</label>
              <input
                className="bg-gray-200 rounded px-4 py-2 border w-full text-md placeholder-gray-500 focus:ring focus:ring-gray-300 outline-none"
                type="email"
                required
                minLength={5}
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
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white font-semibold rounded px-4 py-2 w-full text-md hover:bg-gray-900 transition duration-200 ease-in-out"
            >
              Sign Up
            </button>

            <p className="text-center text-gray-600">
              Already have an account?{' '}
              <Link to="/user-login" className="text-blue-600 hover:underline">
                Log in
              </Link>
            </p>

            <Link
              to="/captain-signup"
              className="bg-green-600 text-white font-semibold rounded px-4 py-2 w-full text-md text-center hover:bg-green-700 transition duration-200 ease-in-out mt-3"
            >
              Register as a Captain
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

export default UserSignup;
