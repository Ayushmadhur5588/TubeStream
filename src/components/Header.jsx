import React from "react";
import { youtubeLogo, hamburgerIcon, userIcon } from "../utils/constant";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div>
      <div className="flex px-4 justify-between shadow-md">
        <div className="flex w-3/12">
          <img
            className="w-2/12 p-3 cursor-pointer"
            src={hamburgerIcon}
            alt="hamburgerIcon"
            onClick={handleClick}
          />
          <img
            className="p-4 w-6/12 cursor-pointer"
            src={youtubeLogo}
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