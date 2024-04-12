const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const subscribersRoute = require("./routes/subscriberRoute.js");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const swaggerSpecification = require("./swaggerOptions");

// initialize express application
const app = express();

dotenv.config();

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//
//HOME PAGE
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html")); // return the index.html file as the home page
});

// Use the subscribers route
app.use("/subscribers", subscribersRoute);

// Serve the Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecification));

// Catch-all route for invalid requests
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" }); // Send a JSON response with a status of 404 (Not Found)
});

module.exports = app;
