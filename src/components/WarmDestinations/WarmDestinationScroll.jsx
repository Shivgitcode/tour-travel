import React from "react";
import { warmDestinations } from "../../constants";
import WarmDestinationCard from "./WarmDestinationCard";

export default function WarmDestinationScroll() {
  return (
    <div className="flex justify-start items-center">
      {warmDestinations.map((el) => {
        return <WarmDestinationCard el={el}></WarmDestinationCard>;
      })}
    </div>
  );
}
