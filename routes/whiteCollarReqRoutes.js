const express = require("express");
const router = express.Router();
const whiteCollarReqController = require("../controllers/whiteCollarReqController");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken.js");

router.get("/getWhiteCollarRequest", whiteCollarReqController.getCollarReq);

router.get("/", whiteCollarReqController.whiteCollarReq_index);

router.post("/", whiteCollarReqController.whiteCollarReq_create_post);

router.get("/:id", whiteCollarReqController.whiteCollarReq_get_by_id);

router.put("/:id", whiteCollarReqController.updatewhiteCollarReq);

router.delete(
  "/:id",
  verifyAdmin,
  whiteCollarReqController.deletewhiteCollarReq
);

module.exports = router;
