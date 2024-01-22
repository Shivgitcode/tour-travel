import React from "react";

export default function SlideCard({ el, index }) {
  return (
    <div data-index={index} key={index}>
      <img src={el.img} alt="" />
      <h1>{el.head}</h1>
      <p>{el.desc}</p>
    </div>
  );
}
