const mongoose = require("mongoose");
const data = require("./data.js");
const Artist = require("./models/Artist.model.js");
const Album = require("./models/Album.model.js");
const Song = require("./models/Song.model.js");
const Playlist = require("./models/Playlist.model.js");



require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then((res) => {
    console.log("Connected to the database:", res.connections[0].name);
  })
  .then(()=>{
    return Promise.all([
        Artist.insertMany(data.artists),
        Album.insertMany(data.albums),
        Song.insertMany(data.songs),
        Playlist.insertMany(data.playlists),
      ])
  })
  .catch((err) => {
    console.error("Error connecting to the database: ", err);
  });

  
