"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCheck } from "@fortawesome/free-solid-svg-icons";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const TradeForm = ({ TradeData, index, onChange, onSave, setShowModal }) => {
  const handleChange = (value) => {
    onChange(index, "analysis", value);
  };
  const handleSaveClick = () => {
    onSave(index);
   
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="bg-white w-full border overflow-hidden rounded-t-xl p-6 shadow-lg">
          <div>
            <div className="text-black uppercase text-xl mb-2">
              <input
                type="text"
                name="acronym"
                value={TradeData.acronym}
                onChange={(e) => onChange(index, "acronym", e.target.value)}
                className="text-lg font-oswald border border-black rounded-lg p-2"
                placeholder="Stock Name"
                required
              />
            </div>
          </div>

          <div className="flex space-x-2">
            <div className="text-black font-outfit uppercase font-bold text-2xl ">
              <select
                name="segment"
                value={TradeData.segment}
                onChange={(e) => onChange(index, "segment", e.target.value)}
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
            </div>
            <div className="text-black font-outfit uppercase font-bold text-2xl ">
              <select
                name="trade_type"
                value={TradeData.trade_type}
                onChange={(e) => onChange(index, "trade_type", e.target.value)}
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
          </div>

          <div className="flex flex-col sm:flex-row rounded-lg border border-gray-300 mt-3 mb-4">
            <div className="flex-1 text-black p-4 border-b sm:border-r sm:border-b-0">
              <h3 className="text-md whitespace-nowrap text-black font-bold sm:text-lg uppercase mb-1">
                Entry Price
              </h3>
              <div className="flex space-x-2">
                <input
                  type="number"
                  name="buy_price"
                  value={TradeData.buy_price}
                  onChange={(e) => onChange(index, "buy_price", e.target.value)}
                  className="text-lg border w-full text-black border-black p-2 rounded"
                />
              </div>
            </div>
            <div className="flex-1 p-4 text-black border-b sm:border-r sm:border-b-0">
              <h3 className="text-md sm:text-lg whitespace-nowrap text-black font-bold uppercase mb-1">
                Stop Loss
              </h3>
              <div className="flex space-x-2">
                <input
                  type="number"
                  name="stop_loss"
                  value={TradeData.stop_loss}
                  onChange={(e) => onChange(index, "stop_loss", e.target.value)}
                  className="text-lg border w-full text-black border-black p-2 rounded"
                />
              </div>
            </div>

            <div className="flex-1 text-black p-4">
              <h3 className="text-md sm:text-lg whitespace-nowrap text-black font-bold uppercase mb-1">
                Target
              </h3>
              <div className="flex space-x-2">
                <input
                  type="number"
                  name="target_price"
                  value={TradeData.target_price}
                  onChange={(e) =>
                    onChange(index, "target_price", e.target.value)
                  }
                  className="text-lg border w-full text-black border-black p-2 rounded"
                />
              </div>
            </div>
          </div>

          <div>
            <ReactQuill
              value={TradeData.analysis}
              onChange={handleChange}
              placeholder="Enter your analysis here..."
              className="w-full h-48 text-black   rounded "
            />
          </div>

          <div className="flex space-x-2 mt-20  justify-end">
           
            <button
              className="bg-gray-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-600"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>

            <button
              type="button"
              onClick={() => onSave(index)}
              className="bg-blue-500 hover:bg-blue-600 text-white text-xl p-2 flex gap-2 items-center pt-2 rounded"
            >
              Save
              <FontAwesomeIcon className="text-2xl" icon={faCheck} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const [datas, setDatas] = useState([
    {
      acronym: "",
      segment: "",
      trade_type: "",
      expire: null,
      analysis: "",
      buy_price: "",
      stop_loss: "",
      target_price: "",
    },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedDatas = [...datas];
    if (!updatedDatas[index]) {
      updatedDatas[index] = {}; 
    }
    updatedDatas[index][field] = value;
    setDatas(updatedDatas);
  };

  const handleAddData = () => {
    setDatas([
      ...datas,
      {
        acronym: " ",
        segment: " ",
        trade_type: " ",
        expire: null,
        analysis: " ",
        buy_price: " ",
        stop_loss: " ",
        target_price: " ",
      },
    ]);
  };

  const handleSave = (index) => {
    const updatedDatas = [...datas];

    setDatas(updatedDatas);
    setShowModal(false);
  };

  return (
    <main>
      <button
        className="px-4 mb-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none"
        onClick={() => setShowModal(true)}
      >
        Add Inputs
      </button>

      {showModal && (
        <>
          <div className=" flex justify-center items-center max-w-md w-full mx-auto ">
            {datas.map((TradeData, index) => (
              <TradeForm
                key={index}
                index={index}
                TradeData={TradeData}
                onChange={handleInputChange}
                onSave={handleSave}
                setShowModal={setShowModal}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={handleAddData}
            className="bg-blue-500 flex items-center justify-center  mt-10 mx-10 hover:bg-blue-600 text-white p-2 rounded mb-4"
          >
            Add Data
          </button>

          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 focus:outline-none mr-2"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </>
      )}

{datas.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Saved Trades</h2>
          <ul className="space-y-4">
            {datas.map((data, index) => (
              <li key={index} className=" p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold">Trade Entry {index + 1}</h3>
                <p><strong>Stock Name:</strong> {data.acronym || "N/A"}</p>
                <p><strong>Segment:</strong> {data.segment || "N/A"}</p>
                <p><strong>Trade Type:</strong> {data.trade_type || "N/A"}</p>
                <p><strong>Entry Price:</strong> {data.buy_price || "N/A"}</p>
                <p><strong>Stop Loss:</strong> {data.stop_loss || "N/A"}</p>
                <p><strong>Target Price:</strong> {data.target_price || "N/A"}</p>
                <p><strong>Analysis:</strong> {data.analysis || "N/A"}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
