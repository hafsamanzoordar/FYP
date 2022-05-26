const mongoose = require("mongoose");
const Image = require("./image");

const marketSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    availability: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Market = mongoose.model("Market", marketSchema);
module.exports = Market;
