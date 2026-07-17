import { tavily } from "@tavily/core";

async function tavilyProvider() {
  const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });
  const query = "software development news today";
  const response = await tvly.search(query, {
    searchDepth: "advanced",
    includeAnswer: "advanced",
  });
  return response;
}

export default tavilyProvider;
