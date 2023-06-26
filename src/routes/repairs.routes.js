const express = require('express');

const repairsController = require('../controllers/repairs.controllers');

const validationMiddleware = require('../middlewares/validation.middleware');
const repairMiddleware = require('../middlewares/repairs.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();

router.use(authMiddleware.protect);

router.use(authMiddleware.renew);

router
  .route('/')
  .get(authMiddleware.restictTo('employee'), repairsController.findRepairs)
  .post(
    validationMiddleware.createRepairValidation,
    repairsController.createRepair
  );

router
  .route('/:id')
  .get(
    authMiddleware.restictTo('employee'),
    repairMiddleware.validRepair,
    repairsController.findRepairById
  )
  .patch(
    authMiddleware.restictTo('employee'),
    repairMiddleware.validRepair,
    repairsController.updateRepair
  )
  .delete(
    authMiddleware.restictTo('employee'),
    repairMiddleware.validRepair,
    repairsController.deleteRepair
  );

module.exports = router;
