import React from "react";
import { attractions } from "../../constants";
import TopAttractionCard from "./TopAttractionCard";

export default function TopAttractionSlides() {
  return (
    <div className="flex flex-col flex-wrap w-full gap-5 px-[16px] overflow-x-scroll scrollbar-none  max-h-[238px]">
      {attractions.map((el) => {
        return <TopAttractionCard el={el}></TopAttractionCard>;
      })}
    </div>
  );
}
