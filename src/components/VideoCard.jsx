import useChannelDetails from "../utils/useChannelDetails";
import { useSelector } from "react-redux";
import { formatViews, calculateTimeAgo } from "../utils/constant";

const VideoCard = (props) => {
  const showSideBar = useSelector((store) => store.app.showSideBar);
  const { snippet, statistics } = props?.data;
  const { viewCount } = statistics;
  const { title, channelTitle, thumbnails, channelId, publishedAt } = snippet;

  useChannelDetails(channelId);
  const channelUrl = useSelector(
    (store) => store.app.channelDetails[channelId]
  );
  const darkTheme = useSelector((store) => store.app.darkTheme);
  const textColor = darkTheme? ("text-white") : ("text-black");

  return (
    <>
      {showSideBar ? (
        <div className="w-96 mb-8">
          <img
            className="w-full h-auto rounded-lg"
            src={thumbnails?.maxres?.url}
            alt="Thumbnail"
          />
          <div className="flex">
            <img
              className="w-8 h-8 mt-2 mr-3 rounded-full"
              src={channelUrl}
              alt="channel_logo"
            />

            <div className="pr-4 pt-2">
              <h3 className={`${textColor} text-wrap text-base font-semibold line-clamp-2 h-[3.2rem]`}>
                {title}
              </h3>

              <p className="font-normal text-gray-500 text-sm">
                {channelTitle}
              </p>
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
      ) : (
        <div className="w-80 mb-8">
          <img
            className="w-full h-auto rounded-lg"
            src={thumbnails?.maxres?.url}
            alt="Thumbnail"
          />
          <div className="flex">
            <img
              className="w-8 h-8 mt-2 mr-3 rounded-full"
              src={channelUrl}
              alt="channel_logo"
            />

            <div className="pr-4 pt-2">
            <h3 className={`${textColor} text-wrap text-base font-semibold line-clamp-2 h-[3.2rem]`}>
                {title}
              </h3>

              <p className="font-normal text-gray-500 text-sm">
                {channelTitle}
              </p>
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
      )}
    </>
  );
};

export default VideoCard;
