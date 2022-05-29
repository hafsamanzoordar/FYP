const janazaReq = require("../models/janazaReq");

const getjanazaReq = async (req, res) => {
  res.render("../views/requests/janazaRequests/janaza.ejs");
};

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

const approve_janaza = async (req, res) => {
  try {
    const id = req.params.id;

    const request = await janazaReq.findById(id);
    if (request) {
      request.status = "Approved";
      console.log(request);
      request.save();
      return res.status(200);
    } else {
      return res.status(403);
    }
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(403);
  }
};
const decline_janaza = async (req, res) => {
  try {
    const id = req.params.id;
    const request = await janazaReq.findById(id);
    if (request) {
      request.status = "Declined";
      request.save();
      return res.status(200);
    } else {
      return res.status(403);
    }
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(403);
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
  getjanazaReq,
  approve_janaza,
  decline_janaza,
};
