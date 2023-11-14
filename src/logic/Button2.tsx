import React from "react";
import { arrow } from "../images/Index";

const Button2 = () => {
  const [hidden, sethidden] = React.useState<boolean>(false);
  return (
    <div className="flex flex-col ">
      <h1 className="font-bold text-xl">HOUSE TYPE</h1>
      <button onClick={() => sethidden(!hidden)} className="flex flex-row">
        <input
          className="border py-2 rounded-lg text-center"
          type="text"
          placeholder="House Type "
        />
        <img src={arrow} alt="" />
      </button>
      <div className={`${hidden && "invisible"}`}>
        <div className="text-left">
          <h1 className="font-bold text-xl">RESIDENT</h1>
          <ul>
            <li>Self con</li>
            <li>Single Room</li>
            <li>1 Bedroom Flat</li>
            <li>2 Bedroom Flat</li>
            <li>3 Bedroom Flat</li>
            <li>Others</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Button2;
