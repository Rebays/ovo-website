import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-2xl mt-4 mx-auto w-[95%] max-w-7xl sticky top-4 flex justify-between items-center px-8 py-3 z-50 shadow-[0_20px_40px_rgba(0,29,89,0.06)] no-border">
      <div className="text-2xl font-extrabold tracking-tighter text-[#003087] dark:text-white">OVO</div>
      <div className="hidden md:flex items-center space-x-8">
        <a className="font-semibold tracking-tight text-sm uppercase text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors duration-300" href="#preview">App Preview</a>
        <a className="font-semibold tracking-tight text-sm uppercase text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors duration-300" href="#">How It Works</a>
        <a className="font-semibold tracking-tight text-sm uppercase text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors duration-300" href="#">Fees</a>
        <a className="font-semibold tracking-tight text-sm uppercase text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors duration-300" href="#">FAQ</a>
      </div>
      <div className="flex items-center space-x-4">
        {/* <button className="font-semibold tracking-tight text-sm uppercase text-slate-600 dark:text-slate-300 hover:text-[#00A86B] transition-colors duration-300 scale-95 active:scale-90 transform">Login</button> */}
        <button className="bg-[#003087] text-white px-6 py-2 rounded-2xl font-semibold tracking-tight text-sm uppercase scale-95 active:scale-90 transform hover:bg-primary-container">Join Waitlist</button>
      </div>
    </nav>
  );
};

export default NavBar;
