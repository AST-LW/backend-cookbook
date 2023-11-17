/**
 * @swagger
 * tags:
 *   - name: PUT
 *     description: Put Request Documentation
 * /put-request:
 *   put:
 *     tags:
 *       - PUT
 *     summary: Update an existing resource
 *     description: Updates a resource if the correct authorization token is provided.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: false
 *     responses:
 *       200:
 *         description: Successfully updated the resource
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: Updated the resource
 *       401:
 *         description: Unauthorized to update the resource
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: Unauthorized to update the resource
 */
