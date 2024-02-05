import { trustpilot2 } from "../../assets";
import { stars } from "../../constants";

export default function Reviews() {
  return (
    <div className="w-full px-[16px]">
      <div className="flex flex-col w-full items-center justify-center py-[48px]">
        <h2 className="text-[24px] leading-[24px] mb-[12px] font-medium ">
          Excellent
        </h2>
        <div className="flex items-center justify-center ">
          {stars.map((el) => {
            return (
              <div>
                <img src={el.image} alt="" />
              </div>
            );
          })}
        </div>
        <p className="mb-[24px] text-[12px] leading-[18.5px] font-normal">
          Based on{" "}
          <span className="hover:underline cursor-pointer">
            180,857 reviews
          </span>
        </p>
        <div>
          <img src={trustpilot2} alt="" />
        </div>
      </div>
    </div>
  );
}
