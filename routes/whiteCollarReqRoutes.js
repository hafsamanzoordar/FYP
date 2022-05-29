const express = require("express");
const router = express.Router();
const whiteCollarReqController = require("../controllers/whiteCollarReqController");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken.js");

router.get("/getWhiteCollarRequest", whiteCollarReqController.getCollarReq);

router.get("/", whiteCollarReqController.whiteCollarReq_index);

router.get("/approve/:id", whiteCollarReqController.approve_collar);

router.get("/decline/:id", whiteCollarReqController.decline_collar);

router.post("/", whiteCollarReqController.whiteCollarReq_create_post);

router.get("/:id", whiteCollarReqController.whiteCollarReq_get_by_id);

router.put("/:id", whiteCollarReqController.updatewhiteCollarReq);

router.delete(
  "/:id",
  verifyAdmin,
  whiteCollarReqController.deletewhiteCollarReq
);

module.exports = router;
