import React from "react";

export default function WarmDestinationCard({ el }) {
  return (
    <div className="flex flex-col justify-start items-start min-h-[301px] rounded-[8px] mr-[16px] flex-1 ">
      <div>
        <img
          src={el.img}
          alt=""
          className="min-h-[215px] object-cover object-center"
        />
      </div>
      <div>
        <h3>{el.name}</h3>
        <p>{el.tours}</p>
      </div>
    </div>
  );
}
