import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { otherLinks } from "../../constants";
import { appstore, playstore } from "../../assets";

export default function Footer() {
  return (
    <div className="bg-black mt-[64px] pt-[24px] h-full">
      <div className="px-[8px]">
        {/* social media links  */}
        <div className="flex w-full justify-center items-center gap-[26px] pt-[24px] mb-[32px] ">
          <div>
            <FaFacebookF fill="white" fontSize={"24px"}></FaFacebookF>
          </div>
          <div>
            <FaXTwitter fill="white" fontSize={"24px"}></FaXTwitter>
          </div>
          <div>
            <FaPinterestP fill="white" fontSize={"24px"}></FaPinterestP>
          </div>
          <div>
            <FaInstagram fill="white" fontSize={"24px"}></FaInstagram>
          </div>
          <div>
            <FaYoutube fill="white" fontSize={"24px"}></FaYoutube>
          </div>
          <div>
            <FaTiktok fill="white" fontSize={"24px"}></FaTiktok>
          </div>
        </div>

        {/* underline */}
        <div className="w-full h-[1px] mb-[24px] mt-[16px] bg-[#4d4d4d] "></div>

        {/* other links  */}
        <div className="text-white text-[14px] leading-[21px] w-full font-medium flex flex-col items-start h-full">
          {otherLinks.map((el) => {
            return (
              <div className="mb-[16px] hover:underline cursor-default">
                {el}
              </div>
            );
          })}
        </div>

        {/* underline */}

        <div className="w-full h-[1px] mb-[24px] mt-[16px] bg-[#4d4d4d]"></div>

        {/* images */}
        <div className="flex justify-center items-center w-full gap-4">
          <div className="px-[8px] border-[1px] flex-1 rounded-[4px]">
            <img src={playstore} alt="" className="mx-auto" />
          </div>
          <div className="px-[8px] border-[1px] rounded-[4px] flex-1">
            <img src={appstore} alt="" className="mx-auto" />
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
