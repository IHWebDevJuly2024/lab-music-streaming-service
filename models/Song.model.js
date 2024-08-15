const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const songSchema = new mongoose.Schema({
  title: String,
  releaseYear: Number,
  album: { type: Schema.Types.ObjectId, ref: "Album" },
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song

