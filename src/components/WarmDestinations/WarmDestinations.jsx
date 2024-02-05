import React from "react";
import WarmDestinationScroll from "./WarmDestinationScroll";

export default function WarmDestinations() {
  return (
    <div className="w-full px-[16px]">
      <div className="w-full flex flex-col justify-center items-center ">
        <h2 className="text-[20px] leading-[24px] mb-[24px] text-center font-bold w-full ">
          Warm Destinations
        </h2>
        <WarmDestinationScroll></WarmDestinationScroll>
      </div>
    </div>
  );
}
