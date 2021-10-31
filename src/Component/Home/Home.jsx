import React from "react";
import Support from "../Contact/Support";
import Destination from "../Destination/Destination";
import Discount from "../Discount/Discount";
import Packages from "../Packages/Packages";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Destination />
      <Discount />
      <Packages />
      <Support />
    </div>
  );
};

export default Home;
