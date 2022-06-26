const express = require("express");
const router = express.Router();
const memberController = require("../controllers/memberController");

router.get("/members", memberController.members);

// router.get("/silverMember", memberController.silverMember);

// router.get("/bronzeMember", memberController.bronzeMember);

//router.get("/showStatus", memberController.showMemberStatus);

module.exports = router;
