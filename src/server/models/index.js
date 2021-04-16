import mongoose from "mongoose";

const Vote = mongoose.Schema({
  showId: { type: Number, required: true, unique: true },
  count: { type: Number, default: 0 },
});

export default mongoose.model("Vote", Vote);
