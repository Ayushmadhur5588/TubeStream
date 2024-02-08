export const youtubeLogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/640px-YouTube_Logo_2017.svg.png";
export const hamburgerIcon =
  "https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=webp&w=512";
export const userIcon =
  "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png";

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

export const youTubeApi = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&key="+process.env.REACT_APP_GOOGLE_API_KEY;

export const watchVideoUrl = "https://www.youtube.com/watch?";
export const channelDetail = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UClfos9f7uDdoun8ZyE9jYFg&key=${apiKey}`;
