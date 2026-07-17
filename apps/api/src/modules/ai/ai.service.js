import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { SystemMessage, HumanMessage } from "@langchain/core/messages";
import { preProcessData } from "./preprocess.js";
import { trendAnalysisArraySchema } from "./trendAnalysisSchema.js";

const systemPrompt = new SystemMessage(
  `
You are an expert technology trend analyst and content writer.

Analyze each input article independently and generate exactly ONE trend post for each input article.

Your goal is to transform the article into an engaging, informative post that highlights the most important and newsworthy takeaway.

Guidelines:
- Generate exactly ONE trend post per input article.
- Focus on the single most significant announcement, event, or development.
- Write a concise, attention-grabbing title.
- Write a clear and engaging summary in 2–3 sentences suitable for a tech news feed.
- Assign a trendScore between 0 and 100 based on the significance and relevance of the news.
- Determine the most appropriate primary and secondary category.
- Determine the sentiment as positive, neutral, or negative.
- Return exactly 3 relevant keywords.
- Return 3–5 key points highlighting the most important information.
- Return exactly 4 relevant hashtags.
- Return 2–4 audience groups who would find this news relevant.

Always respond in English.

Do not invent facts, exaggerate claims, or include information not supported by the article.

Return the results in the same order as the input articles.
  `,
);

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: process.env.GOOGLE_API_KEY,
});
const structuredModel = model.withStructuredOutput(trendAnalysisArraySchema);

export async function generateTrendPost(data) {
  const { aiInput, idMap } = preProcessData(data);

  const messages = [systemPrompt, new HumanMessage(JSON.stringify(aiInput))];

  const analyses = await structuredModel.invoke(messages);
  return analyses.map((analysis, index) => ({
    contentId: idMap[index],
    ...analysis,
  }));
}
