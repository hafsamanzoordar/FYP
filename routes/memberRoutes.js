const express = require("express");
const router = express.Router();
const memberController = require("../controllers/memberController");

router.get("/goldMember", memberController.goldMember);

router.get("/silverMember", memberController.silverMember);

router.get("/bronzeMember", memberController.bronzeMember);

module.exports = router;
