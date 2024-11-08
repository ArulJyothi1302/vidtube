import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons/faShare";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  let [searchParams] = useSearchParams();

  return (
    <div className="my-4 w-full px-4">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="md:w-3/4 w-full">
          <iframe
            className="rounded-xl w-full h-60 sm:h-80 md:h-[450px] lg:h-[500px]"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?si=LeecRnsNnPRJ4Wfo"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="flex flex-wrap items-center my-4 space-x-2">
            <p className="flex items-center bg-gray-300 rounded-full py-2 px-3">
              <FontAwesomeIcon className="px-2" icon={faThumbsUp} /> 265k |
              <FontAwesomeIcon className="px-2" icon={faThumbsDown} />
            </p>
            <button className="px-4 py-2 rounded-full bg-red-600 text-white my-2 hover:bg-red-700 transition">
              Subscribe
            </button>
            <button className="flex items-center bg-gray-300 px-4 py-2 rounded-full my-2 hover:bg-gray-400 transition">
              <FontAwesomeIcon icon={faShare} />{" "}
              <span className="ml-2">Share</span>
            </button>
            <button className="flex items-center bg-gray-300 rounded-full px-4 py-2 my-2 hover:bg-gray-400 transition">
              <FontAwesomeIcon className="mr-2" icon={faDownload} />
              Download
            </button>
          </div>
        </div>

        <div className="md:w-1/4 w-full mt-4 md:mt-0">
          <LiveChat />
        </div>
      </div>

      <CommentContainer />
    </div>
  );
};

export default WatchPage;
