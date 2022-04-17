const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");

// Settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares

// Routes
app.use("/", require("./routes/index.routes"));
app.use("/auth", require("./routes/auth.routes"));
app.use("/dashboard", require("./routes/dashboard.routes"));

// Global variables

module.exports = app;
