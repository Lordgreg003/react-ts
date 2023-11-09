import React from "react";
import { arrow } from "../images/Index";

const Button2 = () => {
  const [hidden, sethidden] = React.useState<boolean>(false);
  return (
    <div className="flex flex-col ">
      <h1 className="font-bold text-xl">HOUSE TYPE</h1>
      <button onClick={() => sethidden(!hidden)} className="flex flex-row">
        <input
          className="border py-2 "
          type="text"
          placeholder="select location "
        />
        <img src={arrow} alt="" />
      </button>
      <div className={`${hidden && "invisible"}`}>
        <select className="w-36 space-y-3" name="" id="" multiple>
          <option className="font-bold py-2 px-3 bg-[#f7f4f4]" value="">
            RESIDENT
          </option>
          <option value="">Self con</option>
          <option value="">Single Room</option>
          <option value="">1 Bedroom Flat</option>
          <option value="">2 Bedroom Flat</option>
          <option value="">3 Bedroom Flat</option>
          <option value="">Others</option>
          <option className="font-bold py-2 px-3 bg-[#f7f4f4]" value="">
            {" "}
            COMMERCIALS
          </option>
          <option value="">Shop</option>
          <option value="">Office</option>
          <option value="">Others</option>
        </select>
      </div>
    </div>
  );
};

export default Button2;
