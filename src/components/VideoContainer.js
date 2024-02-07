import { useEffect, useState } from "react";
import { youTubeApi } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerContainer from "./ShimmerContainer";

const VideoContainer = () => {
  const [video, setvideo] = useState([]);

  const getData = async () => {
    const data = await fetch(youTubeApi);
    const json = await data.json();
    setvideo(json.items);
  };

  useEffect(() => {
    getData();
  }, []);

  if (video.length === 0) {
    return <ShimmerContainer />;
  } 

  return (
    <div className="flex flex-wrap justify-evenly pt-8 px-4">
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
