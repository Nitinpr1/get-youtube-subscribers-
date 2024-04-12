const Subscriber = require("../models/subscribers.js");
const { ObjectId } = require("mongoose").Types;

// getting all subscribers

const getAllSubscribers = async (req, res) => {
  try {
    const subs = await Subscriber.find();
    if (subs) {
      res.status(200).json(subs);
    } else {
      res.status(404).json({ message: "No Subscribers found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//getting  subscribers by name

const getSubscriberByNames = async (req, res) => {
  try {
    let subscribers = await Subscriber.find(
      {},
      { name: 1, subscribedChannel: 1, _id: 0 }
    ); // Retrieve subscribers with only the name and subscribedChannel fields from the  database

    if (subscribers) {
      res.status(200).json(subscribers);
    }
    // Send the subscribers as a JSON response with a status of 200 (OK)
    else {
      res.status(404).json({ message: "No Subscriber found by this name" });
    } //
  } catch (err) {
    // If an error occurs, send a 500 Internal Server Error status code
    res.status(500).json({ message: err.message });
  }
};

//getting the subscriber by Id

const getSubscriberById = async (req, res) => {
  try {
    const id = req.params.id; // Extract the ID parameter from the request URL
    if (!id) {
      res.status(400).json({ message: "Please enter the ID" }); // Send a JSON response with a status of 400 (Bad Request)
      return;
    }
    const subscriber = await Subscriber.findById({ _id: new ObjectId(id) });
    // Find a subscriber with the given ID in the schema/model
    if (subscriber) {
      res.status(200).json(subscriber);
    }
    // If the subscriber is not found, send a 404 Not Found status code
    else {
      res.status(404).json({ message: "Subscriber not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const handleInvalidRequest = (req, res) => {
  res.status(404).json({ message: "Invalid request" });
};
// Export controller functions
module.exports = {
  getAllSubscribers,
  getSubscriberByNames,
  getSubscriberById,
  handleInvalidRequest,
};
