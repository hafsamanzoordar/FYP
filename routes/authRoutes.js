const express = require("express");
const {
  getRegister,
  getLogin,
  register,
  login,
} = require("../controllers/authController.js");

const router = express.Router();

//router.get("/register", getRegister);
//router.get("/login", getLogin);

router.post("/register", register);
router.post("/login", login);

module.exports = router;
