import React from "react";
import { warmDestinations } from "../../constants";
import WarmDestinationCard from "./WarmDestinationCard";

export default function WarmDestinationScroll() {
  return (
    <div className="flex items-center overflow-scroll w-full overflow-y-hidden scrollbar-none">
      {warmDestinations.map((el) => {
        return (
          <div className="">
            <WarmDestinationCard el={el}></WarmDestinationCard>
          </div>
        );
      })}
    </div>
  );
}
