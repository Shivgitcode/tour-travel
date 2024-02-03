import React from "react";
import { CiGlobe } from "react-icons/ci";

export default function TopToursCard({ el }) {
  return (
    <div className=" min-w-[254px] flex flex-col justify-between items-start ">
      <div className="mb-[8px]">
        <img src={el.img} alt="" className="rounded-[5px]" />
      </div>
      <div>
        <h3 className="flex items-center text-[12px] leading-[18px] text-[#4d4d4d] mb-[8px] ">
          <span className="mr-[8px]">
            <CiGlobe></CiGlobe>
          </span>
          {el.location}
        </h3>
        <p className="text-[16px] leading-[24px] mb-[8px] font-bold min-w-[254px]">
          {el.name}
        </p>
        <p className="text-[12px] leading-[18px] ">
          from{" "}
          <span className="text-[16px] leading-[24px] font-bold">
            ¥{el.price}
          </span>
        </p>
      </div>
    </div>
  );
}
