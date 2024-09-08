"use client";

import Menu from "@/components/menu/index";
import { useState } from "react";
import Button from "../button/page";

export default function CountryInput({ className, ...props }) {
    const [isFocused, setIsFocused] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({ name: "+91", icon: <span>🇮🇳</span> });

    return (
        <div
            {...props}
            className={`rounded-lg p-[1px] ${!isFocused ? "bg-gradient-to-r from-[#D7B257C9] to-[#715E2E47]" : ""} justify-center items-center flex overflow-visible ${className}`}
        >

            <div className={`flex px-2 items-center flex-1 bg-[#191919] outline-none rounded-lg transition-all duration-200 ${isFocused && "outline-[#2DCAFF4D] outline-4"}`}>
                <Menu
                    items={[
                        { name: "+91", icon: <span>🇮🇳</span> },
                        { name: "+1", icon: <span>🇺🇸</span> },
                        { name: "+44", icon: <span>🇬🇧</span> },
                        { name: "+81", icon: <span>🇯🇵</span> },
                        { name: "+86", icon: <span>🇨🇳</span> },
                        { name: "+82", icon: <span>🇰🇷</span> },
                        { name: "+49", icon: <span>🇩🇪</span> },
                        { name: "+33", icon: <span>🇫🇷</span> },
                        { name: "+39", icon: <span>🇮🇹</span> },
                        { name: "+7", icon: <span>🇷🇺</span> },
                        { name: "+86", icon: <span>🇨🇳</span> },
                        { name: "+82", icon: <span>🇰🇷</span> },
                        { name: "+49", icon: <span>🇩🇪</span> },
                        { name: "+33", icon: <span>🇫🇷</span> },
                        { name: "+39", icon: <span>🇮🇹</span> },
                        { name: "+7", icon: <span>🇷🇺</span> },
                        { name: "+86", icon: <span>🇨🇳</span> },
                        { name: "+82", icon: <span>🇰🇷</span> },
                        { name: "+49", icon: <span>🇩🇪</span> },
                        { name: "+33", icon: <span>🇫🇷</span> },
                        { name: "+39", icon: <span>🇮🇹</span> },
                        { name: "+7", icon: <span>🇷🇺</span> }
                    ]}
                    open={openMenu}
                    onClose={() => setOpenMenu(false)}
                    onItemSelect={(item) => {
                        setSelectedCountry(item);
                        setOpenMenu(false);
                    }}
                />
                <div onClick={() => { setOpenMenu(true) }} className="flex items-center gap-x-2 hover:bg-slate-800 p-1 rounded-lg cursor-pointer">
                    <div className="flex items-center justify-center">
                        {selectedCountry.icon}
                    </div>
                    <span className="">{selectedCountry.name}</span>
                </div>
                <input
                    type="text"
                    className="flex-1 text-white font-normal px-2 py-3 bg-transparent outline-none border-none"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            </div>

        </div>
    );
}