import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4 md:px-12">
        <p className="text-[30px] md:text-[40px] text-[#1A8EFD] font-semibold">
          JivanJyot
        </p>
        <div className="hidden md:flex space-x-8 font-sans lg:text-2xl">
          <span>Home</span>
          <span>Service</span>
          <span>About</span>
          <span>Reviews</span>
          <span>Doctors</span>
        </div>
        <button className="hidden md:block bg-[#1A8EFD] p-2 rounded-md text-white">
          LiveChat
        </button>
        <button
          className="md:hidden text-[#1A8EFD] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-6 py-4 font-sans justify-center items-center">
          <span>Home</span>
          <span>Service</span>
          <span>About</span>
          <span>Reviews</span>
          <span>Doctors</span>
          <button className="bg-[#1A8EFD] p-2 w-4/5 rounded-md text-white">
            LiveChat
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
