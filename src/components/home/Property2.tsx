import React from "react";
import { image5 } from "../../images/Index";

const Property2 = () => {
  return (
    <div className="w-full px-20 h-[300px]  md:flex md:justify-center">
      <div className="border border-[#E5E7EB]  w-80 h-[300px] space-y-5 ">
        <img className="px-28" src={image5} alt="" />
        <p className="font-bold text-xl">Tag Advantage</p>
        <div className="text-xl">
          No longer have to negotiate <br />
          commissions as haggle with <br /> other agents
        </div>
      </div>
    </div>
  );
};

export default Property2;
