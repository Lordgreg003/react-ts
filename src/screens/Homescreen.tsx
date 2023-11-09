import React from "react";
import { Nav, Foot } from "../components/layout/Index";
import {
  Section,
  Property,
  Property2,
  Happily,
  Work,
  Works2,
  Africa,
  Video,
  Ready,
} from "../components/home/Index";

const Homescreen = () => {
  return (
    <div>
      <Nav />
      <Section />
      <Property />
      <Property2 />
      <Happily />
      <Work />
      <Works2 />
      <Africa />
      <Video />
      <Ready />
      <Foot />
    </div>
  );
};

export default Homescreen;
