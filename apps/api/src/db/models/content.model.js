import mongoose from "mongoose";

const contentSchema = new mongoose.Schema(
  {
    platform: {
      type: String,
      enum: ["youtube", "x", "reddit"],
      required: true,
      index: true,
    },
    postId: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
    },
    engagement: {
      likes: { type: Number, default: 0 },
      comments: { type: Number, default: 0 },
      shares: { type: Number, default: 0 },
      views: { type: Number, default: 0 },
      upvotes: { type: Number, default: 0 },
    },
    metadata: { type: mongoose.Schema.Types.Mixed, default: {} },
    createdAtSource: { type: Date, required: true },
    fetchedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);
const contextModel = mongoose.model("Content", contentSchema);

export default contextModel;
