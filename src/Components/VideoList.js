import React from "react";
import useFormat from "./Hooks/useFormat";

const VideoList = ({ info }) => {
  const { snippet, statistics } = info;
  const { viewCount } = statistics;

  const { title, thumbnails, channelTitle, publishedAt } = snippet;

  const { formattedViews, timeAgo } = useFormat(viewCount, publishedAt);
  return (
    <div className="shadow-lg p-2 m-2 w-72">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>
          {formattedViews} views *{timeAgo}
        </li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="bg-gray-300 rounded-xl">
      <VideoList info={info} />
      <h3 className="p-1">Ad</h3>
    </div>
  );
};

export default VideoList;
