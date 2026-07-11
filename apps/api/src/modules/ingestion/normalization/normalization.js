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
    default:
      return [];
  }
}
