import Focus from "@/assets/svg/Focus";

export default function Card() {
    return <div className="flex-1 bg-white border border-[#D7B257] flex flex-col p-5 rounded-2xl">
        <div className="flex justify-between">
            <span className="text-[15px] font-light text-[#2B2020]">L1</span>
            <Focus />
        </div>
        <div className="mt-2 font-bold text-[31px] text-black">
            Nifty
        </div>
        <div className="flex justify-between text-[20px]">
            <span className="text-[#8C8C8C]">Affluent</span>
            <span className="text-[#46B449]">▲ 2.11%</span>
        </div>
    </div>
}