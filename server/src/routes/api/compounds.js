const router = require('express').Router();
const compoundController = require('../../controllers/compound.controller'); 
const { generateValidationMiddleware } = require('../../middlewares/validationMiddleware');
const { compoundSchema } = require('../../schemas/compound.schema');

/**
 * @openapi
 * components:
 *   schemas:
 *     Compound:
 *       type: object
 *       properties:
 *         compoundName:
 *           type: string
 *         compoundDescription:
 *           type: string
 *         compoundImageUrl:
 *           type: string
 *         id:
 *           type: integer
 *     CompoundWithoutId:
 *       type: object
 *       properties:
 *         compoundName:
 *           type: string
 *         compoundDescription:
 *           type: string
 *         compoundImageUrl:
 *           type: string
*/

const compoundSchemaValidationMiddleware = generateValidationMiddleware(compoundSchema);


/** 
 * @openapi
 * /api/compounds:
 *   get:
 *     summary: Get all compounds
 *     operationId: getAllCompounds
 *     tags:
 *       - compounds
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Compound'
 *   post:
 *     summary: Create a new compound
 *     operationId: createCompound
 *     tags:
 *       - compounds
 *     requestBody:
 *       description: Compound to add
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CompoundWithoutId'
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Compound'
*/
router.route('')
  .get(compoundController.getAllCompounds)
  .post(compoundSchemaValidationMiddleware, compoundController.createCompound);



/**
 * @openapi
 * /api/compounds/{id}:
 *   get:
 *     summary: Get a compound by id
 *     operationId: getCompoundById
 *     tags:
 *       - compounds
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The id of the compound to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Compound'
 *       '404':
 *         description: Not Found
 *   put:
 *     summary: Update a compound
 *     operationId: updateCompound
 *     tags:
 *       - compounds
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The id of the compound to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Compound to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CompoundWithoutId'
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Compound'
 *       '404':
 *         description: Not Found
 *   delete:
 *     summary: Delete a compound
 *     operationId: deleteCompound
 *     tags:
 *       - compounds
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The id of the compound to delete
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: No Content
 *       '404':
 *         description: Not Found
*/
router.route('/:compoundId')
  .get(compoundController.getCompoundById)
  .put(compoundSchemaValidationMiddleware, compoundController.updateCompound)
  .delete(compoundController.deleteCompound);

module.exports = router;