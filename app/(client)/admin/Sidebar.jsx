import { LucideBaggageClaim, LucideDiamond, LucideHome, LucideShoppingBag } from "lucide-react"
import Link from "next/link"

const navs = [
    { name: 'Dashboard', icon: <LucideHome />, path: '/admin' },
    { name: "Premium", icon: <LucideDiamond />, path: "/admin/premium" },
    { name: "Orders", icon: <LucideBaggageClaim />, path: "/admin/orders" }
]

export default function Sidebar() {
    return <div className="w-full h-full flex">
        <div className="flex flex-col bg-primary">
            <div className="flex-1 bg-primary py-5 rounded-xl flex flex-col">
                <span className="text-2xl text-white font-bold px-4 pb-4">Admin</span>
                <div className="px-4">
                    {navs.map((nav, i) => <Link key={i} href={nav.path}>
                        <div className="flex mt-3 items-center justify-start text-white py-2 px-4 rounded-lg bg-secondary hover:bg-opacity-70 active:bg-opacity-50 transition-all duration-200 hover:text-blue-700 hover:text-secondary">
                            {nav.icon}
                            <span className="ml-3">{nav.name}</span>
                        </div>
                    </Link>
                    )}
                </div>
            </div>
        </div>
    </div>
}