import React from "react";

export default function TopToursCard({ el }) {
  return (
    <div>
      <div>
        <img src={el.img} alt="" />
      </div>
      <div>
        <h3>{el.location}</h3>
        <p>{el.name}</p>
        <p>
          from <span>¥{el.price}</span>
        </p>
      </div>
    </div>
  );
}
