import React from "react";
import { destinations } from "../../constants";
import TopdestinationsCard from "./TopdestinationsCard";
import "swiper/css";
import Slider from "react-slick";

export default function TopdestinationSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="relative z-[3]">
      <div className="w-full flex justify-between gap-4 overflow-x-visible overflow-y-hidden scrollbar-none">
        {destinations.map((el, index) => {
          return (
            <TopdestinationsCard key={index} el={el}></TopdestinationsCard>
          );
        })}
      </div>
    </div>
  );
}
