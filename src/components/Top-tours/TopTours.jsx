import React from "react";
import TopToursScroll from "./TopToursScroll";

export default function TopTours() {
  return (
    <div className="w-full">
      <div className="px-[16px] py-[48px]">
        <h2 className="text-[20px] leading-[24px] font-bold text-center w-full mb-[24px]">
          Top Tours
        </h2>
        <TopToursScroll></TopToursScroll>
      </div>
    </div>
  );
}
