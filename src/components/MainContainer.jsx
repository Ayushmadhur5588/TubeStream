import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import {buttonList} from "../utils/constant";
import ButtonCard from "./ButtonCard";
const MainContainer = () => {
  return (
    <div>
      {/*<div className="overflow-x-scroll">
        <ButtonList />
  </div>*/}
      {/*<div className="flex overflow-x-scroll rounded-md">
        {buttonList.map((b) => (
          <ButtonCard key={b} data={b} />
        ))}
        </div>*/}
        <VideoContainer />
    </div>
  );
};

export default MainContainer;
