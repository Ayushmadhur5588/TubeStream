import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { videoDetail } from "../utils/constant";

const Watch = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

const fetchVideoData = async() => {
  const response = await fetch(videoDetail);
  const data = await response.json();
  console.log(data);
}

  useEffect(() => {
    fetchVideoData();
  },[])

  useEffect(() => {
    dispatch(closeMenu());
  }, []);



  return (
    <div>
      <iframe
        width="880"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h2>Comments</h2>
    </div>
  );
};

export default Watch;
