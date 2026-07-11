import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { SystemMessage, HumanMessage } from "@langchain/core/messages";
import { preProcessData } from "./preprocess.js";
import { trendAnalysisArraySchema } from "./trendAnalysisSchema.js";

const systemPrompt = new SystemMessage(
  `
You are an expert trend analyst.

Analyze each content item independently.

Use the title, text, and engagement metrics to determine why the content is trending.

Always generate your response in English, regardless of the language of the input content. If the input is in Hindi, Tamil, Bengali, or any other language, first understand it and then produce the analysis entirely in English.

Guidelines:
- Generate a concise, descriptive title.
- Write a summary in 2–3 sentences.
- Assign a trendScore between 0 and 100 based on popularity and engagement.
- Determine the most appropriate category.
- Determine the sentiment as one of: positive, neutral, or negative.
- Return exactly 3 relevant keywords.
- Return 3–5 key points.
- Return exactly 4 relevant hashtags.
- Return 2–4 audience groups.

Analyze every item in the order provided and return the results in the same order.

Do not invent facts that are not supported by the content.
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
