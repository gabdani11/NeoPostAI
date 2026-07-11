import { z } from "zod";

export const trendAnalysisSchema = z.object({
  title: z.string(),

  summary: z.string(),

  trendScore: z.number().min(0).max(100),

  category: z.object({
    primary: z.string(),
    secondary: z.array(z.string()),
  }),

  sentiment: z.enum(["positive", "neutral", "negative"]),

  keywords: z.array(z.string()).length(3),

  keyPoints: z.array(z.string()),

  hashtags: z.array(z.string()).length(4),

  audience: z.array(z.string()),
});

export const trendAnalysisArraySchema = z.array(trendAnalysisSchema);
