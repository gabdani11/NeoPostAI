import router from "express";
import { youtubeController, analyzeTrendController, tavilyController } from "./ingestion.controller.js";


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

ingestionRouter.get("/tavily", tavilyController);

export default ingestionRouter;
