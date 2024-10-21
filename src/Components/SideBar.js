import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isOpen) return null;
  return (
    <div
      className={`absolute left-0 h-full transition-transform duration-100 z-10 bg-gray-200 shadow-lg overflow-x-hidden w-64`}
    >
      <ul className="pt-4   font-bold">
        <Link to="/">
          {" "}
          <li className="hover:bg-gray-200 hover:rounded-xl cursor-pointer p-2 ">
            🏠 Home
          </li>
        </Link>
        <li className="hover:bg-gray-200 hover:rounded-xl cursor-pointer p-2">
          ▶️ Shorts
        </li>
        <li className="hover:bg-gray-200 hover:rounded-xl cursor-pointer p-2">
          🎥 Videos
        </li>
      </ul>
      <hr className="mt-2 border border-gray-200" />
      <h1 className="font-bold pt-4">Subscription</h1>
      <ul className="px-2">
        <li className="hover:bg-gray-200 hover:rounded-xl cursor-pointer p-2">
          Entertainment
        </li>
        <li className="hover:bg-gray-200 hover:rounded-xl cursor-pointer p-2">
          Tech
        </li>
        <li className="hover:bg-gray-200 hover:rounded-xl cursor-pointer p-2">
          Music
        </li>
      </ul>
      <h1 className="font-bold pt-4">Explore</h1>
      <ul className="px-2">
        <li className="hover:bg-gray-200 hover:rounded-xl cursor-pointer p-2">
          Trending
        </li>
        <li className="hover:bg-gray-200 hover:rounded-xl cursor-pointer p-2">
          Podcasts
        </li>
        <li className="hover:bg-gray-200 hover:rounded-xl cursor-pointer p-2">
          Technology
        </li>
        <li className="hover:bg-gray-200 hover:rounded-xl cursor-pointer p-2">
          Music
        </li>
        <li className="hover:bg-gray-200 hover:rounded-xl cursor-pointer p-2">
          Gaming
        </li>
        <li className="hover:bg-gray-200 hover:rounded-xl cursor-pointer p-2">
          News
        </li>
        <li className="hover:bg-gray-200 hover:rounded-xl cursor-pointer p-2">
          Sports
        </li>
        <li className="hover:bg-gray-200 hover:rounded-xl cursor-pointer p-2">
          Live
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
