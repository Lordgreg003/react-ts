import React from "react";
import { Nav, Foot } from "../components/layout/Index";
import {
  Relax,
  Section,
  Property,
  Property2,
  Happily,
  Work,
  Works2,
  Africa,
  Ready,
} from "../components/home/Index";

const Homescreen = () => {
  return (
    <div>
      <Nav />
      <Relax />
      <Section />
      <Property />
      <Property2 />
      <Happily />
      <Work />
      <Works2 />
      <Africa />
      <Ready />
      <Foot />
    </div>
  );
};

export default Homescreen;
