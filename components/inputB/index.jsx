"use client";

import { useState } from "react";

export default function Input({ className, ...props }) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div
            {...props}
            className={`rounded-lg p-[1px] ${!isFocused?"bg-gradient-to-r from-[#D7B257C9] to-[#715E2E47]":""} justify-center items-center flex overflow-visible ${className}`}
        >
            <input
                type="text"
                className="flex-1 text-white font-normal px-2 py-3 bg-[#191919] outline-none rounded-lg focus:outline-4 transition-all duration-200 focus:outline-offset-2 focus:outline-[#2DCAFF4D]"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </div>
    );
}