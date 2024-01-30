import React from "react";
import { attractions } from "../../constants";
import TopAttractionCard from "./TopAttractionCard";

export default function TopAttractionSlides() {
  return (
    <div className="flex flex-wrap gap-5">
      {attractions.map((el) => {
        return <TopAttractionCard el={el}></TopAttractionCard>;
      })}
    </div>
  );
}
