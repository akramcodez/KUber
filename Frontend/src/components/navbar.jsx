import React from 'react';

const Navbar = () => {
  const isCaptainRoute = location.pathname.includes('/captain');

  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white">
      <h1 className="text-3xl font-bold">
        {isCaptainRoute ? 'KUber ⇒' : 'KUber'}
      </h1>
      <div className="flex space-x-4">
        <h1 className="text-lg font-mono">
          <a href="https://www.linkedin.com/in/sk-akram-aaa903318">By Akram</a>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
