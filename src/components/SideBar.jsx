import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { shortsIcon } from "../utils/constant";

const SideBar = () => {
  const showSideBar = useSelector((store) => store.app.showSideBar);
  
  return showSideBar ? (
    <div className="bg-sky-400 w-96 h-screen pl-2 pt-2 font-semibold">
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
    <div className="h-screen pl-2 pt-2 font-semibold">
      <ul>
        <li className="my-4">
          <Link to="/">🏠</Link>
        </li>
        <li className="my-4">
          <Link to="/"><img src={shortsIcon}/></Link>
        </li>
        <li className="my-4">
          <Link to="/"></Link>
        </li>
        <li className="my-4">
          <Link to="/">🏠</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
