import Search from "@/assets/svg/Search";
import { LucideX } from "lucide-react";
import { useState } from "react";

export default function CreatePopup({ open, onClose }) {

    const [selectedTab, setSelectedTab] = useState(0);

    return open ? <div className="w-full h-screen fixed inset-0 backdrop-blur-sm flex items-center justify-center" onClick={onClose}>
        <div className="z-50 bg-white border border-[#D7B257] p-5 rounded-xl w-[583px] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-end">
                <LucideX onClick={onClose} className="text-[#00000052] font-extrabold w-4 h-4 cursor-pointer hover:text-[#00000080]" />
            </div>
            <div className="w-full flex justify-center">
                <div className="w-[70%] flex items-center gap-x-4">
                    <button onClick={() => setSelectedTab(0)} className={`flex-1 ${selectedTab === 0 ? 'bg-[#A17509]' : 'text-black'} hover:bg-[#c89a27] active:bg-[#ffc124] rounded-3xl py-3 transition-all divide-red-100`}>
                        Stocks
                    </button>
                    <button onClick={() => setSelectedTab(1)} className={`flex-1 ${selectedTab === 1 ? 'bg-[#A17509]' : 'text-black'} hover:bg-[#c89a27] active:bg-[#ffc124] rounded-3xl py-3 transition-all divide-red-100`}>
                        Stocks
                    </button>
                </div>
            </div>
            <div className="mt-5 flex items-center bg-[#FFFFFF53] border-[#D7B257] text-black rounded-lg px-4 py-2 border shadow-lg">
                <Search className="text-white cursor-pointer lg:cursor-default " onClick={() => setOpenSearchBar(true)} />
                <input
                    type="text"
                    placeholder="Search Stocks..."
                    className="ml-2 w-full outline-none bg-transparent hidden lg:block py-1"
                />
            </div>
            <div className="w-full flex flex-col items-center justify-center">
                {
                    selectedTab === 0 ? <div className="w-full flex flex-col items-center h-[205px] overflow-y-auto py-4]">
                        {
                            Array(10).fill((_, i) => i).map((__, i) => <span className="text-[#A17509] text-[30px] font-bold">
                                Stock {i + 1}
                            </span>)
                        }
                    </div> : <div className="w-full flex flex-col items-center h-[205px] overflow-y-auto py-4]">
                        {
                            Array(10).fill((_, i) => i).map((__, i) => <span className="text-[#A17509] text-[30px] font-bold">
                                Index {i + 1}
                            </span>)
                        }
                    </div>
                }
                <button onClick={() => setSelectedTab(1)} className={`flex-1 bg-[#D7B257] mt-4 hover:bg-[#c89a27] active:bg-[#ffc124] text-black rounded-lg px-6 py-3 transition-all divide-red-100`}>
                    + Add
                </button>
            </div>
        </div>
    </div> : <></>
}