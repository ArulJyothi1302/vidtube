import { useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";

const useVideoList = () => {
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    getVideos();
  }, []);
};
export default useVideoList;
