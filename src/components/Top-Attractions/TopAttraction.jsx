import React from "react";
import TopAttractionSlides from "./TopAttractionSlides";

export default function TopAttraction() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center mt-[48px]">
        <h1 className="text-[20px] leading-[24px] font-bold">
          Top Attractions
        </h1>
        <TopAttractionSlides></TopAttractionSlides>
      </div>
    </div>
  );
}
