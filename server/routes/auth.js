const express = require("express");
const passport = require("passport");
const AuthController = require("../controllers/auth");
const router = express.Router();

router
  .get(
    "/oauth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
      session: false
    })
  )
  .get(
    "/oauth/facebook",
    passport.authenticate("facebook", {
      scope: ["email"],
      session: false
    })
  )
  .get(
    "/oauth/google/callback",
    passport.authenticate("google", { session: false }),
    AuthController.oAuthLogin
  )

  .get(
    "/oauth/facebook/callback",
    passport.authenticate("facebook", { session: false }),
    AuthController.oAuthLogin
  )
  .post("/api/auth/local/password_reset", AuthController.resetPassword)
  .post(
    "/api/auth/local/password_new",
    passport.authenticate("jwt", { session: false }),
    AuthController.setNewPassword
  )
  .post("/api/auth/local/login", AuthController.localLogin)
  .post("/api/auth/local/register", AuthController.localRegister);

module.exports = router;
