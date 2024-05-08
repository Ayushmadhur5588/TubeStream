import useChannelDetails from "../utils/useChannelDetails";
import { useSelector } from "react-redux";

const VideoCard = (props) => {
  const showSideBar = useSelector((store) => store.app.showSideBar);
  const { snippet, statistics } = props?.data;
  const { viewCount } = statistics;
  const { title, channelTitle, thumbnails, channelId , publishedAt} = snippet;

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

  function calculateTimeAgo(publishedAt) {
    const currentDate = new Date();
    const publishedDate = new Date(publishedAt);

    const millisecondsAgo = currentDate - publishedDate;
    const secondsAgo = Math.floor(millisecondsAgo / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const weeksAgo = Math.floor(daysAgo / 7);
    const monthsAgo = Math.floor(daysAgo / 30);
    const yearsAgo = Math.floor(daysAgo / 365);

    if (yearsAgo >= 2) {
        return `${yearsAgo} years ago`;
    } else if (monthsAgo >= 3) {
        return `${monthsAgo} months ago`;
    } else if (weeksAgo >= 2) {
        return `${weeksAgo} weeks ago`;
    } else if (daysAgo >= 2) {
        return `${daysAgo} days ago`;
    } else if (hoursAgo >= 1) {
        return `${hoursAgo} hours ago`;
    } else if (minutesAgo >= 1) {
        return `${minutesAgo} minutes ago`;
    } else {
        return `${secondsAgo} seconds ago`;
    }
}

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
          <h3 className="text-wrap text-base font-semibold line-clamp-2 h-[3.2rem]">
            {title}
          </h3>

          <p className="font-normal text-gray-500 text-sm">{channelTitle}</p>
         <div className="flex">
          <p className="font-normal text-gray-500 text-sm mr-1">
            {formatViews(viewCount)} views
          </p>
          <p className="font-normal text-gray-500 text-sm">
            • {calculateTimeAgo(publishedAt)} 
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;