const Donation = require("../models/donation");

const goldMember = async (req, res, next) => {
  const data = await Donation.aggregate([
    {
      $group: {
        _id: "$email",
        total: { $sum: "$amount" },
      },
    },
    {
      $match: { total: { $gte: 100000 } },
    },
  ]);
  res.send(data);
};

const silverMember = async (req, res, next) => {
  const data = await Donation.aggregate([
    {
      $group: {
        _id: "$email",
        total: { $sum: "$amount" },
      },
    },
    {
      $match: { total: { $gte: 50000, $lt: 100000 } },
    },
  ]);
  res.send(data);
};

const bronzeMember = async (req, res, next) => {
  const data = await Donation.aggregate([
    {
      $group: {
        _id: "$email",
        total: { $sum: "$amount" },
      },
    },
    {
      $match: { total: { $gte: 25000, $lt: 50000 } },
    },
  ]);
  res.send(data);
};

module.exports = { goldMember, silverMember, bronzeMember };
