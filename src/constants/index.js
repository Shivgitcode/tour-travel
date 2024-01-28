import {
  img1,
  img2,
  img3,
  cancellation,
  reviews,
  payLater,
  experiences,
  LasVegas,
  Chicago,
  NewOrleans,
} from "../assets";

export const activities = [
  {
    img: img1,
    name: "Top activities",
  },
  {
    img: img2,
    name: "Top landmarks",
  },
  {
    img: img3,
    name: "Expolre the world",
  },
];

export const features = [
  {
    img: cancellation,
    head: "Free cancellation",
    desc: "Stay flexible on your trip",
  },
  {
    img: experiences,
    head: "300,000+ experiences",
    desc: "Make memories around the world",
  },
  {
    img: payLater,
    head: "Reserve now,pay later",
    desc: "Book your spot",
  },
  {
    img: reviews,
    head: "Trusted reviews",
    desc: "4.3 stars from 140,000+ Trustpilot reviews.",
  },
];

export const destinations = [
  {
    name: "Las Vegas",
    img: LasVegas,
  },
  {
    name: "Chicago",
    img: Chicago,
  },
  {
    name: "New Orleans",
    img: NewOrleans,
  },
];

export var settings = {
  dots: true,
  infinite: true,
  speed: 500,

  slidesToShow: 1.5,
  slidesToScroll: 1,
};
