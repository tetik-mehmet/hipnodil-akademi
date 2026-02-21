import mongoose from "mongoose";

const VideoProgressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  videoId: {
    type: String,
    required: true,
    trim: true,
  },
  videoTitle: {
    type: String,
    trim: true,
    default: "",
  },
  totalDuration: {
    type: Number,
    default: 0,
  },
  lastPosition: {
    type: Number,
    default: 0,
  },
  totalWatchTime: {
    type: Number,
    default: 0,
  },
  percentWatched: {
    type: Number,
    default: 0,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  watchDates: {
    type: [String],
    default: [],
  },
});

VideoProgressSchema.index({ userId: 1, videoId: 1 }, { unique: true });

// Development'ta hot-reload sırasında eski (watchDates'siz) schema cache'i temizle
if (process.env.NODE_ENV !== "production" && mongoose.models.VideoProgress) {
  delete mongoose.models.VideoProgress;
}

export default mongoose.models.VideoProgress ||
  mongoose.model("VideoProgress", VideoProgressSchema);
