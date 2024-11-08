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
    <div className="my-4 w-full">
      <div className="flex px-5">
        <div>
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
            autoPlay="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="flex my-2">
            <p className="bg-gray-300 rounded-full py-2 px-2 h-10 my-2">
              <FontAwesomeIcon className="px-2 " icon={faThumbsUp} /> 265k |
              <FontAwesomeIcon className="px-2" icon={faThumbsDown} />
            </p>
            <div>
              <button className="px-4 py-2 mx-4 my-2 rounded-3xl bg-red-600">
                Subscribe
              </button>
              <button className="bg-gray-300 px-4 py-2 rounded-full">
                <FontAwesomeIcon icon={faShare} /> Share
              </button>
              <button className="bg-gray-300 rounded-full px-4 py-2 mx-2">
                <FontAwesomeIcon className="px-2" icon={faDownload} />
                Download
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>

      <CommentContainer />
    </div>
  );
};

export default WatchPage;
