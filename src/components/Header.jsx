import {
  youtubeLogo,
  userIcon,
  youtubeSearchApi,
} from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState } from "react";
import { useEffect } from "react";
import { addSearchSuggestion } from "../utils/searchSuggestionSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchTxt, setSearchTxt] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchSuggestion = useSelector(
    (store) => store.search?.searchSuggestion
  );

  const getSuggestions = async () => {
    const response = await fetch(youtubeSearchApi + searchTxt);
    const data = await response.json();
    setSuggestion(data[1]);
    dispatch(
      addSearchSuggestion({
        [searchTxt]: data[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchSuggestion && searchSuggestion[searchTxt]) {
        setSuggestion(searchSuggestion[searchTxt]);
      } else {
        getSuggestions();
      }
    }, 200);
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
    <div className={"bg-white"}>
      <div className="flex px-4 justify-between">
        <div className="flex w-3/12">
          
          <svg
            className="h-8 w-10 mt-4 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => dispatch()}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <img
            className={
              
                 "p-4 w-6/12 cursor-pointer"
            }
            src={youtubeLogo}
            alt="youtubeLogo"
          />
        </div>
        <div className="mt-2 w-6/12 h-3/4 flex">
          <input
            className="-mb-2 px-2 w-9/12 h-11 focus:border-blue-600 outline-none rounded-l-3xl rounded-r-3xl font-light border border-gray-300"
            type="text"
            placeholder="Search"
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <svg
            className="-ml-9 mt-2 h-6 w-6 text-gray-500 cousor cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          {showSuggestion && suggestion.length > 0 && (
            <div className="fixed w-4/12 bg-gray-50 rounded-xl mt-11">
              <ul className="p-2">
                {suggestion.map((s) => (
                  <li
                    key={s}
                    className="p-2 hover:bg-gray-300 rounded-lg cursor-default flex font-medium"
                  >
                    <svg
                      className="mr-4 h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>{" "}
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
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
