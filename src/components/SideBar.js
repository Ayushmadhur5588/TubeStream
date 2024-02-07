import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const showSideBar = useSelector((store) => store.app.showSideBar);

  return showSideBar ? (
    <div className="bg-sky-400 h-screen min-w-52 pl-2 pt-2 font-semibold">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscribtions</li>
        <li>Settings</li>
      </ul>
    </div>
  ) : (
    <div className="h-screen min-w-24 pl-2 pt-2 font-semibold">
      <ul>
        <li>
          <Link to="/">🏠</Link>
        </li>
        <li>Shorts</li>
        <li>Subscri</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default SideBar;
