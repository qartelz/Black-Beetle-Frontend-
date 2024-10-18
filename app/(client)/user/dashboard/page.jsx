"use client";
import LogoGold from "@/assets/svg/LogoGold";
import Navbar from "@/components/navbar/page";
import { useState } from "react";
import Razorpay from "razorpay"; // Import Razorpay
import Script from "next/script"; 

export default function PremiumUpgrade() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const createOrder = async (amount) => {
    const res = await fetch("/api/createOrder", {
      method: "POST",
      body: JSON.stringify({ amount }),
    });
    const data = await res.json();

    const paymentData = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      order_id: data.id,
      handler: async function (response) {
        // verify payment
        const res = await fetch("/api/verifyOrder", {
          method: "POST",
          body: JSON.stringify({
            orderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
          }),
        });
        const data = await res.json();
        console.log(data);
        if (data.isOk) {
          alert("Payment successful");
        } else {
          alert("Payment failed");
        }
      },
    };

    const payment = new window.Razorpay(paymentData);
    payment.open();
  };

  return (
    <main>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <Navbar />

      <div className="flex mt-28 p-16 justify-between space-x-20">
        <div className="flex-1 p-20 border rounded-2xl border-[#d7b257] flex flex-col space-y-4">
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
          <p className="text-[#B4974E]">Invested Beetles: 4000</p>
        </div>

        {/* Right Box */}
        <div className="border w-96 border-[#d7b257] p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              Subscription <br /> Plan
            </h2>
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

          <p>Valid Until: 31st December 2024</p>

          <button
            onClick={openModal}
            className="px-4 py-2 bg-[#d7b257] text-white rounded-md"
          >
            Renew/Upgrade
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 -mt-20 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 p-6 w-3/4 max-w-2xl h-64 rounded-lg shadow-lg transform transition-all duration-300 scale-100 opacity-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="text-white absolute top-1 right-4 text-4xl font-bold"
            >
              &times;
            </button>
            <LogoGold className="w-24 h-16 mx-auto mb-4" />
            <h3 className="text-white font-bold text-xl mb-4 text-center">
              Get Black Beetle Premium
            </h3>

            <div className="flex justify-between space-x-5">
              <div className="border h-72 border-gray-700 bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 w-1/2 flex flex-col justify-between">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Monthly Plan
                </h3>
                <p className="text-gray-400">
                  Get premium features for 1 month with our Monthly plan.
                </p>
                <p className="text-white font-semibold text-2xl">
                  ₹1000/month
                </p>
                <button
                  onClick={() => createOrder(100000)} 
                  className="bg-[#d7b257] text-white px-3 py-1 rounded-md mt-4 hover:scale-105 transition"
                >
                  Select Plan
                </button>
              </div>

              <div className="border h-72 border-gray-700 bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 w-1/2 flex flex-col justify-between">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Quarterly Plan
                </h3>
                <p className="text-gray-400">
                  Get premium features for 3 months with our Quarterly Plan.
                </p>
                <p className="text-white font-semibold text-2xl">
                  ₹3000/quarter
                </p>
                <button
                  onClick={() => createOrder(300000)}
                  className="bg-[#d7b257] text-white px-3 py-1 rounded-md mt-4 hover:scale-105 transition"
                >
                  Select Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
