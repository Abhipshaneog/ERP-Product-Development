// routes/authRoutes.js

const express = require("express");
const loginController = require("../controllers/authController/loginController");
const registerController = require("../controllers/authController/registerController");
const logoutController = require("../controllers/authController/logoutController");
const googleLoginController = require("../controllers/authController/googleLoginController");
const verifyTokens = require("../middlewares/tokenMiddleware");
const checkIfUserLoggedIn = require("../middlewares/googleLoginMiddleware");

const {
  requestPasswordReset,
  completePasswordReset,
} = require("../controllers/authController/passwordResetController");
const router = express.Router();

// Authentication Routes
router.post("/login", verifyTokens, loginController.login);
router.post("/register", verifyTokens, registerController.register);
router.post("/logout", logoutController.logout);
router.post("/google-login", checkIfUserLoggedIn, googleLoginController.login);

//password reset route
router.post("/password-reset/request", requestPasswordReset);
router.post("/password-reset/complete", completePasswordReset);

module.exports = router;
