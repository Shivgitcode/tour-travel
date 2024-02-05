import React from "react";
import { warmDestinations } from "../../constants";
import WarmDestinationCard from "./WarmDestinationCard";

export default function WarmDestinationScroll() {
  return (
    <div className="flex items-center overflow-scroll">
      {warmDestinations.map((el) => {
        return <WarmDestinationCard el={el}></WarmDestinationCard>;
      })}
    </div>
  );
}
