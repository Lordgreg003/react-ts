import React from "react";
import { image2 } from "../../images/Index";

const Relax = () => {
  return (
    <div
      className="relative flex flex-col w-full h-[500px] md:h-[1000px] space-y-20 bg-cover md:items-center "
      style={{ backgroundImage: `url(${image2})` }}
    >
      <div className="space-y-5 pt-10 md:pt-20">
        {" "}
        <div className="space-y-5">
          <div className="text-5xl font-bold">Find a home </div>
          <div className="text-5xl font-bold ">Where you can relax</div>
        </div>
        <div>
          <div>
            Search house for rent. Get Results from 8 Engines Instantly.
            Information 24/7.
          </div>
          <div>Web, Images & Videos. Trusted by Billions.</div>
        </div>
      </div>
    </div>
  );
};

export default Relax;
