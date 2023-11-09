import React from "react";
import { Button1, Button2, Button3, Button4 } from "../../logic/Index";

const Section = () => {
  return (
    <div className="w-full flex-col h-[750px] md:h-[500px]   ">
      {" "}
      <div className=" md:space-x-8 md:flex md:flex-row pl-5 pt-10 ">
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
      </div>
      <div className="font-bold text-4xl   md:text-5xl pt-4">
        Advantages of HouseLinkUp
      </div>
    </div>
  );
};

export default Section;
