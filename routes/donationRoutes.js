const express = require("express");
const router = express.Router();
const donationController = require("../controllers/donationController");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken.js");

router.get("/getDonation", verifyUser, donationController.getDonation);

router.get("/", verifyAdmin, donationController.donation_index);

router.post("/", verifyUser, donationController.donation_create_post);

router.get("/:id", verifyAdmin, donationController.donation_get_by_id);

router.put("/:id", verifyAdmin, donationController.updateDonation);

router.delete("/:id", verifyAdmin, donationController.deleteDonation);

module.exports = router;
