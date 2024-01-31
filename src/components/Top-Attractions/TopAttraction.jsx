import React from "react";
import TopAttractionSlides from "./TopAttractionSlides";

export default function TopAttraction() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center mt-[48px]">
        <h1 className="text-[20px] leading-[24px] font-bold mb-[48px]">
          Top Attractions
        </h1>
        <TopAttractionSlides></TopAttractionSlides>
        <p className="text-[16px] leading-[24px] font-bold mt-[24px] hover:underline cursor-pointer">
          See all attractions
        </p>
      </div>
    </div>
  );
}
