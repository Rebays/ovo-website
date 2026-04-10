import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 w-full rounded-t-3xl mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-12 max-w-7xl mx-auto">
        <div className="mb-8 md:mb-0 space-y-2">
          <div className="text-xl font-bold text-[#003087]">OVO</div>
          <p className="font-['Manrope'] text-sm text-slate-500 dark:text-slate-400">An Exceed Story accessible to everyone in the Solomon Islands.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex gap-8">
            <a className="font-['Manrope'] text-sm text-slate-500 hover:text-[#003087] dark:hover:text-white transition-opacity hover:opacity-80" href="#">Terms of Service</a>
            <a className="font-['Manrope'] text-sm text-slate-500 hover:text-[#003087] dark:hover:text-white transition-opacity hover:opacity-80" href="#">Privacy Policy</a>
            <a className="font-['Manrope'] text-sm text-slate-500 hover:text-[#003087] dark:hover:text-white transition-opacity hover:opacity-80" href="#">Contact Us</a>
          </div>
          <p className="font-['Manrope'] text-sm text-slate-500 dark:text-slate-400">© 2026 OVO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
