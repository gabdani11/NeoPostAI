import router from "express";
import { youtubeController } from "./ingestion.controller.js";

const ingestionRouter = router();

ingestionRouter.get("/youtube", youtubeController);

export default ingestionRouter;
