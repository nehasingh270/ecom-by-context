// src/Navbar.js
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import UserContext from '../context/UserContext';

const Navbar = () => {
  let ctx = useContext(CartContext)
  let ctxUser = useContext(UserContext)
   console.log(ctxUser)

  let login = ctxUser.user.login

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleSearchChange = (e) =>{
   console.log(e.target.value)
   ctx.setsearchValue(e.target.value.toLowerCase())
  }

  return (
    <nav className="bg-gray-800 text-white z-50 fixed top-0 left-0 right-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
           <div className='flex'> 
           <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
</svg>
            <p  className="text-xl font-bold">Ecomcharm</p></div>
          </div>
        {/* search menu */}
          <div className='flex text-white'>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <input onChange={handleSearchChange}
              type="text"
              placeholder="Search"
              className="px-3 py-2 rounded-md text-gray-900" /> </div>
          <Link to="/" className="hidden md:flex  hover:bg-gray-700 px-4 py-2 text-sm font-medium text-white ">Home</Link>
          <Link to="/about" className="hidden md:flex hover:bg-gray-700 px-4 py-2 text-sm font-medium text-white ">About</Link>
          <Link to="/cart" className="hidden md:flex hover:bg-gray-700 px-4 py-2 text-sm font-medium text-white ">Cart<sup>{ctx.cartArr.length}</sup></Link>
          <div>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="hover:bg-gray-700 hidden md:flex px-3 py-2 rounded-md text-sm font-medium"
              >
                Menu
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">

                  {login===false && 
                  <Link to="/signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sign Up</Link>}
                 {login===false &&
                  <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Login</Link>}
                  {login===true &&
                  <Link onClick={()=>ctxUser.logout()} to="" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</Link>}
                </div>
              )}
            </div>
          </div>
          </div>

         
            

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-2 rounded-md text-gray-900 block w-full"
          />
          <Link to="/" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link to="/about" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">About</Link>
          <Link to="/cart" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">Cart<sup>{ctx.cartArr.length}</sup> </Link>
          <Link to="/signup" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">Signup</Link>
          <Link to="/login" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">Login</Link>
          <Link onClick={()=>ctxUser.logout()} to="" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">Logout</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;