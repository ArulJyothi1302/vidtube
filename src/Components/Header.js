import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHamburger,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { APP_LOGO } from "./utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
const Header = () => {
  const dispatch = useDispatch();

  const menuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 shadow-lg justify-between">
      <div className="flex m-3 col-span-1">
        <FontAwesomeIcon
          className="p-4  hover:bg-slate-300 hover:rounded-full cursor-pointer"
          icon={faBars}
          onClick={() => menuHandler()}
        />
        <a href="/">
          <img className="h-7 my-3 px-4" alt="logo" src={APP_LOGO} />
        </a>
      </div>

      <div className="col-span-10 my-3 text-center">
        <input
          className="rounded-l-full py-2 px-2 w-1/2 border border-gray-400 outline-blue-800"
          type="text"
          placeholder="Search"
        />
        <button className="rounded-r-full py-2 px-4 bg-gray-200 border border-gray-400">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="col-span-1">
        <FontAwesomeIcon
          className=" bg-black text-white p-2 m-3 text-2xl h-5  rounded-full"
          icon={faUser}
        />
      </div>
    </div>
  );
};

export default Header;
