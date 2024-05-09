export const youtubeLogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/640px-YouTube_Logo_2017.svg.png";
export const youtubeLogoDark =
  "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png";

export const hamburgerIcon =
  "https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=webp&w=512";
export const hamburgerIconDark =
  "https://www.citypng.com/public/uploads/preview/transparent-hd-white-menu-burger-icon-31634946136ufll2pj5eo.png";

export const userIcon =
  "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png";

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

export const youTubeApi =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=NZ&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;

export const watchVideoUrl = "https://www.youtube.com/watch?";
export const channelDetail = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UClfos9f7uDdoun8ZyE9jYFg&key=${apiKey}`;
export const shortsIcon =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/Youtube_shorts_icon.svg";
export const formatViews = (views) => {
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

export const calculateTimeAgo = (publishedAt) => {
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
};

export const buttonList = [
  { filterName: "All" },
  { filterName: "All" },
  { filterName: "All" },
  { filterName: "All" },
  { filterName: "All" },
  { filterName: "All" },
  { filterName: "All" },
  { filterName: "All" },
  { filterName: "All" },
  { filterName: "All" },
  { filterName: "All" },
  { filterName: "All" },
  { filterName: "All" },
  { filterName: "All" },
  { filterName: "All" },
  { filterName: "All" },
  { filterName: "All" },
  { filterName: "All" },
  { filterName: "All" },
];
