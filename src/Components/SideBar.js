import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const isOpen = useSelector((store) => store.app.isMenuOpen);
  const loc = useLocation();
  const root = loc.pathname === "/";
  const mode = useSelector((store) => store.darkMode.isDark);
  if (!isOpen) return null;
  return (
    <div
      className={`${
        !root
          ? mode
            ? "absolute left-0 h-full transition-transform duration-100 z-10 bg-black shadow-lg overflow-x-hidden w-48 px-2"
            : "absolute left-0 h-full transition-transform duration-100 z-10 bg-white text-black shadow-lg overflow-x-hidden w-48 px-2"
          : mode
          ? "w-48 pr-20 bg-black"
          : "w-48 pr-20 bg-gray-200"
      }`}
    >
      <ul className="pt-4 font-bold">
        <Link to="/">
          {" "}
          <li className="hover:bg-gray-300 hover:rounded-xl cursor-pointer p-2 ">
            🏠 Home
          </li>
        </Link>
        <li className="hover:bg-gray-300 hover:rounded-xl cursor-pointer p-2">
          ▶️ Shorts
        </li>
        <li className="hover:bg-gray-300 hover:rounded-xl cursor-pointer p-2">
          🎥 Videos
        </li>
      </ul>
      <hr className="mt-2 border border-gray-200" />
      <h1 className="font-bold px-2 pt-4">Subscription</h1>
      <ul className="px-2">
        <li className="hover:bg-gray-300 hover:rounded-xl cursor-pointer p-2 w-fit">
          Entertainment
        </li>
        <li className="hover:bg-gray-300 hover:rounded-xl cursor-pointer p-2">
          Tech
        </li>
        <li className="hover:bg-gray-300 hover:rounded-xl cursor-pointer p-2">
          Music
        </li>
      </ul>
      <h1 className="font-bold pt-4 px-2">Explore</h1>
      <ul className="px-2">
        <li className="hover:bg-gray-300 hover:rounded-xl cursor-pointer p-2">
          Trending
        </li>
        <li className="hover:bg-gray-300 hover:rounded-xl cursor-pointer p-2">
          Podcasts
        </li>
        <li className="hover:bg-gray-300 hover:rounded-xl cursor-pointer p-2">
          Technology
        </li>
        <li className="hover:bg-gray-300 hover:rounded-xl cursor-pointer p-2">
          Music
        </li>
        <li className="hover:bg-gray-300 hover:rounded-xl cursor-pointer p-2">
          Gaming
        </li>
        <li className="hover:bg-gray-300 hover:rounded-xl cursor-pointer p-2">
          News
        </li>
        <li className="hover:bg-gray-300 hover:rounded-xl cursor-pointer p-2">
          Sports
        </li>
        <li className="hover:bg-gray-300 hover:rounded-xl cursor-pointer p-2">
          Live
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
