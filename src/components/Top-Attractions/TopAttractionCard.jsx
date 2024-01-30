import React from "react";

export default function TopAttractionCard({ el }) {
  return (
    <div className="flex justify-center items-center">
      <img
        src={el.img}
        alt=""
        width={"74px"}
        height={"74px"}
        className="rounded-[5px]"
      />
      <div className="flex flex-col">
        <h2 className="text-[16px] leading-[19.2px] font-semibold">
          {el.name}
        </h2>
        <p className="mt-[8px] font-normal leading-[21px] text-[14px] text-[#4d4d4d]">
          {el.info}
        </p>
      </div>
    </div>
  );
}
