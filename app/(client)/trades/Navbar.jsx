"use client";

import Button from "@/components/button/page";
import Link from "next/link";
import ScreenerLogo from "@/assets/images/screener-logo.png";
import Image from "next/image";
import Menu from "@/assets/svg/Menu";
import { useState } from "react";
import { motion } from "framer-motion";

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
                <Link className="px-3 py-2 rounded-xl text-gray-300 hover:text-white" key={index} href={link.path}>
                    {link.title}
                </Link>
            ))}
        </>
    );
}

export default function Navbar({ fixed }) {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className={`w-full px-5 py-2 bg-gradient-to-t from-[#312302] to-[#86703B] ${fixed ? "fixed z-10" : ""}`}>
            <div className="flex justify-between items-center">
                <div className="h-[70px] relative w-[150px]">
                    <Image className="object-contain" src={ScreenerLogo} alt="Logo" layout="fill" />
                </div>
                {/* Desktop Links */}
                <div className="hidden lg:flex gap-10">
                    <NavbarLink />
                </div>
                {/* Mobile Menu Toggle */}
                <div className="flex items-center lg:hidden">
                    <Button onClick={() => setOpenMenu(!openMenu)}>
                        <Menu />
                    </Button>
                </div>
                {/* Logout Button */}
                <div className="hidden lg:flex">
                    <Button>Log Out</Button>
                </div>
            </div>

            {/* Mobile Menu with Animation */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={openMenu ? { height: "330px", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden lg:hidden bg-[#312302] mt-4 rounded-lg transition-all duration-100 ease-in-out shadow-lg"
            >
                <div className="flex flex-col items-start gap-4 px-5 py-5">
                    <NavbarLink />
                    <Button onClick={() => setOpenMenu(false)}>Log Out</Button>
                </div>
            </motion.div>
        </div>
    );
}