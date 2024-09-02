// components/Navbar.js
'use client'; // Mark this file as a Client Component

import Link from 'next/link';
import Image from 'next/image';
import { FaSignInAlt, FaUser } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // Import for client-side routing
import BeetleLogo from "@/assets/images/screener-logo.png"

const Navbar = () => {
  const { pathname } = useRouter(); // Get the current route

  // Function to check if the current path matches the link's href
  const isActive = (path) => pathname === path;

  return (
        <nav className="  absolute top-10 left-1/2 transform -translate-x-1/2 text-white py-4 px-6 w-[1300px] h-[102.13px]">
        <div className="absolute rounded-[15px] inset-0 bg-[#D4D4D4] opacity-[10%]    backdrop-blur-md z-[1]"></div>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={BeetleLogo}
            alt="Logo"
            width={172.31} // Set width of the logo
            height={32} // Set height of the logo
            className="mr-3 "
          />
        
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-10">
          <Link href="/" className={`hover:text-gray-400 ${isActive('/') ? 'text-gray-300 font-semibold' : ''}`}>Home</Link>
          <Link href="/products" className={`hover:text-gray-400 ${isActive('/products') ? 'text-gray-300 font-semibold' : ''}`}>Products</Link>
          <Link href="/support" className={`hover:text-gray-400 ${isActive('/support') ? 'text-gray-300 font-semibold' : ''}`}>Support</Link>
          <Link href="/pricing" className={`hover:text-gray-400 ${isActive('/pricing') ? 'text-gray-300 font-semibold' : ''}`}>Pricing</Link>
        </div>

        {/* Right Side Buttons */}
        <div className="space-x-4 flex z-10">
          <Link href="/login" className=" text-white py-2 px-4 rounded flex items-center">
            <FaSignInAlt className="inline-block mr-2" /> Login
          </Link>
          <Link href="/signup" className="bg-black rounded-[10px] custom-shadow text-white py-2 px-4  flex items-center">
            <FaUser className="inline-block mr-2" /> Signup
          </Link>
        </div>
      
        </div>
      
    </nav>
  );
};

export default Navbar;
