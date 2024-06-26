# Almabetter backend project: GET YouTube Subscriber API

This Node.js application provides an API to get the data of YouTube subscribers. It is built with Express.js and MongoDB Atlas, allowing users to perform READ operation on subscriber data.

## Features 🌟
- GET /subscribers: Retrieves an array of subscribers with their name, subscribed channel, and time.
- GET /subscribers/names: Retrieves only the name of the subscriber and the subscribed channel name.
- GET /subscribers/:id: Retrieves a subscriber by their ID.

## Prerequisites 🛠️
Before running the application, make sure you have the following installed:
- Node js
- express js
- MongoDB or mongoDB atlas account

## Installation
1. Clone this ripo : `git clone https://github.com/Nitinpr1/get-youtube-subscribers-.git`.
2. Install dependencies: `npm install`.
3. Set up MongoDB Atlas or MongoDB client and edit the `.env` file.
4. Start the server: `nodemon index.js`.
5. The server should now be running on `http://localhost:3001`.

## Testing
This application uses Mocha and Chai for testing. To run the tests, use: `npm test`.

## API Documentation
API documentation is provided using Swagger. Access the documentation by navigating to `http://localhost:3001/api-docs`.



