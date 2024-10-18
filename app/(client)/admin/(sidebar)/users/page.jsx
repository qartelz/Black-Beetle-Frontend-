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
import axios from "axios";



export default function Page() {
  const [tempData, setTempData] = useState({
    premium_amount: "",
    premium_period: "",
  });
  const [datas, setDatas] = useState([]);
  const [monthlyUsers, setMonthlyUsers] = useState([])
  const [quaterlyUsers, setQuaterlyUsers] = useState([])
  console.log(datas,"all users")
  console.log(monthlyUsers,"Montly  users")
  console.log(quaterlyUsers,"Quarterly users")
  const [openCreatePopup, setOpenCreatePopup] = useState(false);
  const [activeTable, setActiveTable] = useState("users");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/admin-side/users/"
        ); // replace with your backend API
        console.log(response.data,"tetsing the value send from backend");
        setDatas(response.data.users); // Store fetched data into the state
        setMonthlyUsers(response.data.monthly_members)
        setQuaterlyUsers(response.data.quarterly_members)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (table) => {
    setActiveTable(table);
  };

 

  // const handleSave = async () => {
  //   // Ensure that required fields are not empty
  //   if (tempData.premium_period.trim() && tempData.premium_amount) {
  //     let updatedDatas;

  //     // Append new data
  //     updatedDatas = [tempData, ...datas];

  //     try {
  //       const response = await axios.post(
  //         "http://127.0.0.1:8000/admin-side/users/",
  //         updatedDatas
  //       ); // replace with your API endpoint
  //       setDatas(response.data); // Update state with response
  //     } catch (error) {
  //       console.error("Error saving data:", error);
  //     }

  //     setOpenCreatePopup(false);
  //   } else {
  //     alert("Please fill in all required fields.");
  //   }
  // };
  const [count, setCount] = useState({ total_users: 0, monthly_members: 0, quarterly_members: 0 })
  console.log(count,"dmswhfwherfbwrfubrefkrbef")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/admin-side/user-counts/"
        ); // replace with your backend API
        console.log(response.data,"testing the response count ");
        setCount(response.data); 
        // Store fetched data into the state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
            <span className="text-3xl font-bold mt-2">{count.total_users}</span>
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
            <span className="text-3xl font-bold mt-2">{count.quarterly_members}</span>
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
            <span className="text-3xl font-bold mt-2">{count.monthly_members}</span>
            <span>Monthly Membership</span>
          </div>
        </div>
      </div>
     
      {activeTable === "users" && (
        <div className="w-full flex capitalize text-white flex-col bg-primary p-5 rounded-lg mt-5">
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
                    <td className="p-3">{i+1}</td>
                    <td className="p-3 ">{`${data.first_name} ${data.last_name}`}</td>
                    <td className="p-3">{data.mobile_number}</td>
                    <td className="p-3">{data.is_premium_member ? 'Premium Member' : 'Non Premium Member'}</td>
                   
                    

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTable === "quarterly" && (
        <div className="w-full flex text-white flex-col bg-primary p-5 rounded-lg mt-5">
          <h2 className="text-white text-xl mb-4">Quarterly Membership Table</h2>
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-3 pt-0">Sr. No.</th>
                  <th className="text-left p-3 pt-0">User Name</th>
                  <th className="text-left p-3 pt-0">Mobile Number</th>
                  <th className="text-left p-3 pt-0">Premium Days Remaining</th>
                  <th className="text-left p-3 pt-0">Premium Expiry</th>

                </tr>
              </thead>
              <tbody>
                {quaterlyUsers.map((data, i) => (
                  <tr
                    className={`${i % 2 === 0 ? "bg-secondary" : ""} rounded-lg`}
                    key={i}
                  >
                    {/* <td className="p-3">{data.member_id}</td> */}
                    <td className="p-3">{i+1}</td>
                    <td className="p-3 ">{`${data.first_name} ${data.last_name}`}</td>
                    <td className="p-3">{data.mobile_number}</td>
                    <td className="p-3 ">{data.premium_days_remaining}</td>
                    <td className="p-3">{data.premium_validity ? new Date(data.premium_validity).toLocaleDateString('en-GB') : 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTable === "monthly" && (
        <div className="w-full text-white  flex flex-col bg-primary p-5 rounded-lg mt-5">
          <h2 className="text-white text-xl mb-4">Monthly Membership User</h2>
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                <th className="text-left p-3 pt-0">Sr. No.</th>
                  <th className="text-left p-3 pt-0">User Name</th>
                  <th className="text-left p-3 pt-0">Mobile Number</th>
                  <th className="text-left p-3 pt-0">Premium Days Remaining</th>
                  <th className="text-left p-3 pt-0">Premium Expiry</th>
                </tr>
              </thead>
              <tbody>
                {monthlyUsers.map((data, i) => (
                  <tr
                    className={`${i % 2 === 0 ? "bg-secondary" : ""} rounded-lg`}
                    key={i}
                  >
                    <td className="p-3">{i+1}</td>
                    <td className="p-3 ">{`${data.first_name} ${data.last_name}`}</td>
                    <td className="p-3">{data.mobile_number}</td>
                    <td className="p-3">{data.premium_days_remaining}</td>
                    <td className="p-3">{data.premium_validity ? new Date(data.premium_validity).toLocaleDateString('en-GB') : 'N/A'}</td>
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
