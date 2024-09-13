"use client";

import Curve from "@/assets/svg/Curve";
import Navbar from "./Navbar";
import LaptopDraw from "@/assets/svg/LaptopDraw";
import AnalyticsDraw from "@/assets/svg/AnalyticsDraw";
import Section from "./Sections/Section";
import { useState } from "react";

export default function Home() {

    const [section, setSection] = useState(1);
    const [openPopup, setOpenPopup] = useState(false);

    return <div className="w-full h-screen overflow-y-auto flex flex-col">
        {/* BACKGROUND IMAGE */}
        <div className="fixed w-full h-screen overflow-hidden pointer-events-none">
            <Curve />
        </div>

        <Navbar />
        <div className="flex-1 flex bg-[#D8D8D8]">
            <div className="px-10 md:px-20 lg:px-40 py-10 flex flex-col relative">
                <span className="text-[#402D00C9] font-extrabold text-[30px]">Beetle’s Price Time Cycle Model</span>
                <p className="text-black text-[22.93px] mt-3">
                    Effortlessly navigate market cycles with Beetle’s Time Price Cycle Model. Built for seamless real-time data analysis, it removes the hassle of manual data entry, freeing you to focus entirely on your strategy. Simply select your trading style, whether intraday, short-term, or positional and let Beetle uncover key market trends, keeping you one step ahead.
                </p>
                <div className="flex justify-center mt-10 z-40">
                    <div className="flex items-center z-20">
                        <div className="bg-white w-20 h-20 lg:w-32 lg:h-32 rounded-full flex p-3 overflow-hidden ">
                            <div onClick={() => setSection(1)} className={`flex-1 flex items-center justify-center rounded-full text-[40px] font-extrabold  ${section === 1 ? 'bg-[#715E2E]' : 'bg-white text-[#715E2E] hover:bg-[#715E2E30] transition-all duration-100 ease-in-out cursor-pointer'}`}>
                                1
                            </div>
                        </div>
                        <div className="w-16 bg-white h-16 inward-radius -ml-3 mt-12"></div>
                        <div className="bg-white w-20 h-20 lg:w-32 lg:h-32 rounded-full flex p-3 overflow-hidden -ml-3">
                            <div onClick={() => setSection(2)} className={`flex-1 flex items-center justify-center rounded-full text-[40px] font-extrabold  ${(section === 2 || section === 3) ? 'bg-[#715E2E]' : 'bg-white text-[#715E2E] hover:bg-[#715E2E30] transition-all duration-100 ease-in-out cursor-pointer'}`}>
                                2
                            </div>
                        </div>
                        <div className="w-16 bg-white h-16 inward-radius -ml-3 mt-12"></div>
                        <div className="bg-white w-20 h-20 lg:w-32 lg:h-32 rounded-full flex p-3 overflow-hidden -ml-3">
                            <div onClick={() => setSection(4)} className={`flex-1 flex items-center justify-center rounded-full text-[40px] font-extrabold  ${section === 4 ? 'bg-[#715E2E]' : 'bg-white text-[#715E2E] hover:bg-[#715E2E30] transition-all duration-100 ease-in-out cursor-pointer'}`}>
                                3
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col items-center">
                    {
                        section === 3 && <>
                            <div className="fixed z-50 w-full h-screen inset-0 backdrop-blur-sm bg-black bg-opacity-50"></div>

                            <div className="absolute w-[80%] z-[60] flex justify-center items-center">
                                <div className="px-5 py-10 border border-[#D7B257] rounded-xl bg-white w-full text-black">
                                    <div class="flex items-stretch">
                                        <div class="w-[12px] flex-shrink-0 bg-[#D7B257]"></div>
                                        <div className="w-10"></div>
                                        <div class="flex-1">
                                            <ul className="list-decimal space-y-4">
                                                <li className="text-lg font-bold text-black">
                                                    Beetle’s Screener:
                                                    <p className="text-gray-700 font-normal">
                                                        Use this tool to screen potential opportunities.
                                                    </p>
                                                </li>
                                                <li className="text-lg font-bold text-black">
                                                    Beetle’s Trade Manager:
                                                    <p className="text-gray-700 font-normal">
                                                        Choose up to <span className="font-bold">6</span> stocks to monitor closely.
                                                    </p>
                                                </li>
                                                <li className="text-lg font-bold text-black">
                                                    Beetle’s Trend Reversal Indicator:
                                                    <p className="text-gray-700 font-normal">
                                                        Watch for possible trend reversals with this indicator.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-end">
                                        <button onClick={() => setSection((p) => p + 1)} className=" py-2 bg-[#D7B257] w-fit text-black px-8 rounded-lg font-semibold hover:bg-[#cfa63d] active:bg-[#ffbe18] transition-all duration-100 ease-in-out">
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    }

                    <div className="bg-white flex flex-col w-full lg:h-[571px] rounded-2xl border border-[#715E2E50] p-10 -mt-10 z-30 relative">

                        <Section section={section} />
                        {section !== 4 && <button onClick={() => setSection((p) => p === 4 ? 1 : p + 1)} className="absolute mr-10 md:mr-20 lg:mr-40 bottom-0 h-10 -mb-5 end-0 bg-[#D7B257] w-fit text-black px-8 rounded-lg font-semibold hover:bg-[#cfa63d] active:bg-[#ffbe18] transition-all duration-100 ease-in-out">
                            Continue
                        </button>}
                    </div>
                </div>
            </div>
        </div>
    </div>
}