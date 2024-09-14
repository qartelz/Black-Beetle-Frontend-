import Focus from "@/assets/svg/Focus";
import Radar from "@/assets/svg/Radar";

export default function Card({ title, type, className, ...props }) {
    return <div {...props} className={`flex-1 ${type === "nrz" ? "bg-[#7E7E7E]" : type === "rz" ? "bg-[#CF9F2928]" : "bg-white"} border justify-center items-center border-[#D7B257] flex flex-col p-6 rounded-2xl ${className} relative`}>
        {!type && (title ? <span className="text-[31px] font-bold  text-black absolute">{title}</span> : <Focus className="w-[52px] h-[52px] font-bold absolute" />)}
        <div className={`w-full h-full ${!type && "invisible"}`}>
            <div className={`flex justify-end ${type === "rz" ? "text-[#715E2E]" : ""}`}>
                L1
            </div>
            <div className="flex items-center">
                <Radar className={`${type === "rz" ? "fill-[#715E2E]" : "fill-white"} w-[51px] h-[51px]`} />
                <span className={`text-[31px] font-bold ml-[24px] ${type === "rz" ? "text-[#715E2E]" : ""}`}>
                    Banknifty
                </span>
            </div>
            <div className="flex justify-between items-center mt-5 text-[20px]">
                <div className={`${type === "rz" ? "text-[#06920B]" : "text-[#00FF09]"}`}>
                    ▲ 2.11%
                </div>
                <div className={`font-bold ${type === "rz" ? "text-[#715E2E]" : ""}`}>
                    {type === "rz" ? "Radar zone" : <del >Radar zone</del>}
                </div>
            </div>
        </div >
    </div >
}