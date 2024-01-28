import React from "react";
import { LasVegas } from "../../assets";

export default function TopdestinationsCard({ el }) {
  return (
    <div className="max-w-[298px] max-h-[168px] rounded-[10px] px-[8px] flex flex-col relative">
      <img
        src={el.img}
        alt=""
        className="rounded-[10px] w-full h-full object-cover"
      />

      <p className="absolute text-[20px] leading-[30px] text-white font-bold  top-[110px] left-[100px]">
        {el.name}
      </p>
    </div>
  );
}
