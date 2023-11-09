import React from "react";
import { image1 } from "../../images/Index";

const Foot = () => {
  return (
    <>
      <div className="flex flex-row w-full  h-[250px]">
        <div className="w-1/2 --">
          <img className="" src={image1} alt="" />
          <p className="font-semibold text-[#4BA586]">HOUSE LINKUP</p>
        </div>
        <div className=" w-1/3 ">
          <h1 className="font-bold">Resources </h1>
        </div>
        <div className="w-1/3 ">
          <h1 className="font-bold">Legal</h1>
        </div>
        <div className="w-1/3 ">
          <h1 className="font-bold">Links</h1>
        </div>
      </div>
    </>
  );
};

export default Foot;
