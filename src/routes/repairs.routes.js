const express = require('express');

const repairsController = require('../controllers/repairs.controllers');

const validationMiddleware = require('../middlewares/validation.middleware');
const router = express.Router();

router.route('/').get(repairsController.findRepairs);

router
  .route('/:id')
  .post(
    validationMiddleware.createRepairValidation,
    repairsController.createRepair
  )
  .get(repairsController.findRepairById)
  .patch(repairsController.updateRepair)
  .delete(repairsController.deleteRepair);

module.exports = router;
