const janazaReq = require("../models/janazaReq");

const janazaReq_index = async (req, res, next) => {
  try {
    const janaza = await janazaReq.find();
    res.status(200).json(janaza);
  } catch (err) {
    next(err);
  }
};

const janazaReq_create_post = async (req, res) => {
  const newJanazaReq = new janazaReq(req.body);

  try {
    const savedJanazaReq = await newJanazaReq.save();
    res.status(200).json(savedJanazaReq);
  } catch {
    (err) => {
      res.status(500).json(err);
      console.log(err);
    };
  }
};

const updatejanazaReq = async (req, res, next) => {
  try {
    const updatedJanazaReq = await janazaReq.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedJanazaReq);
  } catch (err) {
    next(err);
  }
};

const deletejanazaReq = async (req, res, next) => {
  try {
    await janazaReq.findByIdAndDelete(req.params.id);
    res.status(200).json("Request has been deleted.");
  } catch (err) {
    next(err);
  }
};

const janazaReq_get_by_id = async (req, res) => {
  try {
    const getJanazaReq = await janazaReq.findById(req.params.id);
    res.status(200).json(getJanazaReq);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  janazaReq_index,
  janazaReq_create_post,
  janazaReq_get_by_id,
  updatejanazaReq,
  deletejanazaReq,
};
