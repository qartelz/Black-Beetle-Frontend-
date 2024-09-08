import GradientBorderDiv from "@/components/div";
import { useRef, useEffect, useState } from "react";

export default function OtpBox() {
    const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const [otp, setOtp] = useState(["", "", "", ""]);

    const handleChange = (e, index) => {
        const { value } = e.target;
        // Allow only numeric input
        if (/[^0-9]/.test(value)) {
            return;
        }

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to the next input if a value is entered
        if (value && index < 3) {
            inputs[index + 1].current.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            const newOtp = [...otp];
            // Clear the current input value
            newOtp[index] = "";
            setOtp(newOtp);

            // Schedule the focus shift after state update
            if (index > 0) {
                setTimeout(() => {
                    inputs[index - 1].current.focus();
                }, 0);
            }
        }
    };

    useEffect(() => {
        inputs[0].current.focus(); // Focus the first input on mount
    }, []);

    return (
        <div className="grid grid-cols-4 gap-x-4">
            {otp.map((digit, index) => (
                <div key={index}>
                    {digit ? (
                        <GradientBorderDiv
                            gradientColors={["#D7B257", "#715E2E"]}
                            className="rounded-xl text-xl lg:text-[68px] font-extrabold w-20 h-20 lg:w-[130px] lg:h-[108px] flex justify-center items-center"
                        >
                            <div className="w-full h-full text-center bg-black">
                                <input
                                    ref={inputs[index]}
                                    type="tel"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    className="w-full h-full text-center bg-transparent text-xl lg:text-[68px] font-extrabold outline-none border-none"
                                    aria-label={`OTP Digit ${index + 1}`}
                                />
                            </div>
                        </GradientBorderDiv>
                    ) : (
                        <div className="border rounded-xl text-[68px] font-extrabold border-[#9F9595] bg-[#454545] w-20 h-20 lg:w-[130px] lg:h-[108px] flex justify-center items-center">
                            <input
                                ref={inputs[index]}
                                type="tel"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="w-full h-full text-center bg-transparent text-xl lg:text-[68px] font-extrabold outline-none border-none"
                                aria-label={`OTP Digit ${index + 1}`}
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
