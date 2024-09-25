"use client"
import LogoGold from "@/assets/svg/LogoGold";
import { useState } from "react";

export default function PremiumUpgrade() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="p-6">
      {/* Button to open modal */}
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Renew/Upgrade
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal} 
        >
          <div
            className="bg-white p-8  rounded-lg shadow-lg transform transition-all duration-300 scale-100 opacity-100"
            onClick={(e) => e.stopPropagation()} // prevent modal close on click inside modal
          >
              <LogoGold className="w-32 h-24 bg-white" />
              <h3 className="text-black font-bold">Get Black Beetle Premium</h3>

            <div className="flex justify-between space-x-2">
              {/* Card 1 */}
              <div className="border p-4 rounded-lg shadow hover:shadow-lg transition duration-300 w-1/2">
                <h3 className="text-lg font-semibold mb-2 text-black">Premium Plan </h3>
                <p className="text-gray-600">Details </p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600 transition">
                  Select Plan
                </button>
              </div>

              {/* Card 2 */}
              <div className="border p-4 rounded-lg shadow hover:shadow-lg transition duration-300 w-1/2">
                <h3 className="text-lg font-semibold mb-2 text-black">Premium Plan</h3>
                <p className="text-gray-600">Details</p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600 transition">
                  Select Plan
                </button>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={closeModal}
              className="bg-red-500 text-white px-4 py-2 rounded-md mt-6 hover:bg-red-600 transition w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
