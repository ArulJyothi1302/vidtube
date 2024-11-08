import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const mode = useSelector((store) => store.darkMode.isDark);
  return (
    <div
      className={mode ? "flex bg-black text-white" : "flex bg-white text-black"}
    >
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
