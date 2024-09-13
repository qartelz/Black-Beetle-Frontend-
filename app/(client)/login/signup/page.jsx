"use client";

import Curve from "@/assets/svg/Curve";
import LogoGold from "@/assets/svg/LogoGold";
import CountryInput from "@/components/CountryInput";
import Input from "@/components/inputB";
import Image from "next/image";
import Link from "next/link";
import SandGlass from "@/assets/images/sand-glass.png";
import Modal from "@/components/modal";
import OtpBox from "../OtpBox";
import GradientBorderDiv from "@/components/div";
import CheckIn from "@/assets/svg/CheckIn";
import { useState } from "react";

export default function LoginPage() {
  const [openCodeModal, setOpenCodeModal] = useState(false);
  const [openCheckInModal, setOpenCheckInModal] = useState(false);

  return (
    <div className="w-full flex h-screen bg-gradient-to-b from-[#8E6D1C60] to-[#000000] rubik-font">
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

          <span className="lg:mt-[5vh] mt-10 text-3xl lg:text-[59.13px] ">
            Create new account
          </span>
          <span className="text-[22px] text-[#999999] mt-[15px]">
            Have an account?{" "}
            <Link href={"/login/signin"} className="text-[#D7B257]">
              {" "}
              <u>Login</u>{" "}
            </Link>
          </span>

          <div className="max-w-[495px] w-full lg:w-[495px] mt-10 flex flex-col">
            <div className="flex-1 flex gap-x-4 text-[14px] font-semibold text-[#999999] mt-[35px]">
              <div className="flex-1">
                First Name
                <div className="w-[6px]" />
                <Input />
              </div>
              <div className="flex-1">
                Last Name
                <div className="w-[6px]" />
                <Input />
              </div>
            </div>

            <div className="mt-5 text-[14px] font-semibold text-[#999999]">
              Phone
              <div className="w-[6px]" />
              <CountryInput />
            </div>

            <button
              onClick={() => {
                setOpenCodeModal(true);
              }}
              className="mt-5 text-[20px] font-semibold text-black rounded-lg bg-[#D7B257] hover:bg-[#D7B280] active:bg-[#D7B210] transition-all duration-200 py-[21px]"
            >
              Continue
            </button>
            <span className="mt-[25px] text-[12px] w-full text-center">
              By logging in, you agree to follow our{" "}
              <Link href={""} className="text-[#00BDDD]">
                <u>terms of service</u>
              </Link>
            </span>
          </div>
        </div>

        <div className="flex-1 relative hidden lg:flex">
          <div className="w-[250px] h-[300px] xl:w-[350px] xl:h-[400px] bottom-0 absolute right-0">
            <Image src={SandGlass} className="!static" />
          </div>
        </div>
      </div>

      {/* VERIFY MODAL */}
      <Modal open={openCodeModal} onClose={() => setOpenCodeModal(false)}>
        <GradientBorderDiv
          gradientColors={["#8E6D1C", "#000000"]}
          className={"w-[90%] lg:w-full flex"}
        >
          <div className="bg-gradient-to-b flex bg-black flex-col from-[#8E6D1C60] to-[#000000] px-[43px] rounded-xl lg:w-[900px]">
            <span className="text-3xl mt-5 lg:mt-[75px] lg:text-[59.13px]">
              Verify your account
            </span>
            <span className="text-[#999999] text-lg lg:text-[18px] mt-2 lg:mt-4">
              Enter the verification code sent to your phone
            </span>
            <div className="w-full flex justify-center mt-5 lg:mt-10">
              <OtpBox />
            </div>
            <span className="text-[#999999] text-[18px] mt-5 lg:mt-10">
              Haven’t received the code?{" "}
              <span className="text-[#D7B257]">
                <u>Send again</u>
              </span>
            </span>
            <center>
              <button
                onClick={() => {
                  setOpenCheckInModal(true);
                  setOpenCodeModal(false);
                }}
                className="w-full lg:w-[495px] text-[20px] my-[49px] font-semibold text-black rounded-lg bg-[#D7B257] hover:bg-[#D7B280] active:bg-[#D7B210] transition-all duration-200 py-[21px]"
              >
                Continue
              </button>
            </center>
          </div>
        </GradientBorderDiv>
      </Modal>

      {/* CHECK IN MODAL */}
      <Modal open={openCheckInModal} onClose={() => setOpenCheckInModal(false)}>
        <GradientBorderDiv
          gradientColors={["#8E6D1C", "#000000"]}
          className={"w-[90%] lg:w-full flex"}
        >
          <div className="bg-gradient-to-b flex bg-black flex-col from-[#8E6D1C60] to-[#000000] px-[43px] rounded-xl lg:w-[900px]">
            <div className="flex flex-col items-center">
              <div className="w-[123px] h-[123px] mt-[86px]">
                <CheckIn />
              </div>
              <span className="text text-3xl my-2 lg:my-[34px] lg:text-[57.33px] font-bold">
                Account Verified!
              </span>
              <span>Welcome to Black Beetle</span>
              <Link
                href={"/dashboard"}
                className="w-full mt-2 lg:mt-[73px] flex justify-center font-normal lg:w-[269px] text-[22px] my-[49px] text-black rounded-lg bg-[#D7B257] hover:bg-[#D7B280] active:bg-[#D7B210] transition-all duration-200 py-2"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        </GradientBorderDiv>
      </Modal>
    </div>
  );
}
