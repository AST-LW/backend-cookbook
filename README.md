# Swagger Doc Integration Recipe

### Scenario

One day, I had to update some parts of our backend system. When I started, I felt really lost because there was no guide or notes on how our backend worked. That's when I thought of using Swagger, to make everything clearer and easier to understand.

### What is Swagger?

Swagger is a tool used for designing, building, documenting, and consuming RESTful web services, offering an easy-to-understand interface for developers and users alike.

### How do we integrate Swagger in Express?

Integrating Swagger into an Express application involves a few key steps. Below is a comprehensive guide designed for inclusion in your project's README file, detailing the process from setup to execution.

#### Prerequisites

Before integrating Swagger, ensure you have the following packages installed in your project:

1. `swagger-jsdoc`: This package generates Swagger/OpenAPI specification files based on JSDoc comments.
2. `swagger-ui-express`: This package allows you to serve auto-generated Swagger UI based on a Swagger specification file.

You can install these packages via npm:

```bash
npm install swagger-jsdoc swagger-ui-express
```

#### Step-by-Step Integration

1. **Set Up SwaggerJSDoc, SwaggerUI and Serve Swagger UI**: Import and configure these in your main server file (e.g., `index.js` or `server.js`) in our case it's going to be `app.js`.

   ```javascript
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
   ```

3. **Document Your Routes**: Write Swagger annotations using JSDoc comments for each route. Create separate files in a `swagger` directory for organizing these annotations, one for each group of endpoints (e.g., `get.request.docs.js`, `post.request.docs.js`, `put.request.docs.js`, `patch.request.docs.js`, `delete.request.docs.js`).

   Example (`get.request.docs.js`):

   ```javascript
   /**
    * @swagger
    * tags:
    *   - name: GET
    *     description: Get Request Documentation
    * /get-request:
    *   get:
    *     tags:
    *       - GET
    *     summary: Fetch a resource
    *     description: Returns a fetched resource.
    *     responses:
    *       200:
    *         description: Successfully fetched the resource
    *         schema:
    *           type: object
    *           properties:
    *             message:
    *               type: string
    *               example: Fetched the resource
    */
   ```

4. **Start Your Server**: Run your Express application `npm run dev` command. Your Swagger documentation will be available at `http://localhost:3000/docs`.

#### Key Features of Swagger Which I liked the most,

**Try Out API Endpoints**: One of the standout features of Swagger UI is the ability to "Try Out" each API endpoint directly from the documentation page. This feature enables users to send real requests to the API, view the responses, and understand the API's behavior in real-time.

**Bearer Token Authentication**: For endpoints that require authentication, Swagger UI supports inputting bearer tokens. This makes it convenient to test secured endpoints directly from the documentation interface.

#### Important Notes

- Ensure that the paths in the `apis` array of your Swagger options match the location of your Swagger documentation files.
- Regularly update your Swagger comments to reflect changes in your API.

This setup will provide a robust and easy-to-navigate API documentation for your Express application, making development and collaboration more efficient.