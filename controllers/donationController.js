const Donation = require("../models/donation");

const getDonation = async (req, res) => {
  res.render("../views/donations/donation.ejs");
};

const update = async (req, res) => {
  const update_donation = new Donation.findById(req.params.id);
  res.status(200).render("../views/donations/update.ejs");
};

const donation_index = async (req, res, next) => {
  try {
    const donations = await Donation.find();
    res.status(200).json(donations);
  } catch (err) {
    next(err);
  }
};

const donation_create_post = async (req, res) => {
  console.log("request recieved");
  const newDonation = new Donation(req.body);
  try {
    const savedDonation = await newDonation.save();
    res.status(200).json(savedDonation);
  } catch {
    (err) => {
      res.status(500).json(err);
      console.log(err);
    };
  }
};

const updateDonation = async (req, res, next) => {
  try {
    const updatedDonation = await Donation.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.render("../views/donations/update.ejs");
    res.status(200).json(updatedDonation);
  } catch (err) {
    next(err);
  }
};

const deleteDonation = async (req, res, next) => {
  try {
    await Donation.findByIdAndDelete(req.params.id);
    res.status(200).json("Donation has been deleted.");
  } catch (err) {
    next(err);
  }
};

const donation_get_by_id = async (req, res) => {
  try {
    const getDonation = await Donation.findById(req.params.id);
    res.status(200).json(getDonation);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  donation_index,
  donation_create_post,
  donation_get_by_id,
  updateDonation,
  deleteDonation,
  getDonation,
  update,
};
