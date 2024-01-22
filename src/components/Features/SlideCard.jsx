import React from "react";
import { blob, blob2 } from "../../assets";

export default function SlideCard({ el, index }) {
  return (
    <div
      key={index}
      className="flex flex-col items-center justify-between h-full"
    >
      <div className="relative">
        {index === 0 && (
          <img
            src={blob}
            className="absolute z-[-1] -top-[10px] -left-[5px] min-w-[60px]"
          ></img>
        )}
        {index === 1 && (
          <img
            src={blob2}
            className="absolute z-[-1] -top-[10px] -left-[5px] min-w-[60px]"
          ></img>
        )}
        <img src={el.img} alt="" />
      </div>

      <h1 className="mt-[7px] px-[16px] text-[20px] leading-[30px] text-center font-bold">
        {el.head}
      </h1>
      <p className="text-[16px] leading-[24px] font-medium mt-[8px] px-[16px] ">
        {el.desc}
      </p>
    </div>
  );
}
