const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const playlistSchema = new mongoose.Schema({
  name: String,
  songs: [{ type: Schema.Types.ObjectId, ref: "Song" }],
});


const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = Playlist