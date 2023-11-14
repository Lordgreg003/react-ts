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
    <div className="w-full bg-[#F5FFFB] md:flex md:w-full  h-[px] md:h-[650px] px-10  pt-8">
      <div className="md:w-full ">
        {" "}
        {HomeAfrica.map((t, i) => {
          if (i === index) {
            console.log(t.testimony);
            return (
              <div className="md:flex md: ">
                <div className="md:w-1/2">
                  <img
                    className=""
                    style={{ width: `${width}rem`, height: `${height}rem` }}
                    src={t.image}
                    alt=""
                  />
                </div>
                <div className="space-y-5 md:w-1/2       ">
                  {" "}
                  <div className="font-bold text-3xl text-left md:pt-40 pt-10">
                    {t.testimony}
                  </div>
                  <div className="font-bold text-3xl text-left">
                    {" "}
                    <div>{t.name}</div>{" "}
                    <div className="text-[#636363]">{t.location}</div>
                  </div>
                  <div className="md:flex space-x-80    ">
                    {" "}
                    <div className="flex flex-row md:w-5 md:h-5">
                      <img src={star1} alt="" />
                      <img src={star2} alt="" />
                      <img src={star3} alt="" />
                      <img src={star4} alt="" />
                      <img src={star5} alt="" />
                    </div>
                    <div className="">
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
                        <img className="md:w-10 w-10" src={arrowleft} alt="" />
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
                        <img className="md:w-10 w-10" src={arrowright} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          return <div key={i} className="hidden"></div>;
        })}
      </div>
    </div>
  );
};

export default Mainafrica;
