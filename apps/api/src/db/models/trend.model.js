import mongoose from "mongoose";

const trendAnalysisSchema = new mongoose.Schema(
  {
    contentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Content",
      required: true,
      unique: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },

    summary: {
      type: String,
      required: true,
      trim: true,
    },

    trendScore: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },

    category: {
      primary: {
        type: String,
        required: true,
      },

      secondary: {
        type: [String],
        default: [],
      },
    },

    sentiment: {
      type: String,
      enum: ["positive", "neutral", "negative"],
      required: true,
    },

    keywords: {
      type: [String],
      default: [],
    },

    keyPoints: {
      type: [String],
      default: [],
    },

    hashtags: {
      type: [String],
      default: [],
    },

    audience: {
      type: [String],
      default: [],
    },

  },
  {
    timestamps: true,
  },
);

const TrendAnalysisModel = mongoose.model("TrendAnalysis", trendAnalysisSchema);

export default TrendAnalysisModel;
