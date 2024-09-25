"use client"
import { LucideArrowLeft, LucideArrowRight, LucideDiamond, LucidePackage, LucidePersonStanding, LucidePlus, LucideTrendingDown, LucideTrendingUp } from "lucide-react";
import { tableData } from "../data";
import Button from "@/components/button/page";
import { useEffect, useState } from "react";
import Modal from "@/components/modal";
import axios from "axios";




const PremiumForm = ({ PremiumData, onChange, onSave, onClose }) => {
    const handleChange = (field, value) => {
      onChange(field, value);
    };
  
    return (
      <div className="bg-white  w-full border  overflow-hidden rounded-t-xl p-8 shadow-lg">

        <div className=" text-black uppercase text-xl mb-2">

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
            className="text-lg  font-oswald border border-black rounded-lg p-2"
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
      console.log(datas,"htjkylhtykhtykhmtykh")
      const [openCreatePopup, setOpenCreatePopup] = useState(false);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://127.0.0.1:8000/admin-side/premium/"); // replace with your backend API
            // console.log(response.data)
            setDatas(response.data.data);
             // Store fetched data into the state
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);

      

      const handleInputChange = (field, value) => {
        setTempData({ ...tempData, [field]: value });
      };


      const handleSave = async () => {
        // Ensure that required fields are not empty
        if (
          tempData.premium_period.trim() &&
         
          tempData. premium_amount
        ) {
          let updatedDatas;
    
         
            // Append new data
            updatedDatas = [tempData, ...datas];
          
          try {
            const response = await axios.post("http://127.0.0.1:8000/admin-side/premium/", updatedDatas); // replace with your API endpoint
            console.log(response.data)
            setDatas(response.data.data); // Update state with response
          } catch (error) {
            console.error("Error saving data:", error);
          }
    
          setOpenCreatePopup(false);
          
        } else {
          alert("Please fill in all required fields.");
        }
      };
    








    return <div className="w-full px-5 py-5 flex flex-col">
        <span className="text-2xl font-bold text-white">Premium</span>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-4">
            <div className="bg-primary text-white p-5 rounded-lg flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full border border-[#D7B257] text-[#D7B257] flex items-center justify-center">
                        <LucideTrendingUp size={40} />
                    </div>
                    <span className="text-3xl font-bold mt-2">100</span>
                    <span>New users</span>
                </div>
            </div>
            <div className="bg-primary text-white p-5 rounded-lg flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full border border-[#D7B257] text-[#D7B257] flex items-center justify-center">
                        <LucideTrendingDown size={40} />
                    </div>
                    <span className="text-3xl font-bold mt-2">234</span>
                    <span>Declined users</span>
                </div>
            </div>
            <div className="bg-primary text-white p-5 rounded-lg flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full border border-[#D7B257] text-[#D7B257] flex items-center justify-center">
                        <LucideDiamond size={40} />
                    </div>
                    <span className="text-3xl font-bold mt-2">100</span>
                    <span>Total premium users</span>
                </div>
            </div>
        </div>
        <div className="flex justify-end items-end">
        <Button
        onClick={() => {
          // Reset tempData immediately before opening the modal
          setTempData({
            premium_period: "",
            premium_amount: "",
            
          });

          // Open the modal
          setOpenCreatePopup(true);
        }}
        className="bg-slate-700   w-[165px] mt-4 hover:bg-slate-800 !bg-opacity-40"
      >
        <LucidePlus size={20} />
        <div cl><span className="ml-2">Add Premium</span></div>

        

      </Button>
      </div>


      {/* {datas.length > 0 && ( */}


    



        <div className="w-full  text-white flex flex-col bg-primary p-5 rounded-lg mt-5">
            <div className="w-full overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left p-3 pt-0 ">Premium Amount</th>
                            <th className="text-left p-3 pt-0">Premium Period</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((data, i) => <tr className={`${i % 2 === 0 ?  "bg-secondary" : ""} rounded-lg`} key={i}>
                            
                            <td className="p-3 capitalize">{data. premium_period}</td>
                            <td className="p-3 capitalize">{data.premium_amount}</td>
                            
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="w-full border border-gray-600 opacity-50 px-4 mt-5"></div>
            <div className="w-full flex items-center justify-between mt-5 px-2">
                <div className="flex items-center text-gray-500">
                    Page 3/10
                </div>
                <div className="flex items-center">
                    <Button className="bg-transparent hover:bg-slate-800 !bg-opacity-40">
                        <LucideArrowLeft size={20} />
                    </Button>
                    <Button className="bg-slate-800 hover:!bg-slate-800 active:!bg-slate-800">
                        1
                    </Button>
                    {
                        [2, 3, 4, 5].map((i) => <Button key={i} className="bg-transparent hover:bg-slate-800 !bg-opacity-40">
                            {i}
                        </Button>)
                    }
                    <Button className="bg-transparent hover:bg-slate-800 !bg-opacity-40">
                        <LucideArrowRight size={20} />
                    </Button>
                </div>
            </div>
        </div>
  {/* )}  */}
        <Modal open={openCreatePopup} onClose={() => setOpenCreatePopup(false)}>
        <div className="flex justify-center items-center max-w-md w-full mx-auto">
          <PremiumForm
            PremiumData={tempData}
            onChange={handleInputChange}
            onSave={handleSave}
            onClose={() => setOpenCreatePopup(false)}
          
          />
        </div>
      </Modal>

      



    </div>
}