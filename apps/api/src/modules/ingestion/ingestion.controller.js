import contentModel from "../../db/models/content.model.js";
import trendAnalysisModel from "../../db/models/trend.model.js";
import youtubeProvider from "./providers/youtube.provider.js";
import tavilyProvider from "./providers/tavily.provider.js";
import { normalizeData } from "./normalization/normalization.js";
import { generateTrendPost } from "../../modules/ai/ai.service.js";

export async function youtubeController(req, res) {
  try {
    const result = await youtubeProvider();
    const normalizedResult = normalizeData(result, "youtube");
    const savedResult = await contentModel.insertMany(normalizedResult);

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

export async function analyzeTrendController(req, res) {
  try {
    const content = await contentModel.find({ processingStatus: "pending" });
    if (content.length === 0) {
      return res.status(404).json({
        message: "No processed content found for trend analysis",
      });
    }
    const aiResponse = await generateTrendPost(content);

    const trendContent = await trendAnalysisModel.insertMany(aiResponse);

    res.status(200).json({
      message: "Trend analysis completed successfully",
      trendContent,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error analyzing trend",
      error: error.message,
    });
  }
}

export async function tavilyController(req, res) {
  try {
    const result = await tavilyProvider();
    const normalizedResult = normalizeData(result, "travily");
    const savedResult = await contentModel.insertMany(normalizedResult);
    res.status(200).json({
      message: "Tavily data fetched successfully",
      savedResult,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Tavily data",
      error: error.message,
    });
  }
}

export async function getTrendAnalysisController(req, res) {
  try{
    const trendAnalysis = await trendAnalysisModel.find();
    if (!trendAnalysis || trendAnalysis.length === 0) {
      return res.status(404).json({
        message: "No trend analysis found",
      });
    }
    res.status(200).json({
      message: "Trend analysis fetched successfully",
      trendAnalysis,
    });

  }catch (error) {
    res.status(500).json({
      message: "Error fetching trend analysis",
      error: error.message,
    });
  }
}
