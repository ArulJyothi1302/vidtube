import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  let [searchParams] = useSearchParams();

  return (
    <div className="px-28 w-full ">
      <iframe
        className="rounded-xl "
        width="1000"
        height="500"
        src={
          "https://www.youtube.com/embed/" +
          searchParams.get("v") +
          "?si=LeecRnsNnPRJ4Wfo"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
