"use client";

import Button from "@/components/button/page";
import Link from "next/link";
import ScreenerLogo from "@/assets/images/screener-logo.png";
import Image from "next/image";
import Search from "@/assets/svg/Search";
import Menu from "@/assets/svg/Menu";
import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

function NavbarLink() {
    const pathName = usePathname();

    const links = [
        { title: "Home", path: "/test/home/page" },
        { title: "Watchlist", path: "/test/watchlist/page" },
        { title: "Alerts", path: "/test/alerts/page" },
        { title: "Screener", path: "/test/screener/page" },
    ];

    return (
        <>
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.path}
                    className={`px-3 py-2 rounded-xl ${pathName === link.path ? "font-bold text-white" : "text-gray-300 hover:text-white"}`}
                >
                    {link.title}
                </Link>
            ))}
        </>
    );
}

export default function Navbar({ fixed }) {
    const [openSearchBar, setOpenSearchBar] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div
            className={`w-full px-5 py-2 ${fixed
                ? "bg-gradient-to-t from-[#312302] to-[#86703BC9] fixed z-10"
                : "bg-[#D4D4D41A] border-r-4 border-l-4 border-b-4 rounded-b-lg border-[#FFFFFF0D]"
                }`}
        >
            <div className="flex justify-between items-center">
                {/* Logo Section */}
                <div className="h-[70px] relative w-[150px]">
                    <Image
                        className="object-contain"
                        src={ScreenerLogo}
                        alt="Logo"
                        layout="fill"
                    />
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex gap-10">
                    <NavbarLink />
                </div>

                {/* Search and Button Section */}
                <div className="hidden lg:flex items-center gap-4">
                    {!fixed && (
                        <div className="flex items-center bg-[#FFFFFF1C] border-[#00000012] rounded-lg px-4 py-2 border shadow-lg">
                            <Search className="text-white cursor-pointer lg:cursor-default " onClick={() => setOpenSearchBar(true)} />
                            <input
                                type="text"
                                placeholder="Search Stocks..."
                                className="ml-2 w-full outline-none bg-transparent text-white hidden lg:block"
                            />
                            {openSearchBar && (
                                <div onClick={() => setOpenSearchBar(false)} className="fixed cursor-pointer inset-0 w-full h-screen p-5 bg-white bg-opacity-40 z-50 backdrop-blur-sm">
                                    <input
                                        onClick={(e) => e.stopPropagation()}
                                        type="text"
                                        placeholder="Search Stocks..."
                                        className="ml-2 w-full outline-none bg-transparent bg-white px-3 py-2 rounded-lg text-black flex lg:none"
                                    />
                                </div>
                            )}
                        </div>
                    )}
                    <Button>Log Out</Button>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="lg:hidden">
                    <Button onClick={() => setOpenMenu(!openMenu)}>
                        <Menu />
                    </Button>
                </div>
            </div>

            {/* Mobile Menu with Animation */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={openMenu ? { height: "330px", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
                className="overflow-hidden lg:hidden bg-[#312302] mt-4 rounded-lg shadow-lg"
            >
                <div className="flex flex-col items-start gap-4 px-5 py-5">
                    <NavbarLink />
                    <Button onClick={() => setOpenMenu(false)}>Log Out</Button>
                </div>
            </motion.div>
        </div>
    );
}
