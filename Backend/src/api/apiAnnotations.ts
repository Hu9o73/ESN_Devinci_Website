// Liveness
/**
 * @openapi
 * /api/liveness:
 *   get:
 *     summary: Check if the server is alive
 *     description: This endpoint checks if the API is alive and responsive.
 *     tags:
 *      - Utility
 *     responses:
 *       200:
 *         description: A message indicating that the API is alive.
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "API is alive."
 */