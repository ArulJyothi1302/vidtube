import vidtube from "../assets/images/youtube.png";

export const APP_LOGO = vidtube;

const MY_API = "AIzaSyDGIpSpffLQZRrEFve7OV50-t3NgasUjFc";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=" +
  MY_API;
