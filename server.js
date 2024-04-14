// server.js
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth.js");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

// Connect to MongoDB
mongoose
  .connect("mongourl here")
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
