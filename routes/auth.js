const express = require("express");
const authController = require("./../controllers/auth");

const router = express.Router();

router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router
  .route("/verify/:email/:verificationToken")
  .get(authController.verifyEmailAddress);

module.exports = router;
