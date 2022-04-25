require("dotenv").config();
const mongoose = require('mongoose');

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connection SUCCESS");
  } catch (error) {
    console.error("MongoDB Connection FAILED");
    process.exit(1);
  }
};

module.exports = connectDB;