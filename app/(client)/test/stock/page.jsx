"use client";

import Home from "@/assets/svg/Home";
import Navbar from "./Navbar";
import ArrowRight from "@/assets/svg/ArrowRight";
import Ms from "@/assets/images/test_ms.png";
import Image from "next/image";
import Circle from "@/components/circle/page";
import Graph from "./Graph";
import Curve from "@/assets/svg/Curve"
import Link from "next/link";
import Button from "@/components/button/page";
import { useState } from "react";
import Session from "./sections/Section";

const navs = ['Summary', 'Analysis', 'History', 'News', 'Prediction v/s Actual Analysis']

export default function exportStock() {

    const [selectedSection, setSelectedSection] = useState(navs[0])

    return <div className="w-full h-screen overflow-y-auto flex flex-col bg-[#1F1D1A]">

        {/* NAV BAR */}
        <div className="">
            <Navbar />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 flex flex-col">
            <div className="bg-[#1F1D1A] px-60 py-20">
                <div className="fixed w-full h-screen overflow-hidden pointer-events-none top-0 pt-20">
                    <Curve />
                </div>
                <div className="w-full flex items-center">
                    <Home />
                    <ArrowRight className="ml-3" />
                    <span className="text-[#FFFFFFB2] ml-3">BTST</span>
                    <ArrowRight className="ml-3" />
                    <span className="text-[#FFFFFFB2] ml-3">Microsoft</span>
                </div>
                <div className="flex justify-between items-center mt-5">
                    <div className="flex-1 relative flex items-center">
                        <div className="bg-white rounded-xl items-center justify-center w-fit p-4">
                            <div className="w-[60px] h-[60px]">
                                <Image src={Ms} alt="logo" layout="fill" className="!sticky" />
                            </div>
                        </div>
                        <div className="flex flex-col ml-4">
                            <span className="text-[#D7B257C9] font-extrabold text-3xl">MSFT</span>
                            <span className="flex items-center">
                                <Circle radius={10} color={'#1DF81F'} />
                                <span className="ml-2">Open</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-between items-center">
                        <div className="flex-1 flex flex-col items-center">
                            <span className="font-extrabold text-white text-2xl">BTST</span>
                            <span className="text-xs text-[#FFFFFFA1]">Type</span>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                            <span className="font-extrabold text-white text-2xl">Equity</span>
                            <span className="text-xs text-[#FFFFFFA1]">Asset</span>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                            <span className="font-extrabold text-white text-2xl">30th August</span>
                            <span className="text-xs text-[#FFFFFFA1]">Trigger Date</span>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-end items-center flex-col">
                        <div className="w-3/4">
                            <Graph />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col bg-white px-10 xl:px-60">
                <div className="flex flex-col flex-1 bg-[#2F2F2F] -mt-20 border-t-2 border-l-2 border-r-2 border-[#D7B257C9] rounded-t-xl z-10">
                    <div className="flex my-4 gap-x-5 px-10">
                        {
                            navs.map((nav, i) => {
                                if (nav === selectedSection) return <button className="bg-gradient-to-r from-[#C5C5C521] to-[#5F5F5F21] px-3 py-2 rounded-lg hover:to-[#5F5F5F51] transition-all duration-200 ease-in-out">{nav}</button>
                                else return <button onClick={() => setSelectedSection(nav)} className="px-3 py-2 rounded-lg hover:bg-[#5F5F5F51] transition-all duration-200 ease-in-out">{nav}</button>
                            })
                        }
                    </div>
                    <div className="w-full h-[1px] bg-[#D7B257C9]"></div>
                    <div className="min-h-[70vh] flex flex-col px-10 py-5 overflow-y-auto">
                        <Session name={selectedSection} />
                    </div>
                </div>
            </div>
        </div>

    </div>
}