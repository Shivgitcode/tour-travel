import React from "react";
import { LasVegas } from "../../assets";

export default function TopdestinationsCard({ el }) {
  return (
    <div className="min-w-[298px] max-h-[168px] rounded-[10px] px-[8px] flex flex-col relative flex-1">
      <img
        src={el.img}
        alt=""
        className="rounded-[10px] w-full h-full object-cover object-top"
      />

      <p className="absolute text-[20px] leading-[30px] text-white font-bold  top-[70px] left-[100px]">
        {el.name}
      </p>
    </div>
  );
}
