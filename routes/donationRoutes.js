const express = require("express");
const router = express.Router();
const donationController = require("../controllers/donationController");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken.js");

//router.get("/update", verifyAdmin, donationController.update);

//router.get("/update/:id", verifyAdmin, donationController.update);

router.get("/getDonation", donationController.getDonation);

router.get("/", donationController.donation_index);

router.post("/", donationController.donation_create_post);

router.get("/:id", donationController.donation_get_by_id);

router.put("/:id", donationController.updateDonation);

router.delete("/:id", donationController.deleteDonation);

module.exports = router;
