const express = require("express");
const {
  getAllSubscribers,
  getSubscriberByNames,
  getSubscriberById,
  handleInvalidRequest,
} = require("../controllers/subscribers");

// Initialize express router
const subscribersRoute = express.Router();

// Define routes
subscribersRoute.get("/", getAllSubscribers);
subscribersRoute.get("/names", getSubscriberByNames);
subscribersRoute.get("/:id", getSubscriberById);
// Catch-all route for invalid requests
subscribersRoute.use(handleInvalidRequest);

// Export the router
module.exports = subscribersRoute;
