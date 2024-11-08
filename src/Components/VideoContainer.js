import React from "react";

import useVideoList from "./Hooks/useVideoList";

import VideoList, { AdVideoCard } from "./VideoList";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const videos = useVideoList();
  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[1]} />}
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoList info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
