const express = require("express");
const router = express.Router();
const janazaReqController = require("../controllers/janazaReqController");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken.js");

router.get("/getJanazaRequest", verifyUser, janazaReqController.getjanazaReq);

router.get("/", verifyAdmin, janazaReqController.janazaReq_index);

router.post("/", verifyUser, janazaReqController.janazaReq_create_post);

router.get("/:id", verifyAdmin, janazaReqController.janazaReq_get_by_id);

router.put("/:id", verifyAdmin, janazaReqController.updatejanazaReq);

router.delete("/:id", verifyAdmin, janazaReqController.deletejanazaReq);

module.exports = router;
