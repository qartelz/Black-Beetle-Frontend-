import Button from "@/components/button/page"
import Link from "next/link"
import ScreenerLogo from "@/assets/images/screener-logo.png"
import Image from "next/image"

function NavbarLink() {

    const links = [
        { title: "Home", path: "/test/home/page" },
        { title: "Watchlist", path: "/test/watchlist/page" },
        { title: "Alerts", path: "/test/alerts/page" },
        { title: "Screener", path: "/test/screener/page" },
    ]

    return <>
        {
            links.map((link, index) => {
                return <Link key={index} href={link.path}>{link.title}</Link>
            })
        }
    </>
}

export default function Navbar({ fixed }) {
    return !fixed ? <div className="w-full px-5 py-2 bg-gradient-to-t from-[#312302] to-[#86703B]">
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