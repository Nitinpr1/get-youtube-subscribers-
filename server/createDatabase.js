const mongoose = require("mongoose");
const subscriberModel = require("./models/subscribers");
const data = require("./data");
const dotenv = require("dotenv");

// Initialize dotenv to load environment variables from .env file
dotenv.config();

const DATABASE_URL = process.env.MONGO_URL;

// Connect to MongoDB
const connectDatabase = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully...");
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1);
  }
};

// Refresh all subscriber data in the database
const refreshAllSubscribers = async () => {
  try {
    await subscriberModel.deleteMany({});
    await subscriberModel.insertMany(data);
    console.log("Subscriber data refreshed successfully..!!");
  } catch (err) {
    console.log("Database creation error:", err);
  } finally {
    mongoose.disconnect();
    console.log("Database disconnected ..!!");
  }
};

// Main function to execute database operations
(async () => {
  await connectDatabase();
  await refreshAllSubscribers();
})();
