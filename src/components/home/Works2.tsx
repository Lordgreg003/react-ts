import React from "react";
import { image7 } from "../../images/Index";

const Works2 = () => {
  return (
    <div className="md:flex md:w-full  justify-center items-center px-10 ">
      <div className="  md:w-60 md:h-[600px]  md:space-y-8 md:pt-40 flex-row ">
        <div className=" md:flex space-x-5 items-center">
          <div className=" rounded-full bg-[#69b99d] w-10 text-white">
            <div className="flex items-center space-x-2 rounded-full" />
            <div className="px-4 py-2 text-white rounded-full w-5 bg-[#69b99d]" />
            1
          </div>
          <div>
            <button className="text-2xl font-semibold">Search</button>
          </div>
        </div>
        <div>
          <div className=" md:flex space-x-5 items-center">
            <div className="rounded-full bg-[#69b99d] w-10 text-white">
              <div className="flex items-center space-x-2 rounded-full" />
              <div className="px-4 py-2 text-white rounded-full w-5 bg-[#69b99d]" />
              2
            </div>
            <div>
              <button className="text-2xl font-semibold">Choose</button>
            </div>
          </div>
        </div>
        <div>
          <div className=" md:flex space-x-5 items-center">
            <div className="rounded-full bg-[#69b99d] w-10 text-white">
              <div className="flex items-center space-x-2 rounded-full" />
              <div className="px-4 py-2 text-white rounded-full w-5 bg-[#69b99d]" />
              3
            </div>
            <div>
              <button className="text-2xl font-semibold">Contact</button>
            </div>
          </div>
        </div>
        <div>
          <div className=" md:flex space-x-5 items-center">
            <div className="rounded-full bg-[#69b99d] w-10 text-white">
              <div className="flex items-center space-x-2 rounded-full" />
              <div className="px-4 py-2 text-white rounded-full w-5 bg-[#69b99d]" />
              4
            </div>
            <div>
              <button className="text-2xl font-semibold">Book</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={image7} alt="" />
      </div>
    </div>
  );
};

export default Works2;
