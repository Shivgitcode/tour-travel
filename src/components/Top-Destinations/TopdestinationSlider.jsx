import React from "react";
import { destinations } from "../../constants";
import TopdestinationsCard from "./TopdestinationsCard";
import { settings } from "../../constants";
import "swiper/css";
import Slider from "react-slick";

export default function TopdestinationSlider() {
  return (
    <div className="relative z-[3]">
      <Slider {...settings}>
        {destinations.map((el, index) => {
          return (
            <>
              <TopdestinationsCard key={index} el={el}></TopdestinationsCard>
            </>
          );
        })}
      </Slider>
    </div>
  );
}
