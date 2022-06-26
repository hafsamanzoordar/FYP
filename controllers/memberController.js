const Donation = require("../models/donation");

const members = async (req, res, next) => {
  const goldMembers = await Donation.aggregate([
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
  const silverMembers = await Donation.aggregate([
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
  const bronzeMembers = await Donation.aggregate([
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
  res.send({ goldMembers, bronzeMembers, silverMembers });
};

// const silverMember = async (req, res, next) => {
//   const data = await Donation.aggregate([
//     {
//       $group: {
//         _id: "$email",
//         total: { $sum: "$amount" },
//       },
//     },
//     {
//       $match: { total: { $gte: 50000, $lt: 100000 } },
//     },
//   ]);
//   res.send(data);
// };

// const bronzeMember = async (req, res, next) => {
//   const data = await Donation.aggregate([
//     {
//       $group: {
//         _id: "$email",
//         total: { $sum: "$amount" },
//       },
//     },
//     {
//       $match: { total: { $gte: 25000, $lt: 50000 } },
//     },
//   ]);
//   res.send(data);
// };

// const showMemberStatus = async (req, res, next) => {
//   const data = await Donation.aggregate([
//     {
//       $group: {
//         _id: "$email",
//         total: { $sum: "$amount" },
//       },
//     },
//     {
//       $cond: [
//         { $gte: ["$total", 100000] },
//         res.send("Gold Member"),
//         res.send("Silver Member"),
//       ],
//     },
//   ]);
//   //res.send(data);
// };

module.exports = { members };
