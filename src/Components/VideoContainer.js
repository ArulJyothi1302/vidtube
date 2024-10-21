import React from "react";
import { useState, useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "./utils/constants";

const VideoContainer = () => {
  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json);
  };
  useEffect(() => {
    getVideo();
  }, []);
  return <div>VideoContainer</div>;
};

export default VideoContainer;
