import React from "react";
import { image3, image4 } from "../../images/Index";

const Property = () => {
  return (
    <div className="w-full h-[600px] md:h-[300px] px-32   md:flex justify-evenly">
      <div className="border border-[#E5E7EB] w-80 h-[300px] space-y-5">
        <img className="px-28" src={image3} alt="" />
        <p className="font-bold text-xl">Property Insurance</p>
        <div className="text-xl">
          No longer have to negotiate <br />
          commissions as haggle with <br /> other agents
        </div>
      </div>
      <div className="border border-[#E5E7EB]  w-80 h-[300px] space-y-5">
        <img className="px-28" src={image4} alt="" />
        <p className="font-bold text-xl">Lowest Commission</p>
        <div className="text-xl">
          No longer have to negotiate <br />
          commissions as haggle with <br /> other agents
        </div>
      </div>
    </div>
  );
};

export default Property;
