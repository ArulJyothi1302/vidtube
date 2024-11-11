import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMoon,
  faSearch,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  APP_LOGO,
  YOUTUBE_SEARCH_API,
  YOUTUBE_SEARCH_QUERY_API,
} from "./utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { cacheSearch } from "./utils/searchSlice";
import { toggleMode } from "./utils/ModeSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dark = useSelector((store) => store.darkMode.isDark);
  const [sugg, setSugg] = useState([]);
  const [showSugg, hideSugg] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const inputRef = useRef(null);
  const suggBoxRef = useRef(null);

  const menuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSugg(searchCache[searchQuery]);
      } else if (searchQuery) {
        getQuery();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getQuery = async () => {
    const data = await fetch(
      `https://cors-anywhere.herokuapp.com/` + YOUTUBE_SEARCH_API + searchQuery
    );
    const json = await data.json();
    setSugg(json[1]);
    dispatch(cacheSearch({ [searchQuery]: json[1] }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        suggBoxRef.current &&
        !suggBoxRef.current.contains(event.target)
      ) {
        hideSugg(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSuggestionClick = async (suggestion) => {
    setSearchQuery(suggestion);
    hideSugg(false);

    const data = await fetch(YOUTUBE_SEARCH_QUERY_API + suggestion);
    const json = await data.json();
    const fetchedId = json.items[0].id.videoId;
    navigate(`/watch?v=${fetchedId}`);
  };

  const handleMode = () => {
    dispatch(toggleMode());
  };

  return (
    <div
      className={
        dark
          ? "grid grid-cols-3 md:grid-cols-4 p-2 shadow-lg justify-between bg-black text-white"
          : "grid grid-cols-3 md:grid-cols-4 p-2 shadow-lg justify-between bg-white text-black"
      }
    >
      {/* Left - Logo and Menu Icon */}
      <div className="flex items-center col-span-1">
        <FontAwesomeIcon
          className="p-2 hover:bg-slate-300 hover:rounded-full cursor-pointer md:p-4"
          icon={faBars}
          onClick={menuHandler}
        />
        <a href="/">
          <img
            className="h-6 sm:h-8 w-24 sm:w-28 md:w-36 my-3 px-2 sm:px-4"
            alt="logo"
            src={APP_LOGO}
          />
        </a>
      </div>

      {/* Center - Search Bar */}
      <div className="col-span-2 md:col-span-2 flex items-center justify-center">
        <div className="flex items-center w-full md:w-3/4">
          <input
            ref={inputRef}
            className="text-black rounded-l-full py-2 px-4 sm:px-6 w-full border border-gray-400 outline-blue-800"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              hideSugg(true);
            }}
            onFocus={() => hideSugg(true)}
            placeholder="Search"
          />
          <button className="rounded-r-full py-2 px-4 bg-gray-200 border border-gray-400 text-black">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        {showSugg && sugg.length > 0 && (
          <div
            ref={suggBoxRef}
            className="absolute top-2 mt-12 w-fit sm:w-[16rem] md:w-[20rem] lg:w-[32rem] mr-10  rounded-xl border border-gray-300 shadow-lg bg-white z-10"
          >
            {sugg.map((s, i) => (
              <ul key={i}>
                <li
                  onClick={() => handleSuggestionClick(s)}
                  className="px-4 py-2 text-black hover:bg-gray-300 cursor-pointer"
                >
                  <FontAwesomeIcon className="mr-3" icon={faSearch} />
                  {s}
                </li>
              </ul>
            ))}
          </div>
        )}
      </div>

      {/* Right - Mode Toggle and User Icon */}
      <div className="flex items-center justify-end col-span-1 md:col-span-1 space-x-2">
        <button
          onClick={handleMode}
          className={
            dark
              ? "rounded-full bg-white text-black px-2 py-1 md:px-3 md:py-2"
              : "rounded-full bg-black text-white px-2 py-1 md:px-3 md:py-2"
          }
        >
          {!dark ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </button>
        <FontAwesomeIcon
          className={`${
            dark ? "bg-white text-black" : "bg-black text-white"
          } p-2 md:p-3 rounded-full cursor-pointer`}
          icon={faUser}
        />
      </div>
    </div>
  );
};

export default Header;
