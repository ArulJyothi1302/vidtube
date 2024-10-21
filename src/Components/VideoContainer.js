import React from "react";

import useVideoList from "./Hooks/useVideoList";

import VideoList from "./VideoList";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const videos = useVideoList();
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoList info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
