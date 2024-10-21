import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="overflow-x-auto mx-4">
      <div>
        <ButtonList />
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
