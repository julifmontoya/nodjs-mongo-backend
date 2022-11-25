const { Schema, model } = require("mongoose");

const hotelSchema = new Schema({
  name: String,
  description: String,
  check_in: String,
  check_out: String,
  num_rooms: String,
  stars: String,
  address: String,
  latitude: String,
  longitude: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Hotel", hotelSchema);
