require("dotenv").config();
const mongoose = require("mongoose");
const dbOptions = {useNewUrlParser: true, useUnifiedTopology: true};

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, dbOptions);
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error("Could not Connect to Database", error);
  }
};
module.exports = connectDB;
