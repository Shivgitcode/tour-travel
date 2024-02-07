import React from "react";
import { PiUserCircleDuotone } from "react-icons/pi";
import { logo, nav, cross } from "../../assets";
import { useContext } from "react";
import { TourContext } from "../../context/TourContext";

export default function Navbar() {
  const { showSide, setShowSide } = useContext(TourContext);

  function handleSide() {
    setShowSide(!showSide);
    console.log(showSide);
  }
  return (
    <div className="w-full">
      <nav className="flex flex-row items-center justify-between px-[8px] py-[10px]">
        <div className=" cursor-pointer" onClick={handleSide}>
          <img src={nav} alt="" width="24px" height="24px" />
        </div>
        <div className="w-[75px] flex flex-col items-center justify-center">
          <img src={logo} alt="" />
          <p className="text-[6.8px] leading-[10.2px] whitespace-nowrap text-[#333333] pt-[1px] font-bold">
            a TripAdvisor company
          </p>
        </div>
        <div>
          <PiUserCircleDuotone fontSize={"36px"}></PiUserCircleDuotone>
        </div>
      </nav>
    </div>
  );
}
