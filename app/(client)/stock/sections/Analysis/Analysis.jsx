import Circle from "@/components/circle/page";
import Graph from "./Graph";
import { useState } from "react";
import { sampleStockData } from "../Summary/data";



export default function AnalysisSection() {

    const [sampleStockData, setSampleStockData] = useState({});

    useEffect(() => {
        for (let i = 5; i <= 70; i++) {
            const date = `2023-09-${i < 10 ? '0' + i : i}`;
            const open = Math.floor(Math.random() * 70) + 20;
            const high = open + Math.floor(Math.random() * 5);
            const low = open - Math.floor(Math.random() * 5);
            const close = Math.floor(Math.random() * (high - low)) + low;
            sampleStockData[date] = {
                "1. open": open,
                "2. high": high,
                "3. low": low,
                "4. close": close
            };
        }
        setSampleStockData(sampleStockData);
    })

    const datasets = [{
        label: "Bullish",
        data: Object.keys(sampleStockData).slice(0, 30).map((key) => sampleStockData[key]["2. high"]),
        fill: false,
        borderColor: "#34C759",
        pointRadius: 1,
        borderWidth: 2,
    },
    {
        label: "Bearish",
        data: Object.keys(sampleStockData).slice(0, 30).map((key) => sampleStockData[key]["3. low"]),
        fill: false,
        borderColor: "#F63C6B",
        pointRadius: 1,
        borderWidth: 2,
    }]
    const [dataset, setDataset] = useState(datasets[0]);

    return <div className="text-xl flex flex-col">
        <span className="text-[#D7B257C9] font-extrabold">Beetle has detected</span>
        <Graph dataset={dataset} setDataset={setDataset} />
        <div className="w-full lg:w-1/3 flex mt-5">
            <div className="flex-1 flex flex-col items-center">
                <div className={`flex items-center ${dataset.label !== "Bullish" && "invisible"}`}>
                    <Circle color="#34C759" radius={10} />
                    <span className="ml-1">Active</span>
                </div>
                <div className="w-full mt-2 text-center cursor-pointer hover:bg-green-400 hover:bg-opacity-10 flex-col py-2 bg-gradient-to-b from-[#09876C1A] to-[#0FEDBE40] border-b-4 border-[#0FEDBE]" onClick={() => setDataset(datasets[0])}>
                    Bullish
                </div>
            </div>
            <div className="flex-1 flex flex-col items-center">
                <div className={`flex items-center ${dataset.label !== "Bearish" && "invisible"}`}>
                    <Circle color="#34C759" radius={10} />
                    <span className="ml-1">Active</span>
                </div>
                <div className="w-full mt-2 text-center py-2 border-b-4 border-[#999999] cursor-pointer hover:bg-blue-600 hover:bg-opacity-5 rounded-t-lg" onClick={() => setDataset(datasets[1])}>
                    Bearish
                </div>
            </div>
        </div>
        <p className="text-xl mt-5">
            {`Why the market is bullish`} <br />
            Line 1 <br />
            Line 2 <br />
            Line 3 <br />
            Line 4 <br />
        </p>
    </div>
}