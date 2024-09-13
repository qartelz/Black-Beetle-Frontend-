import Button from "@/components/button/page";
import Link from "next/link";
import ScreenerLogo from "@/assets/images/screener-logo.png";
import Image from "next/image";
import Search from "@/assets/svg/Search";
import { useState } from "react";

function NavbarLink() {
    const links = [
        { title: "Home", path: "/test/home/page" },
        { title: "Watchlist", path: "/test/watchlist/page" },
        { title: "Alerts", path: "/test/alerts/page" },
        { title: "Screener", path: "/test/screener/page" },
    ];

    return (
        <>
            {links.map((link, index) => (
                <Link key={index} href={link.path}>
                    {link.title}
                </Link>
            ))}
        </>
    );
}

export default function Navbar({ fixed }) {

    const [openSearchBar, setOpenSearchBar] = useState(false);

    return (
        <div
            className={`w-full px-5 py-2 ${fixed
                ? "bg-gradient-to-t from-[#312302] to-[#86703BC9] fixed z-10"
                : "bg-[#D4D4D41A] border-r-4 border-l-4 border-b-4 rounded-b-lg border-[#FFFFFF0D]"
                }`}
        >
            <div className="flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex-1">
                    <div className="relative h-[70px] w-[150px] ">
                        <Image
                            className="!static object-contain"
                            src={ScreenerLogo}
                            alt="Logo"
                            layout="fill"
                        />
                    </div>
                </div>
                {/* Links Section */}
                <div className="flex-1  justify-center gap-10 hidden lg:flex">
                    <NavbarLink />
                </div>
                {/* Search and Button Section */}
                <div className="flex items-center justify-end gap-4 flex-1">
                    {!fixed && (
                        <div className="flex items-center bg-[#FFFFFF1C] border-[#00000012] rounded-lg px-4 py-2 border shadow-lg">
                            <Search className="text-white cursor-pointer lg:cursor-default " onClick={() => setOpenSearchBar(true)}/>
                            <input
                                type="text"
                                placeholder="Search Stocks..."
                                className="ml-2 w-full outline-none bg-transparent text-white hidden lg:block"
                            />
                            {openSearchBar && <div onClick={() => setOpenSearchBar(false)} className="fixed cursor-pointer inset-0 w-full h-screen p-5 bg-white bg-opacity-40 z-50 backdrop-blur-sm">
                                <input
                                    onClick={(e) => e.stopPropagation()}
                                    type="text"
                                    placeholder="Search Stocks..."
                                    className="ml-2 w-full outline-none bg-transparent bg-white px-3 py-2 rounded-lg text-black flex lg:none"
                                />
                            </div>}
                        </div>
                    )}
                    <Button>Log Out</Button>
                </div>
            </div>
        </div>
    );
}