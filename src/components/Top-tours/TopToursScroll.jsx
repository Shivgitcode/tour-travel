import React from "react";
import { topTours } from "../../constants";
import TopToursCard from "./TopToursCard";

export default function TopToursScroll() {
  return (
    <div>
      {topTours.map((el) => {
        return <TopToursCard el={el}></TopToursCard>;
      })}
    </div>
  );
}
