import crypto from "crypto";
export function normalizeData(data, provider) {
  switch (provider) {
    case "youtube":
      return data.items.map((item) => ({
        platform: provider,
        postId: item.id,
        author: item.snippet.channelTitle,
        title: item.snippet.title,
        text: item.snippet.description,
        url: `https://www.youtube.com/watch?v=${item.id}`,
        metrics: {
          likes: item.statistics.likeCount,
          comments: item.statistics.commentCount,
          shares: null, // YouTube API does not provide share count
          views: item.statistics.viewCount,
          upvotes: null, // YouTube API does not provide upvote count
        },
        metadata: {
          categoryId: item.snippet.categoryId,
          tags: item.snippet.tags || [],
        },
        createdAtSource: new Date(item.snippet.publishedAt),
        fetchedAt: new Date(),
      }));
      breakl;
    case "travily":
      return data.results.map((item) => ({
        platform: provider,
        postId: crypto.createHash("sha1").update(item.url).digest("hex"),
        author: null,
        title: item.title,
        text: item.raw_content || item.content || "",
        url: item.url,
        metrics: {
          likes: null,
          comments: null,
          shares: null,
          views: null,
          upvotes: null,
        },
        metadata: {
          score: item.score,
          content: item.content,
          images: item.images || [],
          favicon: item.favicon || null,
        },

        createdAtSource: item.published_date
          ? new Date(item.published_date)
          : null,

        fetchedAt: new Date(),
      }));

    default:
      return [];
  }
}
