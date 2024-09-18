import AnalyticsDraw from "@/assets/svg/AnalyticsDraw";
import MonitorDraw from "@/assets/svg/MonitorDraw";
import SearchDraw from "@/assets/svg/SearchDraw";
import SettingsDraw from "@/assets/svg/SettingsDraw";

export default function SectionB() {
    return <div className="flex-1 flex flex-col px-5 lg:px-40 items-center justify-center relative">
        <span className="text-black w-full absolute top-0">{'I want to:'}</span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center w-full">
            <div className="flex flex-col items-center">
                <div className="w-40 h-40">
                    <SearchDraw />
                </div>
                <div className="text-black bg-[#715E2E28] w-fit px-4 py-1 rounded-lg mt-3 lg:mt-[70px] font-bold">Screen</div>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-40 h-40">
                    <MonitorDraw />
                </div>
                <div className="text-[#00000056] bg-[#715E2E2800] w-fit px-4 py-1 rounded-lg mt-3 lg:mt-[70px] font-semibold">Monitor</div>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-40 h-40">
                    <SettingsDraw />
                </div>
                <div className="text-[#00000056] bg-[#00000000] w-fit px-4 py-1 rounded-lg mt-3 lg:mt-[70px] font-semibold">Watch</div>
            </div>
        </div>
    </div>
}