import React from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div className="w-full bg-white fixed top-0">
      <div className="bg-white px-[16px] flex justify-start items-center rounded-[32px] my-[24px] relative w-full shadow-md">
        <CiSearch fontSize={"20px"}></CiSearch>
        <input
          type="text"
          placeholder="Search for a place or activity"
          className="appearence-none outline-none py-[16px] ml-[5px] bg-transparent placeholder:text-[16px] placeholder:leading-[18px] placeholder:text-[#4d4d4d] placeholder:font-medium w-full"
        />
      </div>
    </div>
  );
}
