import React from "react";

export default function Head() {
  return (
    <div className="w-full mx-auto flex justify-center items-center px-[16px] mt-[32px] mb-[37px]">
      <div className="w-full h-[1px] bg-[#808080]/50 flex-1"></div>
      <span className="text-[#808080] p-[8px] whitespace-nowrap font-medium flex-1 leading-[18px] text-[12px] text-center">
        Why you are seeing{" "}
        <span className="underline">these recommendations</span>
      </span>
      <div className="w-full h-[1px] bg-[#808080]/50 flex-1"></div>
    </div>
  );
}
