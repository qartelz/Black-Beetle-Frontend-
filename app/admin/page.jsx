"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const TradeForm = ({ TradeData, onChange, onSave, onClose }) => {
  const handleChange = (field, value) => {
    onChange(field, value);
  };

  return (
    <div className="bg-white w-full border overflow-hidden rounded-t-xl p-6 text-black shadow-lg">
      <div className="text-black uppercase text-xl mb-2">
        <input
          type="text"
          name="acronym"
          value={TradeData.acronym}
          onChange={(e) => handleChange("acronym", e.target.value)}
          className="text-lg font-oswald border border-black rounded-lg p-2"
          placeholder="Stock Name"
          required
        />
      </div>

      <div className="flex space-x-2 text-black">
        <select
          name="segment"
          value={TradeData.segment}
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

      <ReactQuill
        value={TradeData.analysis}
        onChange={(value) => handleChange("analysis", value)}
        placeholder="Enter your analysis here..."
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
          Save
          <FontAwesomeIcon className="text-2xl" icon={faCheck} />
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [tempData, setTempData] = useState({
    acronym: "",
    segment: "",
    trade_type: "",
    analysis: "",
    buy_price: "",
    stop_loss: "",
    target_price: "",
  });
  const [datas, setDatas] = useState([]);

  const handleInputChange = (field, value) => {
    setTempData({ ...tempData, [field]: value });
  };

  const handleAddData = () => {
    setTempData({
      acronym: "",
      segment: "",
      trade_type: "",
      analysis: "",
      buy_price: "",
      stop_loss: "",
      target_price: "",
    });
    setShowModal(true); // Show modal but don't save anything yet
  };

  const handleSave = () => {
    if (
      tempData.acronym.trim() &&
      tempData.segment.trim() &&
      tempData.trade_type.trim()
    ) {
      setDatas([tempData, ...datas]); // Add to the start of the array (latest first)
      setShowModal(false); // Close the modal after saving
    } else {
      // Handle the case when the form is incomplete or invalid (optional)
      alert("Please fill in all required fields.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal without saving
  };

  return (
    <main>
      <button
        className="px-4 mb-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none"
        onClick={handleAddData}
      >
        Add Inputs
      </button>

      {showModal && (
        <div className="flex justify-center items-center max-w-md w-full mx-auto">
          <TradeForm
            TradeData={tempData}
            onChange={handleInputChange}
            onSave={handleSave}
            onClose={handleCloseModal}
          />
        </div>
      )}

      {datas.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Saved Trades</h2>
          <ul className="space-y-4">
            {datas.map((data, index) => (
              <li key={index} className="p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold">Trade Entry {index + 1}</h3>
                <p><strong>Stock Name:</strong> {data.acronym || "N/A"}</p>
                <p><strong>Segment:</strong> {data.segment || "N/A"}</p>
                <p><strong>Trade Type:</strong> {data.trade_type || "N/A"}</p>
                <p><strong>Entry Price:</strong> {data.buy_price || "N/A"}</p>
                <p><strong>Stop Loss:</strong> {data.stop_loss || "N/A"}</p>
                <p><strong>Target Price:</strong> {data.target_price || "N/A"}</p>
                <p className="w-1/3"><strong>Analysis:</strong> {data.analysis || "N/A"}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
