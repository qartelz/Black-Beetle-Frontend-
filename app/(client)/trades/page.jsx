"use client";

import Curve from "@/assets/svg/Curve";
import Search from "@/assets/svg/Search";
import Button from "@/components/button/page";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Ms from "@/assets/images/test_ms.png";
import Star from "@/assets/svg/Star";

import StockCard from "./StockCard";
import Navbar from "@/components/navbar/page";

async function fetchStocksData({ search, filter }) {
    try {
        const response = await fetch("/api/stocks"); // Replace with your actual backend API endpoint
        const data = await response.json();

        let filteredData = data;

        let uniqueFilters = [];
        filteredData.forEach((item) => {
            if (!uniqueFilters.includes(item.strategy)) {
                uniqueFilters.push(item.strategy);
            }
        });

        if (search && search !== "") {
            filteredData = data.filter((stock) =>
                JSON.stringify(stock).toLowerCase().includes(search.toLowerCase())
            );
        }

        if (filter !== "All") {
            filteredData = data.filter((stock) => stock.strategy === filter);
        }

        return {
            data: filteredData,
            filters: uniqueFilters,
        };
    } catch (error) {
        console.error("Error fetching stock data:", error);
        return {
            data: [],
            filters: [],
        };
    }
}

export default function Page() {
    const [filters, setFilters] = useState(["All"]);
    const [selectedFilter, setSelectedFilter] = useState(filters[0]);
    const [stockData, setStockData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        async function fetchData() {
            const res = await fetchStocksData({ search: searchQuery, filter: selectedFilter });
            setStockData(res.data);
            setFilters(["All", ...res.filters]);
        }
        fetchData();
    }, [selectedFilter, searchQuery]);

    return (
        <div className="bg-[#D8D8D8] overflow-y-auto">
            {/* BACKGROUND IMAGE */}
            <div className="fixed w-full h-screen overflow-hidden pointer-events-none">
                <Curve />
            </div>

            <Navbar />

            {/* MAIN CONTENT */}
            <div className="px-10 h-screen lg:px-40 xl:px-60 mt-32 flex flex-col">
                <span className="text-2xl text-black mt-10">
                    Welcome Back, <span className="font-extrabold text-[#402D00]">User</span>!
                </span>

                {/* SEARCH BAR */}
                <div className="flex items-center bg-white shadow-md rounded-lg px-4 py-2 border border-yellow-500 mt-10">
                    <Search className="text-black" />
                    <input
                        onInput={(e) => setSearchQuery(e.target.value)}
                        type="text"
                        placeholder="Search Stocks..."
                        className="ml-2 w-full outline-none bg-transparent text-gray-700"
                    />
                </div>

                {/* STRATEGY FILTER */}
                <div className="flex gap-3 mt-3">
                    {filters.map((filter) => (
                        <div
                            key={filter}
                            onClick={() => setSelectedFilter(filter)}
                            className={`px-5 py-1 rounded-lg flex justify-center items-center cursor-pointer select-none transition-all duration-200 text-black ${
                                filter == selectedFilter
                                    ? "bg-[#D7B257C9] hover:bg-[#D7B257] active:bg-[#D7B257C9] opacity-100"
                                    : "hover:bg-[#D7B257] hover:bg-opacity-30 opacity-[0.56]"
                            }`}
                        >
                            {filter}
                        </div>
                    ))}
                </div>

                {/* STOCK CARD */}
                <div className="mb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-5 mt-10 justify-center lg:px-10">
                        {stockData.length % 2 === 0 || stockData.length === 1
                            ? stockData.map((stock) => (
                                  <StockCard key={stock.id} stockData={stock} />
                              ))
                            : stockData
                                  .slice(0, stockData.length - 1)
                                  .map((stock) => (
                                      <StockCard key={stock.id} stockData={stock} />
                                  ))}
                    </div>
                    <div className={`mt-5 grid grid-cols-1 lg:flex justify-center lg:px-24`}>
                        {stockData.length % 2 !== 0 && stockData.length !== 1 && (
                            <div className="w-full lg:w-1/2">
                                <StockCard stockData={stockData[stockData.length - 1]} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
