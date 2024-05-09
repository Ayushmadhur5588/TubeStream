import React from "react";
import { youtubeLogo, hamburgerIcon, userIcon, youtubeLogoDark, hamburgerIconDark } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu , toggleDarkTheme } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.app.darkTheme);
  const handleClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className={theme? "bg-black" : "bg-white"}>
      <div className="flex px-4 justify-between shadow-md">
        <div className="flex w-3/12">
          <img
            className={theme? "w-10 h-8 cursor-pointer":"w-2/12 p-3 cursor-pointer"}
            src={theme? hamburgerIconDark : hamburgerIcon}
            alt="hamburgerIcon"
            onClick={handleClick}
          />
          <img
            className={theme? "pt-4 ml-4 w-12 h-12 cursor-pointer" : "p-4 w-6/12 cursor-pointer"}
            src={theme? (youtubeLogoDark) : (youtubeLogo)}
            alt="youtubeLogo"
          />
        </div>
        <div className="mt-2 w-6/12 ">
          <input
            className="p-2 w-3/4 h-3/4 focus:border-blue-600 outline-none rounded-l-3xl font-light border border-gray-300"
            type="text"
            placeholder="Search"
          />
          <button className="h-3/4 px-4 rounded-r-3xl text-white bg-gray-200 border border-gray-300">
            {" "}
            🔍{" "}
          </button>
          <button className="bg-gray-200 rounded-md p-2 mx-2"
          onClick={() => {
            dispatch(toggleDarkTheme());
          }}>
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