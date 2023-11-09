import React from "react";
import { useState } from "react";
import {
  arrowleft,
  arrowright,
  star1,
  star2,
  star3,
  star4,
  star5,
} from "../images/Index";
import { HomeAfrica } from "./HomeAfrica";
const Mainafrica = () => {
  let [index, setindex] = useState<number>(0);
  let [height, setheight] = useState<number>(35);
  let [width, setwidth] = useState<number>(30);
  return (
    <div className="w-full bg-[#F5FFFB] md:flex md:w-full  h-[1150px] md:h-[650px] px-10  pt-8">
      <div className="md:w-1/2">
        {" "}
        {HomeAfrica.map((t, i) => {
          if (i === index) {
            console.log(t.image);
            return (
              <div>
                <img
                  className=""
                  style={{ width: `${width}rem`, height: `${height}rem` }}
                  src={t.image}
                  alt=""
                />
              </div>
            );
          }
          return <div key={i} className="hidden"></div>;
        })}
      </div>
      <div className="space-y-10 text-left pt-10 md:w-1/2 md:px-20">
        <div className="font-bold text-3xl ">
          ''GentAfrica made my life easy. It helped me with the search for the
          first ever investment.They were an absolute pleasure to work with from
          the beginning to completion. Thanks to the Team.''
        </div>
        <div className="font-bold text-3xl">
          {" "}
          <div>Khana Right</div>{" "}
          <div className="text-[#636363]">Buston, UK</div>
        </div>
        <div className="md:flex space-x-80">
          {" "}
          <div className="flex flex-row md:w-5 md:h-5">
            <img src={star1} alt="" />
            <img src={star2} alt="" />
            <img src={star3} alt="" />
            <img src={star4} alt="" />
            <img src={star5} alt="" />
          </div>
          <div>
            {" "}
            <button
              onClick={
                index > 0
                  ? () => {
                      setindex(--index);
                    }
                  : undefined
              }
            >
              <img className="md:w-10" src={arrowleft} alt="" />
            </button>{" "}
            <button
              onClick={
                index < HomeAfrica.length - 1
                  ? () => {
                      setindex(++index);
                    }
                  : undefined
              }
            >
              <img className="md:w-10" src={arrowright} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainafrica;
