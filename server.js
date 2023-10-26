const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
const mongodbURI = process.env.MONGODB_URI; // Ensure this environment variable is correctly set

if (!mongodbURI) {
  console.error("MONGODB_URI environment variable is not set.");
  process.exit(1);
}

mongoose.connect(mongodbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Routes
app.use("/api/users", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes")); // Updated route path for tasks
app.use("/api", require("./routes/emailRoutes"));

// Server Configuration and Startup
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
