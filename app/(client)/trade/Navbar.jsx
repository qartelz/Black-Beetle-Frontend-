"use client";

import Button from "@/components/button/page"
import Link from "next/link"
import ScreenerLogo from "@/assets/images/screener-logo.png"
import Image from "next/image"
import Menu from "@/assets/svg/Menu"
import { useState } from "react"
import { usePathname } from "next/navigation"

function NavbarLink() {

    const pathName = usePathname()

    const links = [
        { title: "Home", path: "/trade/home/" },
        { title: "PTC Screener", path: "/trade/ptc" },
        { title: "Trade Manager", path: "/trade/manager" },
        { title: "Trend Reversal Indicator", path: "/test/screener/page" },
    ]

    return <>
        {
            links.map((link, index) => {
                return <Link className={`px-3 py-2 rounded-xl ${(pathName === link.path || pathName + "/" === link.path) && "font-bold"}`} key={index} href={link.path}>{link.title}</Link>
            })
        }
    </>
}

export default function Navbar({ fixed }) {

    const [openMenu, setOpenMenu] = useState(false)

    return !fixed ? <div className="w-full px-5 py-2 bg-gradient-to-t from-[#312302] to-[#86703B]">
        <div className="flex-1 flex justify-between items-center">
            <div className="h-[70px]">
                <Image className="!static object-contain" src={ScreenerLogo} alt="Logo" layout="fill" />
            </div>
            <div className="lg:flex gap-10 hidden">
                <NavbarLink />
            </div>
            <div className="flex items-center relative">
                <Button className='hidden lg:flex'>Log Out</Button>
                <Button className='lg:hidden' onClick={() => setOpenMenu(!openMenu)}>
                    <Menu />
                    {
                        openMenu && <div className="w-full h-screen fixed inset-0 z-40">
                        </div>
                    }
                    {
                        openMenu && <div className="absolute mt-36">
                            <div className="flex flex-col bg-slate-800 rounded-lg z-50">
                                <NavbarLink />
                            </div>
                        </div>
                    }
                </Button>
            </div>
        </div>
    </div> : <>
        <div className="w-full px-5 py-2 bg-gradient-to-t from-[#312302] to-[#86703BC9] fixed z-10">
            <div className="flex-1 flex justify-between items-center">
                <div className="h-[70px]">
                    <Image className="!static object-contain" src={ScreenerLogo} alt="Logo" layout="fill" />
                </div>
                <div className="flex gap-10">
                    <NavbarLink />
                </div>
                <div>
                    <Button>Log Out</Button>
                </div>
            </div>
        </div>
        <div className="w-full px-5 py-2 bg-gradient-to-t from-[#312302] to-[#86703BC9] invisible">
            <div className="flex-1 flex justify-between items-center">
                <div className="h-[70px]">
                    <Image className="!static object-contain" src={ScreenerLogo} alt="Logo" layout="fill" />
                </div>
                <div className="flex gap-10">
                    <NavbarLink />
                </div>
                <div>
                    <Button>Log Out</Button>
                </div>
            </div>
        </div>
    </>
}