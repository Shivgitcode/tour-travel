import { trustpilot2 } from "../../assets";
import { stars } from "../../constants";

export default function Reviews() {
  return (
    <div className="w-full px-[16px]">
      <div>
        <h2>Excellent</h2>
        <div>
          {stars.map((el) => {
            return (
              <div>
                <img src={el.image} alt="" />
              </div>
            );
          })}
        </div>
        <p>Based on 180,857 reviews</p>
        <div>
          <img src={trustpilot2} alt="" />
        </div>
      </div>
    </div>
  );
}
