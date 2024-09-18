import AnalyticsDraw from "@/assets/svg/AnalyticsDraw";
import LaptopDraw from "@/assets/svg/LaptopDraw";
import Button from "@/components/button/page";

export default function SectionC() {
    return <div className="flex-1 flex flex-col px-5 lg:px-40">
        <span className="text-[50px] font-bold text-black">Almost there</span>
        <span className="text-[15px] text-black font-semibold">Please Confirm your Selections</span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div className="flex flex-col">
                <span className="text-[15px] text-black font-semibold">{'I am a :'}</span>
                <select name="flex-1" className="outline-none shadow-sm border border-[#D7B257] rounded-lg px-3 py-2 text-black">
                    <option value="IT">Intraday Trader</option>
                </select>
            </div>
            <div className="flex flex-col">
                <span className="text-[15px] text-black font-semibold">{'I want to trade in :'}</span>
                <select name="flex-1" className="outline-none shadow-sm border border-[#D7B257] rounded-lg px-3 py-2 text-black">
                    <option value="IT">Stocks & Indices</option>
                </select>
            </div>
            <div className="flex flex-col">
                <span className="text-[15px] text-black font-semibold">{'I want to:'}</span>
                <select name="flex-1" className="outline-none shadow-sm border border-[#D7B257] rounded-lg px-3 py-2 text-black">
                    <option value="IT">Screen potential opportunities</option>
                </select>
            </div>
            <div className="flex flex-col justify-center pt-5">
                <button className="mr-10 md:mr-20 lg:mr-40 bottom-0 py-2 mt-1 end-0 bg-[#D7B257] w-fit text-black px-8 rounded-lg font-semibold hover:bg-[#cfa63d] active:bg-[#ffbe18] transition-all duration-100 ease-in-out">
                    Start
                </button>
            </div>
        </div>

    </div>
}