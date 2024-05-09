import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addChannelDetails } from "./appSlice";

const useChannelDetails = (channelID) => {
  const dispatch = useDispatch();
  const getData = async () => {
    const url =
      "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" +
      channelID +
      "&key=" +
      process.env.REACT_APP_GOOGLE_API_KEY;

    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
    const profilePic = json.items[0].snippet.thumbnails?.high?.url || json.items[0].snippet.thumbnails?.default?.url || json.items[0].snippet.thumbnails?.medium?.url;
    
    dispatch(
      addChannelDetails({ channelID: channelID, profilePic: profilePic })
    );
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useChannelDetails;
