import React from "react";
import { topTours } from "../../constants";
import TopToursCard from "./TopToursCard";

export default function TopToursScroll() {
  return (
    <div className="flex items-center gap-[16px] overflow-scroll overflow-y-hidden px-[16px] mx-[-16px] scrollbar-none">
      {topTours.map((el) => {
        return <TopToursCard el={el}></TopToursCard>;
      })}
    </div>
  );
}
