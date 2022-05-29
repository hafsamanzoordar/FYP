const express = require("express");
const router = express.Router();
const janazaReqController = require("../controllers/janazaReqController");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken.js");

router.get("/getJanazaRequest", janazaReqController.getjanazaReq);

router.get("/", janazaReqController.janazaReq_index);

router.post("/", janazaReqController.janazaReq_create_post);

router.get("/:id", janazaReqController.janazaReq_get_by_id);

router.put("/:id", janazaReqController.updatejanazaReq);

router.delete("/:id", janazaReqController.deletejanazaReq);

module.exports = router;
