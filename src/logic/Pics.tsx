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
      <img
        src={images[index]}
        style={{ width: `${width}rem`, height: `${height}rem` }}
        alt=""
      />
    </div>
  );
};

export default Pics;
