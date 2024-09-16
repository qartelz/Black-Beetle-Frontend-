import AnalyticsDraw from "@/assets/svg/AnalyticsDraw";
import LaptopDraw from "@/assets/svg/LaptopDraw";

export default function SectionA() {
    return <div className="flex-1 flex flex-col md:flex-row justify-center items-center">
        <div className="flex-1 flex flex-col items-center">
            <div className="w-full lg:w-[370px] h-[142px] flex flex-col items-center">
                <span className="text-black w-full">{'I am a:'}</span>
                <LaptopDraw className="mt-2 w-[80%] lg:w-[370px] h-[142px]" />
            </div>
            <div className="text-black bg-[#715E2E28] w-fit px-4 py-1 rounded-lg mt-3 lg:mt-[70px]">Intraday Trader</div>
            <div className="text-[#00000056] w-fit px-4 py-1 rounded-lg mt-3 lg:mt-[39px]">Short Term Trader</div>
            <div className="text-[#00000056] w-fit px-4 py-1 rounded-lg mt-3 lg:mt-[39px]">Long Term Trader</div>
        </div>
        <div className="flex-1 flex flex-col items-center mt-10 md:mt-0">
            <div className="w-full lg:w-[370px] h-[142px] flex flex-col items-center">
                <span className="text-black w-full">{'I want to trade in:'}</span>
                <AnalyticsDraw className="mt-2 w-[80%] lg:w-[370px] h-[142px]" />
            </div>
            <center>
                <div className="text-black bg-[#715E2E28] w-fit px-4 py-1 rounded-lg mt-3 lg:mt-[70px]">Intraday Trader</div>
                <div className="text-[#00000056] w-fit px-4 py-1 rounded-lg mt-3 lg:mt-[39px]">Short Term Trader</div>
                <div className="text-[#00000056] w-fit px-4 py-1 rounded-lg mt-3 lg:mt-[39px]">Long Term Trader</div>
            </center>
        </div>
    </div>
}