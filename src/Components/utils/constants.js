import vidtube from "../assets/images/youtube.png";

export const APP_LOGO = vidtube;

export const YOU_API = `${process.env.REACT_APP_YOU_API_KEY}`;
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=" +
  YOU_API;
