import React from 'react'

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-800 text-white">
      {/* Left Side: Dashboard */}
      <div className="text-xl font-bold">
        Dashboard
      </div>

      {/* Right Side: Icons and User Info */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <div className="relative cursor-pointer">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.992 2.992 0 0019 15V11a6 6 0 10-12 0v4a2.992 2.992 0 00-.595 1.595L3 17h5m4 0h4" />
          </svg>
        </div>

        {/* Email Icon */}
        <div className="cursor-pointer">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0h-8m8 0a8 8 0 01-8 8m0 0a8 8 0 018-8m0 0a8 8 0 00-8-8" />
          </svg>
        </div>

        {/* SVG Component (Placeholder) */}
        <div className="cursor-pointer">
          {/* Replace with your SVG Component */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>

        {/* User Info */}
        <div className="flex flex-col items-end">
          <span className="font-semibold">John Doe</span>
          <span className="text-sm text-gray-400">+1234567890</span>
        </div>
      </div>
    </nav>
  )
}
