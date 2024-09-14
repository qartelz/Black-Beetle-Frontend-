import Curve from "@/assets/svg/Curve";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    return <div className="w-full h-screen overflow-y-auto flex flex-col">
        {/* BACKGROUND IMAGE */}
        <div className="fixed w-full h-screen overflow-hidden pointer-events-none">
            <Curve />
        </div>

        <Navbar fixed />

        <div className="flex-1 pt-20 bg-[#D8D8D8]">
            {children}
        </div>

    </div>
}