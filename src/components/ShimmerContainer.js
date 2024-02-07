import React from "react";
import Shimmer from "./Shimmer";

const ShimmerContainer = () => {
  const arrayLength = 20;
  const randomArray = Array.from({ length: arrayLength }, () =>
    Math.floor(Math.random() * 1000)
  );

  return (
    <div className="flex flex-wrap justify-evenly pt-8 pl-2">
      {randomArray.map((item) => {
        return <Shimmer key={item} />;
      })}
    </div>
  );
};

export default ShimmerContainer;
