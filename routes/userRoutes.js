const express = require("express");
const userController = require("../controllers/userController.js");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken.js");

const router = express.Router();

router.get("/", verifyAdmin, userController.user_index);

router.get("/:id", verifyAdmin, userController.user_get_by_id);

router.put("/:id", verifyUser, userController.updateUser);

router.delete("/:id", verifyAdmin, userController.deleteUser);

module.exports = router;
