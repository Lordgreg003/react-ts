import React from "react";
import { image1, image2 } from "../../images/Index";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div
      className="relative flex flex-col w-full h-[1000px] space-y-20 "
      style={{ backgroundImage: `url(${image2})` }}
    >
      <div className="flex flex-row justify-between space-x-10 pt-20">
        {" "}
        <div className="flex flex-row  ">
          <img className="w-14 h-14" src={image1} alt="" />
          <p className="font-semibold text-[#4BA586] pt-3 md:text-2xl ">
            HOUSE LINKUP
          </p>
        </div>
        <div className="hidden space-x-7 md:hidden lg:flex">
          <a href="" className="text-[#69B99D] text-lg">
            Home{" "}
          </a>
          <a href="" className=" text-lg">
            Property
          </a>
          <a href="" className="text-lg">
            About
          </a>
          <a href="" className="text-lg">
            Service
          </a>
          <a href="" className="text-lg">
            Contact
          </a>
        </div>
        <div className="space-x-6">
          <a
            href=""
            className="bg-[#F5F5F5] border py-3 px-8 text-[#69B99D] md:py-5 md:px-12 border-[#69B99D]   "
          >
            Sign In
          </a>
          <a
            href=""
            className="bg-[#69B99D] border py-3 px-8 text-white md:py-5 md:px-12"
          >
            Log In
          </a>
        </div>
      </div>
      <div className="space-y-5">
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

export default Nav;
