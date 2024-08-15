const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const albumSchema = new mongoose.Schema({
  title: String,
  releaseYear: Number,
  artist: { type: Schema.Types.ObjectId, ref: "Artist" },
});

const Album = mongoose.model("Album", albumSchema);

module.exports = Album
