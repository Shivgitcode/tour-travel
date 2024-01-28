import React from "react";
import Slider from "react-slick";
import { features } from "../../constants";
import SlideCard from "./SlideCard";
import { settings } from "../../constants";

export default function Slideshow() {
  return (
    <div className="w-full relative z-[2] mt-[48px] mb-[45px]">
      <Slider {...settings}>
        {features.map((el, index) => {
          return <SlideCard el={el} index={index}></SlideCard>;
        })}
      </Slider>
    </div>
  );
}
