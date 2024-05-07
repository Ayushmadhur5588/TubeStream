import useChannelDetails from "../utils/useChannelDetails";
import { useSelector } from "react-redux";

const VideoCard = (props) => {
  const showSideBar = useSelector((store) => store.app.showSideBar);
  const { snippet, statistics } = props?.data;
  const { viewCount } = statistics;
  const { title, channelTitle, thumbnails, channelId } = snippet;

  useChannelDetails(channelId); 
  const channelUrl = useSelector(
    (store) => store.app.channelDetails[channelId]
  );
  

  const formatViews = (views) => {
    if (views >= 1000000000) {
      return (views / 1000000000).toFixed(1) + "B";
    } else if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
      return (views / 1000).toFixed(0) + "k";
    } else {
      return views.toString();
    }
  };

  return (
     <div className={`w-${showSideBar ? `96` : `80`} mb-8`}>
      <img
        className="w-full h-1/3 rounded-lg"
        src={thumbnails?.maxres?.url}/>
      <div className="flex">
        <img
          className="w-8 h-8 mt-2 mr-3 rounded-full"
          src={channelUrl}
          alt="channel_logo"
        />

        <div className="pr-4 pt-2">
          <h3 className="text-wrap font-semibold line-clamp-2 h-[3.2rem]">
            {title}
          </h3>

          <p className="font-normal text-gray-500 text-base">{channelTitle}</p>
          <p className="font-normal text-gray-500 text-base">
            {formatViews(viewCount)} views
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
