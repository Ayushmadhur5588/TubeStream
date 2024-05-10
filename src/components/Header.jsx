import React from "react";
import {
  youtubeLogo,
  hamburgerIcon,
  userIcon,
  youtubeLogoDark,
  hamburgerIconDark,
  youtubeSearchApi,
} from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, toggleDarkTheme } from "../utils/appSlice";
import { useState } from "react";
import { useEffect } from "react";
import { addSearchSuggestion } from "../utils/searchSuggestionSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchTxt, setSearchTxt] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const theme = useSelector((store) => store.app.darkTheme);
  const searchSuggestion = useSelector(
    (store) => store.search?.searchSuggestion
  );
  const handleClick = () => {
    dispatch(toggleMenu());
  };

  const getSuggestions = async () => {
    console.log("API CALL");
    const response = await fetch(youtubeSearchApi + searchTxt);
    const data = await response.json();
    setSuggestion(data[1]);
  };

  useEffect(() => {
    const timer = setTimeout(() => getSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchTxt]);

  useEffect(() => {
    const handleScroll = () => {
      setShowSuggestion(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={theme ? "bg-black" : "bg-white"}>
      <div className="flex px-4 justify-between shadow-md">
        <div className="flex w-3/12">
          <img
            className={
              theme ? "w-10 h-8 cursor-pointer" : "w-2/12 p-3 cursor-pointer"
            }
            src={theme ? hamburgerIconDark : hamburgerIcon}
            alt="hamburgerIcon"
            onClick={handleClick}
          />
          <img
            className={
              theme
                ? "pt-4 ml-4 w-12 h-12 cursor-pointer"
                : "p-4 w-6/12 cursor-pointer"
            }
            src={theme ? youtubeLogoDark : youtubeLogo}
            alt="youtubeLogo"
          />
        </div>
        <div className="mt-2 w-6/12 ">
          <>
            <input
              className="p-2 w-8/12 h-3/4 focus:border-blue-600 outline-none rounded-l-3xl font-light border border-gray-300"
              type="text"
              placeholder="Search"
              value={searchTxt}
              onChange={(e) => setSearchTxt(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
            />
            <button className="h-3/4 px-4 rounded-r-3xl text-white bg-gray-200 border border-gray-300">
              {" "}
              🔍{" "}
            </button>
          </>
          {showSuggestion && suggestion.length > 0 && (
            <div className="fixed w-4/12 bg-gray-50 rounded-xl mt-1">
              <ul className="p-2">
                {suggestion.map((s) => (
                  <li key={s} className="p-2 hover:bg-gray-300 rounded-lg cursor-default">
                    🔎 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button
            className="bg-gray-200 rounded-md p-2 mx-2"
            onClick={() => {
              dispatch(toggleDarkTheme());
            }}
          >
            Dark Theme
          </button>
        </div>
        <div>
          <img
            className="w-16 p-1 cursor-pointer"
            src={userIcon}
            alt="userIcon"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
