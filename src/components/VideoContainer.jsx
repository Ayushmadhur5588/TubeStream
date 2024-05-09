import { useEffect, useState } from "react";
import { youTubeApi } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerContainer from "./ShimmerContainer";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [video, setvideo] = useState([]);
  const theme = useSelector((store) => store.app.darkTheme);
  const getData = async () => {
    const data = await fetch(youTubeApi);
    const json = await data.json();
    setvideo(json.items);
  };
  const background = theme? ("bg-black") : ("bg-white");

  useEffect(() => {
    getData();
  }, []);

  if (video.length === 0) {
    return <ShimmerContainer />;
  } 

  return (
    <div className={`flex flex-wrap justify-evenly pt-8 px-6 ${background}`}>
      {video.map((item) => {
        return (
          <Link key={item.id} to={"/watch?v=" + item.id}>
            <VideoCard data={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
