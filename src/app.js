require("dotenv").config();
const express = require("express");
const Routes = require("./routes/index");

const app = express();

// Settings
app.set("port", process.env.PORT);
app.use(express.json())

// Middleware
const cors =require('cors')
app.use(cors())

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to express" });
});

app.use('/v1', Routes)
module.exports = app;
