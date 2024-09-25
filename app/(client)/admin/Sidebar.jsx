"use client";

import Button from "@/components/button/page";
import {
  LucideBaggageClaim,
  LucideDiamond,
  LucideHome,
  LucideMenu,
  LucideShoppingBag,
  User,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navs = [
  { name: "Dashboard", icon: <LucideHome />, path: "/admin" },
  { name: "Users", icon: <User />, path: "/admin/users" },
  { name: "Premium", icon: <LucideDiamond />, path: "/admin/premium" },
  { name: "Orders", icon: <LucideBaggageClaim />, path: "/admin/orders" },
];

export default function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="w-full h-full flex transition-all duration-200">
      <div
        className={`flex-col bg-primary fixed lg:static h-screen z-30 ${
          !openSidebar && "hidden"
        } lg:flex`}
      >
        <div className="flex-1 bg-primary py-5 rounded-xl flex flex-col">
          <span className="text-2xl text-white font-bold px-4 pb-4">Admin</span>
          <div>
          <div className="px-4">
            {navs.map((nav, i) => (
              <Link
                onClick={() => setOpenSidebar(false)}
                key={i}
                href={nav.path}
              >
                <div className="flex mt-3 items-center justify-start text-white py-2 px-4 rounded-lg bg-secondary hover:bg-opacity-70 active:bg-opacity-50 transition-all duration-200 hover:text-blue-700 hover:text-secondary">
                  {nav.icon}
                  <span className="ml-3">{nav.name}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="px-4">
            <div className="flex mt-3 items-center justify-start text-white py-2 px-4 rounded-lg bg-secondary hover:bg-opacity-70 active:bg-opacity-50 transition-all duration-200 hover:text-blue-700 hover:text-secondary">
              <span className="ml-3">Logout</span>
            </div>
          </div>
        </div>
      </div>

      </div>

      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="z-20 bg-primary bg-opacity-80 w-full h-screen fixed backdrop-blur-[2px]"
        ></div>
      )}

      <div className="flex lg:hidden bg-primary w-full h-full items-center px-3 ">
        <Button
          onClick={() => setOpenSidebar(true)}
          className="w-fit h-fit bg-slate-800"
        >
          <LucideMenu />
        </Button>
        <span className="text-white text-2xl font-bold ml-4">Admin</span>
      </div>
    </div>
  );
}
