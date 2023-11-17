/**
 * @swagger
 * tags:
 *   - name: DELETE
 *     description: Delete Request Documentation
 * /delete-request/{resource_id}:
 *   delete:
 *     tags:
 *       - DELETE
 *     summary: Delete a specific resource
 *     description: Deletes the resource with the specified resource ID.
 *     parameters:
 *       - in: path
 *         name: resource_id
 *         required: true
 *         description: The ID of the resource to delete.
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Successfully deleted the resource
 *         content: {}
 *       400:
 *         description: Resource ID is not mentioned as path param
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: Resource ID is not mentioned as path param
 */
