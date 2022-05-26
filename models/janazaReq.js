const mongoose = require("mongoose");

const janazaReqSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cnic: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    relation: {
      type: String,
      required: true,
    },
    dName: {
      type: String,
      required: true,
    },
    dCnic: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    deathDate: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const janazaReq = mongoose.model("janazaReq", janazaReqSchema);
module.exports = janazaReq;
