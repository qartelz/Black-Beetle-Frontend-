import Star from "@/assets/svg/Star";
import Image from "next/image";

export default function StockCard({ stockData }) {
    return (
        <div className="stock-card bg-gradient-stock-card rounded-[30px] border-[#C58F0A] p-4 shadow-lg border-4 flex items-center relative">
            <div className="stock-card__image-wrapper w-[100px] h-[100px] -ml-[50px] -mt-[100px] absolute p-5 bg-white rounded-[35px]">
                <Image src={stockData.image} layout="fill" alt={stockData.symbol} className="!static" />
            </div>
            <div className="w-[100px] -ml-[40px]"></div>
            <div className="flex-1 flex flex-col">
                <div className="flex-1 flex justify-end">
                    <Star />
                </div>
                <span className="text-white font-bold text-2xl">MSFT</span>
                <span className="text-white text-lg opacity-[79%]">Microsoft Corporation</span>
                <span className="text-white text-sm opacity-[79%]">30th August 2024</span>
                <div className="flex justify-between">
                    <span className="text-[#FFB500] text-xl">{stockData.strategy}</span>
                    <span className={`flex-1 text-end ${stockData.changePercentage > 0 ? "text-success" : "text-danger"} font-semibold text-lg`}>
                        {stockData.changePercentage > 0 && "+"}{stockData.changePercentage}%
                    </span>
                </div>
            </div>
        </div>
    );
}