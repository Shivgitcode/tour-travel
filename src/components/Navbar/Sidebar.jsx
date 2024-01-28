import React from "react";
import { cross } from "../../assets";
import { motion } from "framer-motion";
import { useContext } from "react";
import { TourContext } from "../../context/TourContext";
import { activities } from "../../constants";
import { IoIosArrowForward } from "react-icons/io";
export default function Sidebar() {
  const { showSide, setShowSide } = useContext(TourContext);

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -20 },
  };

  return (
    <motion.div
      transition={{ ease: "easeIn", duration: 0.2 }}
      initial={"hidden"}
      animate={showSide ? "hidden" : "visible"}
      variants={variants}
      className={`w-screen h-screen absolute ${
        showSide ? "z-[2]" : "z-[3]"
      } top-0 bg-white overflow-hidden`}
    >
      <div
        className="w-full justify-start items-center m-0 pl-[16px] py-[14px] overflow-hidden"
        onClick={() => {
          setShowSide(!showSide);
        }}
      >
        <img src={cross} alt="" className="w-[24px]" />
      </div>
      <ul className="flex w-full flex-col items-center justify-center pt-[24px] pb-[32px] px-[16px] overflow-hidden gap-[8px]">
        {activities.map((ac) => {
          return (
            <li className="flex w-full justify-between items-center py-[8px] pl-[8px] pr-[16px] rounded-[12px] my-shadow cursor-pointer">
              <div className="flex justify-start items-center gap-[16px]">
                <img
                  src={ac.img}
                  alt=""
                  className="w-[3rem] h-[3rem] rounded-md"
                />
                <span className="text-[14px] leading-4 font-bold ">
                  {ac.name}
                </span>
              </div>
              <IoIosArrowForward />
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}
