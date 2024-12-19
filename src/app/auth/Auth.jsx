"use client";

import Image from "next/image";
import AuthImage from "../../../public/images/auth-image.png";
import AppleSvg from "../../../public/icons/apple.svg";
import GoogleSvg from "../../../public/icons/google.svg";
import BackSvg from "../../../public/icons/back.svg";
import { useState } from "react";
import clsx from "clsx";

export default function Auth() {
  const [isOpenCreateProfile, setIsOpenCreateProfile] = useState(false);
  const [emailInputValue, setEmailInputValue] = useState("");

  return (
    <div
      className={clsx(
        "fixed h-screen w-screen bg-white z-10 flex flex-col items-center top-0 overflow-x-hidden overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      )}
    >
      <Image
        src={AuthImage}
        width={0}
        height={0}
        alt="Welcome Back"
        className={clsx(
          "desktop-big:w-[500px] desktop-big:h-[700px] mobile:w-screen mobile:h-auto",
          isOpenCreateProfile ? "hidden" : "block"
        )}
      />
      <div
        className={clsx(
          "w-screen flex-col items-center absolute z-20 gap-5 px-4 pb-4 h-max top-[355px] pt-16 auth-login",
          isOpenCreateProfile ? "hidden" : "flex"
        )}
      >
        <span className="flex items-center flex-col mt-auto">
          <h1 className="font-semibold text-3xl text-center">Welcome back!</h1>
          <h3 className="text-xl text-center text-[#848282]">
            Login to continue.
          </h3>
        </span>
        <form className="flex flex-col gap-2.5 w-full">
          <label htmlFor="log-email" className="font-semibold">
            Email
          </label>
          <input
            autoFocus
            value={emailInputValue}
            onChange={(e) => setEmailInputValue(e.target.value)}
            id="log-email"
            className="border-[#D2D2D2] border rounded-[20px] p-4 outline-none text-[#848282]"
            placeholder="Enter your email address"
          />
          <button className="rounded-[20px] p-4 bg-main-blue text-center text-white font-medium">
            Login
          </button>
        </form>
        <div className="flex flex-col gap-2.5 w-full">
          <div className="flex justify-between gap-2.5 h-[21px] items-center">
            <div className="bg-[#D2D2D2] h-[1px] w-[30%]"></div>
            <span className="text-[#D2D2D2] text-sm">Or Login with</span>
            <div className="bg-[#D2D2D2] h-[1px] w-[30%]"></div>
          </div>
          <button className="border border-[#D2D2D2] py-4 text-dark-blue font-medium text-sm flex items-center justify-center gap-2.5 rounded-[20px]">
            <AppleSvg /> Log in to Apple
          </button>
          <button className="border border-[#D2D2D2] py-4 text-dark-blue font-medium text-sm flex items-center justify-center gap-2.5 rounded-[20px]">
            <GoogleSvg /> Log in to Google
          </button>
        </div>
        <button
          onClick={() => (setIsOpenCreateProfile(true), setEmailInputValue(""))}
          className="font-medium text-dark-blue"
        >
          Don’t have an account?{" "}
          <span className="font-semibold text-main-blue">Create</span>
        </button>
      </div>
      <div
        className={clsx(
          "h-full w-screen fixed  transition-all flex flex-col duration-700 bg-white z-30 pb-10 safe-top overflow-hidden px-2",
          isOpenCreateProfile ? "left-0" : "left-[2000px]"
        )}
      >
        <button
          className="p-2 mt-5"
          onClick={() => setIsOpenCreateProfile(false)}
        >
          <BackSvg />
        </button>
        <div className="p-2 flex flex-col w-full items-center mt-4 gap-2.5">
          <h2 className="font-semibold text-xl">Create an account</h2>
          <h4 className="text-sm opacity-40 text-center">
            Fill your information below or register with your social account.
          </h4>
          <form className="flex flex-col justify-start gap-2.5 w-full">
            <label
              htmlFor="create-email"
              className="text-sm font-semibold flex"
            >
              Email<p className="text-red-600">*</p>
            </label>
            <input
              value={emailInputValue}
              onChange={(e) => setEmailInputValue(e.target.value)}
              id="create-email"
              className="border border-[#D2D2D2] rounded-[20px] p-4 w-full outline-none text-[#848282]"
              placeholder="Enter your email address"
            />
          </form>
          <div className="flex flex-col gap-2.5 w-full">
            <div className="flex justify-between gap-2.5 h-[21px] items-center">
              <div className="bg-[#D2D2D2] h-[1px] w-[30%]"></div>
              <span className="text-[#D2D2D2] text-sm">Or Login with</span>
              <div className="bg-[#D2D2D2] h-[1px] w-[30%]"></div>
            </div>
            <button className="border border-[#D2D2D2] py-4 text-dark-blue font-medium text-sm flex items-center justify-center gap-2.5 rounded-[20px]">
              <AppleSvg /> Log in to Apple
            </button>
            <button className="border border-[#D2D2D2] py-4 text-dark-blue font-medium text-sm flex items-center justify-center gap-2.5 rounded-[20px]">
              <GoogleSvg /> Log in to Google
            </button>
          </div>
        </div>
        <div className="mt-auto p-2">
          <button
            className={clsx(
              "p-4 rounded-[20px] mt-auto w-full font-medium transition-all duration-300",
              emailInputValue
                ? "bg-main-blue text-white"
                : "bg-[#D2D2D2]/30 text-[#848282]"
            )}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
