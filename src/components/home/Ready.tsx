import React from "react";
import { reactangle } from "../../images/Index";

const Ready = () => {
  return (
    <div
      className="md:h-[300px] md:mx-10"
      style={{ backgroundImage: `url(${reactangle})` }}
    >
      AM READY
    </div>
  );
};

export default Ready;
