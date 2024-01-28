import React from "react";
import Slideshow from "./Slideshow";

export default function Features() {
  return (
    <div className="w-full flex flex-col items-center py-[48px]">
      <h1 className="text-[20px] leading-[24px] font-bold mb-[30px]">
        Why book with Viator?
      </h1>
      <Slideshow></Slideshow>
    </div>
  );
}
