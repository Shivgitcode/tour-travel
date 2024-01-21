import { mountain, mountain2 } from "../../assets";
import { CiSearch } from "react-icons/ci";
export default function Hero() {
  return (
    <div className="w-full max-h-[330px]">
      <div className="w-full relative ">
        <img
          src={mountain2}
          alt=""
          className="w-full h-[330px] object-cover object-center"
        />
        <div className="absolute bg-black/30 w-full h-full top-0"></div>
        <div className="absolute top-[68px] right-[94px] mx-auto z-[1] w-[70%] flex flex-col items-center justify-center">
          <h1 className="text-[24px] leading-[43.2px] text-center text-white font-bold pb-[8px] ">
            Do more with Viator
          </h1>
          <p className="text-[16px] pb-[16px] leading-[21px] text-center text-white font-semibold">
            One site,300,000+ travel experience you'll remember
          </p>
          <div className="bg-white px-[16px] flex justify-start items-center rounded-[32px] my-[24px] relative w-full">
            <CiSearch fontSize={"20px"}></CiSearch>
            <input
              type="text"
              placeholder="Search for a place or activity"
              className="appearence-none outline-none py-[16px] ml-[5px] bg-transparent placeholder:text-[16px] placeholder:leading-[18px] placeholder:text-[#4d4d4d] placeholder:font-medium w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
