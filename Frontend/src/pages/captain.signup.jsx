import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const CaptainSignup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [color, setColor] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [capacity, setCapacity] = useState('');
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle: {
        vehicleType,
        color,
        plateNumber,
        capacity,
      },
    });
    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
    setVehicleType('');
    setColor('');
    setPlateNumber('');
    setCapacity('');
  };

  return (
    <div className="relative h-screen flex flex-col justify-between">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('https://tse2.mm.bing.net/th?id=OIP.26Ss1oXwqGpUbvJvjnHIvwHaEK&pid=Api&P=0&h=1800')]">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-md"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center flex-grow px-4">
        <div className="bg-white/30 backdrop-blur-lg shadow-lg rounded-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6 text-gray-800">
            Become a KUber Captain
          </h2>
          <form className="flex flex-col gap-4" onSubmit={submitHandler}>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="text-md font-medium">First Name</label>
                <input
                  className="bg-gray-200 rounded px-3.5 py-1 border w-full text-md placeholder-gray-500 focus:ring focus:ring-gray-300 outline-none"
                  type="text"
                  required
                  placeholder="First name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <label className="text-md font-medium">Last Name</label>
                <input
                  className="bg-gray-200 rounded px-3.5 py-1 border w-full text-md placeholder-gray-500 focus:ring focus:ring-gray-300 outline-none"
                  type="text"
                  required
                  placeholder="Last name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-md font-medium">Email</label>
              <input
                className="bg-gray-200 rounded px-3.5 py-1 border w-full text-md placeholder-gray-500 focus:ring focus:ring-gray-300 outline-none"
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
                className="bg-gray-200 rounded px-3.5 py-1 border w-full text-md placeholder-gray-500 focus:ring focus:ring-gray-300 outline-none"
                type="password"
                required
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="text-md font-medium">Vehicle Type</label>
                <input
                  className="bg-gray-200 rounded px-3.5 py-1 border w-full text-md placeholder-gray-500 focus:ring focus:ring-gray-300 outline-none"
                  type="text"
                  required
                  placeholder="Car, Bike, Van, etc."
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <label className="text-md font-medium">Capacity</label>
                <input
                  className="bg-gray-200 rounded px-3.5 py-1 border w-full text-md placeholder-gray-500 focus:ring focus:ring-gray-300 outline-none"
                  type="number"
                  required
                  placeholder="No. of Passengers"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="text-md font-medium">Color</label>
                <input
                  className="bg-gray-200 rounded px-3.5 py-1 border w-full text-md placeholder-gray-500 focus:ring focus:ring-gray-300 outline-none"
                  type="text"
                  required
                  placeholder="Vehicle Color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <label className="text-md font-medium">Plate Number</label>
                <input
                  className="bg-gray-200 rounded px-3.5 py-1 border w-full text-md placeholder-gray-500 focus:ring focus:ring-gray-300 outline-none"
                  type="text"
                  required
                  placeholder="Plate Number"
                  value={plateNumber}
                  onChange={(e) => setPlateNumber(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-black text-white font-semibold rounded px-4 py-2 w-full text-md hover:bg-gray-900 transition duration-200 ease-in-out"
            >
              Sign Up as Captain
            </button>
            <p className="text-center text-gray-600">
              Already have an account?{' '}
              <Link
                to="/captain/login"
                className="text-blue-600 hover:underline"
              >
                Log in
              </Link>
            </p>

            <Link
              to="/user/signup"
              className="bg-blue-600 text-white font-semibold rounded px-3.5 py-2 w-full text-md text-center hover:blue-green-700 transition duration-200 ease-in-out mt-1"
            >
              Register as a User
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

export default CaptainSignup;
