import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-cover bg-center bg-no-repeat bg-[url('https://tse4.mm.bing.net/th?id=OIP.adTTWiJZD6WLhk0UWQ4o9wHaE8&pid=Api&P=0&h=180')]">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow w-full h-full text-center p-8 relative">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-md"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-black lg:text-4xl md:text-4xl">
            Get Started with KUber
          </h2>
          <p className="text-md text-gray-800 mb-6 lg:text-lg md:text-lg">
            Get a ride in minutes with the KUber app
          </p>
          <Link
            to="/user/login"
            className="px-12 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            Continue
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
