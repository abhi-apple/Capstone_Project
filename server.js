const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth.js");

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Add this line to enable CORS

// Routes
app.use("/auth", authRoutes);

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://priya:priya@cluster0.lnymnut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server
    const PORT = process.env.PORT || 4242;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
