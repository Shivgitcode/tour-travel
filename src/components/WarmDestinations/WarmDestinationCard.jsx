import React from "react";

export default function WarmDestinationCard({ el }) {
  return (
    <div className="flex min-w-[184px] flex-col justify-start items-start min-h-[301px] rounded-[8px] mr-[16px] flex-1 my-shadow2 ">
      <div>
        <img
          src={el.img}
          alt=""
          className="min-h-[215px] object-cover object-center rounded-md"
        />
      </div>
      <div className="p-[16px]">
        <h3 className="text-[16px] leading-[19.2px] font-bold ">{el.name}</h3>
        <p className="text-[14px] leading-[21px]  text-[#4d4d4d] mt-[8px]">
          {el.tours}
        </p>
      </div>
    </div>
  );
}
