import React from "react";
import Slider from "react-slick";
import { features } from "../../constants";
import SlideCard from "./SlideCard";

export default function Slideshow() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {features.map((el, index) => {
          return <SlideCard el={el} index={index}></SlideCard>;
        })}
      </Slider>
    </div>
  );
}
