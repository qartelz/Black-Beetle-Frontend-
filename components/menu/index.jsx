import React from "react";
import { motion } from "framer-motion";
import Button from "../button/page";

export default function Menu({
    open,
    items = [],
    onClose,
    className,
    onItemSelect,
    ...props
}) {
    return open ? (
        <div {...props} className={`${className} absolute trans`}>
            <div
                onClick={onClose}
                className={`trans w-full h-screen bg-black bg-opacity-0 fixed inset-0 z-30 cursor-pointer`}
            />
            <div className={`min-w-[200px] overflow-hidden rounded-lg absolute z-40 max-h-[180px] -mt-5 overflow-y-auto`}>
                {items.map((i, index) => {
                    return (
                        <motion.div
                            onClick={() => { onItemSelect && onItemSelect(i); }}
                            key={index}
                            initial={{
                                height: "0px",
                            }}
                            animate={{
                                height: "40px",
                                transition: {
                                    duration: 0.05,
                                    delay: index * 0.02,
                                },
                            }}
                            className="w-full overflow-hidden"
                        >
                            <Button
                                variant="contained"
                                className={`w-full h-full bg-slate-800 normal-case !rounded-none items-center`}
                            >
                                {i.component ? (
                                    i.component
                                ) : (
                                    <div className={`w-full flex justify-start items-center font-normal px-2 py-1`}>
                                        {
                                            i.icon && <motion.div animate={{
                                                scale: [0, 1],
                                                transition: {
                                                    duration: 0.1,
                                                    delay: index * 0.02,
                                                }
                                            }}>
                                                {i.icon}
                                            </motion.div>
                                        }
                                        {i.icon && <div className="w-2"></div>}
                                        {i.name}
                                    </div>
                                )}
                            </Button>
                        </motion.div>
                    );
                })}
            </div>
        </div >
    ) : (
        <></>
    );
}