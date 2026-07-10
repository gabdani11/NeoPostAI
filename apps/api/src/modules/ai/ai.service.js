import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
export async function generateTrendPost() {
  const model = new ChatGoogleGenerativeAI({
    modelName: "gemini-2.5-flash-lite",
    apiKey: process.env.GOOGLE_API_KEY,
  });
}
