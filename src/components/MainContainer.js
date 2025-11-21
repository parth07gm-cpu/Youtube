import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <ButtonList />
      <section className="flex-1 overflow-y-auto px-4 pb-6 pt-4">
        <VideoContainer />
      </section>
    </div>
  );
};

export default MainContainer;
