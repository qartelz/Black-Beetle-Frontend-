"use client";
import LogoGold from "@/assets/svg/LogoGold";
import Navbar from "@/components/navbar/page";
import { useState } from "react";


export default function PremiumUpgrade() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main>
      <Navbar/>

      <div className="flex mt-28  p-16 justify-between  space-x-20">
        <div className="flex-1  p-20  border rounded-2xl border-[#d7b257] flex flex-col space-y-4">
          <div className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12 text-gray-600 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9l-6 6m0 0l6-6m-6 6h12"
              />
            </svg>

            <div>
              <h1 className="text-3xl font-bold">Beetle Balance</h1>
              <h2 className="text-white">
                <span className="text-3xl font-bold">1000</span> /{" "}
                <span className="text-sm">5000</span>
              </h2>
            </div>
          </div>
          <p className="text-[#B4974E]">Invested Beetles : 4000</p>
        </div>

        {/* Right Box */}
        <div className="border w-96  border-[#d7b257] p-4 space-y-4">
          {/* Heading with SVG */}
          <div className="flex items-center justify-between">
            {/* Heading */}
            <h2 className="text-xl font-semibold">
              Subscription <br /> Plan
            </h2>

            {/* SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9l-6 6m0 0l6-6m-6 6h12"
              />
            </svg>
          </div>

          {/* Subheading */}

          <div className="flex">
            <h2 className="text-2xl font-bold">Premium</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9l-6 6m0 0l6-6m-6 6h12"
              />
            </svg>
          </div>

          <p>Valid Untill : 31st December 2024</p>

          {/* Button */}
          <button
            onClick={openModal}
            className="px-4 py-2 bg-[#d7b257] text-white rounded-md"
          >
            Renew/Upgrade
          </button>
        </div>
      </div>

      {/* Button to open modal */}

      {/* Modal */}
      {isModalOpen && (
  <div
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
    onClick={closeModal}
  >
    <div
      className="bg-gray-900 p-8 rounded-lg shadow-lg transform transition-all duration-300 scale-100 opacity-100"
      onClick={(e) => e.stopPropagation()} // prevent modal close on click inside modal
    >
      <LogoGold className="w-32 h-24" />
      <h3 className="text-white font-bold text-xl mb-4">Get Black Beetle Premium</h3>

      <div className="flex justify-between space-x-2">
  {/* Card 1 */}
  <div className="border border-gray-700 bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-700 w-1/2 flex flex-col justify-between relative overflow-hidden group">
    <div className="absolute inset-0 bg-gray-800/80 rounded-lg backdrop-blur-sm opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none"></div>
    <h3 className="text-lg font-semibold mb-2 text-white z-10">Premium Plan</h3>
    <p className="text-gray-400 z-10">Enjoy premium features with this plan.</p>
    <button className="bg-[#d7b257] text-white px-4 py-2 rounded-md  mt-10 hover:bg-green-500 transition z-10">
      Select Plan
    </button>
  </div>

  {/* Card 2 */}
  <div className="border border-gray-700 bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-700 w-1/2 flex flex-col justify-between relative overflow-hidden group">
    <div className="absolute inset-0 bg-gray-800/80 rounded-lg backdrop-blur-sm opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none"></div>
    <h3 className="text-lg font-semibold mb-2 text-white z-10">Premium Plan</h3>
    <p className="text-gray-400 z-10">Unlock more benefits with our premium plan.</p>
    <button className="bg-[#d7b257] text-white px-4 py-2 rounded-md mt-10 hover:scale-105 duration-500 transition z-10">
      Select Plan
    </button>
  </div>
</div>


    
      <button
        onClick={closeModal}
        className="bg-red-600 text-white px-4 py-2 rounded-md mt-6 hover:bg-red-500 transition "
      >
        Close
      </button>
    </div>
  </div>
)}

    </main>
  );
}
