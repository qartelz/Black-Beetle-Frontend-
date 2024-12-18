"use client";

import Home from "@/assets/svg/Home";
import Navbar from "./Navbar";
import ArrowRight from "@/assets/svg/ArrowRight";
import Image from "next/image";
import Ms from "@/assets/images/test_ms.png";
import Circle from "@/components/circle/page";
import Graph from "./Graph";
import Curve from "@/assets/svg/Curve"
import Link from "next/link";
import Button from "@/components/button/page";
import { useState, useEffect } from "react";
import Session from "./sections/Section";
import { useParams } from "next/navigation";

const navs = ['Summary', 'Analysis', 'History', 'Prediction v/s Actual Analysis']

export default function StockDetailPage() {
    const { symbol } = useParams();  // Get stock symbol from the URL
    const [selectedSection, setSelectedSection] = useState(navs[0]);
    const [stockData, setStockData] = useState(null);

    useEffect(() => {
        async function fetchStockData() {
            const response = await fetch(`/api/stocks/${symbol}`);  // Fetch stock data from API based on symbol
            const data = await response.json();
            setStockData(data);
        }

        if (symbol) {
            fetchStockData();
        }
    }, [symbol]);

    if (!stockData) return <div>Loading...</div>;

    return (
        <div className="w-full h-screen overflow-y-auto flex flex-col bg-[#1F1D1A]">
            {/* NAV BAR */}
            <div>
                <Navbar />
            </div>

            {/* MAIN CONTENT */}
            <div className="flex-1 flex flex-col">
                <div className="bg-[#1F1D1A] px-10 xl:px-60 py-20">
                    <div className="fixed w-full h-screen overflow-hidden pointer-events-none top-0 pt-20">
                        <Curve />
                    </div>
                    <div className="w-full flex items-center">
                        <Home />
                        <ArrowRight className="ml-3" />
                        <span className="text-[#FFFFFFB2] ml-3">{stockData.strategy}</span>
                        <ArrowRight className="ml-3" />
                        <span className="text-[#FFFFFFB2] ml-3">{stockData.companyName}</span>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center mt-5">
                        <div className="flex-1 relative flex flex-col lg:flex-row justify-center items-center">
                            <div className="mt-10 lg:mt-0 bg-white rounded-xl items-center justify-center w-fit p-4">
                                <div className="w-[60px] h-[60px]">
                                    <Image src={Ms} alt="logo" layout="fill" className="!sticky" />
                                </div>
                            </div>
                            <div className="flex flex-col lg:ml-4 mt-5 lg:mt-0">
                                <span className="text-[#D7B257C9] font-extrabold text-3xl">{stockData.symbol}</span>
                                <span className="flex justify-center lg:justify-start items-center">
                                    <Circle radius={10} color={'#1DF81F'} />
                                    <span className="ml-1">Open</span>
                                </span>
                            </div>
                        </div>
                        <div className="w-full lg:flex-1 flex justify-between items-center mt-10 lg:mt-0">
                            <div className="flex-1 flex flex-col items-center">
                                <span className="font-extrabold text-white text-lg lg:text-2xl">{stockData.strategy}</span>
                                <span className="text-xs text-[#FFFFFFA1]">Type</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center">
                                <span className="font-extrabold text-white text-lg lg:text-2xl">Equity</span>
                                <span className="text-xs text-[#FFFFFFA1]">Asset</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center">
                                <span className="font-extrabold text-white text-lg lg:text-2xl">{stockData.date}</span>
                                <span className="text-xs text-[#FFFFFFA1]">Trigger Date</span>
                            </div>
                        </div>
                        <div className="flex-1 mt-5 lg:mt-0 flex justify-end items-center flex-col">
                            <div className="w-full lg:w-3/4">
                                <Graph />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col bg-white px-5 md:px-12 xl:px-60">
                    <div className="flex flex-col flex-1 bg-[#2F2F2F] -mt-20 border-t-2 border-l-2 border-r-2 border-[#D7B257C9] rounded-t-xl z-10">
                        <div className="w-full flex my-4 py-2 gap-x-5 px-10 overflow-x-auto custom-scrollbar">
                            {navs.map((nav, i) => {
                                if (nav === selectedSection) {
                                    return (
                                        <button
                                            key={i}
                                            className="w-max bg-gradient-to-r from-[#C5C5C521] to-[#5F5F5F21] px-3 py-2 rounded-lg hover:to-[#5F5F5F51] transition-all duration-200 ease-in-out whitespace-nowrap flex-shrink-0"
                                        >
                                            {nav}
                                        </button>
                                    );
                                } else {
                                    return (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedSection(nav)}
                                            className="w-max px-3 py-0 lg:py-2 rounded-lg hover:bg-[#5F5F5F51] transition-all duration-200 ease-in-out whitespace-nowrap flex-shrink-0"
                                        >
                                            {nav}
                                        </button>
                                    );
                                }
                            })}
                        </div>

                        <div className="w-full h-[1px] bg-[#D7B257C9]"></div>
                        <div className="min-h-[70vh] flex flex-col px-10 py-5 overflow-y-auto">
                            <Session name={selectedSection} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
