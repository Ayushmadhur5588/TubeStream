import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addChannelDetails } from "./appSlice";

const useChannelDetails = (channelID) => {
  const dispatch = useDispatch();
  const getData = async () => {
    const url =
      "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" +
      channelID +
      "&key=AIzaSyAb9CxzqY7CNEBa4pFfiXVymHC1Rmvn_3U";

    const data = await fetch(url);
    const json = await data.json();
    const profilePic = json.items[0].snippet.thumbnails.high.url? (json.items[0].snippet.thumbnails.high.url) : (json.items[0].snippet.thumbnails.default.url);
    dispatch(
      addChannelDetails({ channelID: channelID, profilePic: profilePic })
    );
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useChannelDetails;
