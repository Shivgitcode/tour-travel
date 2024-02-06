import React from "react";
import { popularattractions } from "../../constants";

export default function PopularAttractions() {
  return (
    <div className="flex flex-col justify-start gap-4">
      <h1 className="text-[16px] leading-[19.2px] font-bold">
        Popular Attractions
      </h1>
      <div className="min-w-[465px] flex flex-wrap mr-[-5px]">
        {popularattractions.map((el) => {
          return (
            <div className="text-[14px] flex justify-between cursor-pointer hover:underline  gap-3 items-center leading-[21px] mb-[8px] my-[8px] text-[#4d4d4d] font-[400] px-[5px]">
              {el} <div className="h-[7px] w-[1px] bg-[#4d4d4d]"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
