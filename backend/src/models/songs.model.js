const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  audio: String,
  cover: String,
  mood: String,
})
const SongModel = mongoose.model('Song', songSchema);

module.exports = SongModel;