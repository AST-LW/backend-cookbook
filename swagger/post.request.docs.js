/**
 * @swagger
 * tags:
 *   - name: POST
 *     description: Post Request Documentation
 * /post-request:
 *   post:
 *     tags:
 *       - POST
 *     summary: Create a new resource
 *     description: Creates a new resource with the provided username, email, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *           example:
 *             username: "exampleUser"
 *             email: "user@example.com"
 *             password: "examplePassword"
 *     responses:
 *       201:
 *         description: Successfully created the resource
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: Created the resource
 *       400:
 *         description: Bad request, missing username, password or email
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: Bad request, either username, password or email field are missing
 */
