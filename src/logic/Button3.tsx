import React from "react";
import { arrow } from "../images/Index";

const Button3 = () => {
  const [hidden, sethidden] = React.useState<boolean>(false);
  return (
    <div className="flex flex-col ">
      <h1 className="font-bold text-xl">PRICE RANGE</h1>
      <button onClick={() => sethidden(!hidden)} className="flex flex-row">
        <input
          className="border py-2  rounded-lg text-center "
          type="text"
          placeholder="Search Price Range "
        />
        <img src={arrow} alt="" />
      </button>
      <div className={`${hidden && "invisible"}`}>
        <div className="text-left">
          <h1 className="font-bold text-xl">PRICES</h1>
          <ul>
            <li>$200-350</li>
            <li>$400-550</li>
            <li>$500-650</li>
            <li>$700-850</li>
            <li>$900-1150</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Button3;
