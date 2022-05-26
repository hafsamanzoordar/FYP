const Request = require("../models/whiteCollarReq");

const whiteCollarReq_index = async (req, res, next) => {
  try {
    const whiteCollarReq = await Request.find();
    res.status(200).json(whiteCollarReq);
  } catch (err) {
    next(err);
  }
};

const whiteCollarReq_create_post = async (req, res) => {
  const newWhiteCollarReq = new Request(req.body);

  try {
    const savedWhiteCollarReq = await newWhiteCollarReq.save();
    res.status(200).json(savedWhiteCollarReq);
  } catch {
    (err) => {
      res.status(500).json(err);
      console.log(err);
    };
  }
};

const updatewhiteCollarReq = async (req, res, next) => {
  try {
    const updatedWhiteCollarReq = await Request.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedWhiteCollarReq);
  } catch (err) {
    next(err);
  }
};

const deletewhiteCollarReq = async (req, res, next) => {
  try {
    await Request.findByIdAndDelete(req.params.id);
    res.status(200).json("Request has been deleted.");
  } catch (err) {
    next(err);
  }
};

const whiteCollarReq_get_by_id = async (req, res) => {
  try {
    const getWhiteCollarReq = await Request.findById(req.params.id);
    res.status(200).json(getWhiteCollarReq);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  whiteCollarReq_index,
  whiteCollarReq_create_post,
  whiteCollarReq_get_by_id,
  updatewhiteCollarReq,
  deletewhiteCollarReq,
};
