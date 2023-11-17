const express = require("express");
const bodyParser = require("body-parser");

// swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// swagger docs
app.use(
    "/docs", // Base path for accessing the API documentation
    swaggerUI.serve, // Serving the Swagger UI static files
    swaggerUI.setup(
        swaggerJSDoc({
            swagger: "2.0", // Swagger specification version
            definition: {
                openapi: "3.0.0", // OpenAPI specification version
                info: {
                    title: `Express Cookbook Swagger Recipe`, // Title of the API documentation
                },
                servers: [
                    {
                        url: "http://localhost:3000/", // Base URL of the API
                    },
                ],

                // Defining security components
                components: {
                    securitySchemes: {
                        bearerAuth: {
                            // Security scheme for bearer token authentication
                            type: "http", // HTTP-based security scheme
                            in: "header", // Token provided in the header
                            name: "Authorization", // Header name
                            description: "Bearer token to access these api endpoints", // Description of the security scheme
                            scheme: "bearer", // Bearer authentication type
                            bearerFormat: "JWT", // Format of the bearer token
                        },
                    },
                },
                security: [
                    // Applying the security scheme globally to all routes
                    {
                        bearerAuth: [],
                    },
                ],
            },

            // Configuring paths for Swagger to find annotated routes
            apis: [`./swagger/*.js`], // Directory of Swagger annotated route files
        })
    )
);

// Retrieves a specific resource.
app.get("/get-request", (req, res) => {
    return res.status(200).json({
        message: "Fetched the resource",
    });
});

// Creates a new resource using the provided username, email, and password.
app.post("/post-request", (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({
            message: "Bad request, either username, password or email field are missing",
        });
    }
    return res.status(201).json({
        message: "Created the resource",
    });
});

// Updates an existing resource, requiring an authorization token.
app.put("/put-request", (req, res) => {
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).json({
            message: "Unauthorized to update the resource",
        });
    }
    return res.status(200).json({
        message: "Updated the resource",
    });
});

// Applies a patch to a resource identified by a given resource ID in the query parameter.
app.patch("/patch-request", (req, res) => {
    const { resource_id } = req.query;
    if (!resource_id) {
        return res.status(400).json({
            message: "Resource ID is not mentioned to patch",
        });
    }
    return res.status(200).json({
        message: "Patched resource",
    });
});

// Deletes a resource specified by the resource ID in the path parameter.
app.delete("/delete-request/:resource_id", (req, res) => {
    const { resource_id } = req.params;
    if (!resource_id) {
        return res.status(400).json({
            message: "Resource ID is not mentioned as path param",
        });
    }
    return res.status(204).json({
        message: "Deleted the resource",
    });
});

app.listen(PORT, (error) => {
    if (error) {
        console.log(`Error in starting server at port - ${PORT}`);
    }
    console.log(`Started server at port - ${PORT}`);
});
