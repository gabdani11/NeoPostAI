import mongoose from "mongoose";

const contentSchema = new mongoose.Schema(
  {
    platform: {
      type: String,
      required: true,
      enum: ["twitter", "linkedin", "facebook", "travily", "youtube"],
    },

    postId: {
      type: String,
      default: null,
    },

    author: {
      type: String,
      default: null,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    text: {
      type: String,
      default: "",
      trim: true,
    },

    url: {
      type: String,
      required: true,
      trim: true,
    },

    metrics: {
      likes: { type: Number, default: null },
      comments: { type: Number, default: null },
      shares: { type: Number, default: null },
      views: { type: Number, default: null },
      upvotes: { type: Number, default: null },
    },

    processingStatus: {
      type: String,
      enum: ["pending", "processing", "processed", "failed"],
      default: "pending",
    },

    metadata: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },

    createdAtSource: {
      type: Date,
      default: null,
    },

    fetchedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Unique for providers that have a postId (YouTube, Twitter, etc.)
contentSchema.index(
  { platform: 1, postId: 1 },
  {
    unique: true,
    partialFilterExpression: {
      postId: { $exists: true, $ne: null },
    },
  }
);

// Unique for all providers (especially Tavily)
contentSchema.index(
  { platform: 1, url: 1 },
  { unique: true }
);

const ContentModel = mongoose.model("Content", contentSchema);

export default ContentModel;