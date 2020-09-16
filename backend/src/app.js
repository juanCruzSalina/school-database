// Initialization of Express
const express = require("express");
const cors = require("cors");
const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/students", require("./routes/Students"));
app.use("/api/teachers", require("./routes/Teachers"));

module.exports = app;
