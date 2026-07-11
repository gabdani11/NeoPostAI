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
    metadata: { type: mongoose.Schema.Types.Mixed, default: {} },
    createdAtSource: { type: Date, required: true },
    fetchedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);
contentSchema.index(
  {
    platform: 1,
    postId: 1,
  },
  {
    unique: true,
  },
);
const contentModel = mongoose.model("Content", contentSchema);

export default contentModel;
