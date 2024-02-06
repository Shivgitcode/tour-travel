import React from "react";
import { popularCities } from "../../constants";
import PopularAttractions from "./PopularAttractions";

export default function Popularcities() {
  return (
    <div className="px-[15px] py-[48px] ">
      <div className="flex flex-col justify-start gap-4 mb-[32px] w-full">
        <h1 className="text-[16px] leading-[19.2px] font-bold">
          Popular Cities
        </h1>
        <div className="min-w-[465px] flex flex-wrap mr-[-5px]">
          {popularCities.map((el) => {
            return (
              <div className="text-[14px] flex justify-between cursor-pointer hover:underline  gap-3 items-center leading-[21px] mb-[8px] my-[8px] text-[#4d4d4d] font-[400] px-[5px]">
                {el} <div className="h-[7px] w-[1px] bg-[#4d4d4d]"></div>
              </div>
            );
          })}
        </div>
      </div>
      <PopularAttractions></PopularAttractions>
    </div>
  );
}
