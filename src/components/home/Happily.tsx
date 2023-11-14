import React from "react";
import { image6 } from "../../images/Index";

const Happily = () => {
  return (
    <div className="md:mt-5 md:flex md:h-[480px] md:w-full md:justify-evenly bg-[rgb(245,255,251)] space-y-10">
      <div className="w-full h-1/2 space-y-5  md:w-1/2 md:pt-20 md:h-full md:text-left ">
        <div className="text-4xl space-y-4 px-10 md:px-0 md:text-left">
          <div>
            Live Happily,
            <br /> HouseLinkUp helps you <br /> for Finding homes.
          </div>
        </div>
        <div className="md:text-left">
          Properties to rent. Find rental property listed <br /> directly from
          private landlords and letting <br /> agents from all over.
        </div>
        <div className="md:text-left">
          Search house for rent. Get Results from 8 <br /> Engines Instantly.
          Information 24/7. Web, <br /> Images & Videos. Trusted by Billions.
        </div>
        <button className=" border py-3 px-8 rounded-lg">Explore More</button>
      </div>
      <div className="w-full h-1/4 md:w-[400px]  md:h-full px-20  ">
        <img
          className="md:h-[450px] w-[400px] md:pb-10 md:w-[400px]   "
          src={image6}
          alt=""
        />
      </div>
    </div>
  );
};

export default Happily;
