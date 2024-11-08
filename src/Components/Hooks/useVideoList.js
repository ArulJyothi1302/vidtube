import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";

const useVideoList = () => {
  const [video, setVideo] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideo(json.items);
    console.log(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return video;
};
export default useVideoList;
