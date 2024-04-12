// this file is responsible for connecting to the server and database
const app = require("./app.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//configuration of environment variables

dotenv.config();

const PORT = process.env.PORT || 6001;

// start the server with the port

const server = app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});

// connect to the database
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to MongoDB`);
  })
  .catch((err) => {
    console.error(`Error connecting to MongoDB: ${err}`);
  });

module.exports = server; // Export the server instance
