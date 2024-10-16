// components/Navbar.js
'use client'; // Mark this file as a Client Component

import Link from 'next/link';
import Image from 'next/image';
import { FaSignInAlt, FaUser } from 'react-icons/fa';
import { usePathname } from 'next/navigation'; // Import usePathname for route path detection
import BeetleLogo from "@/assets/images/screener-logo.png";

const Navbar = ({scrollToSection}) => {
  const pathname = usePathname(); // Get the current path

  // Function to check if the current path matches the link's href
  const isActive = (path) => pathname === path;

  // Determine background color based on the current route
  const bgColor = pathname === "/trades" ? "bg-black opacity-[60%]" : "bg-[#D4D4D4] opacity-[10%]";

  return (
    <nav className={`absolute top-10 left-1/2 transform -translate-x-1/2  text-white py-4 px-6 w-[1300px] h-[102.13px]`}>
      <div className={`absolute rounded-[15px] inset-0 ${bgColor}  backdrop-blur-md z-[1]`}></div>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex z-10 items-center">
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
          <Link href="/" className={`hover:text-gray-400 z-10 ${isActive('/') ? 'text-gray-300 font-semibold' : ''}`}>Home</Link>
          <button className="hover:text-gray-400 z-10" onClick={scrollToSection}>Products</button>
          <Link href="/support" className={`hover:text-gray-400 z-10 ${isActive('/support') ? 'text-gray-300 font-semibold' : ''}`}>Support</Link>
          <Link href="/user/dashboard" className={`hover:text-gray-400 z-10 ${isActive('/dashboard') ? 'text-gray-300 font-semibold' : ''}`}>Dashboard</Link>
        </div>

        {/* Right Side Buttons */}
        <div className="space-x-4 flex z-10">
          <Link href="/login" className="text-white py-2 px-4 rounded flex items-center">
            <FaSignInAlt className="inline-block mr-2" /> Login
          </Link>
          <Link href="/signup" className="bg-black rounded-[10px] custom-shadow text-white py-2 px-4 flex items-center">
            <FaUser className="inline-block mr-2" /> Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
