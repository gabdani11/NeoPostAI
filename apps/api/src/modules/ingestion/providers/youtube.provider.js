import axios from "axios";

async function youtubeProvider() {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&part=snippet,statistics&videoCategoryId=28&regionCode=IN&maxResults=2&key=${process.env.YOUTUBE_API_KEY}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching YouTube data:", error);
    throw error;
  }
}
export default youtubeProvider;
