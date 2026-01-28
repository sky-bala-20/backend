const express = require("express");
require("dotenv").config();
const connectDB = require("./connectDB");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 4000;

connectDB();

app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
