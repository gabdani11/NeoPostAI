import router from "express";
import { youtubeController, analyzeTrendController, tavilyController, getTrendAnalysisController } from "./ingestion.controller.js";


const ingestionRouter = router();

/**
 * @route GET /api/ingestion/youtube
 * @desc Fetch and save YouTube data
 * @access Public
 */

ingestionRouter.get("/youtube", youtubeController);

/**
 * @route GET /api/ingestion/analyze-trend
 * @desc Analyze trends from the ingested content using AI
 * @access Public
 */
ingestionRouter.get("/analyze-trend", analyzeTrendController);

/**
 * @route GET /api/ingestion/tavily
 * @desc Fetch and save Tavily data
 * @access Public
 */

ingestionRouter.get("/tavily", tavilyController);
/**
 * @route GET /api/ingestion/get-trend
 * @desc Get trend analysis from the ingested content using AI
 * @access Public
 */

ingestionRouter.get("/get-trend", getTrendAnalysisController);





export default ingestionRouter;
