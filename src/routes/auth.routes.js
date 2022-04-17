const { Router } = require("express");
const router = Router();
const passport = require("passport");
const { isNotAuthorized } = require("../utils/auth");

router.get("/login", isNotAuthorized, passport.authenticate("discord"));
router.get(
  "/redirect",
  passport.authenticate("discord", {
    successRedirect: "/dashboard",
    failureRedirect: "/",
  })
);
router.get("/logout", (req, res) => {
  if (req.user) req.logOut();
  res.redirect("/");
});

module.exports = router;
