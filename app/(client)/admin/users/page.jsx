"use client";
import {
  LucideArrowLeft,
  LucideArrowRight,
  LucideDiamond,
  User,
  LucidePackage,
  LucidePersonStanding,
  LucidePlus,
  LucideTrendingDown,
  LucideTrendingUp,
} from "lucide-react";
import { tableData } from "../data";
import Button from "@/components/button/page";
import { useEffect, useState } from "react";
import Modal from "@/components/modal";

const PremiumForm = ({ PremiumData, onChange, onSave, onClose }) => {
  const handleChange = (field, value) => {
    onChange(field, value);
  };

  return (
    <div className="bg-white w-full border  overflow-hidden rounded-t-xl p-8 text-black shadow-lg">
      <div className="text-black uppercase text-xl mb-2">
        <input
          type="text"
          name="premium_amount"
          value={PremiumData.premium_amount}
          onChange={(e) => handleChange("premium_amount", e.target.value)}
          className="text-lg font-oswald border border-black rounded-lg p-2"
          placeholder="Premium Amount"
          required
        />
      </div>

      <div className="flex space-x-2 text-black">
        <select
          name="premium_period"
          value={PremiumData.premium_period}
          onChange={(e) => handleChange("premium_period", e.target.value)}
          className="text-lg font-oswald border border-black rounded-lg p-2"
        >
          <option value="" disabled>
            Premium Period
          </option>
          <option value="quarterly">Quarterly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      <div className="flex space-x-2 mt-4 justify-end">
        <button
          className="bg-gray-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600"
          type="button"
          onClick={onClose}
        >
          Close
        </button>

        <button
          type="button"
          onClick={onSave}
          className="bg-blue-500 hover:bg-blue-600 text-white text-xl p-2 flex gap-2 items-center rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default function Page() {
  const [tempData, setTempData] = useState({
    premium_amount: "",
    premium_period: "",
  });
  const [datas, setDatas] = useState([]);
  const [openCreatePopup, setOpenCreatePopup] = useState(false);
  const [activeTable, setActiveTable] = useState("users");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/admin-side/trades/"
        ); // replace with your backend API
        console.log(response.data);
        setDatas(response.data); // Store fetched data into the state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (table) => {
    setActiveTable(table);
  };

  const handleInputChange = (field, value) => {
    setTempData({ ...tempData, [field]: value });
  };

  const handleSave = async () => {
    // Ensure that required fields are not empty
    if (tempData.premium_period.trim() && tempData.premium_amount) {
      let updatedDatas;

      // Append new data
      updatedDatas = [tempData, ...datas];

      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/admin-side/create-trade/",
          updatedDatas
        ); // replace with your API endpoint
        setDatas(response.data); // Update state with response
      } catch (error) {
        console.error("Error saving data:", error);
      }

      setOpenCreatePopup(false);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="w-full px-5 py-5 flex flex-col">
      <span className="text-2xl font-bold text-white">Users List</span>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-4">
        <div
          className="bg-primary text-white p-5 rounded-lg flex items-center justify-center cursor-pointer transform hover:scale-105 transition-transform duration-300"
          onClick={() => handleClick("users")}
        >
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border border-[#D7B257] text-[#D7B257] flex items-center justify-center">
              <User size={20} />
            </div>
            <span className="text-3xl font-bold mt-2">100</span>
            <span>Total Users</span>
          </div>
        </div>

        <div
          onClick={() => handleClick("quarterly")}
          className="bg-primary text-white p-5 rounded-lg flex items-center justify-center cursor-pointer transform hover:scale-105 transition-transform duration-300"
        >
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border border-[#D7B257] text-[#D7B257] flex items-center justify-center">
              <LucideTrendingDown size={20} />
            </div>
            <span className="text-3xl font-bold mt-2">234</span>
            <span>Quarterly Membership</span>
          </div>
        </div>

        <div
          onClick={() => handleClick("monthly")}
          className="bg-primary text-white p-5 rounded-lg flex items-center justify-center cursor-pointer transform hover:scale-105 transition-transform duration-300"
        >
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border border-[#D7B257] text-[#D7B257] flex items-center justify-center">
              <LucideDiamond size={20} />
            </div>
            <span className="text-3xl font-bold mt-2">100</span>
            <span>Monthly Membership</span>
          </div>
        </div>
      </div>
     
      {activeTable === "users" && (
        <div className="w-full flex flex-col bg-primary p-5 rounded-lg mt-5">
          <h2 className="text-white text-xl mb-4">Users Table</h2>
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-3 pt-0">Sr. No.</th>
                  <th className="text-left p-3 pt-0">User Name</th>
                  <th className="text-left p-3 pt-0">Mob. No.</th>
                  <th className="text-left p-3 pt-0">Premium Status</th>

                </tr>
              </thead>
              <tbody>
                {datas.map((data, i) => (
                  <tr
                    className={`${i % 2 === 0 ? "bg-secondary" : ""} rounded-lg`}
                    key={i}
                  >
                    <td className="p-3">{data.user_id}</td>
                    <td className="p-3">{data.user_name}</td>
                    <td className="p-3">{data.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTable === "quarterly" && (
        <div className="w-full flex flex-col bg-primary p-5 rounded-lg mt-5">
          <h2 className="text-white text-xl mb-4">Quarterly Membership Table</h2>
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-3 pt-0">Sr. No.</th>
                  <th className="text-left p-3 pt-0">User Name</th>
                  <th className="text-left p-3 pt-0">Premium Date</th>
                  <th className="text-left p-3 pt-0">Premium Expiry</th>

                </tr>
              </thead>
              <tbody>
                {datas.map((data, i) => (
                  <tr
                    className={`${i % 2 === 0 ? "bg-secondary" : ""} rounded-lg`}
                    key={i}
                  >
                    <td className="p-3">{data.member_id}</td>
                    <td className="p-3">{data.premium_period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTable === "monthly" && (
        <div className="w-full flex flex-col bg-primary p-5 rounded-lg mt-5">
          <h2 className="text-white text-xl mb-4">Monthly Membership Table</h2>
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                <th className="text-left p-3 pt-0">Sr. No.</th>
                  <th className="text-left p-3 pt-0">User Name</th>
                  <th className="text-left p-3 pt-0">Premium Date</th>
                  <th className="text-left p-3 pt-0">Premium Expiry</th>
                </tr>
              </thead>
              <tbody>
                {datas.map((data, i) => (
                  <tr
                    className={`${i % 2 === 0 ? "bg-secondary" : ""} rounded-lg`}
                    key={i}
                  >
                    <td className="p-3">{data.member_id}</td>
                    <td className="p-3">{data.premium_amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

     
        
    </div>
  );
}
