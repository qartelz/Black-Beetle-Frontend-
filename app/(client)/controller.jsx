"use client";

import { useEffect } from "react";

export default function Controller() {
    useEffect(() => {
        document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=' + (1 / window.devicePixelRatio) + ', maximum-scale=1.0, user-scalable=0')
    }, [])
    return <></>
}