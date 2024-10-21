import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isOpen) return null;
  return (
    <div className="shadow-lg px-4 w-48 pb-2">
      <ul className="pt-4 font-bold">
        <li>🏠 Home</li>
        <li>▶️ Shorts</li>
        <li>🎥 Videos</li>
      </ul>
      <hr className="mt-2 border border-gray-200" />
      <h1 className="font-bold pt-4">Subscription</h1>
      <ul>
        <li>Entertainment</li>
        <li>Tech</li>
        <li>Music</li>
      </ul>
      <h1 className="font-bold pt-4">Explore</h1>
      <ul>
        <li>Technology</li>
        <li>Music</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Live</li>
      </ul>
    </div>
  );
};

export default SideBar;
