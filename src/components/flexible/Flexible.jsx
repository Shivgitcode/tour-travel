import React from "react";

export default function Flexible({ el }) {
  return (
    <div className="w-full bg-[#EAFBF7]">
      <div className="py-[36px] px-[16px] flex flex-col justify-center items-center w-[80%] mx-auto">
        <h1 className="text-[42px] leading-[50px] font-bold text-center">
          {el.title}
        </h1>
        <p className="text-[16px] leading-[24px] font-medium mt-[24px] text-center">
          {el.description}
        </p>
      </div>
    </div>
  );
}
