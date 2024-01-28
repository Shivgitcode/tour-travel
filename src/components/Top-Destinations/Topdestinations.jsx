import React from "react";
import TopdestinationSlider from "./TopdestinationSlider";

export default function Topdestinations() {
  return (
    <div className="w-full items-center mx-auto pb-[70px]">
      <div className="text-[20px] leading-[24px] mb-4 font-bold w-full text-center">
        Top Destination
      </div>
      <TopdestinationSlider></TopdestinationSlider>
    </div>
  );
}
