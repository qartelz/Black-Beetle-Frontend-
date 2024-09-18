import Focus from "@/assets/svg/Focus";
import Loop from "@/assets/svg/Loop";
import Radar from "@/assets/svg/Radar";

export default function Card({ title, type, className, ...props }) {
    return <div {...props} className={`flex-1 ${type === "uh" ? "bg-[#7E7E7E]" : type === "h" ? "bg-[#000000]" : "bg-white"} border justify-center items-center border-[#D7B257] flex flex-col p-6 rounded-2xl ${className} relative`}>
        {!type && (title ? <span className="text-[31px] font-bold text-black absolute">{title}</span> : <Focus className="w-[52px] h-[52px] font-bold absolute" />)}
        <div className={`w-full h-full ${!type && "invisible"}`}>
            <div className={`flex justify-end ${type === "h" ? "text-[#ffffff]" : "text-[#00000053]"}`}>
                L1
            </div>
            <div className="flex items-center">
                <Loop className={`${type === "h" ? "fill-[#ffffff] stroke-white" : "stroke-[#00000053] fill-[#00000053]"} w-[51px] h-[51px]`} />
                <span className={`text-[31px] font-bold ml-[24px] ${type === "h" ? "text-[#000000]" : "text-[#00000053]"}`}>
                    {title}
                </span>
            </div>
            <div className="flex justify-between items-center mt-5 text-[20px]">
                <div className={`${type === "h" ? "text-[#00FF09]" : "text-[#037B07]"}`}>
                    ▲ 2.11%
                </div>
                <div className={`font-bold ${type === "h" ? "text-[#ffffff]" : "text-[#00000053]"}`}>
                    {type === "h" ? "Hinge Zone" : <del >Hinge Zone</del>}
                </div>
            </div>
        </div >
    </div >
}