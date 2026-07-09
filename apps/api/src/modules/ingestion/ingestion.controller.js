import contextModel from "../../db/models/content.model.js";
import youtubeProvider from "./providers/youtube.provider.js";
import { normalizeData } from "./normalization/normalization.js";

export async function youtubeController(req, res) {
  try {
    const result = await youtubeProvider();
    const normalizedResult = normalizeData(result, "youtube");
    const savedResult = await contextModel.insertMany(normalizedResult);

    res.status(200).json({
      message: "YouTube data fetched and saved successfully",
      savedResult,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching or saving YouTube data",
      error: error.message,
    });
  }
}
