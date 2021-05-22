const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restroomSchema = new Schema({
  address: { type: String, required: true },
  lat: { type: Number, required: true },
  long: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Restroom = mongoose.model("Restroom", restroomSchema);

module.exports = Restroom;
