import React from "react";
import { reactangle } from "../../images/Index";

const Ready = () => {
  return (
    <div
      className="md:h-[300px] w-[full] h-[600px] md:mx-10 md:flex   bg-cover mx-10 "
      style={{ backgroundImage: `url(${reactangle})` }}
    >
      <div className="w-full h-1/2 text-white text-5xl text-center md:text-left  ">
        <div className="font-semibold md:text-center md:py-20 pt-28">
          Ready to find your <br /> New Place?
        </div>
      </div>
      <div className="w-full  h-1/2 md:h-full md:py-28">
        <input
          className="px-20 py-5 outline-none rounded-xl text-start"
          type="text"
          placeholder="Email address "
        />
        <button></button>
      </div>
    </div>
  );
};

export default Ready;
