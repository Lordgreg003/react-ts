import React from "react";
import { image8, woman1, woman2 } from "../images/Index";

const Pics = () => {
  const [images, setimages] = React.useState<any[]>([image8, woman1, woman2]);
  let [index, setindex] = React.useState<number>(0);
  let [width, setwidth] = React.useState<number>(30);
  let [height, setheight] = React.useState<number>(40);

  function next() {
    console.log(index, images[index]);
    if (index < images.length) setindex(++index);
  }

  function prev() {
    console.log(index, images[index]);
    if (index < images.length) setindex(--index);
  }

  return (
    <div>
      {" "}
      <select className="w-36 space-y-5" name="" id="" multiple>
        <option value="">$200-350</option>
        <option value="">$400-550</option>
        <option value="">$500-650</option>
        <option value="">$700-850</option>
        <option value="">$900-1150</option>
      </select>
    </div>
  );
};

export default Pics;
