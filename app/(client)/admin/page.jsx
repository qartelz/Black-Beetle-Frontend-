"use client";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dynamic from "next/dynamic";
import {
  LucideArrowLeft,
  LucideArrowRight,
  LucideDiamond,
  LucidePackage,
  LucidePersonStanding,
  LucidePlus,
  LucideX,
  LucideEdit,
} from "lucide-react";
import { tableData } from "./data";
import Button from "@/components/button/page";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import Modal from "@/components/modal";
import Input from "@/components/input";
import { useEffect, useState } from "react";


const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });



const TradeForm = ({ TradeData, onChange, onSave, onClose, isEditing }) => {
  const handleChange = (field, value) => {
    onChange(field, value);
  };

  return (
    <div className="bg-white w-full border  overflow-hidden rounded-t-xl p-8 text-black shadow-lg">
      <div className="text-black uppercase text-xl mb-2">
        <input
          type="text"
          name="acronym"
          value={TradeData.acronym}
          onChange={(e) => handleChange("acronym", e.target.value)}
          className="text-lg font-oswald border border-black rounded-lg p-2"
          placeholder="Stock Name"
          disabled={isEditing}
          required
        />
      </div>

      <div className="flex space-x-2 text-black">
        <select
          name="segment"
          value={TradeData.segment}
          disabled={isEditing}
          onChange={(e) => handleChange("segment", e.target.value)}
          className="text-lg font-oswald border border-black rounded-lg p-2"
        >
          <option value="" disabled>
            Segment
          </option>
          <option value="equity">Equity</option>
          <option value="futures">Futures</option>
          <option value="option">Option</option>
          <option value="commodities">Commodities</option>
          <option value="forex">Forex</option>
        </select>

        <select
          name="trade_type"
          value={TradeData.trade_type}
          onChange={(e) => handleChange("trade_type", e.target.value)}
          disabled={isEditing}
          className="text-lg font-oswald border border-black rounded-lg p-2"
        >
          <option value="" disabled>
            Trade Type
          </option>
          <option value="intraday">Intraday</option>
          <option value="short_term">Short Term</option>
          <option value="long_term">Long Term</option>
          <option value="positional">Positional</option>
          <option value="btst">BTST</option>
        </select>
      </div>

      <div className="flex flex-col sm:flex-row mt-3 mb-4 space-x-2">
        <input
          type="number"
          name="buy_price"
          value={TradeData.buy_price}
          onChange={(e) => handleChange("buy_price", e.target.value)}
          className="text-lg border border-black rounded-lg p-2 w-full"
          placeholder="Entry Price"
        />
        <input
          type="number"
          name="stop_loss"
          value={TradeData.stop_loss}
          onChange={(e) => handleChange("stop_loss", e.target.value)}
          className="text-lg border border-black rounded-lg p-2 w-full"
          placeholder="Stop Loss"
        />
        <input
          type="number"
          name="target_price"
          value={TradeData.target_price}
          onChange={(e) => handleChange("target_price", e.target.value)}
          className="text-lg border border-black rounded-lg p-2 w-full"
          placeholder="Target"
        />
      </div>

      <div className="mb-4 gap-2 flex">
        <DatePicker
          name="expire"
          selected={TradeData.expire}
          disabled={isEditing}
          onChange={(date) => onChange("expire", date)}
          className="p-2  rounded  border border-gray-300"
          placeholderText="Select Expiry"
          dateFormat="MM/dd/yyyy"
        />

        <select
          name="trade_status"
          value={TradeData.trade_status}
          onChange={(e) => handleChange("trade_status", e.target.value)}
          disabled={isEditing}
          className="text-lg font-oswald border border-black rounded-lg p-2"
        >
          <option value="" disabled>
            Trade Status
          </option>
          <option value="bullish">Bullish</option>
          <option value="neutral">Neutral</option>
          <option value="bearish">Bearish</option>
        </select>
      </div>

      <ReactQuill
        value={TradeData.analysis_bull}
        readOnly={isEditing}
        onChange={(value) => handleChange("analysis_bull", value)}
        placeholder="Enter your Bullish Analysis here..."
        className="w-full text-black rounded mb-10"
      />

      <ReactQuill
        value={TradeData.analysis_bear}
        onChange={(value) => handleChange("analysis_bear", value)}
        readOnly={isEditing}
        placeholder="Enter your Bearish Analysis here..."
        className="w-full text-black rounded"
      />

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
          {isEditing ? "Update" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default function Page() {


  const [tempData, setTempData] = useState({
    acronym: "",
    segment: "",
    trade_type: "",
    trade_status: "",
    analysis_bull: "",
    analysis_bear: "",
    buy_price: "",
    stop_loss: "",
    target_price: "",
    expire: "",
  });
  const [datas, setDatas] = useState([]);
  const [openCreatePopup, setOpenCreatePopup] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/tradeData"); // replace with your backend API
        setDatas(response.data); // Store fetched data into the state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);



  const handleInputChange = (field, value) => {
    setTempData({ ...tempData, [field]: value });
  };

  const handleSave =  async () => {
    // Ensure that required fields are not empty
    if (
      tempData.acronym.trim() &&
      tempData.segment.trim() &&
      tempData.trade_type.trim() &&
      tempData.trade_status.trim() &&
      tempData.buy_price &&
      tempData.stop_loss &&
      tempData.target_price &&
      tempData.expire
    ) {
      
      let updatedDatas;
      

      if (isEditing) {
        // Update the data at the specific index
        const updatedDatas = [...datas];
        updatedDatas[editIndex] = tempData;
      
      } else {
        // Append new data
        updatedDatas = [tempData, ...datas];
      }
      try {
        const response = await axios.post("/api/tradeData", updatedDatas); // replace with your API endpoint
        setDatas(response.data); // Update state with response
      } catch (error) {
        console.error("Error saving data:", error);
      }

      setOpenCreatePopup(false);
      setIsEditing(false);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handleEdit = (index) => {
    const dataToEdit = datas[index];
    setTempData(dataToEdit);
    setIsEditing(true);
    setEditIndex(index);
    setOpenCreatePopup(true);
  };

  useEffect(() => {
    if (openCreatePopup && !isEditing) {
      setTempData({
        acronym: "",
        segment: "",
        trade_type: "", 
        trade_status: "",
        analysis_bull: "",
        analysis_bear: "",
        buy_price: "",
        stop_loss: "",
        target_price: "",
        expire: "",
      });
    }
  }, [openCreatePopup, isEditing]);

  return (
    <div className="w-full px-5 py-5 flex flex-col">
      <span className="text-2xl font-bold text-white">Dashboard</span>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-4">
        <div className="bg-primary text-white p-5 rounded-lg flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border border-[#D7B257] text-[#D7B257] flex items-center justify-center">
              <LucidePersonStanding size={40} />
            </div>
            <span className="text-3xl font-bold mt-2">100</span>
            <span>Users</span>
          </div>
        </div>
        <div className="bg-primary text-white p-5 rounded-lg flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border border-[#D7B257] text-[#D7B257] flex items-center justify-center">
              <LucidePackage size={40} />
            </div>
            <span className="text-3xl font-bold mt-2">234</span>
            <span>Orders</span>
          </div>
        </div>
        <div className="bg-primary text-white p-5 rounded-lg flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border border-[#D7B257] text-[#D7B257] flex items-center justify-center">
              <LucideDiamond size={40} />
            </div>
            <span className="text-3xl font-bold mt-2">100</span>
            <span>Premium users</span>
          </div>
        </div>
      </div>

      <Button
        onClick={() => {
          // Reset tempData immediately before opening the modal
          setTempData({
            acronym: "",
            segment: "",
            trade_type: "",
            trade_status: "",
            analysis_bull: "",
            analysis_bear: "",
            buy_price: "",
            stop_loss: "",
            target_price: "",
            expire: "",
          });

          // Open the modal
          setOpenCreatePopup(true);
        }}
        className="bg-slate-700 w-[150px] mt-4 hover:bg-slate-800 !bg-opacity-40"
      >
        <LucidePlus size={20} />
        <span className="ml-2">Add Inputs</span>
      </Button>

      {datas.length > 0 && (
        <div className="w-full flex flex-col bg-primary p-5 rounded-lg mt-5">
          <div className="flex mb-10 items-center justify-between">
            <div></div>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-3 pt-0">Stock/Index</th>
                  <th className="text-left p-3 pt-0">Segment</th>
                  <th className="text-left p-3 pt-0">Trade Type</th>
                  <th className="text-left p-3 pt-0">Buy Price</th>
                  <th className="text-left p-3 pt-0">Stop Loss</th>
                  <th className="text-left p-3 pt-0">Target</th>
                  <th className="text-left p-3 pt-0">Expiry</th>
                  <th className="text-left p-3 pt-0">Status</th>
                  <th className="text-left p-3 pt-0">Square off</th>
                </tr>
              </thead>
              <tbody>
                {datas.slice(0, 11).map((data, i) => (
                  <tr
                    className={`${
                      i % 2 === 0 ? "bg-secondary" : ""
                    } rounded-lg`}
                    key={i}
                  >
                    <td className="p-3 rounded-l-lg">
                      {data.acronym
                        ? data.acronym.toUpperCase().replace(/_/g, " ")
                        : "N/A"}
                    </td>
                    <td className="p-3">
                      {data.segment?.toUpperCase().replace(/_/g, " ")}
                    </td>
                    <td className="p-3">
                      {data.trade_type
                        ? data.trade_type.toUpperCase().replace(/_/g, " ")
                        : "N/A"}
                    </td>
                    <td className="p-3">{data.buy_price}</td>
                    <td className="p-3">{data.stop_loss}</td>
                    <td className="p-3">{data.target_price}</td>

                    <td className="p-3">
                      {data.expire ? data.expire.toLocaleDateString() : "N/A"}
                    </td>

                    <td className="p-3">
                      {data.trade_status
                        ? data.trade_status.toUpperCase().replace(/_/g, " ")
                        : "N/A"}
                    </td>
                    <td className="p-3 ">
                      {data.squareOff
                        ? data.squareOff.toUpperCase().replace(/_/g, " ")
                        : "N/A"}
                    </td>
                    <button
                      className="text-sm rounded-r-lg text-yellow-300 mt-3 flex items-center gap-1"
                      onClick={() => handleEdit(i)}
                    >
                      <LucideEdit size={20} /> Edit
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-full border border-gray-600 opacity-50 mb-4 px-4 mt-5"></div>
        </div>
      )}

      <Modal open={openCreatePopup} onClose={() => setOpenCreatePopup(false)}>
        <div className="flex justify-center items-center max-w-md w-full mx-auto">
          <TradeForm
            TradeData={tempData}
            onChange={handleInputChange}
            onSave={handleSave}
            onClose={() => setOpenCreatePopup(false)}
            isEditing={isEditing}
          />
        </div>
      </Modal>
    </div>
  );
}
