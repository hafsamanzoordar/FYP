const express = require("express");
const {
  getRegister,
  getLogin,
  register,
  login,
} = require("../controllers/authController.js");

const router = express.Router();

router.post("/register", getRegister);
router.post("/login", getLogin);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
