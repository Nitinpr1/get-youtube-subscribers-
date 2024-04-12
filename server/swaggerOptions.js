const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Get Youtube Subscribers API",
      version: "1.0.0",
      description:
        "Documentation for the Get Youtube Subscribers API built with NodeJS and ExpressJS",
    },
    servers: [
      {
        url: "https://get-youtube-subscribers-nwja.onrender.com",
        description: "Deployment server",
      },
    ],
    components: {
      schemas: {
        Subscriber: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              description: "The unique identifier for the Subscriber",
            },
            name: {
              type: "string",
              description: "The Name of the Subscriber",
            },
            subscribedChannel: {
              type: "string",
              description:
                "The channel name to which the subscriber has subscribed",
            },
            subscribedDate: {
              type: "string",
              format: "date-time",
              description: "The date when the subscriber subscribed",
            },
          },
        },
        SubscriberNameAndChannel: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "The name of the subscriber",
            },
            subscribedChannel: {
              type: "string",
              description:
                "The channel name to which the subscriber has subscribed",
            },
          },
        },
      },
    },
    paths: {
      "/subscribers": {
        get: {
          summary: "Get all subscribers",
          description: " It returns a list of all subscribers.",
          responses: {
            200: {
              description: "An array of subscribers.",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: {
                      $ref: "#/components/schemas/Subscriber",
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/subscribers/names": {
        get: {
          summary: "Get subscriber names and channels",
          description:
            "Retrieves names and subscribed channels of all subscribers without unique identifiers and subscription dates.",
          responses: {
            200: {
              description: "An array of subscriber names and channels.",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: {
                      $ref: "#/components/schemas/SubscriberNameAndChannel",
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/subscribers/{id}": {
        get: {
          summary: "Get subscriber by Id",
          description: "Return a single subscriber by it's unique identifier.",
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              description: "Subscriber ID",
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            200: {
              description: "The requested subscriber.",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Subscriber",
                  },
                },
              },
            },
            404: {
              description: "Subscriber not found.",
            },
          },
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerSpecification = swaggerJsdoc(options);

module.exports = swaggerSpecification;
