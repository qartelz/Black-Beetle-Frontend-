import { LucideArrowLeft, LucideArrowRight, LucideChartLine, LucideDiamond, LucidePackage, LucidePersonStanding, LucideTrendingDown, LucideTrendingUp } from "lucide-react";
import { tableData } from "../data";
import Button from "@/components/button/page";

export default function Page() {
    return <div className="w-full px-5 py-5 flex flex-col">
        <span className="text-2xl font-bold text-white">Premium</span>
        <div className="grid grid-cols-3 gap-5 mt-4">
            <div className="bg-primary text-white p-5 rounded-lg flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full border border-[#D7B257] text-[#D7B257] flex items-center justify-center">
                        <LucideTrendingUp size={40} />
                    </div>
                    <span className="text-3xl font-bold mt-2">100</span>
                    <span>New premium users</span>
                </div>
            </div>
            <div className="bg-primary text-white p-5 rounded-lg flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full border border-[#D7B257] text-[#D7B257] flex items-center justify-center">
                        <LucideTrendingDown size={40} />
                    </div>
                    <span className="text-3xl font-bold mt-2">12</span>
                    <span>Users declined premium</span>
                </div>
            </div>
            <div className="bg-primary text-white p-5 rounded-lg flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full border border-[#D7B257] text-[#D7B257] flex items-center justify-center">
                        <LucideDiamond size={40} />
                    </div>
                    <span className="text-3xl font-bold mt-2">100</span>
                    <span>Total Premium users</span>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col bg-primary p-5 rounded-lg mt-5">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="text-left p-3 pt-0">Stock/Index</th>
                        <th className="text-left p-3 pt-0">Segment</th>
                        <th className="text-left p-3 pt-0">Role</th>
                        <th className="text-left p-3 pt-0">Expiry</th>
                        <th className="text-left p-3 pt-0">Buy</th>
                        <th className="text-left p-3 pt-0">Target</th>
                        <th className="text-left p-3 pt-0">SL</th>
                        <th className="text-left p-3 pt-0">Type of trade</th>
                        <th className="text-left p-3 pt-0">Square off</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.slice(0, 11).map((data, i) => <tr className={`${i % 2 === 0 ? "bg-secondary" : ""} rounded-lg`} key={i}>
                        <td className="p-3 rounded-l-lg">{data.stockIndex}</td>
                        <td className="p-3">{data.segment}</td>
                        <td className="p-3">{data.role}</td>
                        <td className="p-3">{data.expiry}</td>
                        <td className="p-3">{data.buy}</td>
                        <td className="p-3">{data.target}</td>
                        <td className="p-3">{data.stopLoss}</td>
                        <td className="p-3">{data.tradeType}</td>
                        <td className="p-3 rounded-r-lg">{data.squareOff}</td>
                    </tr>
                    )}
                </tbody>
            </table>
            <div className="w-full border border-gray-600 opacity-50 px-4 mt-5"></div>
            <div className="w-full flex items-center justify-between mt-5 px-2">
                <div className="flex items-center text-gray-500">
                    Page 3/10
                </div>
                <div className="flex items-center">
                    <Button className="bg-transparent hover:bg-slate-800 !bg-opacity-40">
                        <LucideArrowLeft size={20} />
                    </Button>
                    <Button className="bg-slate-800 hover:!bg-slate-800 active:!bg-slate-800">
                        1
                    </Button>
                    {
                        [ 2, 3, 4, 5].map((i) => <Button key={i} className="bg-transparent hover:bg-slate-800 !bg-opacity-40">
                            {i}
                        </Button>)
                    }
                    <Button className="bg-transparent hover:bg-slate-800 !bg-opacity-40">
                        <LucideArrowRight size={20} />
                    </Button>
                </div>
            </div>
        </div>
    </div>
}