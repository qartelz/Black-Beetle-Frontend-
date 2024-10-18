"use client";
import axios from "axios";
import Curve from "@/assets/svg/Curve";
import LogoGold from "@/assets/svg/LogoGold";
import CountryInput from "@/components/CountryInput";
import Input from "@/components/inputB";
import Image from "next/image";
import Link from "next/link";
import SandGlass from "@/assets/images/sand-glass.png";
import { useEffect, useState } from "react";
import Modal from "@/components/modal";
import GradientBorderDiv from "@/components/div";
import OtpBox from "../signup/OtpBox";
import CheckIn from "@/assets/svg/CheckIn";
import { useSearchParams } from 'next/navigation';

export default function LoginPage() {

    const searchParams = useSearchParams();
    const otpp = searchParams.get('otp'); // Get OTP from query parameters
    console.log(otpp,"This is the otp")

    const [mobileNumber, setMobileNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [openCodeModal, setOpenCodeModal] = useState(false);
    const [openCheckInModal, setOpenCheckInModal] = useState(false);
    const [otpError, setOtpError] = useState("");
    const [hash, setHash] = useState("");
    console.log(hash) // Store hashed OTP
    const [otpExpiry, setOtpExpiry] = useState("");
    const [timeLeft, setTimeLeft] = useState(300);
   
    const handleContinueClick = async () => {
        try {
           
            const response = await axios.post("http://127.0.0.1:8000/api/login/", {
                mobile_number: mobileNumber, 
            });
            console.log(response.data,"testing the login otp ")

            if (response.status === 200) {
              
                const { hash, expiry } = response.data;
                setHash(hash);  
                setOtpExpiry(expiry);    
                setOpenCodeModal(true);
            }
        } catch (error) {
            console.error("Error sending OTP:", error);
          
        }
    };

    const handleVerifyOtp = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/verify-otp/", {
                mobileNumber,
                otp,
                hash,    
                expiry: otpExpiry,  // Send the expiry time
            });
            console.log(response.data)
            if (response.status === 200) {
                // If OTP verification is successful
                setOpenCodeModal(false);  // Close OTP modal
                setOpenCheckInModal(true); // Open success modal
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
            setOtpError("Invalid OTP or OTP has expired. Please try again."); // Set error message
        }
    };

    useEffect(() => {
        if (openCodeModal && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [openCodeModal, timeLeft]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
    
    };
    return <div className="w-full flex h-screen bg-gradient-to-b from-[#8E6D1C60] to-[#000000] rubik-font">
        {/* BACKGROUND IMAGE */}
        <div className="fixed w-full h-screen overflow-hidden pointer-events-none">
            <Curve />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 flex px-7 py-10 lg:py-[73px] lg:px-[95px]">
            <div className="flex-1 flex flex-col items-center lg:justify-start lg:items-start">
                <div className="w-[204px] h-[87px]">
                    <LogoGold />
                </div>

                <span className="lg:mt-[111px] mt-10 text-3xl lg:text-[59.13px] ">Welcome Back!</span>
                <span className="text-[22px] text-[#999999] mt-[15px]">Don’t have an account? <Link href={"/login/signup"} className="text-[#D7B257]"> <u>Signup</u> </Link></span>

                <div className="max-w-[495px] w-full lg:w-[495px] mt-10 flex flex-col">
                    <div className="mt-[28px] text-[14px] font-semibold text-[#999999]">
                        Phone
                        <div className="w-[6px]" />
                        <CountryInput value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                    </div>

                    <button onClick={handleContinueClick} className="mt-[36px] text-[20px] font-semibold text-black rounded-lg bg-[#D7B257] hover:bg-[#D7B280] active:bg-[#D7B210] transition-all duration-200 py-[21px]">
                        Continue
                    </button>
                    <span className="mt-[25px] text-[12px] w-full text-center">By logging in, you agree to follow our <Link href={""} className="text-[#00BDDD]"><u>terms of service</u></Link></span>
                </div>
            </div>

            <div className="flex-1 relative hidden lg:flex">
                <div className="w-[250px] h-[300px] xl:w-[407px] xl:h-[522px] bottom-0 absolute right-0">
                    <Image src={SandGlass} layout="fill" />
                </div>
            </div>
        </div>

        {/* VERIFY MODAL */}
        <Modal open={openCodeModal} onClose={() => setOpenCodeModal(false)} >
            <GradientBorderDiv gradientColors={['#8E6D1C', '#000000']} className={'w-[90%] lg:w-full flex'}>
                <div className="bg-gradient-to-b flex bg-black flex-col from-[#8E6D1C60] to-[#000000] px-[43px] rounded-xl lg:w-[900px]">
                    <span className="text-3xl mt-5 lg:mt-[75px] lg:text-[59.13px]">
                        Enter OTP
                    </span>
                    <span className="text-[#999999] text-lg lg:text-[22px] mt-2 lg:mt-[15px]">
                        Enter the verification code sent to your phone
                    </span>
                    <div className="w-full text-white flex justify-center mt-5 lg:mt-10">
                    <OtpBox value={otp} onChange={(e) => setOtp(e.target.value)} />
                    </div>


                    <center>
                        <button onClick={() => { handleVerifyOtp ()}} className="w-full lg:w-[495px] text-[20px] my-[49px] font-semibold text-black rounded-lg bg-[#D7B257] hover:bg-[#D7B280] active:bg-[#D7B210] transition-all duration-200 py-[21px]">
                            Verify OTP
                        </button>
                    </center>

                    <div className="text-[#999999] text-lg lg:text-[22px] ">
                            Time remaining: <span className="font-bold">{formatTime(timeLeft)}</span>
                        </div>


                    {otpError && <span className="text-red-500 text-sm ">{otpError}</span>}
                    <span className="text-[#999999] text-[22px] mt-5 mb-5">Haven’t received the code? <span className="text-[#D7B257]"><u>Send again</u></span></span>
                   
                </div>
            </GradientBorderDiv>
        </Modal>

        {/* CHECK IN MODAL */}
        <Modal open={openCheckInModal}  onClick={handleContinueClick} >
            <GradientBorderDiv gradientColors={['#8E6D1C', '#000000']} className={'w-[90%] lg:w-full flex'}>
                <div className="bg-gradient-to-b flex bg-black flex-col from-[#8E6D1C60] to-[#000000] px-[43px] rounded-xl lg:w-[900px]">
                    <div className="flex flex-col items-center">
                        <div className="w-[123px] h-[123px] mt-[86px]">
                            <CheckIn />
                        </div>
                        <span className="text text-3xl my-2 lg:my-[34px] lg:text-[57.33px] font-bold">Account Verified!</span>
                        <span>Welcome to Black Beetle</span>
                        <Link href={"/dashboard"} className="w-full mt-2 lg:mt-[73px] flex justify-center font-normal lg:w-[269px] text-[22px] my-[49px] text-black rounded-lg bg-[#D7B257] hover:bg-[#D7B280] active:bg-[#D7B210] transition-all duration-200 py-2">
                            Go to Dashboard
                        </Link>
                    </div>
                </div>
            </GradientBorderDiv>
        </Modal>
    </div>
}