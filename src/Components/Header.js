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
  // Create refs for input and suggestion box
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
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSugg(json[1]);
    dispatch(cacheSearch({ [searchQuery]: json[1] }));
  };

  useEffect(() => {
    const handleScroll = () => {
      hideSugg(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Function to handle clicks outside the input and suggestion box
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

    // Add event listener to detect clicks outside
    document.addEventListener("click", handleClickOutside);

    return () => {
      // Clean up event listener on component unmount
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSuggestionClick = async (suggestion) => {
    setSearchQuery(suggestion);
    hideSugg(false); // Hide suggestions on suggestion click

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
          ? "grid grid-flow-col p-2 shadow-lg justify-between bg-black text-white"
          : "grid grid-flow-col p-2 shadow-lg justify-between bg-white text-black"
      }
    >
      <div className="flex m-3 col-span-1">
        <FontAwesomeIcon
          className="p-4 hover:bg-slate-300 hover:rounded-full cursor-pointer"
          icon={faBars}
          onClick={menuHandler}
        />
        <a href="/">
          <img className="h-7 my-3 px-4" alt="logo" src={APP_LOGO} />
        </a>
      </div>

      <div className="col-span-10 my-3 px-30">
        <div>
          <input
            ref={inputRef}
            className="text-black rounded-l-full py-2 px-10 w-1/2 border border-gray-400 outline-blue-800"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              hideSugg(true); // Show suggestions while typing
            }}
            onFocus={() => hideSugg(true)} // Show suggestions on input focus
            placeholder="Search"
          />
          <button className="rounded-r-full py-2 px-4 bg-gray-200 border border-gray-400 text-black">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        {showSugg && sugg.length > 0 && (
          <div
            ref={suggBoxRef} // Ref for suggestion box
            className="w-[12rem] md:min-w-[20rem] lg:w-[32rem] mx-2 px-5 fixed rounded-xl border border-gray-300 shadow-lg my-1 bg-white"
          >
            {sugg.map((s, i) => (
              <ul key={i}>
                <li
                  onClick={() => handleSuggestionClick(s)}
                  className="px-2 my-2 text-black hover:bg-gray-300 cursor-pointer"
                >
                  <FontAwesomeIcon className="mr-4" icon={faSearch} />
                  {s}
                </li>
              </ul>
            ))}
          </div>
        )}
      </div>
      <div>
        <button
          onClick={handleMode}
          className={
            dark
              ? "rounded-full bg-white text-black px-2 py-1 m-3"
              : "rounded-full bg-black text-white px-2 py-1 m-3"
          }
        >
          {!dark ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </button>
      </div>

      <div className="col-span-1">
        <FontAwesomeIcon
          className={`${
            dark ? "bg-white text-black" : "bg-black text-white"
          }  p-2 m-3 text-2xl h-5 rounded-full`}
          icon={faUser}
        />
      </div>
    </div>
  );
};

export default Header;
