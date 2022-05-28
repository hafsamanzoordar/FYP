const express = require("express");
const router = express.Router();
const marketController = require("../controllers/marketController");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken.js");

router.get("/", verifyUser, marketController.searchMarket);

router.get("/", verifyAdmin, marketController.getMarket);

router.get("/", verifyUser, marketController.market_index);

router.get("/getByLocation", verifyUser, marketController.getByLocation);

router.get("/getByType", verifyUser, marketController.getByType);

router.post("/", verifyAdmin, marketController.market_create_post);

router.get("/:id", verifyAdmin, marketController.market_get_by_id);

router.put("/:id", verifyAdmin, marketController.updateMarket);

router.delete("/:id", verifyAdmin, marketController.deleteMarket);

module.exports = router;
