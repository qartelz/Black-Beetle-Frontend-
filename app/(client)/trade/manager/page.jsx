"use client";

import Curve from "@/assets/svg/Curve";
import Navbar from "../Navbar";
import Search from "@/assets/svg/Search";
import Card from "./Card";
import { LucideX } from "lucide-react";
import CreatePopup from "./CreatePopup";
import { useState } from "react";

export default function PTC() {

    const [openCreatePopup, setOpenCreatePopup] = useState(false);

    return <div className="flex-1 flex bg-[#D8D8D8]">
        <div className="flex-1 px-10 md:px-20 lg:px-40 py-10 flex flex-col relative">
            <span className="text-[#402D00C9] font-extrabold text-[30px] my-5">Beetle’s Price Time Cycle Model</span>
            <div className="w-full flex justify-center mt-5">
                <div className="w-[70%] flex items-center gap-x-10">
                    <div className="flex-1 flex flex-col">
                        <span className="text-[15px] text-black font-semibold">{'I am a:'}</span>
                        <select name="flex-1" className="outline-none shadow-sm border border-[#D7B257] rounded-lg p-3 text-black">
                            <option value="IT">Select Trader Type</option>
                        </select>
                    </div>
                    <div className="flex-1 flex flex-col">
                        <span className="text-[15px] text-black font-semibold">{'I want to trade in:'}</span>
                        <select name="flex-1" className="outline-none shadow-sm border border-[#D7B257] rounded-lg p-3 text-black">
                            <option value="IT">Select market segment</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="bg-white p-5 mt-5">
                <div class="flex items-stretch">
                    <div class="w-[12px] flex-shrink-0 bg-[#D7B257]"></div>
                    <div className="w-3"></div>
                    <div class="flex-1">
                        <span className="text-[#715E2E] font-bold text-[18px]">Info:</span>
                        <p className="text-black text-[18px]">
                            This powerful tool allows you to screen stocks and indices by analyzing real-time market trends, allowing you to seize opportunities based on your trading style. A darker shade highlights potential opportunistic actions worth considering for that stock.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-10">
                {
                    Array(10).fill((_, i) => i).map((__, i) => {
                        if (i % 4 === 0) {
                            return <Card key={i} onClick={() => setOpenCreatePopup(true)} className={"cursor-pointer"} />
                        } else if (i % 4 === 1) {
                            return <Card key={i} title={"STOCK"} />
                        } else if (i % 4 === 2) {
                            return <Card type={"nrz"} key={i} />
                        } else {
                            return <Card type={"rz"} key={i} />
                        }
                    })
                }
            </div>

            <CreatePopup open={openCreatePopup} onClose={() => setOpenCreatePopup(false)} />
        </div>
    </div>
}