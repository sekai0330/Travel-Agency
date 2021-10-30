import React from "react";
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
    </div>
  );
};

export default Home;
