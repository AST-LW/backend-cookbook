/**
 * @swagger
 * tags:
 *   - name: PATCH
 *     description: Patch Request Documentation
 * /patch-request:
 *   patch:
 *     tags:
 *       - PATCH
 *     summary: Patch an existing resource
 *     description: Patches a resource with the given resource ID.
 *     parameters:
 *       - in: query
 *         name: resource_id
 *         required: true
 *         description: The ID of the resource to patch.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully patched the resource
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: Patched resource
 *       400:
 *         description: Resource ID is not mentioned to patch
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: Resource ID is not mentioned to patch
 */
