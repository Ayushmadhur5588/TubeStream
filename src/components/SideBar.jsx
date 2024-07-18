import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { youtubeLogo } from "../utils/constant";

const SideBar = () => {
  const showSideBar = useSelector((store) => store.app.showSideBar);

  return showSideBar ? (
    <div className="min-w-44 h-screen pl-2 pt-2 font-semibold ">
      <ul>
        <li className="p-2 my-2 hover:bg-gray-200 rounded-lg">
          <Link to="/" className="flex">
            <svg
              class="h-7 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>

            <span className="px-2">Home</span>
          </Link>
        </li>

        <li className="p-2 my-2 hover:bg-gray-200 rounded-lg">
          <Link to="/" className="flex">
            <svg
              class="h-7 w-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{" "}
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>

            <span className="px-2">Shorts</span>
          </Link>
        </li>

        <li className="p-2 my-2 hover:bg-gray-200 rounded-lg">
          <Link to="/" className="flex">
            <svg
              class="h-7 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <span className="px-2">Subscriptions</span>
          </Link>
        </li>

        <li className="p-2 my-2 hover:bg-gray-200 rounded-lg">
          <Link to="/" className="flex">
            <svg
              class="h-7 w-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <circle cx="12" cy="12" r="3" />{" "}
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>

            <span className="px-2">Settings</span>
          </Link>
        </li>

        <li className="mt-5">
          <span className="px-2">Explore</span>
        </li>

        <li className="p-2 my-2 hover:bg-gray-200 rounded-lg">
          <Link to="/" className="flex">
            <svg
              class="h-7 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
              />
            </svg>

            <span className="px-2">Trending</span>
          </Link>
        </li>

        <li className="p-2 my-2 hover:bg-gray-200 rounded-lg">
          <Link to="/" className="flex">
            <svg
              class="h-7 w-10"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M9 18V5l12-2v13" /> <circle cx="6" cy="18" r="3" />{" "}
              <circle cx="18" cy="16" r="3" />
            </svg>

            <span className="px-2">Music</span>
          </Link>
        </li>

        <li className="p-2 my-2 hover:bg-gray-200 rounded-lg">
          <Link to="/" className="flex">
            <svg
              class="h-7 w-10"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />{" "}
              <line x1="8" y1="8" x2="12" y2="8" />{" "}
              <line x1="8" y1="12" x2="12" y2="12" />{" "}
              <line x1="8" y1="16" x2="12" y2="16" />
            </svg>

            <span className="px-2">News</span>
          </Link>
        </li>

        <li className="p-2 my-2 hover:bg-gray-200 rounded-lg">
          <Link to="/" className="flex">
            <svg
              class="h-7 w-10"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <circle cx="12" cy="12" r="9" />{" "}
              <line x1="5.65" y1="5.65" x2="18.35" y2="18.35" />{" "}
              <line x1="5.65" y1="18.35" x2="18.35" y2="5.65" />{" "}
              <path d="M12 3a9 9 0 0 0 9 9" /> <path d="M3 12a9 9 0 0 1 9 9" />
            </svg>

            <span className="px-2">Sports</span>
          </Link>
        </li>

        <li className="p-2 my-2 hover:bg-gray-200 rounded-lg">
          <Link to="/" className="flex">
            <svg
              class="h-7 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>

            <span className="px-2">Home</span>
          </Link>
        </li>
      </ul>
    </div>
  ) : (
    <div className=" bg-sky-400 min-w-12 h-screen pl-2 pt-2 font-semibold">
      <ul>
        <li className="my-4 ml-2">
          <Link to="/">
            <img className="w-10 h-8" src={youtubeLogo} alt="homeIcon" />
          </Link>
        </li>
        <li className="my-4">
          <Link to="/">
            <img className="w-8 h-5" src={youtubeLogo} />
          </Link>
        </li>
        <li className="my-4 ml-2">
          <Link to="/">🏠</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
