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
        engagement: {
          likes: item.statistics.likeCount,
          comments: item.statistics.commentCount,
          shares: 0, // YouTube API does not provide share count
          views: item.statistics.viewCount,
          upvotes: 0, // YouTube API does not provide upvote count
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
