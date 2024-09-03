"use client";

import Curve from "@/assets/svg/Curve"
import Search from "@/assets/svg/Search"
import Button from "@/components/button/page"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Ms from "@/assets/images/test_ms.png"
import Star from "@/assets/svg/Star";
import Navbar from "./Navbar";
import StockCard from "./StockCard";

function fetchStocksData({ search, filter }) {
    const data = [
        {
            id: 1,
            symbol: "MS",
            companyName: "Morgan Stanley",
            date: "10/10/2021",
            strategy: "Bullish",
            changePercentage: 2.5,
            image: Ms
        },
        {
            id: 2,
            symbol: "AAPL",
            companyName: "Apple Inc.",
            date: "12/25/2022",
            strategy: "Neutral",
            changePercentage: 0.7,
            image: Ms
        },
        {
            id: 3,
            symbol: "GOOGL",
            companyName: "Alphabet Inc.",
            date: "01/01/2023",
            strategy: "Bearish",
            changePercentage: -1.2,
            image: Ms
        },
        {
            id: 4,
            symbol: "AMZN",
            companyName: "Amazon.com",
            date: "02/14/2023",
            strategy: "Bullish",
            changePercentage: 3.1,
            image: Ms
        },
        {
            id: 5,
            symbol: "TSLA",
            companyName: "Tesla, Inc.",
            date: "03/17/2023",
            strategy: "Neutral",
            changePercentage: 0.5,
            image: Ms
        }
    ]

    let d = data;

    let f = []
    d.forEach(i => !f.includes(i.strategy) && f.push(i.strategy))

    if (search && search !== "") d = data.filter((stock) => JSON.stringify(stock).toLowerCase().includes(search.toLowerCase()));
    if (filter !== "All") d = data.filter((stock) => stock.strategy === filter);

    return {
        data: d,
        filters: f
    }
}

export default function page() {

    const [filters, setFilters] = useState(["All"])
    const [selectedFilter, setSelectedFilter] = useState(filters[0])
    const [stockData, setStockData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const res = fetchStocksData({ search: searchQuery, filter: selectedFilter })
        setStockData(res.data)
        setFilters(["All", ...res.filters])
    }, [selectedFilter, searchQuery])


    return <div className="w-full h-screen bg-[#D8D8D8] overflow-y-auto">

        {/* BACKGROUND IMAGE */}
        <div className="fixed w-full h-screen overflow-hidden pointer-events-none">
            <Curve />
        </div>

        {/* NAV BAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <div className="px-20 lg:px-40 xl:px-60 flex flex-col">
            <span className="text-2xl text-black mt-10">Welcome Back, <span className="font-extrabold text-[#402D00]">User</span>!</span>

            {/* SEARCH BAR */}
            <div className={`flex items-center bg-white shadow-md rounded-lg px-4 py-2 border border-yellow-500 mt-10`}>
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
                {
                    filters.map((i) => {
                        return <div onClick={() => setSelectedFilter(i)} className={`px-5 py-1 rounded-lg flex justify-center items-center cursor-pointer select-none transition-all duration-200 text-black ${i == selectedFilter ? "bg-[#D7B257C9] hover:bg-[#D7B257] active:bg-[#D7B257C9] opacity-100" : "hover:bg-[#D7B257] hover:bg-opacity-30 opacity-[0.56]"}`}>{i}</div>
                    })
                }
            </div>

            {/* STOCK CARD */}
            <div>
                <div className="grid grid-cols-2 gap-x-32 gap-y-5 mt-10 justify-center px-10">
                    {stockData.length % 2 === 0 || stockData.length === 1 ? stockData.map((stock) => (
                        <StockCard key={stock.id} stockData={stock} />
                    ))
                        : stockData.slice(0, stockData.length - 1).map((stock) => (
                            <StockCard key={stock.id} stockData={stock} />
                        ))
                    }
                </div>
                <div className={`mt-5 flex justify-center px-24`}>
                    {
                        stockData.length % 2 !== 0 && stockData.length !== 1 && <div className="w-1/2">
                            <StockCard stockData={stockData[stockData.length - 1]} />
                        </div>
                    }
                </div>
            </div>
        </div>

    </div>
}