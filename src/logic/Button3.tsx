import React from "react";
import { arrow } from "../images/Index";

const Button3 = () => {
  const [hidden, sethidden] = React.useState<boolean>(false);
  return (
    <div className="flex flex-col ">
      <h1 className="font-bold text-xl">PRICE RANGE</h1>
      <button onClick={() => sethidden(!hidden)} className="flex flex-row">
        <input
          className="border py-2 "
          type="text"
          placeholder="search price range "
        />
        <img src={arrow} alt="" />
      </button>
      <div className={`${hidden && "invisible"}`}>
        <select className="w-36 space-y-5" name="" id="" multiple>
          <option value="">$200-350</option>
          <option value="">$400-550</option>
          <option value="">$500-650</option>
          <option value="">$700-850</option>
          <option value="">$900-1150</option>
        </select>
      </div>
    </div>
  );
};

export default Button3;
