const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");

require("./strategies/discordStrategy");
const app = express();

// Settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(
  session({
    secret: "Some secret uwu",
    saveUninitialized: false,
    resave: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", require("./routes/index.routes"));
app.use("/auth", require("./routes/auth.routes"));
app.use("/dashboard", require("./routes/dashboard.routes"));

// Global variables

module.exports = app;
