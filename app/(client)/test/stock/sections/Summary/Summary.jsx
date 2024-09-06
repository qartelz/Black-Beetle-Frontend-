import { Select } from "@/components/select/page";
import Graph from "./Graph";
import { useState } from "react";

export default function SummarySection() {

    const [openCompare, setOpenCompare] = useState(false);

    return <div className="text-xl flex flex-col">
        <span className="text-[#D7B257C9] font-extrabold">What's the Game Plan?</span>
        <p>
            Beetle Screener has identified a great opportunity with Microsoft!
            Here’s what we’re looking at:
        </p>
        <div className="pl-10">
            <ul className="list-disc list-marker-yellow">
                <li>
                    <span className="text-[#D7B257C9]">Buy:</span> This is the suggested entry price to get in on the action.
                </li>
                <li>
                    <span className="text-[#D7B257C9]">Target Price:</span> If the trade goes as planned, this is where we aim to cash out.
                </li>
                <li>
                    <span className="text-[#D7B257C9]">Stop-Loss:</span> Just in case the market takes a turn, this is the safety net to minimize any losses.
                </li>
            </ul>
        </div>
        <div className="w-full mt-5 flex justify-between">
            <div>
                <span className="text-[#D7B257C9] font-extrabold">Metrics</span>
            </div>
            <Select onSelect={(i) => setOpenCompare(i === "Compare")} options={['Current', 'Compare']} className={'text-sm w-32'} />
        </div>

        <div className="flex w-full gap-x-5 justify-between rounded-lg mt-5 text-white">
            {/* Buy Section */}
            <div className="flex flex-1 flex-col justify-center bg-[#393939] p-5 rounded">
                <div className="flex items-center">
                    <div className="h-6 w-2 rounded-full bg-gradient-to-r from-[#D7B257C9] to-[#715E2E47]"></div>
                    <div className="text-sm ml-2">Buy:&nbsp;&nbsp;359.00</div>
                </div>
                <div className="text-blue-400 text-sm mt-2">-3.05 -0.84%</div>
            </div>
            {/* TARGET Section */}
            <div className="flex flex-1 flex-col justify-center bg-[#393939] p-5 rounded">
                <div className="flex items-center">
                    <div className="h-6 w-2 rounded-full bg-gradient-to-r from-[#D7B257C9] to-[#715E2E47]"></div>
                    <div className="text-sm ml-2">Target:&nbsp;&nbsp;370.00</div>
                </div>
                <div className="text-success text-sm mt-2">+10.10 +2.81%</div>
            </div>
            {/* STOP LOSS Section */}
            <div className="flex flex-1 flex-col justify-center bg-[#393939] p-5 rounded">
                <div className="flex items-center">
                    <div className="h-6 w-2 rounded-full bg-gradient-to-r from-[#D7B257C9] to-[#715E2E47]"></div>
                    <div className="text-sm ml-2">Buy:&nbsp;&nbsp;359.00</div>
                </div>
                <div className="text-danger text-sm mt-2">-4.90 -1.36%</div>
            </div>

        </div>

        {openCompare && <div className="animate-expand-y flex w-full gap-x-5 justify-between rounded-lg my-5 text-white">
            {/* Buy Section */}
            <div className="flex flex-1 flex-col justify-center bg-[#2B2A2A] p-5 rounded">
                <div className="flex items-center">
                    <div className="h-6 w-2 rounded-full bg-gradient-to-r from-[#D7B257C9] to-[#715E2E47]"></div>
                    <div className="text-sm ml-2">Buy:&nbsp;&nbsp;359.00</div>
                </div>
                <div className="text-blue-400 text-sm mt-2">-3.05 -0.84%</div>
            </div>
            {/* TARGET Section */}
            <div className="flex flex-1 flex-col justify-center bg-[#2B2A2A] p-5 rounded">
                <div className="flex items-center">
                    <div className="h-6 w-2 rounded-full bg-gradient-to-r from-[#D7B257C9] to-[#715E2E47]"></div>
                    <div className="text-sm ml-2">Target:&nbsp;&nbsp;370.00</div>
                </div>
                <div className="text-success text-sm mt-2">+10.10 +2.81%</div>
            </div>
            {/* STOP LOSS Section */}
            <div className="flex flex-1 flex-col justify-center bg-[#2B2A2A] p-5 rounded">
                <div className="flex items-center">
                    <div className="h-6 w-2 rounded-full bg-gradient-to-r from-[#D7B257C9] to-[#715E2E47]"></div>
                    <div className="text-sm ml-2">Buy:&nbsp;&nbsp;359.00</div>
                </div>
                <div className="text-danger text-sm mt-2">-4.90 -1.36%</div>
            </div>

        </div>}

        <span className="text-[#D7B257C9] font-extrabold">Performance:</span>
        <Graph />

    </div>
}