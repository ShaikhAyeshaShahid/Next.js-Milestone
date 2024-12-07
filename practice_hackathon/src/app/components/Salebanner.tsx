"use client"
import { useState } from 'react';

const Salebanner = () => {

    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="text-gray-600 body-font bg-black">
  <div className="container mx-auto flex flex-wrap p-5 ml-80 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <p className="ml-3 text-white font-poppins text-md">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
      <p className="ml-2 text-white font-poppins text-md font-semibold underline ">ShopNow</p>

    </a>
    <div className="relative inline-block text-right ml-48">
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex items-center rounded-md text-white cursor-pointer"
      >
        <span className='px-4 font-poppins'>English</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-md z-10">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Option 1
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Option 2
          </a>
        </div>
      )}
    </div>
    
  </div>
</header>
    </div>
  )
}

export default Salebanner
