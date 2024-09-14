"use client";

import Search from "@/assets/svg/Search";
import Card from "./Card";

export default function PTC() {

    return <div className="flex-1 flex bg-[#D8D8D8]">
        <div className="flex-1 px-10 md:px-20 lg:px-40 py-10 flex flex-col relative">
            <span className="text-[#402D00C9] font-extrabold text-[30px] my-5">Beetle’s Trade Manager</span>
            <div className="w-full flex items-center gap-x-10">
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
                <button className="py-3 -mb-5 end-0 bg-[#D7B257] w-fit text-black px-8 rounded-lg font-semibold hover:bg-[#cfa63d] active:bg-[#ffbe18] transition-all duration-100 ease-in-out">
                    Continue
                </button>
            </div>

            <div className="mt-5 flex items-center bg-[#FFFFFF53] border-[#D7B257] text-black rounded-lg px-4 py-2 border shadow-lg">
                <Search className="text-white cursor-pointer lg:cursor-default " onClick={() => setOpenSearchBar(true)} />
                <input
                    type="text"
                    placeholder="Search Stocks..."
                    className="ml-2 w-full outline-none bg-transparent hidden lg:block py-1"
                />
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
                    Array(30).fill((_, i) => i).map((i) => {
                        return <Card key={i} />
                    })
                }
            </div>
        </div>
    </div>
}