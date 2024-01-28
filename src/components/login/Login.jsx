import React from "react";
import { fancy } from "../../assets";

export default function Login() {
  return (
    <div className="relative w-full bg-[#f5f5f5] px-[8px] mx-auto">
      <img src={fancy} alt="" className="absolute top-[-50%] left-[-20%]" />
      <div className="flex flex-col items-center justify-between relative z-[2]">
        <p className="mt-[36px] mb-[24px] text-[20px] leading-[24px] font-bold">
          Log in to book faster and use your discounts{" "}
        </p>
        <button className=" w-full text-white font-semibold px-[24px] py-[9px] text-[16px] leading-[24px] bg-[#008768] rounded-[4px]">
          Log In
        </button>
        <p className="mt-[24px] mb-[36px] text-[16px] leading-[24px] font-normal">
          Don't have an account yet?{" "}
          <span>
            <a href="/" className="text-black font-bold underline">
              Sign up
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
